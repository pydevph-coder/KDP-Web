import Hero from '@/components/Hero';
import BookShowcase from '@/components/BookShowcase';
import WhoItsFor from '@/components/WhoItsFor';
import WhyTheseBooks from '@/components/WhyTheseBooks';
import Testimonials from '@/components/Testimonials';
import AboutAuthor from '@/components/AboutAuthor';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import { prisma } from '@/lib/prisma';
import type { Author, Book, Testimonial } from '@prisma/client';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let books: Book[] = [];
  let testimonials: Testimonial[] = [];
  let author: Author | null = null;

  try {
    books = await prisma.book.findMany({
      where: { featured: true },
      orderBy: { order: 'asc' },
    });

    testimonials = await prisma.testimonial.findMany({
      where: { featured: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    });

    author = await prisma.author.findFirst();
  } catch (error) {
    console.error('Database error:', error);
    // Continue rendering with empty data
  }

  return (
    <main className="min-h-screen">
      <Hero books={books} />
      <BookShowcase books={books} />
      <WhoItsFor />
      <WhyTheseBooks />
      {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
      {author && <AboutAuthor author={author} />}
      <EmailSignup />
      <Footer />
      <StickyCTA books={books} />
    </main>
  );
}

