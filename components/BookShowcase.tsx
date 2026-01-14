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

  if (books.length === 0) {
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
    <section id="books" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-16">
          Discover Our Books
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-background-1 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Book Cover */}
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-72 transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>

              {/* Book Info */}
              <h3 className="text-2xl font-bold text-text-primary mb-4 text-center">
                {book.title}
              </h3>

              {/* Benefits */}
              {book.benefits && book.benefits.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {book.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-1 mr-2">✓</span>
                      <span className="text-text-primary/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Description */}
              <p className="text-text-primary/70 mb-6 line-clamp-3">
                {book.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => handleBuyClick(book.amazonLink, book.id)}
                className="btn-primary w-full"
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

