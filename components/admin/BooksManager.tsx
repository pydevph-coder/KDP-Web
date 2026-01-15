"use client";

import { useState, useEffect } from "react";
import type { Book } from "@prisma/client";
import BookForm from "./BookForm";
import BookList from "./BookList";

export default function BooksManager() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
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
      setBooks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch books:', error);
      setBooks([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  const handleEdit = (book: Book) => {
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

