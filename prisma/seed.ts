import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data (order matters because of relations)
  await prisma.click.deleteMany();
  await prisma.book.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.author.deleteMany();
  await prisma.emailSubscriber.deleteMany();

  // --------------------
  // BOOKS
  // --------------------
  const book1 = await prisma.book.create({
    data: {
      title: "Atomic Habits",
      coverImage:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "An easy & proven way to build good habits and break bad ones.",
      amazonLink: "https://www.amazon.com/dp/0735211299",
      benefits: [
        "Build lasting habits",
        "Improve focus and consistency",
        "Proven behavioral strategies",
      ],
      featured: true,
      order: 1,
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: "Deep Work",
      coverImage:
        "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg",
      description:
        "Rules for focused success in a distracted world.",
      amazonLink: "https://www.amazon.com/dp/1455586692",
      benefits: [
        "Increase productivity",
        "Eliminate distractions",
        "Master deep focus",
      ],
      featured: false,
      order: 2,
    },
  });

  // --------------------
  // CLICKS
  // --------------------
  await prisma.click.createMany({
    data: [
      {
        bookId: book1.id,
        link: book1.amazonLink,
        source: "hero",
      },
      {
        bookId: book1.id,
        link: book1.amazonLink,
        source: "showcase",
      },
      {
        bookId: book2.id,
        link: book2.amazonLink,
        source: "showcase",
      },
    ],
  });

  // --------------------
  // AUTHOR
  // --------------------
  await prisma.author.create({
    data: {
      name: "James Clear",
      bio: "Author and speaker focused on habits, decision-making, and continuous improvement.",
      photo:
        "https://m.media-amazon.com/images/I/71k5p2ZzKzL._AC_UY327_FMwebp_QL65_.jpg",
      credentials: "New York Times Bestselling Author",
    },
  });

  // --------------------
  // TESTIMONIALS
  // --------------------
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Sarah M.",
        text: "This book completely changed how I approach my daily routines.",
        rating: 5,
        featured: true,
      },
      {
        name: "Daniel R.",
        text: "Simple, practical, and incredibly effective.",
        rating: 4,
        featured: false,
      },
    ],
  });

  // --------------------
  // EMAIL SUBSCRIBERS
  // --------------------
  await prisma.emailSubscriber.createMany({
    data: [
      { email: "test1@example.com" },
      { email: "test2@example.com" },
    ],
  });

  console.log("✅ Seeding finished.");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
