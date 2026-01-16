'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { trackClick } from '@/lib/analytics';

interface Book {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  benefits: string[];
  amazonLink: string;
}

interface BookShowcaseProps {
  books: Book[];
}

export default function BookShowcase({ books }: BookShowcaseProps) {
  const [loadingBookId, setLoadingBookId] = useState<string | null>(null);

  const handleBuyClick = (link: string, bookId: string) => {
    trackClick(link, 'showcase', bookId);
    window.open(link, '_blank');
  };

  const handleBookClick = (bookId: string) => {
    setLoadingBookId(bookId); // Show loading overlay
    window.location.href = `/book/${bookId}`; // Navigate to book details
  };

  // Ensure books is always an array
  const booksArray = Array.isArray(books) ? books : [];

  if (booksArray.length === 0) {
    return (
      <section id="books" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our Books
          </h2>
          <p className="text-lg text-text-primary/70">
            Books will appear here once added through the admin panel.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="books" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white relative">
      {/* Loading overlay */}
      {loadingBookId && (
          <div className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary-1 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
      

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-8 sm:mb-12 md:mb-16">
          Discover Our Books
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-12">
          {booksArray.map((book) => (
            <div
              key={book.id}
              className="bg-background-1 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-md sm:shadow-lg md:hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-2 active:scale-95 flex flex-col cursor-pointer"
              onClick={() => handleBookClick(book.id)}
            >
              {/* Book Cover */}
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 group">
                <div className="relative w-full max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[192px] aspect-[2/3] transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="rounded-md sm:rounded-lg shadow-lg sm:shadow-xl object-cover group-hover:shadow-2xl transition-shadow duration-300"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 140px, 192px"
                  />
                </div>
              </div>

              {/* Book Title */}
              <h3 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-bold text-text-primary mb-2 sm:mb-3 md:mb-4 text-center line-clamp-2">
                {book.title}
              </h3>

              {/* Mobile Description */}
              <p className="bg-background-2 lg:hidden text-justify text-sm text-text-primary/70 mt-4 mb-4 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                {book.description}
              </p>

              {/* Desktop Description */}
              <p className="bg-background-2 hidden lg:block text-justify text-sm lg:text-base text-text-primary/70 mt-4 lg:mt-6 line-clamp-3 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                {book.description}
              </p>

              {/* Desktop Benefits */}
              {book.benefits && book.benefits.length > 0 && (
                <ul className="hidden lg:flex flex-col space-y-1 mb-2 sm:space-y-1.5 md:space-y-2 mb-6">
                  {book.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm lg:text-base">
                      <span className="text-primary-1 mr-2 mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-text-primary/80 leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Buy Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering book click
                  handleBuyClick(book.amazonLink, book.id);
                }}
                className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 mt-4 lg:mt-6 text-white font-semibold text-[9px] sm:text-[10px] md:text-xs lg:text-sm py-1.5 sm:py-2 md:py-2.5 lg:py-3 px-3 sm:px-4 md:px-5 lg:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 w-full mt-auto"
              >
                Buy on Amazon
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
