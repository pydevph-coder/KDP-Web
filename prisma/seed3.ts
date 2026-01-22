import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed3...");

  const placeholderCover = "/images/placeholder-book-cover.jpg";

  // Book 1: Even When You're Grieving
  const book1 = await prisma.book.upsert({
    where: { slug: "even-when-youre-grieving" },
    update: {},
    create: {
      title: "Even When You're Grieving - A Faith-Based Journey Toward Healing After Loss: Daily Scriptures, Reflections, and Guided Prayers for the Grieving Heart",
      slug: "even-when-youre-grieving",
      coverImage: placeholderCover,
      description: "A journal created for the mother who loves deeply and grieves quietly (or loudly), faithfully, and honestly.",
      amazonLink: "https://www.amazon.com/dp/B0FDGYXDTM",
      painPointsHeader: "Dear Mama, You Are Not Alone",
      painPoints: [],
      painPointsBodyMd: "Grief is not a straight line.\nIt is a sacred, winding journey—quiet some days, overwhelming on others.\n\nWhether your loss is fresh or many years behind you...\nWhether you speak about it openly or carry it silently...\nWhether your arms feel empty or your heart feels heavy...\n\nPlease hear this:\n\nYou are still a mother.\nYour love is still real.\nAnd you are not walking alone.\n\nGod sees every tear you wipe away.\nHe hears every prayer you can't put into words.\nHe walks with you, even in the darkest valleys.",
      introductionHeader: "A Journal Created for Your Tender Heart",
      introduction: null,
      introductionBodyMd: "Still a Good Mom Even When You're Grieving was created for the mother who loves deeply and grieves quietly (or loudly), faithfully, and honestly.\n\nThis journal is not meant to rush your healing.\nIt will never tell you to \"move on.\"\nIt will never demand strength you don't have today.\n\nInstead, it offers you:\n\n- A safe place to breathe\n- God's Word to anchor your heart\n- Gentle reflections for heavy days\n- Guided prayers when your own words fall short\n- Space to remember, release, cry, and heal—at your own pace",
      benefitsHeader: "What You'll Find Inside",
      benefits: [],
      benefitsBodyMd: "Each day includes:\n\n- Scripture to remind you that God is near\n- A short, compassionate reflection\n- A guided prayer for your hurting heart\n- Space to write honestly—if and when you're ready\n\nYou may use one page a day...\none page a week...\nor pause and return when your heart allows.\n\nThis journal is a companion, not a task.",
      featuresHeader: "There Is No Right Way to Grieve",
      features: [],
      featuresBodyMd: "Some days you may write pages.\nSome days you may only read a verse.\nSome days you may close the book and simply breathe.\n\nAll of it is okay.\n\nHealing does not mean forgetting.\nStrength does not mean silence.\nFaith does not mean you never feel broken.\n\nIt means you keep showing up—softly, imperfectly, bravely.",
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You are grieving the loss of a child (at any age or stage)\n- You feel guilt, sadness, anger, confusion, or emptiness\n- You want a faith-centered space to process your pain\n- You need gentle guidance without pressure\n- You want to remember your child while caring for your heart\n\nIt is also a meaningful gift for a grieving mother who needs comfort beyond words.",
      faithMessageHeader: "A Gentle Reminder",
      faithMessage: null,
      faithMessageBodyMd: "You are still held.\nYou are still loved.\nYou are still a good mom.\nAnd your story matters—every single word of it.\n\nLet this journal walk with you through the silence, the questions, the tears, and the tiny moments of peace.\n\nGod is near.\nYour love remains.\nAnd healing, however slow, is still possible.",
      featured: true,
      order: 1
    }
  });
  console.log("✅ Created book 1:", book1.title);

  // Book 2: Still a Good Mom Even When You Yell
  const book2 = await prisma.book.upsert({
    where: { slug: "still-good-mom-even-when-you-yell" },
    update: {},
    create: {
      title: "Still a Good Mom Even When You Yell - A Guided Prayer Journal for Moms Learning to Yell Less and Love More: 6-Weeks of Daily Prompts and Prayers for Mothers Who Want to Shout Less and Show Up with Love",
      slug: "still-good-mom-even-when-you-yell",
      coverImage: placeholderCover,
      description: "A 6-week guided journal designed to help you pause, breathe, and reflect while connecting with God in the messy moments of motherhood.",
      amazonLink: "https://www.amazon.com/dp/B0FBGN8FTB",
      painPointsHeader: "Welcome, Mama",
      painPoints: [],
      painPointsBodyMd: "Motherhood is beautiful... and messy.\n\nSome days feel like joy-filled celebrations;\nOther days feel like a battle with exhaustion, guilt, and frustration.\n\nIf you've ever yelled, felt overwhelmed, or questioned your worth as a mom...\nYou are still a good mom.\n\nGod sees you. He loves you. And this journal was created to walk gently alongside you, not to judge, shame, or add pressure.",
      introductionHeader: "Meet Your Gentle Companion",
      introduction: null,
      introductionBodyMd: "Still a Good Mom Even When You Yell is a 6-week guided journal designed to help you:\n\n- Pause, breathe, and reflect\n- Forgive yourself and let go of guilt\n- Grow in self-awareness, grace, and patience\n- Connect with God in the messy moments of motherhood\n\nEach week focuses on real, common motherhood themes: emotional overload, finding calm, learning to love yourself, and showing up for your kids with intention.",
      benefitsHeader: "How This Journal Works",
      benefits: [],
      benefitsBodyMd: "**Weekly Themes**\n\nEach week centers on a meaningful theme that reflects the ups and downs of motherhood.\n\n**Daily Prompts**\n\nSpend a few minutes each day reflecting. Write honestly—there's no right or wrong way. Growth often begins in the honest, messy places.\n\n**Scripture & Prayer**\n\nScripture and guided prayers remind you that God meets you exactly where you are—even in the moments you wish you could undo.\n\n**Reflection Sections**\n\nAt the end of each week, capture your wins, acknowledge your struggles, and speak truth over yourself.\n\n**Be Gentle With Yourself**\n\nThis is not a scorecard. Miss a day? Fall back into old habits? That's okay. Grace is always here.\n\n**Use It Your Way**\n\nSome days you may write pages; other days, just a single word. Every step counts. Every moment matters.",
      featuresHeader: "",
      features: [],
      featuresBodyMd: null,
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You want to yell less and love more\n- You feel guilty after losing your patience\n- You crave a faith-centered space to process motherhood\n- You want practical tools to reflect, pray, and grow\n- You're ready to let God guide your heart through the messy moments",
      faithMessageHeader: "Your Journey Begins Here",
      faithMessage: null,
      faithMessageBodyMd: "This journal is your companion on the holy, messy, beautiful journey of motherhood.\n\nYou are seen. You are loved. You are still a good mom.\n\nPick up your pen, take a deep breath, and let grace lead the way.",
      featured: true,
      order: 2
    }
  });
  console.log("✅ Created book 2:", book2.title);

  // Book 3: Still a Good Mom Even When You Feel Lost
  const book3 = await prisma.book.upsert({
    where: { slug: "still-good-mom-even-when-you-feel-lost" },
    update: {},
    create: {
      title: "Still a Good Mom Even When You Feel Lost - A Not-So-Perfect Christian Mom's Guide Journal to Feeling Less Lost and a Lot More Like Herself: Explores Struggles Moms Face with Creative & Reflective Prompts + Inspirational Coloring Pages",
      slug: "still-good-mom-even-when-you-feel-lost",
      coverImage: placeholderCover,
      description: "A faith-centered journal designed to help you pause, breathe, and reconnect with yourself while processing struggles with scripture, prayer, and reflection.",
      amazonLink: "https://www.amazon.com/dp/B0FCCQCB12",
      painPointsHeader: "You Are Not Alone, Mama",
      painPoints: [],
      painPointsBodyMd: "Motherhood is beautiful... and sometimes messy, exhausting, and confusing.\n\nIf you've whispered, \"Am I doing enough?\"\n\nIf you've cried behind closed doors asking, \"Where did I go in all of this?\"\n\nIf you've felt lost in the middle of giving, growing, and going...\n\nYou are not alone.\n\nGod sees your heart. He loves you fully. And this journal was created to walk with you through the real, messy, tender moments of motherhood.",
      introductionHeader: "Meet Your Gentle Companion",
      introduction: null,
      introductionBodyMd: "Still a Good Mom Even When You Feel Lost is a faith-centered journal designed to help you:\n\n- Pause, breathe, and reconnect with yourself\n- Reflect on your motherhood journey honestly\n- Process struggles with scripture, prayer, and reflection\n- Reclaim grace, peace, and confidence in your own heart\n- Use creativity as a tool for healing and self-care",
      benefitsHeader: "How This Journal Supports You",
      benefits: [],
      benefitsBodyMd: "**5 Heart-Centered Parts**\n\nEach part guides you through a stage of your journey:\n\n1. When I Feel Lost – Acknowledge and process your emotions\n2. Reclaiming the Present – Slow down and reconnect with today\n3. Reconnecting with Myself – Remember who you are beyond motherhood\n4. Reframing the Struggle – Turn challenges into lessons of grace\n5. Moving Forward with Grace – Set intentions and embrace hope\n\n**Inside Each Part**\n\n- Scripture to anchor your heart\n- Warm overviews to guide reflection\n- Personal and creative prompts\n- Gentle prayer starters\n- Beautiful coloring pages to pause and breathe\n\n**Color at Your Own Pace**\n\nYou don't need to be an artist. These pages are for rest, play, and gentle creativity.\n\n**Write What's Real**\n\nNo right or wrong answers. Be honest, messy, and kind to yourself.\n\n**No Pressure**\n\nNo dates, deadlines, or schedules. Do one page a day or one a week. Skip, revisit, or move ahead as your heart needs.\n\n**End With Intention**\n\nEach part closes with a blessing prayer and a Grace-Filled Declaration, celebrating everything you've reclaimed and rediscovered.",
      featuresHeader: "",
      features: [],
      featuresBodyMd: null,
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You feel lost in motherhood and need space to breathe\n- You want to reflect on struggles, hope, and grace\n- You need a faith-centered, creative outlet\n- You desire gentle encouragement to reconnect with yourself and God\n- You want to reclaim your peace, identity, and confidence as a mom",
      faithMessageHeader: "Your Permission Slip",
      faithMessage: null,
      faithMessageBodyMd: "This journal invites you:\n\n- To breathe\n- To reflect\n- To be held\n- To believe again that you are still a good mom—even here, even now, especially now.\n\nBegin Your Gentle Journey Today",
      featured: true,
      order: 3
    }
  });
  console.log("✅ Created book 3:", book3.title);

  // Book 4: Still a Good Mom, Even When the House Is Messy
  const book4 = await prisma.book.upsert({
    where: { slug: "still-good-mom-even-house-messy" },
    update: {},
    create: {
      title: "Still a Good Mom, Even When the House Is Messy - A Mom's Prayer Journal for Showing Up With Love Even When the House is a Disaster: Topics Different Mom Messy Issues, Prayer Guide, and Reflection",
      slug: "still-good-mom-even-house-messy",
      coverImage: placeholderCover,
      description: "A prayer journal for the mama who loves her family deeply, wonders if she's enough, and is tired of striving, comparing, and chasing perfection.",
      amazonLink: "https://www.amazon.com/dp/B0FD431VFW",
      painPointsHeader: "You're Not Alone, Mama",
      painPoints: [],
      painPointsBodyMd: "Motherhood is holy work... but sometimes it doesn't feel that way.\n\nIf your mornings are chaotic, your coffee cold, your laundry piled, or your heart weary, you are not alone.\n\nThis journal is for the mama who loves her family deeply, wonders if she's enough, and is tired of striving, comparing, and chasing perfection.\n\nGod sees your heart. He loves you fully. And this journal was created to walk with you through the real, messy, tender moments of motherhood.",
      introductionHeader: "Meet Your Gentle Companion",
      introduction: null,
      introductionBodyMd: "Still a Good Mom, Even When the House Is Messy is a prayer journal designed to help you:\n\n- Pause, breathe, and reconnect with yourself and God\n- Reflect on your motherhood journey honestly\n- Process struggles with scripture, prayer, and reflection\n- Reclaim grace, peace, and confidence in your own heart\n- Let go of perfectionism and embrace authentic motherhood",
      benefitsHeader: "What You'll Find Inside",
      benefits: [],
      benefitsBodyMd: "Each day includes:\n\n- Scripture to anchor your heart\n- Gentle reflections for heavy days\n- Guided prayers when your own words fall short\n- Space to write honestly—if and when you're ready\n\nYou may use one page a day...\none page a week...\nor pause and return when your heart allows.\n\nThis journal is a companion, not a task.",
      featuresHeader: "",
      features: [],
      featuresBodyMd: null,
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You feel overwhelmed by the demands of motherhood\n- You struggle with perfectionism and comparison\n- You want a faith-centered space to process your journey\n- You need gentle guidance without pressure\n- You want to show up with love, even when life feels messy",
      faithMessageHeader: "A Gentle Reminder",
      faithMessage: null,
      faithMessageBodyMd: "You are still held.\nYou are still loved.\nYou are still a good mom.\nAnd your story matters—every single word of it.\n\nLet this journal walk with you through the chaos, the questions, the tears, and the tiny moments of peace.\n\nGod is near.\nYour love remains.\nAnd grace, however messy, is always enough.",
      featured: true,
      order: 4
    }
  });
  console.log("✅ Created book 4:", book4.title);

  console.log("🎉 Seed3 completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed3 failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

