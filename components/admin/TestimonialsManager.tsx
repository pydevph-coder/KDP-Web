'use client';

import { useState, useEffect } from 'react';
import TestimonialForm from './TestimonialForm';

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  featured: boolean;
}

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/admin/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingTestimonial(null);
    setShowForm(true);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchTestimonials();
      } else {
        alert('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete testimonial');
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingTestimonial(null);
    fetchTestimonials();
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Testimonials</h2>
        <button onClick={handleCreate} className="btn-primary">
          Add New Testimonial
        </button>
      </div>

      {showForm && (
        <TestimonialForm
          testimonial={editingTestimonial}
          onClose={handleFormClose}
          onSave={handleFormClose}
        />
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.length === 0 ? (
          <div className="col-span-2 bg-white rounded-2xl p-12 text-center">
            <p className="text-text-primary/70">No testimonials yet. Add your first testimonial!</p>
          </div>
        ) : (
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-text-primary mb-1">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                {testimonial.featured && (
                  <span className="px-2 py-1 bg-primary-1 text-white text-xs rounded">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-text-primary/70 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="flex-1 px-4 py-2 bg-primary-1 text-white rounded-lg hover:bg-primary-2 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

