'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackClick } from '@/lib/analytics';

interface Book {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  introduction?: string | null;
  amazonLink: string;
  painPoints: string[];
  painPointsHeader?: string | null;
  benefits: string[];
  benefitsHeader?: string | null;
  features: string[];
  featuresHeader?: string | null;
  targetAudience: string[];
  targetAudienceHeader?: string | null;
  faithMessage?: string | null;
  faithMessageHeader?: string | null;
}

interface BookDetailsClientProps {
  book: Book;
}

export default function BookDetailsClient({ book }: BookDetailsClientProps) {
  const handleBuyClick = (link: string, bookId: string) => {
    trackClick(link, 'book-details', bookId);
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-primary/70 hover:text-text-primary transition-colors duration-200 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm sm:text-base">Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
         {/* Hero Section with Book Cover */}
          <div className="grid grid-cols-2 gap-2 sm:gap- md:gap-8 lg:gap-16 items-start">
            {/* Book Cover - Left Side */}
            <div className="flex justify-start">
              <div className="relative w-full max-w-[120px] sm:max-w-[160px] md:max-w-[240px] lg:max-w-[480px] aspect-[2/3] transform hover:scale-[1.02] transition-transform duration-300 shadow-2xl">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={480}
                  height={720}
                  className="rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                  priority
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 240px, 480px"
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-1/10 to-transparent rounded-xl sm:rounded-2xl pointer-events-none" />
              </div>
            </div>

            {/* Title and Quick Info - Right Side */}
            <div className="flex flex-col justify-start space-y-1 sm:space-y-2 md:space-y-4">
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
                {book.title}
              </h1>
              
              {/* Quick Description */}
              {book.description && (
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-primary/80 leading-relaxed text-justify mt-0">
                  {book.description}
                </p>
              )}

              {/* Primary CTA Button */}
              <button
                onClick={() => handleBuyClick(book.amazonLink, book.id)}
                className="group w-full md:w-auto mt-4 bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-bold text-xs sm:text-sm md:text-lg lg:text-xl py-1.5 sm:py-2 md:py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Get Your Copy Today</span>
              </button>
            </div>
          </div>



          {/* Section 1: You're Not Alone */}
          {book.painPoints && book.painPoints.length > 0 && (
            <div className="bg-gradient-to-br from-background-1 to-background-2 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6 sm:mb-8">
                {book.painPointsHeader || "You're Not Alone"}
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {book.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="text-primary-1 text-xl sm:text-2xl flex-shrink-0 mt-1">•</span>
                    <span className="text-base sm:text-lg md:text-xl text-text-primary/90 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 2: Meet [Book Name] */}
          {book.introduction && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                Meet {book.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base sm:text-lg md:text-xl text-text-primary/80 leading-relaxed whitespace-pre-line">
                  {book.introduction}
                </p>
              </div>
            </div>
          )}

          {/* Section 3: How This Book Will Help You */}
          {book.benefits && book.benefits.length > 0 && (
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6 sm:mb-8">
                {book.benefitsHeader || `How This ${book.title.includes('Journal') ? 'Journal' : 'Book'} Will Help You`}
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {book.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-1 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base sm:text-lg md:text-xl text-text-primary/90 leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 4: What You'll Find Inside */}
          {book.features && book.features.length > 0 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                {book.featuresHeader || (book.title.includes('Journal') ? "What You'll Discover Inside" : "What You'll Find Inside")}
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {book.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="text-primary-1 text-xl sm:text-2xl flex-shrink-0 mt-1">→</span>
                    <span className="text-base sm:text-lg md:text-xl text-text-primary/90 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 5: This Book Is For You If... */}
          {book.targetAudience && book.targetAudience.length > 0 && (
            <div className="bg-gradient-to-br from-primary-1/10 to-primary-2/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6 sm:mb-8">
                {book.targetAudienceHeader || `This ${book.title.includes('Journal') ? 'Journal' : 'Book'} Is For You If...`}
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {book.targetAudience.map((audience, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-1 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base sm:text-lg md:text-xl text-text-primary/90 leading-relaxed">
                      {audience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 6: Faith That Supports / Rooted in Faith */}
          {book.faithMessage && (
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border-l-4 border-primary-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6">
                {book.faithMessageHeader || (
                  book.title.includes('Teen') || book.title.includes('Overthinking') 
                    ? "God's Peace Over What-Ifs" 
                    : book.title.includes('Mom') || book.title.includes('Motherhood')
                    ? "Rooted in Faith & Grace"
                    : "Faith That Supports, Not Pressures"
                )}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-base sm:text-lg md:text-xl text-text-primary/80 leading-relaxed whitespace-pre-line">
                  {book.faithMessage}
                </p>
              </div>
            </div>
          )}

          {/* Section 7: Begin Your Journey Today - Final CTA */}
          <div className="text-center space-y-6 sm:space-y-8 bg-gradient-to-br from-primary-1/20 to-primary-2/20 rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              Begin Your Journey Today
            </h2>
            <button
              onClick={() => handleBuyClick(book.amazonLink, book.id)}
              className="group mx-auto bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 md:py-6 px-8 sm:px-10 md:px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 sm:gap-4"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Get Your Copy Today</span>
            </button>
            <Link
              href="/#books"
              className="block text-base sm:text-lg md:text-xl text-text-primary/70 hover:text-text-primary font-semibold transition-colors duration-200"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-text-primary/10 shadow-2xl z-50 p-4">
        <button
          onClick={() => handleBuyClick(book.amazonLink, book.id)}
          className="w-full bg-primary-1 hover:bg-primary-2 active:bg-primary-2 text-white font-bold text-lg py-4 px-6 rounded-full transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span>Get Your Copy Today</span>
        </button>
      </div>

      {/* Spacer for sticky button on mobile */}
      <div className="lg:hidden h-24" />
    </div>
  );
}
