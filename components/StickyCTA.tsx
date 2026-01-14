'use client';

import { trackClick } from '@/lib/analytics';

interface Book {
  id: string;
  amazonLink: string;
}

interface StickyCTAProps {
  books: Book[];
}

export default function StickyCTA({ books }: StickyCTAProps) {
  const featuredBook = books[0];

  if (!featuredBook) return null;

  const handleClick = () => {
    trackClick(featuredBook.amazonLink, 'sticky', featuredBook.id);
    window.open(featuredBook.amazonLink, '_blank');
  };

  return (
    <div className="sticky-cta md:hidden">
      <button
        onClick={handleClick}
        className="btn-primary w-full text-lg"
      >
        Buy on Amazon
      </button>
    </div>
  );
}

