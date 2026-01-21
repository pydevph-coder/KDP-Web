import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed2...");

  const placeholderCover = "/images/placeholder-book-cover.jpg";

  // Book: MAMA
  const mama = await prisma.book.upsert({
    where: { slug: "mama-memories-advice-moments-anecdotes" },
    update: {},
    create: {
      title: "MAMA: Memories, Advice, Moments, Anecdotes",
      slug: "mama-memories-advice-moments-anecdotes",
      coverImage: placeholderCover,
      description:
        "A mother's guided keepsake memory journal to tell her life story — a gift of love from a mother's heart.",
      amazonLink: "https://www.amazon.com/dp/B0FH3VM4PZ",

      painPointsHeader: "Some Stories Are Too Precious to Be Forgotten",
      painPoints: [],
      painPointsBodyMd:
        "Before I was your mama, I was a little girl with dreams... a teenager with questions... a woman navigating the world... and then everything changed when I became yours.\n\nA mother carries a lifetime of:\n\n- Quiet sacrifices\n- Untold struggles\n- Beautiful beginnings\n- Hard lessons\n- Deep love\n- Sacred memories\n\nYet so many of these stories remain unspoken — lost to time, busy days, or \"maybe someday.\"\n\nBut your story matters. Your voice matters. Your love deserves to be remembered.",

      introductionHeader: "Meet Your Legacy-in-Pages Companion",
      introduction: null,
      introductionBodyMd:
        "MAMA is more than a journal. It is a love letter written across time.\n\nIt is a space where a mother can be:\n\n- Honest\n- Silly\n- Thoughtful\n- Emotional\n- Wise\n\nAll the things that make up motherhood... and the woman behind it.\n\nThis guided keepsake journal gently helps mothers tell the stories their children may not have heard, the ones they lived beside them, and the ones they never want them to forget.",

      benefitsHeader: "How This Journal Will Serve Your Heart",
      benefits: [],
      benefitsBodyMd:
        "- Helps organize life memories in a gentle, guided way\n- Encourages meaningful reflection\n- Preserves family history\n- Creates emotional connection across generations\n- Leaves a tangible legacy of love\n- Offers healing through storytelling\n- Becomes a priceless family heirloom",

      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd:
        "You’ll find prompts that invite mothers to share:\n\n- Childhood memories and growing-up years\n- Lessons learned long before motherhood\n- The magic and madness of becoming a mother\n- Faith, fears, prayers, and quiet hopes\n- Love through every season of life\n- Space for photos, letters, and special notes\n\nSome pages will make your child laugh.\nSome may make them cry.\nAll of it comes from the deepest parts of who you are — and who you became because of them.",

      targetAudienceHeader: "This Journal Is Perfect For...",
      targetAudience: [],
      targetAudienceBodyMd:
        "- Mothers of any age\n- Grandmothers\n- New moms & expecting moms\n- Adult children gifting their mothers\n- Mother’s Day, birthdays, and holidays\n- Memory keeping & legacy projects\n\nPerfect for:\n\n- Heartfelt gifts\n- Family bonding\n- Preserving life stories\n- Emotional connection across generations",

      faithMessageHeader: "More Than a Journal — A Mother’s Legacy",
      faithMessage: null,
      faithMessageBodyMd:
        "This is more than a journal.\n\nIt is:\n\n- A mother’s heart on paper\n- A lifetime wrapped in stories\n- A voice that never fades\n- A gift that grows more valuable with time\n\nSo when your child wonders:\n\n- Who was my mom before me?\n- What did she believe?\n- How much did she love me?\n\nThey will find the answers here... between the lines.",

      featured: true,
      order: 101,
    },
  });
  console.log("✅ Seeded:", mama.title);

  // Book: Quiet Strength
  const quietStrength = await prisma.book.upsert({
    where: { slug: "quiet-strength-single-moms-devotional-journal" },
    update: {},
    create: {
      title: "Quiet Strength: A 10-Week Devotional Journal for Single Moms",
      slug: "quiet-strength-single-moms-devotional-journal",
      coverImage: placeholderCover,
      description:
        "A 10-week devotional journal designed to walk alongside single mothers with faith, reflection, and resilience.",
      amazonLink: "https://www.amazon.com/dp/B0FGTB8LLM",

      painPointsHeader: "Dear Strong Mama — You Are Not Alone",
      painPoints: [],
      painPointsBodyMd:
        "Single motherhood is a journey full of challenges:\n\n- Long nights of exhaustion\n- Endless responsibilities\n- Moments of doubt and loneliness\n- Financial pressures and uncertainty\n- Co-parenting struggles\n- A desire for rest, peace, and balance\n\nYet within the quiet, you carry strength unseen, prayers whispered in the dark, and faith that keeps moving forward.\n\nIf you've ever felt invisible or overwhelmed, this journal is for you.",

      introductionHeader: "Meet Your Sacred Companion",
      introduction: null,
      introductionBodyMd:
        "Quiet Strength is a 10-week devotional journal designed to walk alongside single mothers.\n\nIt honors the courage it takes to:\n\n- Show up every day for your children\n- Navigate life's challenges with grace\n- Carry burdens without losing your faith\n- Reconnect with your heart and God\n- Celebrate small victories and inner resilience\n\nThis journal is your safe, faith-filled space to breathe, reflect, and strengthen your spirit.",

      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd:
        "- Guides you through the unique challenges of single motherhood\n- Provides KJV Scriptures to anchor your heart and mind\n- Offers reflections to help you process emotions and decisions\n- Includes space for prayer, journaling, and honest self-expression\n- Encourages rest, peace, and reconnection with God\n- Builds resilience and reinforces your quiet strength",

      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd:
        "Over 10 weeks, you'll explore themes such as:\n\nProvision & Financial Peace\nIdentity & Self-Worth\nBalance & Boundaries\nEmotional Health & Rest\nFaith, Hope, & Spiritual Growth\n\nEach week includes:\n\n- Scripture passages to reflect on God's promises\n- Guided devotional reflections\n- Thoughtful questions for introspection\n- Space for prayer and journaling\n\nIt's not about having it all together. It's about showing up and finding God in the journey.",

      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd:
        "- You are a single mother seeking guidance and encouragement\n- You need a faith-centered space to process emotions\n- You desire practical reflection and prayer prompts\n- You want to strengthen your identity and resilience\n- You long for quiet, restorative moments amid busy days\n\nPerfect for:\n\n- Gifts for single moms\n- Mothers' support groups\n- Personal devotional time\n- Healing, reflection, and spiritual growth",

      faithMessageHeader: "Discover Your Quiet Strength",
      faithMessage: null,
      faithMessageBodyMd:
        "Single motherhood is demanding. Life can feel heavy.\n\nBut within your quiet moments, God meets you.\n\nThis journal helps you recognize:\n\n- The courage in your everyday choices\n- The beauty in your perseverance\n- The faith that carries you through the unseen struggles\n\nHere, your story is honored. Your prayers are heard. Your strength is celebrated.",

      featured: true,
      order: 102,
    },
  });
  console.log("✅ Seeded:", quietStrength.title);

  // Book: Blooming Forward: Her Way
  const bloomingForward = await prisma.book.upsert({
    where: { slug: "blooming-forward-her-way-divorce-recovery-journal" },
    update: {},
    create: {
      title: "Blooming Forward: Her Way",
      slug: "blooming-forward-her-way-divorce-recovery-journal",
      coverImage: placeholderCover,
      description: "A 12-week divorce recovery journal to heal, rebuild, and rise in her own time.",
      amazonLink: "https://www.amazon.com/dp/B0FFTB4JXT",

      painPointsHeader: "Dear Beautiful Soul — You Are Seen",
      painPoints: [],
      painPointsBodyMd:
        "Divorce can feel like the world has shifted beneath your feet:\n\n- Hearts shattered, emotions raw\n- Questions that keep you awake at night\n- Moments of relief, anger, or numbness\n- A longing to rediscover who you are\n\nYet even in the ache, you still show up for yourself. You are still here. You are still capable. You are still whole in progress.\n\nIf your heart is seeking a safe, faith-filled space to process, reflect, and heal, this journal is for you.",

      introductionHeader: "Meet Your Healing Companion",
      introduction: null,
      introductionBodyMd:
        "Blooming Forward: Her Way is a 12-week guided journal designed to walk beside women navigating the journey after divorce.\n\nIt is a sacred, nurturing space to:\n\n- Feel deeply, honestly, and without judgment\n- Process grief, anger, relief, or uncertainty\n- Rebuild self-worth, confidence, and hope\n- Celebrate small victories along the way\n- Move forward at your own pace, on your own timeline\n\nThis journal gently reminds you that healing is not a race, and growth comes in layers—like a flower blooming from tender soil.",

      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd:
        "- Offers weekly themes that address real, raw emotions\n- Provides gentle affirmations to nurture self-worth\n- Includes guided prompts for reflection, grief release, and growth\n- Creates daily spaces for truth-telling, small wins, prayer, or quiet moments\n- Encourages small, courageous challenges to practice healing in action\n- Supports self-paced, sacred, and intentional healing",

      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd:
        "Over 12 weeks, you'll explore:\n\n- Acceptance & Acknowledgment\n- Grieving & Releasing\n- Self-Worth & Confidence\n- Forgiveness & Letting Go\n- Rebuilding Your Life & Vision\n- Blooming Forward & Embracing Joy\n\nEach week includes:\n\n- A soul-stirring theme to reflect on\n- Gentle affirmations to ground your worth\n- Thoughtful prompts for journaling, prayer, or meditation\n- Daily spaces to process emotions, track small wins, and capture quiet moments\n- Weekly pauses to breathe, reflect, and notice progress\n\nHealing isn't about perfection. It's about showing up, day by day, for yourself.",

      targetAudienceHeader: "This Journal Is Perfect For...",
      targetAudience: [],
      targetAudienceBodyMd:
        "- Women navigating life after divorce\n- Those seeking a faith-centered space to process and heal\n- Individuals looking for guided reflection, prayer, and self-care\n- Support groups or personal journaling practice\n- Gifts for a friend, daughter, or sister in transition",

      faithMessageHeader: "Bloom at Your Own Pace",
      faithMessage: null,
      faithMessageBodyMd:
        "Divorce may have changed your world, but it does not erase who you are.\n\nThis journal invites you to reconnect with yourself and God, honor your emotions, nurture your worth and courage, and step forward—one page at a time.",

      featured: true,
      order: 103,
    },
  });
  console.log("✅ Seeded:", bloomingForward.title);

  console.log("🎉 seed2 completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ seed2 failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });




