import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// NOTE:
// books_details_6.pdf stores most page text inside compressed streams.
// We can reliably extract Amazon links/ASINs, but not consistently recover the full
// section copy (headers + markdown bodies) from the PDF bytes.
//
// This seed creates the *new* books (ASINs not already present in seed.ts/seed3.ts/seed4.ts)
// with safe placeholders. Update the rich content later in the Admin Book editor.

async function main() {
  console.log("🌱 Starting seed5...");

  const placeholderCover = "/images/placeholder-book-cover.jpg";

  const newBooks = [
    // Extracted from books_details_6.pdf (new ASINs not in existing seeds)
    { asin: "B0DMNXRW5Y" },
    { asin: "B0DQGLZHFR" },
    { asin: "B0DWF6BS64" },
    { asin: "B0F1LHYLKN" },
    { asin: "B0F2TKMQ6V" },
    { asin: "B0F6CK54FG" },
    { asin: "B0F6VW9GX6" },
    { asin: "B0F7LTZRF1" },
  ] as const;

  let order = 1;
  for (const b of newBooks) {
    const slug = `asin-${b.asin.toLowerCase()}`;
    const amazonLink = `https://www.amazon.com/dp/${b.asin}`;

    const book = await prisma.book.upsert({
      where: { slug },
      update: {
        amazonLink,
      },
      create: {
        title: `New Book (${b.asin})`,
        slug,
        coverImage: placeholderCover,
        description: "TODO: Update title/description/markdown sections in Admin after seeding.",
        amazonLink,

        // Use markdown bodies so you can paste the PDF copy later without fighting array fields.
        painPoints: [],
        benefits: [],
        features: [],
        targetAudience: [],

        painPointsHeader: "You're Not Alone",
        painPointsBodyMd: null,

        introductionHeader: null,
        introduction: null,
        introductionBodyMd: null,

        benefitsHeader: null,
        benefitsBodyMd: null,

        featuresHeader: null,
        featuresBodyMd: null,

        targetAudienceHeader: null,
        targetAudienceBodyMd: null,

        faithMessageHeader: null,
        faithMessage: null,
        faithMessageBodyMd: null,

        featured: false,
        order,
      },
    });

    console.log(`✅ Upserted (${order}):`, book.title, "-", book.amazonLink);
    order += 1;
  }

  console.log("🎉 Seed5 completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed5 failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });





