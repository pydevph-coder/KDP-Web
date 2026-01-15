'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  amazonLink: string;
  benefits: string[];
  featured: boolean;
  order: number;
}

interface BookFormProps {
  book: Book | null;
  onClose: () => void;
  onSave: () => void;
}

export default function BookForm({ book, onClose, onSave }: BookFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    coverImage: '',
    description: '',
    amazonLink: '',
    benefits: [''],
    featured: false,
    order: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        coverImage: book.coverImage,
        description: book.description,
        amazonLink: book.amazonLink,
        benefits: book.benefits.length > 0 ? book.benefits : [''],
        featured: book.featured,
        order: book.order,
      });
    }
  }, [book]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const url = book
        ? `/api/admin/books/${book.id}`
        : '/api/admin/books';
      const method = book ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          benefits: formData.benefits.filter((b) => b.trim() !== ''),
        }),
      });

      if (response.ok) {
        onSave();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to save book');
      }
    } catch (error) {
      setError('Failed to save book');
    } finally {
      setLoading(false);
    }
  };

  const addBenefit = () => {
    setFormData({
      ...formData,
      benefits: [...formData.benefits, ''],
    });
  };

  const updateBenefit = (index: number, value: string) => {
    const newBenefits = [...formData.benefits];
    newBenefits[index] = value;
    setFormData({ ...formData, benefits: newBenefits });
  };

  const removeBenefit = (index: number) => {
    const newBenefits = formData.benefits.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      benefits: newBenefits.length > 0 ? newBenefits : [''],
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
          {book ? 'Edit Book' : 'Add New Book'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
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

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Benefits
            </label>
            {formData.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => updateBenefit(index, e.target.value)}
                  placeholder="Enter benefit"
                  className="flex-1 px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
                />
                {formData.benefits.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeBenefit(index)}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white text-xs sm:text-sm rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addBenefit}
              className="mt-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-2 text-white text-xs sm:text-sm rounded-lg hover:bg-primary-1 transition-colors"
            >
              Add Benefit
            </button>
          </div>

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

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
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

