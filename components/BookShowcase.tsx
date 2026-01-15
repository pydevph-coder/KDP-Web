'use client';

import Image from 'next/image';
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
  const handleBuyClick = (link: string, bookId: string) => {
    trackClick(link, 'showcase', bookId);
    window.open(link, '_blank');
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
    <section id="books" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-8 sm:mb-12 md:mb-16">
          Discover Our Books
        </h2>
        
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-12">
          {booksArray.map((book) => (
            <div
              key={book.id}
              className="bg-background-1 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-md sm:shadow-lg md:hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-2 active:scale-95 flex flex-col"
            >
              {/* CTA Button - At the top */}
              <button
                onClick={() => handleBuyClick(book.amazonLink, book.id)}
                className="btn-primary w-full text-[10px] sm:text-xs md:text-sm lg:text-base sm:text-lg py-1.5 sm:py-2 md:py-3 lg:py-4 mb-2 sm:mb-3 md:mb-4 lg:mb-6 order-1"
              >
                Buy on Amazon
              </button>

              {/* Book Cover */}
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 order-2">
                <div className="relative w-full max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[192px] aspect-[2/3] transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="rounded-md sm:rounded-lg shadow-lg sm:shadow-xl object-cover"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 140px, 192px"
                  />
                </div>
              </div>

              {/* Book Title */}
              <h3 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-bold text-text-primary mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-center line-clamp-2 order-3">
                {book.title}
              </h3>

              {/* Benefits - show on md+ (tablet and desktop) */}
              {book.benefits && book.benefits.length > 0 && (
                <ul className="hidden md:block space-y-1 md:space-y-2 mb-2 md:mb-4 lg:mb-6 order-4">
                  {book.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm lg:text-base">
                      <span className="text-primary-1 mr-1 md:mr-2 flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-text-primary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Description - show on lg+ (desktop only) */}
              <p className="hidden lg:block text-sm lg:text-base text-text-primary/70 mb-4 lg:mb-6 line-clamp-3 order-5">
                {book.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

