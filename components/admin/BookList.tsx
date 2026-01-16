'use client';

import Image from 'next/image';
import type { FullBook } from "./BooksManager";

interface BookListProps {
  books: FullBook[];
  onEdit: (book: FullBook) => void;
  onDelete: (id: string) => void;
}

export default function BookList({ books, onEdit, onDelete }: BookListProps) {
  // Ensure books is always an array
  const booksArray = Array.isArray(books) ? books : [];

  if (booksArray.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center">
        <p className="text-text-primary/70">No books yet. Add your first book!</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {booksArray.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex gap-4 mb-4">
            <div className="relative w-24 h-36 flex-shrink-0">
              <Image
                src={book.coverImage}
                alt={book.title}
                width={96}
                height={144}
                className="rounded object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-text-primary mb-2 truncate">
                {book.title}
              </h3>
              {book.featured && (
                <span className="inline-block px-2 py-1 bg-primary-1 text-white text-xs rounded mb-2">
                  Featured
                </span>
              )}
              <p className="text-sm text-text-primary/70 line-clamp-3">
                {book.description}
              </p>
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <button
              onClick={() => onEdit(book)}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-1 text-white text-xs sm:text-sm rounded-lg hover:bg-primary-2 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book.id)}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white text-xs sm:text-sm rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

