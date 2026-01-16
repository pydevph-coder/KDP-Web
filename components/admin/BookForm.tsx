"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { FullBook } from "./BooksManager";

interface BookFormProps {
  book: FullBook | null;
  onClose: () => void;
  onSave: () => void;
}

// Helpers for textarea arrays
const parseTextareaToArray = (text: string): string[] =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

const arrayToTextarea = (arr?: string[] | null): string =>
  arr?.join("\n") ?? "";

export default function BookForm({ book, onClose, onSave }: BookFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    description: "",
    introduction: "",
    amazonLink: "",
    painPoints: "",
    painPointsHeader: "",
    benefits: "",
    benefitsHeader: "",
    features: "",
    featuresHeader: "",
    targetAudience: "",
    targetAudienceHeader: "",
    faithMessage: "",
    faithMessageHeader: "",
    featured: false,
    order: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        coverImage: book.coverImage,
        description: book.description,
        introduction: book.introduction ?? "",
        amazonLink: book.amazonLink,
        painPoints: arrayToTextarea(book.painPoints ?? []),
        painPointsHeader: book.painPointsHeader ?? "",
        benefits: arrayToTextarea(book.benefits ?? []),
        benefitsHeader: book.benefitsHeader ?? "",
        features: arrayToTextarea(book.features ?? []),
        featuresHeader: book.featuresHeader ?? "",
        targetAudience: arrayToTextarea(book.targetAudience ?? []),
        targetAudienceHeader: book.targetAudienceHeader ?? "",
        faithMessage: book.faithMessage ?? "",
        faithMessageHeader: book.faithMessageHeader ?? "",
        featured: book.featured,
        order: book.order,
      });
    }
  }, [book]);

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
        introduction: formData.introduction.trim() || null,
        amazonLink: formData.amazonLink,
        painPoints: parseTextareaToArray(formData.painPoints),
        painPointsHeader: formData.painPointsHeader.trim() || null,
        benefits: parseTextareaToArray(formData.benefits),
        benefitsHeader: formData.benefitsHeader.trim() || null,
        features: parseTextareaToArray(formData.features),
        featuresHeader: formData.featuresHeader.trim() || null,
        targetAudience: parseTextareaToArray(formData.targetAudience),
        targetAudienceHeader: formData.targetAudienceHeader.trim() || null,
        faithMessage: formData.faithMessage.trim() || null,
        faithMessageHeader: formData.faithMessageHeader.trim() || null,
        featured: formData.featured,
        order: formData.order,
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Failed to save book");
      } else {
        onSave();
      }
    } catch {
      setError("Failed to save book");
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
                  Cover Image URL *
                </label>
                <input
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  required
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
                {formData.coverImage && (
                  <div className="mt-2 w-32 h-48 relative mx-auto">
                    <Image
                      src={formData.coverImage}
                      alt="Preview"
                      fill
                      className="object-cover rounded"
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
                  Introduction (Meet [Book Name] section)
                </label>
                <textarea
                  value={formData.introduction}
                  onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                  rows={5}
                  placeholder="Longer introduction text for the book details page..."
                  className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
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
                <p className="text-xs text-text-primary/60 mt-1">Enter each bullet point on a new line. Empty lines will be ignored.</p>
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