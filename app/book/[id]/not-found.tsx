import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';

export default async function BookNotFound() {
  const allBooks = await prisma.book.findMany({
    where: { featured: true },
    orderBy: { order: 'asc' },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-background-1 via-background-2 to-background-1">
      <Header books={allBooks} />
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6">
            Book Not Found
          </h1>
          <p className="text-lg sm:text-xl text-text-primary/70 mb-8">
            Sorry, we couldn&apos;t find the book you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary-1 hover:bg-primary-2 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}

