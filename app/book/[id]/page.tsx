import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookDetailsClient from '@/components/BookDetailsClient';
import Testimonials from '@/components/Testimonials';
import AboutAuthor from '@/components/AboutAuthor';
import EmailSignup from '@/components/EmailSignup';
import type { Metadata } from 'next';
import type { Author } from '@prisma/client';

export const dynamic = 'force-dynamic';

interface BookDetailsPageProps {
  params: { id: string };
}
interface AboutAuthorProps {
  author: Author | null;
}
interface Testimonial {
    id: string;
    name: string;
    text: string;
    rating: number;
    createdAt: Date;
    featured: boolean;
  }

async function getBook(id: string) {
  try {
    const book = await prisma.book.findUnique({
      where: { id },
    });
    return book;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
}

export async function generateMetadata({ params }: BookDetailsPageProps): Promise<Metadata> {
  const book = await getBook(params.id);
  
  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  return {
    title: `${book.title} | Buy on Amazon`,
    description: book.description || `Discover ${book.title} - ${book.benefits.join(', ')}`,
    keywords: `${book.title}, faith-based book, Christian book, guided journal, mental wellness`,
    openGraph: {
      title: book.title,
      description: book.description || `Discover ${book.title}`,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'}/book/${book.id}`,
      images: [
        {
          url: book.coverImage,
          width: 1200,
          height: 1800,
          alt: book.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: book.title,
      description: book.description || `Discover ${book.title}`,
      images: [book.coverImage],
    },
    // Pinterest Rich Pins - Product metadata (using other field for custom meta tags)
    other: {
      'og:type': 'product',
      'product:price:amount': '0',
      'product:price:currency': 'USD',
      'product:availability': 'in stock',
      'product:retailer': 'Amazon',
      'product:retailer_item_id': book.id,
      'pinterest-rich-pin': 'true',
    },
  };
}

export default async function BookDetailsPage({ params }: BookDetailsPageProps) {
  const book = await getBook(params.id);
  const allBooks = await prisma.book.findMany({
    where: { featured: true },
    orderBy: { order: 'asc' },
  });

  // Fetch testimonials and author data
  let testimonials: Testimonial[] = [];
  let author: Author | null = null;

  try {
    testimonials = await prisma.testimonial.findMany({
      where: { featured: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    });

    author = await prisma.author.findFirst();
  } catch (error) {
    console.error('Error fetching testimonials/author:', error);
    // Continue rendering with empty data
  }

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background-1 via-background-2 to-background-1">
      <Header books={allBooks} />
      <BookDetailsClient book={book} />
      {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
      {author && <AboutAuthor author={author} />}
      <EmailSignup />
      <Footer />
    </main>
  );
}

