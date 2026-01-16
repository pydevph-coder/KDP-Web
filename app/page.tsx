import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BookShowcase from '@/components/BookShowcase';
// import WhoItsFor from '@/components/WhoItsFor';
// import WhyTheseBooks from '@/components/WhyTheseBooks';
import Testimonials from '@/components/Testimonials';
import AboutAuthor from '@/components/AboutAuthor';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';
import type { Author, Book as PrismaBook, Testimonial } from '@prisma/client';

export const dynamic = 'force-dynamic';
export type Book = {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  benefits: string[];
  amazonLink: string;
};
export default async function Home() {
  let books: PrismaBook[] = [];
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
      <Header books={books as PrismaBook[]} />
      <Hero books={books as PrismaBook[]} />
      <BookShowcase books={books as PrismaBook[]} />
      {/* <WhoItsFor />
      <WhyTheseBooks /> */}
      {testimonials.length > 0 && <Testimonials testimonials={testimonials} />}
      {author && <AboutAuthor author={author} />}
      <EmailSignup />
      <Footer />
    </main>
  );
}

