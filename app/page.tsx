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

export default async function Home() {
  const books = await prisma.book.findMany({
    where: { featured: true },
    orderBy: { order: 'asc' },
  });

  const testimonials = await prisma.testimonial.findMany({
    where: { featured: true },
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  const author = await prisma.author.findFirst();

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

