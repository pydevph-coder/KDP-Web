'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  featured: boolean;
  imageUrl?: string | null;
}

interface TestimonialFormProps {
  testimonial: Testimonial | null;
  onClose: () => void;
  onSave: () => void;
}

export default function TestimonialForm({ testimonial, onClose, onSave }: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    rating: 5,
    featured: false,
    imageUrl: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name: testimonial.name,
        text: testimonial.text,
        rating: testimonial.rating,
        featured: testimonial.featured,
        imageUrl: testimonial.imageUrl || '',
      });
    }
  }, [testimonial]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const url = testimonial
        ? `/api/admin/testimonials/${testimonial.id}`
        : '/api/admin/testimonials';
      const method = testimonial ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to save testimonial');
      }
    } catch (error) {
      setError('Failed to save testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
          {testimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Testimonial Text *
            </label>
            <textarea
              value={formData.text}
              onChange={(e) => setFormData({ ...formData, text: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Rating *
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating })}
                  className={`text-3xl ${
                    rating <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                  } hover:text-yellow-400 transition-colors`}
                >
                  ★
                </button>
              ))}
            </div>
            <p className="text-sm text-text-primary/70 mt-2">
              Selected: {formData.rating} star{formData.rating !== 1 ? 's' : ''}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Image URL (optional)
            </label>
            <input
              type="url"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://..."
              className="w-full px-4 py-2 border-2 border-primary-1 rounded-lg focus:outline-none focus:border-primary-2"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4"
            />
            <label className="text-text-primary">Featured</label>
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
              {loading ? 'Saving...' : testimonial ? 'Update Testimonial' : 'Create Testimonial'}
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

