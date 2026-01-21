"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { FullBook } from "./BooksManager";

interface BookFormProps {
  book: FullBook | null;
  onClose: () => void;
  onSave: () => void;
}

// Helpers for textarea arrays - handles bullet markers and newlines
const parseTextareaToArray = (text: string | undefined | null): string[] => {
  if (!text || typeof text !== 'string') return [];
  
  // Split by newlines first
  const lines = text.split("\n");
  const items: string[] = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    
    // Check if line starts with bullet markers: -, •, *, or numbered (1., 2., etc.)
    const bulletMatch = trimmed.match(/^[-•*]\s+(.+)$/);
    const numberedMatch = trimmed.match(/^\d+[.)]\s+(.+)$/);
    
    if (bulletMatch) {
      // Extract text after bullet marker
      items.push(bulletMatch[1].trim());
    } else if (numberedMatch) {
      // Extract text after number marker
      items.push(numberedMatch[1].trim());
    } else {
      // Regular line without bullet marker
      items.push(trimmed);
    }
  }
  
  return items.filter((item) => item.length > 0);
};

const arrayToTextarea = (arr?: string[] | null): string =>
  arr?.join("\n") ?? "";

// Helper to safely trim a string (handle undefined/null)
const safeTrim = (value: string | undefined | null): string | null => {
  if (!value || typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

export default function BookForm({ book, onClose, onSave }: BookFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    description: "",
    introduction: "",
    introductionHeader: "",
    introductionBodyMd: "",
    amazonLink: "",
    painPoints: "",
    painPointsHeader: "",
    painPointsBodyMd: "",
    benefits: "",
    benefitsHeader: "",
    benefitsBodyMd: "",
    features: "",
    featuresHeader: "",
    featuresBodyMd: "",
    targetAudience: "",
    targetAudienceHeader: "",
    targetAudienceBodyMd: "",
    faithMessage: "",
    faithMessageHeader: "",
    faithMessageBodyMd: "",
    featured: false,
    order: 0,
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        coverImage: book.coverImage,
        description: book.description,
        introduction: book.introduction ?? "",
        introductionHeader: book.introductionHeader ?? "",
        introductionBodyMd: book.introductionBodyMd ?? "",
        amazonLink: book.amazonLink,
        painPoints: arrayToTextarea(book.painPoints ?? []),
        painPointsHeader: book.painPointsHeader ?? "",
        painPointsBodyMd: book.painPointsBodyMd ?? "",
        benefits: arrayToTextarea(book.benefits ?? []),
        benefitsHeader: book.benefitsHeader ?? "",
        benefitsBodyMd: book.benefitsBodyMd ?? "",
        features: arrayToTextarea(book.features ?? []),
        featuresHeader: book.featuresHeader ?? "",
        featuresBodyMd: book.featuresBodyMd ?? "",
        targetAudience: arrayToTextarea(book.targetAudience ?? []),
        targetAudienceHeader: book.targetAudienceHeader ?? "",
        targetAudienceBodyMd: book.targetAudienceBodyMd ?? "",
        faithMessage: book.faithMessage ?? "",
        faithMessageHeader: book.faithMessageHeader ?? "",
        faithMessageBodyMd: book.faithMessageBodyMd ?? "",
        featured: book.featured,
        order: book.order,
      });
    }
  }, [book]);

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    setError("");
  
    try {
      const uploadData = new FormData(); // ✅ renamed
      uploadData.append('file', file);
  
      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: uploadData,
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to upload image');
      }
  
      const data = await response.json();
  
      setFormData(prev => ({
        ...prev,
        coverImage: data.url, // ✅ string URL only
      }));
  
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
    } finally {
      setUploading(false);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const url = book ? `/api/admin/books/${book.id}` : "/api/admin/books";
      const method = book ? "PUT" : "POST";

      // Convert textarea strings to arrays for submission
      const submitData = {
        title: formData.title,
        coverImage: formData.coverImage,
        description: formData.description,
        introduction: safeTrim(formData.introduction),
        introductionHeader: safeTrim(formData.introductionHeader),
        introductionBodyMd: safeTrim(formData.introductionBodyMd),
        amazonLink: formData.amazonLink,
        painPoints: parseTextareaToArray(formData.painPoints),
        painPointsHeader: safeTrim(formData.painPointsHeader),
        painPointsBodyMd: safeTrim(formData.painPointsBodyMd),
        benefits: parseTextareaToArray(formData.benefits),
        benefitsHeader: safeTrim(formData.benefitsHeader),
        benefitsBodyMd: safeTrim(formData.benefitsBodyMd),
        features: parseTextareaToArray(formData.features),
        featuresHeader: safeTrim(formData.featuresHeader),
        featuresBodyMd: safeTrim(formData.featuresBodyMd),
        targetAudience: parseTextareaToArray(formData.targetAudience),
        targetAudienceHeader: safeTrim(formData.targetAudienceHeader),
        targetAudienceBodyMd: safeTrim(formData.targetAudienceBodyMd),
        faithMessage: safeTrim(formData.faithMessage),
        faithMessageHeader: safeTrim(formData.faithMessageHeader),
        faithMessageBodyMd: safeTrim(formData.faithMessageBodyMd),
        featured: formData.featured,
        order: formData.order,
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: 'Unknown error' }));
        const errorMessage = data.error || `HTTP ${response.status}: ${response.statusText}`;
        console.error('Save book error:', errorMessage);
        setError(errorMessage);
      } else {
        onSave();
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save book';
      console.error('Save book exception:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
          {book ? 'Edit Book' : 'Add New Book'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="border-b border-text-primary/10 pb-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Basic Information</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Cover Image *
                </label>
                
                {/* File Upload Option */}
                <div className="mb-3">
                  <label className="block text-xs font-medium text-text-primary/70 mb-2">
                    Upload Image (or use URL below)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={uploading}
                    className="block w-full text-sm text-text-primary/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-1 file:text-white hover:file:bg-primary-2 file:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {uploading && (
                    <p className="mt-2 text-sm text-primary-1">Uploading image...</p>
                  )}
                </div>
                
                {/* URL Input Option */}
                <div>
                  <label className="block text-xs font-medium text-text-primary/70 mb-2">
                    Or enter image URL
                  </label>
                  <input
                    type="url"
                    value={formData.coverImage}
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                    required
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                  />
                </div>
                
                {/* Image Preview */}
                {formData.coverImage && (
                  <div className="mt-4 w-32 h-48 relative mx-auto">
                    <Image
                      src={formData.coverImage}
                      alt="Preview"
                      fill
                      className="object-cover rounded shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Short Description * (for listings)
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Section 2 Header (e.g., "Meet Your Faithful Goal Journal" or "Meet [Book Name]")
                </label>
                <input
                  type="text"
                  value={formData.introductionHeader}
                  onChange={(e) => setFormData({ ...formData, introductionHeader: e.target.value })}
                  placeholder="Meet Your Faithful Goal Journal"
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 mb-2"
                />
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Introduction Text
                </label>
                <textarea
                  value={formData.introduction}
                  onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                  rows={5}
                  placeholder="Longer introduction text for the book details page..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
                <div className="mt-3">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Introduction Markdown (optional — use this to preserve \"No pressure.\" style lines + bullets)
                  </label>
                  <textarea
                    value={formData.introductionBodyMd}
                    onChange={(e) => setFormData({ ...formData, introductionBodyMd: e.target.value })}
                    rows={6}
                    placeholder={"Example:\nLife moves fast.\nWorries pile up.\n\n- Bullet one\n- Bullet two\n\n**Bold** and *italic* supported."}
                    className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                  />
                  <p className="text-xs text-text-primary/60 mt-1">
                    If provided, the details page will show this markdown instead of the plain Introduction Text.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Amazon Link *
                </label>
                <input
                  type="url"
                  value={formData.amazonLink}
                  onChange={(e) => setFormData({ ...formData, amazonLink: e.target.value })}
                  required
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="border-b border-text-primary/10 pb-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Content Sections</h3>
            
            <div className="space-y-6">
              {/* Pain Points Section */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                {`Section 1 Header (e.g., "You're Not Alone, Teen" or "You're Not Alone, Mama")`}
                </label>
                <input
                  type="text"
                  value={formData.painPointsHeader}
                  onChange={(e) => setFormData({ ...formData, painPointsHeader: e.target.value })}
                  placeholder="You're Not Alone, Teen"
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 mb-2"
                />
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Pain Points (one per line)
                </label>
                <textarea
                  value={formData.painPoints}
                  onChange={(e) => setFormData({ ...formData, painPoints: e.target.value })}
                  rows={6}
                  placeholder="Teens feel overwhelmed by school pressure...&#10;Many struggle to understand emotions...&#10;Social comparison increases anxiety..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                />
                <p className="text-xs text-text-primary/60 mt-1">
                  Enter each bullet point on a new line. You can use bullet markers (-, •, *) or numbered lists (1., 2., etc.), or just plain text. Empty lines will be ignored.
                </p>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Section 1 Markdown (optional)
                  </label>
                  <textarea
                    value={formData.painPointsBodyMd}
                    onChange={(e) => setFormData({ ...formData, painPointsBodyMd: e.target.value })}
                    rows={6}
                    placeholder={"Example:\nLife moves fast.\n\n● Bullet one\n● Bullet two"}
                    className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                  />
                  <p className="text-xs text-text-primary/60 mt-1">
                    If provided, the details page will render this markdown instead of the Pain Points list.
                  </p>
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                {`Section 2 Header (e.g., "How This Workbook Will Help You" or "How This Journal Will Support You")`}
                </label>
                <input
                  type="text"
                  value={formData.benefitsHeader}
                  onChange={(e) => setFormData({ ...formData, benefitsHeader: e.target.value })}
                  placeholder="How This Book Will Help You"
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 mb-2"
                />
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Benefits (one per line)
                </label>
                <textarea
                  value={formData.benefits}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                  rows={6}
                  placeholder="Builds emotional awareness...&#10;Teaches practical coping skills...&#10;Strengthens resilience..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                />
                <p className="text-xs text-text-primary/60 mt-1">Enter each bullet point on a new line.</p>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Section 3 Markdown (optional)
                  </label>
                  <textarea
                    value={formData.benefitsBodyMd}
                    onChange={(e) => setFormData({ ...formData, benefitsBodyMd: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                  />
                  <p className="text-xs text-text-primary/60 mt-1">
                    If provided, the details page will render this markdown instead of the Benefits list.
                  </p>
                </div>
              </div>

              {/* Features Section */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                {`Section 3 Header (e.g., "What You'll Find Inside" or "What You'll Discover Inside")`}
                </label>
                <input
                  type="text"
                  value={formData.featuresHeader}
                  onChange={(e) => setFormData({ ...formData, featuresHeader: e.target.value })}
                  placeholder="What You'll Find Inside"
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 mb-2"
                />
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Features (one per line)
                </label>
                <textarea
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  rows={6}
                  placeholder="Guided teaching points...&#10;Clear explanations...&#10;Discussion questions..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                />
                <p className="text-xs text-text-primary/60 mt-1">Enter each bullet point on a new line.</p>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Section 4 Markdown (optional)
                  </label>
                  <textarea
                    value={formData.featuresBodyMd}
                    onChange={(e) => setFormData({ ...formData, featuresBodyMd: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                  />
                  <p className="text-xs text-text-primary/60 mt-1">
                    If provided, the details page will render this markdown instead of the Features list.
                  </p>
                </div>
              </div>

              {/* Target Audience Section */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                {`Section 4 Header (e.g., "This Workbook Is For You If..." or "This Journal Is For You If...")`}
                </label>
                <input
                  type="text"
                  value={formData.targetAudienceHeader}
                  onChange={(e) => setFormData({ ...formData, targetAudienceHeader: e.target.value })}
                  placeholder="This Book Is For You If..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 mb-2"
                />
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Target Audience (one per line)
                </label>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  rows={6}
                  placeholder="Teenagers (individual or group use)...&#10;Parents supporting their children...&#10;Churches and youth ministries..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                />
                <p className="text-xs text-text-primary/60 mt-1">Enter each bullet point on a new line.</p>
                <div className="mt-3">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Section 5 Markdown (optional)
                  </label>
                  <textarea
                    value={formData.targetAudienceBodyMd}
                    onChange={(e) => setFormData({ ...formData, targetAudienceBodyMd: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                  />
                  <p className="text-xs text-text-primary/60 mt-1">
                    If provided, the details page will render this markdown instead of the Target Audience list.
                  </p>
                </div>
              </div>

              {/* Faith Message Section */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                {`Section 5 Header (e.g., "Faith That Supports, Not Pressures" or "Rooted in Faith & Grace")`}
                </label>
                <input
                  type="text"
                  value={formData.faithMessageHeader}
                  onChange={(e) => setFormData({ ...formData, faithMessageHeader: e.target.value })}
                  placeholder="Faith That Supports, Not Pressures"
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 mb-2"
                />
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Faith Message
                </label>
                <textarea
                  value={formData.faithMessage}
                  onChange={(e) => setFormData({ ...formData, faithMessage: e.target.value })}
                  rows={6}
                  placeholder="Describe how faith is integrated in this book..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
                <div className="mt-3">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Section 6 Markdown (optional)
                  </label>
                  <textarea
                    value={formData.faithMessageBodyMd}
                    onChange={(e) => setFormData({ ...formData, faithMessageBodyMd: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2 font-mono text-sm"
                  />
                  <p className="text-xs text-text-primary/60 mt-1">
                    If provided, the details page will render this markdown instead of the Faith Message text.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-text-primary">Featured</span>
            </label>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Order
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                className="w-24 px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-600">{error}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 text-sm sm:text-base w-[70%] sm:w-[35%]"
            >
              {loading ? 'Saving...' : book ? 'Update Book' : 'Create Book'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-white hover:bg-background-2 active:bg-background-2 text-primary-1 font-semibold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full transition-all duration-300 border-2 border-primary-1 hover:border-primary-2 active:scale-95 text-sm sm:text-base w-[70%] sm:w-[35%]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}