"use client";

import { useState, useEffect } from "react";
// import type { Book } from "@prisma/client";
import BookForm from "./BookForm";
import BookList from "./BookList";
import type { Book } from "@prisma/client";

export interface FullBook extends Book {
  painPointsHeader: string | null;
  benefitsHeader: string | null;
  featuresHeader: string | null;
  targetAudienceHeader: string | null;
  faithMessage: string | null;
  faithMessageHeader: string | null;
}
// export interface FullBook {
//   id: string;
//   createdAt: Date;
//   updatedAt: Date;
//   slug: string | null;
//   title: string;
//   coverImage: string;
//   description: string;
//   introduction: string | null;
//   amazonLink: string;
//   painPoints: string[];
//   painPointsHeader: string | null;
//   benefits: string[];
//   benefitsHeader: string | null;
//   features: string[];
//   featuresHeader: string | null;
//   targetAudience: string[];
//   targetAudienceHeader: string | null;
//   faithMessage: string | null;
//   faithMessageHeader: string | null;
//   featured: boolean;
//   order: number;
// }

export default function BooksManager() {
  const [books, setBooks] = useState<FullBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBook, setEditingBook] = useState<FullBook | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/admin/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      // Ensure data is always an array
      const booksWithDates: FullBook[] = (Array.isArray(data) ? data : []).map((b: any) => ({
        ...b,
        createdAt: new Date(b.createdAt),
        updatedAt: new Date(b.updatedAt),
        painPoints: b.painPoints || [],
        benefits: b.benefits || [],
        features: b.features || [],
        targetAudience: b.targetAudience || [],
        painPointsHeader: b.painPointsHeader ?? null,
        benefitsHeader: b.benefitsHeader ?? null,
        featuresHeader: b.featuresHeader ?? null,
        targetAudienceHeader: b.targetAudienceHeader ?? null,
        faithMessage: b.faithMessage ?? null,
        faithMessageHeader: b.faithMessageHeader ?? null,
      }));
  
      setBooks(booksWithDates);
    } catch (err) {
      console.error(err);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  const handleEdit = (book: FullBook) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this book?')) return;

    try {
      const response = await fetch(`/api/admin/books/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBooks();
      } else {
        alert('Failed to delete book');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete book');
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingBook(null);
    fetchBooks();
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center gap-3 mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary">Books</h2>
        <button onClick={handleCreate} className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-semibold py-1.5 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-xs sm:text-sm md:text-base">
          Add New Book
        </button>
      </div>

      {showForm && (
        <BookForm
          book={editingBook}
          onClose={handleFormClose}
          onSave={handleFormClose}
        />
      )}

      <BookList
        books={books}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

