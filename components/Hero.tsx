'use client';

import Image from 'next/image';
import { trackClick } from '@/lib/analytics';

interface Book {
  id: string;
  title: string;
  coverImage: string;
  amazonLink: string;
}

interface HeroProps {
  books: Book[];
}

export default function Hero({ books }: HeroProps) {
  const featuredBook = books[0] || null;

  const handleBuyClick = (link: string, bookId?: string) => {
    trackClick(link, 'hero', bookId);
    window.open(link, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background-1 via-background-2 to-background-1 px-4 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Book Cover */}
        <div className="flex justify-center md:justify-start">
          {featuredBook ? (
            <div className="relative w-64 md:w-80 h-auto transform hover:scale-105 transition-transform duration-300 shadow-2xl">
              <Image
                src={featuredBook.coverImage}
                alt={featuredBook.title}
                width={400}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>
          ) : (
            <div className="w-64 md:w-80 h-96 bg-primary-1 rounded-lg flex items-center justify-center text-white text-xl">
              Book Cover
            </div>
          )}
        </div>

        {/* Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
            Transform Your Spiritual Journey
          </h1>
          <p className="text-xl md:text-2xl text-text-primary/80 leading-relaxed">
            Faith-based books and guided journals designed to nurture your mental wellness and deepen your connection with God.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            {featuredBook ? (
              <button
                onClick={() => handleBuyClick(featuredBook.amazonLink, featuredBook.id)}
                className="btn-primary text-lg"
              >
                Buy on Amazon
              </button>
            ) : (
              <button className="btn-primary text-lg">
                Buy on Amazon
              </button>
            )}
            <a
              href="#books"
              className="btn-secondary text-lg text-center"
            >
              View All Books
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-1/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary-2/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}

