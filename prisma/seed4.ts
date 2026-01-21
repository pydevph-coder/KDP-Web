import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed4...");

  const placeholderCover = "/images/placeholder-book-cover.jpg";

  // Book 1: Breathe, Pray, Release
  const book1 = await prisma.book.upsert({
    where: { slug: "breathe-pray-release" },
    update: {},
    create: {
      title: "Breathe, Pray, Release: A Faith Journal for Managing Emotions, Finding Calm, and Surrendering Every Moment to God",
      slug: "breathe-pray-release",
      coverImage: placeholderCover,
      description: "A gentle, faith-based journal designed to help you slow down, process your emotions, and surrender each moment to God.",
      amazonLink: "https://www.amazon.com/dp/B0G59GTY34",
      painPointsHeader: "You're Not Alone, Friend",
      painPoints: [],
      painPointsBodyMd: "- Life brings seasons of overwhelm, joy, confusion, and longing\n- Teens and adults alike struggle to process emotions with honesty\n- Finding calm while staying spiritually grounded can feel hard\n- Many need a safe, faith-centered space to reflect and release\n- Emotional and spiritual well-being requires intentional care",
      introductionHeader: "Meet Your Sacred Companion",
      introduction: null,
      introductionBodyMd: "Breathe, Pray, Release is a gentle, faith-based journal designed to help you slow down, process your emotions, and surrender each moment to God. Through devotional themes, guided prompts, creative pages, and release prayers, this journal creates a safe space to breathe, pray, and let go, all while staying rooted in faith.",
      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "- Provides devotional themes to center your heart and mind\n- Offers guided prompts for deep reflection and self-discovery\n- Encourages creative expression for emotional and spiritual clarity\n- Invites surrender through prayer and release moments\n- Allows flexible use at your own pace, honoring your personal journey\n- Supports emotional and spiritual well-being in a nurturing way",
      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "- Start with Theme Devotionals to align your heart with God's truth\n- Follow Guided Prompts to explore thoughts, faith, and patterns\n- Explore Creative Pages for drawing, doodling, or writing freely\n- End Each Section with Prayer & Release to surrender to God\n- Go at Your Own Pace—no pressure, just presence\n- Revisit Previous Entries to reflect on growth and answered prayers",
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- Anyone feeling overwhelmed, stressed, or emotionally tangled\n- Teens and adults seeking a faith-centered emotional outlet\n- Youth groups, counseling support, or spiritual mentoring programs\n- Parents and caregivers looking for a reflective tool for children or teens\n- Anyone wanting to nurture emotional and spiritual well-being in a gentle, faith-filled way",
      faithMessageHeader: "Breathe, Pray & Release",
      faithMessage: null,
      faithMessageBodyMd: "This journal emphasizes presence, honesty, and surrender. It's a safe and sacred space where emotions are valid, prayers are heard, and God's peace is accessible. The tone is gentle, nurturing, and empowering, inviting personal growth through faith and reflection.",
      featured: true,
      order: 1
    }
  });
  console.log("✅ Created book 1:", book1.title);

  // Book 2: Faith Intertwined
  const book2 = await prisma.book.upsert({
    where: { slug: "faith-intertwined" },
    update: {},
    create: {
      title: "Faith Intertwined: Where Their Journey Fuels My Faith: Reflections, Scripture, and Journaling Prompts Inspired by Moses, David, Ruth, Esther & Gideon",
      slug: "faith-intertwined",
      coverImage: placeholderCover,
      description: "A devotional journaling experience that invites you to walk beside ordinary people God used in extraordinary ways.",
      amazonLink: "https://www.amazon.com/dp/B0G2M2JJMR",
      painPointsHeader: "You're Not the Only One Who Feels This Way",
      painPoints: [],
      painPointsBodyMd: "Faith is not always steady.\n\nSometimes it's bold. Sometimes it's quiet. Sometimes it's full of questions.\n\nMany believers:\n\n- Wonder if their doubts disqualify them\n- Feel weak beside \"strong\" Bible heroes\n- Struggle with waiting, fear, or disappointment\n- Long to connect Scripture to real life\n- Want a faith that feels honest, not performative\n\nIf you've ever felt unsure, tired, hopeful, broken, or brave all at once—you're in good company.",
      introductionHeader: "Meet Your Companions in Faith",
      introduction: null,
      introductionBodyMd: "Faith Intertwined is a devotional journaling experience that invites you to walk beside ordinary people God used in extraordinary ways.\n\nInside these pages, you'll journey with:\n\n- Moses, who questioned his worth\n- Ruth, who chose faith in the middle of loss\n- David, who wrestled between failure and worship\n- Esther, who stood afraid yet courageous\n- Gideon, who doubted but still obeyed\n\nTheir stories are not distant history. They are reflections of the same fears, hopes, and longings you carry today.\n\nThis journal gently weaves Scripture, reflection, and writing into a sacred space where their faith strengthens yours.",
      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "- Helps you connect personally with biblical stories\n- Encourages honest reflection and emotional faith\n- Provides Scripture to anchor your heart in truth\n- Offers journaling prompts for deeper self-discovery\n- Normalizes doubt as part of spiritual growth\n- Strengthens trust in God's faithfulness\n- Creates a quiet space for listening, healing, and hope",
      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "- Scripture passages centered on each biblical figure\n- Devotional reflections on their struggles and obedience\n- Journaling prompts to explore your own story\n- Space to process fear, waiting, courage, and surrender\n- Gentle invitations to pray, trust, and grow\n- A rhythm of reflection that nurtures the heart—not pressure\n\nThis is not a study guide to rush through. It is a journey to walk slowly.",
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You want a deeper, more personal faith\n- You feel both strong and uncertain at times\n- You love Scripture but crave real connection\n- You enjoy reflective journaling\n- You are healing, waiting, or discerning direction\n- You want to grow closer to God gently and honestly\n\nPerfect for:\n\n- Personal devotion time\n- Women's groups\n- Bible study companions\n- Retreat reflection journals\n- Spiritual mentoring\n- Gift for seekers and believers alike",
      faithMessageHeader: "Where Their Faith Meets Yours",
      faithMessage: null,
      faithMessageBodyMd: "This journal is not about having perfect faith.\n\nIt's about:\n\n- Showing up with honesty\n- Letting God meet you in weakness\n- Discovering courage in small steps\n- Trusting even when answers are slow\n- Learning that grace walks beside imperfect people\n\nTheir stories remind us: God does not wait for strength. He walks with us while we grow.",
      featured: true,
      order: 2
    }
  });
  console.log("✅ Created book 2:", book2.title);

  // Book 3: 365 Daily Reflections
  const book3 = await prisma.book.upsert({
    where: { slug: "365-daily-reflections" },
    update: {},
    create: {
      title: "365 Daily Reflections: One Question a Day, One Step Closer to God | Christian Devotional Journal with Daily Questions to Deepen Faith, Grow Gratitude, and Draw Closer to God",
      slug: "365-daily-reflections",
      coverImage: placeholderCover,
      description: "A gentle devotional journal created to help you build a steady rhythm with God, one question at a time.",
      amazonLink: "https://www.amazon.com/dp/B0FXX6GQJD",
      painPointsHeader: "You Don't Have to Rush Your Faith",
      painPoints: [],
      painPointsBodyMd: "Spiritual growth isn't loud. It isn't rushed. And it isn't measured by how much you do.\n\nMany believers:\n\n- Want to grow closer to God but feel overwhelmed\n- Struggle to stay consistent with devotionals\n- Feel guilty for missing days\n- Long for simple, meaningful time with God\n- Crave reflection, not pressure\n\nGod doesn't ask for perfection. He invites presence.\n\nOne quiet moment. One honest question. One small step.",
      introductionHeader: "Meet Your Daily Companion",
      introduction: null,
      introductionBodyMd: "365 Daily Reflections is a gentle devotional journal created to help you build a steady rhythm with God, one question at a time.\n\nInside you'll find:\n\n- 365 thoughtful reflection prompts\n- One question per day\n- A peaceful space for prayer, gratitude, and honesty\n- Weekly Scripture verses to anchor your heart in truth\n\nThis journal is undated, so you can begin anytime, pause anytime, and return without guilt.\n\nThere is no catching up. Only showing up.",
      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "- Builds a daily habit of reflection with ease\n- Deepens prayer and gratitude naturally\n- Encourages honest conversations with God\n- Reduces pressure through a simple one-question format\n- Supports spiritual growth at your own pace\n- Helps you notice God's presence in everyday life\n- Creates space for stillness in busy seasons",
      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "- 365 daily reflection questions\n- One full year of gentle prompts\n- Weekly Bible verses for spiritual focus\n- Undated format for flexibility\n- Space for prayer and gratitude\n- Simple layout—no overload, no pressure\n\nEach week flows like this:\n\n- Scripture to guide your heart\n- Daily question to reflect\n- Quiet space to respond to God",
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You want consistency without pressure\n- You feel spiritually tired or distracted\n- You enjoy journaling but need structure\n- You want to grow closer to God gently\n- You appreciate simple faith practices\n- You want a devotional you can return to anytime\n\nPerfect for:\n\n- Personal quiet time\n- New believers\n- Busy professionals\n- Students\n- Prayer groups\n- Gifts for birthdays, graduations, or spiritual milestones",
      faithMessageHeader: "One Question. One Step. Real Growth.",
      faithMessage: null,
      faithMessageBodyMd: "This journal is not about finishing fast.\n\nIt's about:\n\n- Listening\n- Noticing\n- Thanking\n- Trusting\n- Returning again and again\n\nFaith grows in small, faithful moments. And God meets you in every one.",
      featured: true,
      order: 3
    }
  });
  console.log("✅ Created book 3:", book3.title);

  // Book 4: Prayer Journal for Moms
  const book4 = await prisma.book.upsert({
    where: { slug: "prayer-journal-moms-overthinking" },
    update: {},
    create: {
      title: "Prayer Journal for Moms: A 12-Month Devotional to Help Mothers Overcome Overthinking and Daily Pressures",
      slug: "prayer-journal-moms-overthinking",
      coverImage: placeholderCover,
      description: "A 12-month devotional designed to help mothers overcome overthinking and daily pressures through prayer, reflection, and faith.",
      amazonLink: "https://www.amazon.com/dp/B0FKGKXHN9",
      painPointsHeader: "Mama, Your Mind Is Tired — and That Makes Sense",
      painPoints: [],
      painPointsBodyMd: "Motherhood is beautiful... but it's also loud, messy, demanding, and mentally exhausting.\n\nMany moms:\n\n- Replay conversations with their children at night\n- Worry they're doing everything wrong\n- Compare themselves to \"perfect\" online moms\n- Feel overwhelmed by daily pressures\n- Struggle with overthinking and anxiety\n- Need a safe space to process their thoughts and emotions",
      introductionHeader: "Meet Your Peaceful Companion",
      introduction: null,
      introductionBodyMd: "This Prayer Journal for Moms is a 12-month devotional designed to help you overcome overthinking and daily pressures through prayer, reflection, and faith. Each month focuses on themes that matter most to mothers, providing scripture, guided prayers, and reflection prompts to help you find peace and strength in God's presence.",
      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "- Helps you release overthinking through prayer\n- Provides monthly themes focused on motherhood challenges\n- Offers scripture to anchor your heart in truth\n- Creates space for honest reflection and processing\n- Encourages you to surrender worries to God\n- Supports emotional and spiritual well-being\n- Builds a consistent prayer habit",
      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "- 12 monthly devotional themes\n- Weekly scripture passages\n- Guided prayer prompts\n- Reflection questions for deeper processing\n- Space to write your thoughts and prayers\n- Monthly check-ins to track growth\n- Flexible format—use daily or weekly",
      targetAudienceHeader: "This Journal Is For You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You're a mom struggling with overthinking\n- You feel overwhelmed by daily pressures\n- You want to deepen your prayer life\n- You need a faith-centered space to process motherhood\n- You want to overcome anxiety and find peace\n- You desire spiritual growth in the midst of busy days",
      faithMessageHeader: "Find Peace in God's Presence",
      faithMessage: null,
      faithMessageBodyMd: "This journal is your invitation to release the weight of overthinking and daily pressures into God's hands. Through prayer, reflection, and faith, you can find peace, strength, and renewed perspective. God sees your heart, understands your struggles, and is ready to meet you in every moment.",
      featured: true,
      order: 4
    }
  });
  console.log("✅ Created book 4:", book4.title);

  // Book 5: I Feel So Alone
  const book5 = await prisma.book.upsert({
    where: { slug: "i-feel-so-alone" },
    update: {},
    create: {
      title: "I Feel So Alone: Overcoming the Silent Struggles of Motherhood: An 8-Week Prayer Journal for Stay-at-Home Moms",
      slug: "i-feel-so-alone",
      coverImage: placeholderCover,
      description: "An 8-week guided prayer journal specifically designed for stay-at-home moms who need rest, peace, and God's presence.",
      amazonLink: "https://www.amazon.com/dp/B0F8MTR5ZZ",
      painPointsHeader: "You're Not Really Alone, Mama",
      painPoints: [],
      painPointsBodyMd: "Being a stay-at-home mom can be beautiful, but it can also feel incredibly isolating. You pour your heart into your family—nurturing, teaching, cleaning, organizing—but sometimes it seems like no one notices, and no one truly understands the silent struggles you carry. The quiet of an empty house, the endless demands of children, and the pressure to \"have it all together\" can leave your heart heavy and lonely.\n\nHere's the truth: You are not alone. God sees you, knows your heart, and is walking with you through every sleepless night, every overwhelmed moment, and every quiet sigh.",
      introductionHeader: "Meet Your Sacred Companion",
      introduction: null,
      introductionBodyMd: "I Feel So Alone is an 8-week guided prayer journal specifically designed for stay-at-home moms who need rest, peace, and God's presence. Through scripture, reflection questions, guided prayers, and gentle weekly activities, this journal helps you:\n\n- Connect with God in the quiet moments\n- Reflect on your feelings of loneliness, overwhelm, and self-doubt\n- Discover rest, reassurance, and renewed strength\n- Celebrate small victories and spiritual growth\n\nThis journal is not about adding tasks to your day—it's about creating space to breathe, reflect, and experience God's love in the midst of motherhood's busyness.",
      benefitsHeader: "How This Journal Supports You",
      benefits: [],
      benefitsBodyMd: "- Guided Scripture & Reflection – Each week, a scripture anchors your reflections, giving God's truth a place to settle in your heart.\n- Thoughtful Journaling Prompts – Explore your emotions, challenges, and victories with honesty and grace.\n- Practical Weekly Activities – Apply what you've reflected on through mindfulness, gratitude, prayer, or creative exercises.\n- Weekly Summary & Celebration – Pause at the end of each week to note growth, insights, and God's presence in your journey.",
      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "**Weekly Structure:**\n\n1. Begin with Prayer – Invite God into your time and ask Him to meet your heart where you are.\n2. Read Scripture – Meditate on a verse chosen for the week's theme.\n3. Reflect & Journal – Use guided prompts to explore your thoughts, feelings, and faith.\n4. Weekly Activity – Engage in a practical or creative exercise to deepen your connection with God.\n5. Reflection & Summary – Capture insights, progress, and prayer intentions.\n\nThis rhythm creates a gentle, intentional journey toward peace, clarity, and spiritual renewal.",
      targetAudienceHeader: "This Journal is for You If...",
      targetAudience: [],
      targetAudienceBodyMd: "- You're a stay-at-home mom feeling isolated, exhausted, or invisible\n- You want to connect with God in the midst of daily demands\n- You desire a structured, faith-centered way to reflect, pray, and find peace\n- You need encouragement, hope, and assurance that your work and love matter",
      faithMessageHeader: "Step Into Peace, Strength, and Rest",
      faithMessage: null,
      faithMessageBodyMd: "Take a moment for yourself. Breathe. Release the guilt, the pressure, and the weight of expectations. Each page of this journal is a safe, sacred space where God's love meets your heart, where your feelings are valid, and where your journey is honored.\n\nOver the next 8 weeks, may you discover that:\n\n- You are seen.\n- You are valued.\n- You are doing an incredible job.\n- God is with you, always.",
      featured: true,
      order: 5
    }
  });
  console.log("✅ Created book 5:", book5.title);

  // Book 6: Dear Bro
  const book6 = await prisma.book.upsert({
    where: { slug: "dear-bro" },
    update: {},
    create: {
      title: "Dear Bro: A Book of Love and Memories: A Tribute to the Best Brother Ever From Those Who Love You Most",
      slug: "dear-bro",
      coverImage: placeholderCover,
      description: "A celebration of your brother—a collection of stories, memories, laughter, and love from those who cherish you most.",
      amazonLink: "https://www.amazon.com/dp/B0F3XPRTWN",
      painPointsHeader: "A Journal Just for Him",
      painPoints: [],
      painPointsBodyMd: "Dearest Bro,\n\nThis isn't just a book. It's a celebration of you. A collection of stories, memories, laughter, and love from those who cherish you most. It honors the brother who has been a friend, a protector, a confidant, and a source of joy and strength.\n\nInside these pages, friends and family are invited to share:\n\n- Favorite memories that made them laugh (or cry)\n- Life lessons you've taught them without even knowing it\n- Words of encouragement, admiration, and gratitude\n- Personal anecdotes that celebrate your uniqueness",
      introductionHeader: "Why This Journal Matters",
      introduction: null,
      introductionBodyMd: "Life moves fast, and sometimes we don't take the time to tell those closest to us just how much they mean. This guided journal creates that space—a meaningful, tangible keepsake your brother will treasure forever.\n\nWhether he reads it on a quiet evening, flips through it during tough times, or revisits it years from now, each page reminds him:\n\n- He is loved\n- He is appreciated\n- He is celebrated",
      benefitsHeader: "How It Works",
      benefits: [],
      benefitsBodyMd: "1. Pass It Around – Share the journal with family members and friends.\n2. Fill the Pages – Each contributor answers thoughtful prompts, shares memories, and adds doodles or photos if desired.\n3. Create a Keepsake – Once complete, this becomes a one-of-a-kind treasure that captures the love, laughter, and admiration surrounding him.",
      featuresHeader: "Perfect for Any Occasion",
      features: [],
      featuresBodyMd: "- Birthdays\n- Milestones & achievements\n- Holidays or family reunions\n- Just because you want to say \"I love you\"",
      targetAudienceHeader: "A Gift He'll Cherish Forever",
      targetAudience: [],
      targetAudienceBodyMd: "Dear Bro isn't just a journal, it's a testament to your bond, a celebration of memories, and a heartfelt reminder that no matter where life takes you, love and family endure.",
      faithMessageHeader: "",
      faithMessage: null,
      faithMessageBodyMd: null,
      featured: false,
      order: 6
    }
  });
  console.log("✅ Created book 6:", book6.title);

  // Book 7: Dear Sister
  const book7 = await prisma.book.upsert({
    where: { slug: "dear-sister" },
    update: {},
    create: {
      title: "Dear Sister: A Keepsake Journal for an Amazing Sister: Cherished Moments, Shared Laughs, and Unbreakable Bonds",
      slug: "dear-sister",
      coverImage: placeholderCover,
      description: "A celebration of your sister—a collection of stories, memories, laughter, and love from those who cherish you most.",
      amazonLink: "https://www.amazon.com/dp/B0F2Z9FSDH",
      painPointsHeader: "A Journal for Her Heart",
      painPoints: [],
      painPointsBodyMd: "From the moment we became sisters, a special bond was formed—a connection that no distance, challenge, or season of life can ever break. You are more than family; you are a best friend, a confidante, and a piece of our hearts that will always stay with us.\n\nThrough every shared secret, every burst of laughter, every playful argument, and every quiet moment of love, you've been an essential part of our lives.",
      introductionHeader: "Why This Journal Matters",
      introduction: null,
      introductionBodyMd: "This journal is our way of celebrating you. It's a space to capture:\n\n- Favorite memories and moments that made us smile\n- Lessons learned together along the way\n- Words of encouragement, gratitude, and admiration\n- Heartfelt reflections that honor your unique role in our lives\n\nEach page becomes a keepsake—a tangible reminder of the love, laughter, and sisterhood you inspire.",
      benefitsHeader: "How It Works",
      benefits: [],
      benefitsBodyMd: "1. Share the Love – Pass the journal among family and friends who know her best.\n2. Fill the Pages – Share memories, reflections, personal messages, or even doodles and photos.\n3. Create a Treasure – Once complete, this journal becomes a one-of-a-kind gift, a collection of cherished moments and heartfelt words she can treasure forever.",
      featuresHeader: "Perfect for Any Occasion",
      features: [],
      featuresBodyMd: "- Birthdays\n- Milestones or achievements\n- Holidays and celebrations\n- Just because you want to show her she's loved",
      targetAudienceHeader: "A Gift She Will Always Remember",
      targetAudience: [],
      targetAudienceBodyMd: "Dear Sister isn't just a journal—it's a celebration of your bond, a testament to your shared laughter and love, and a heartfelt reminder that no matter what life brings, your sisterhood endures.",
      faithMessageHeader: "",
      faithMessage: null,
      faithMessageBodyMd: null,
      featured: false,
      order: 7
    }
  });
  console.log("✅ Created book 7:", book7.title);

  console.log("🎉 Seed4 completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed4 failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });




