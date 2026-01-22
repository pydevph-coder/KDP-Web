import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Book 1: Goals, Grit, Grace
  const book1 = await prisma.book.upsert({
    where: { slug: 'goals-grit-grace' },
    update: {},
    create: {
      title: 'Goals, Grit, Grace: A Faith-Based SMART Goal Journal for College Students',
      slug: 'goals-grit-grace',
      coverImage: '/images/placeholder-book-cover.jpg', // Placeholder - update later
      description: 'A SMART goal journal designed to help college students plan wisely, work faithfully, and trust God deeply.',
      introductionHeader: 'Meet Your Faithful Goal Journal',
      introduction: 'Goals, Grit & Grace is a SMART goal journal designed to help college students plan wisely, work faithfully, and trust God deeply. This journal integrates goal-setting with faith, showing that intention, effort, and trust can coexist. Each day becomes a chance to take small, meaningful steps toward personal and spiritual growth.',
      introductionBodyMd: 'Goals, Grit & Grace is a SMART goal journal designed to help college students plan wisely, work faithfully, and trust God deeply. This journal integrates goal-setting with faith, showing that intention, effort, and trust can coexist. Each day becomes a chance to take small, meaningful steps toward personal and spiritual growth.',
      amazonLink: 'https://www.amazon.com/dp/B0GF819RSV',
      painPointsHeader: "You're Not Alone, College Student",
      painPoints: [
        'College comes with academic, personal, and faith-related pressures',
        'Deadlines, expectations, and comparisons can feel overwhelming',
        'Students may question their worth based on productivity or grades',
        'Progress can feel slow or non-linear, causing self-doubt',
        'Faith and goal-setting can feel disconnected without guidance'
      ],
      painPointsBodyMd: '● College comes with academic, personal, and faith-related pressures\n● Deadlines, expectations, and comparisons can feel overwhelming\n● Students may question their worth based on productivity or grades\n● Progress can feel slow or non-linear, causing self-doubt\n● Faith and goal-setting can feel disconnected without guidance',
      benefitsHeader: 'How This Journal Will Support You',
      benefits: [
        'Guides goal-setting in alignment with faith and values',
        'Encourages consistent effort even in challenging times',
        'Offers grace-centered reflection to prevent self-judgment',
        'Provides daily structure to plan, work, and surrender outcomes',
        'Helps manage academic, personal, and spiritual goals holistically',
        'Builds confidence and resilience through intentional daily practice'
      ],
      benefitsBodyMd: '● Guides goal-setting in alignment with faith and values\n● Encourages consistent effort even in challenging times\n● Offers grace-centered reflection to prevent self-judgment\n● Provides daily structure to plan, work, and surrender outcomes\n● Helps manage academic, personal, and spiritual goals holistically\n● Builds confidence and resilience through intentional daily practice',
      featuresHeader: 'Inside These Pages',
      features: [
        'Begin with identifying a goal worth pursuing',
        'Daily journaling structure for progress, reflection, and surrender',
        'Focus on three principles: Goals, Grit, and Grace',
        'Scripture reminders to integrate faith with action',
        'Space for reflections, notes, and personal insights',
        'Encouragement for both productive and slower days',
        'Faith-centered guidance for long-term growth'
      ],
      featuresBodyMd: '● Begin with identifying a goal worth pursuing\n● Daily journaling structure for progress, reflection, and surrender\n● Focus on three principles: Goals, Grit, and Grace\n● Scripture reminders to integrate faith with action\n● Space for reflections, notes, and personal insights\n● Encouragement for both productive and slower days\n● Faith-centered guidance for long-term growth',
      targetAudienceHeader: 'This Journal Is For You If...',
      targetAudience: [
        'College students seeking structure for goals without pressure',
        'Young adults wanting to integrate faith with daily planning',
        'Students feeling overwhelmed by deadlines and expectations',
        'Youth ministry or mentoring programs for college students',
        'Anyone wanting to cultivate intentional, faith-filled growth during college'
      ],
      targetAudienceBodyMd: '● College students seeking structure for goals without pressure\n● Young adults wanting to integrate faith with daily planning\n● Students feeling overwhelmed by deadlines and expectations\n● Youth ministry or mentoring programs for college students\n● Anyone wanting to cultivate intentional, faith-filled growth during college',
      faithMessageHeader: 'Plan, Work & Trust',
      faithMessage: "This journal teaches that goal-setting, consistent effort, and faith go hand in hand. By practicing Goals, Grit, and Grace, college students can navigate challenges, celebrate progress, and trust God throughout their journey. The tone is supportive, empowering, and faith-driven.",
      faithMessageBodyMd: "This journal teaches that goal-setting, consistent effort, and faith go hand in hand. By practicing Goals, Grit, and Grace, college students can navigate challenges, celebrate progress, and trust God throughout their journey. The tone is supportive, empowering, and faith-driven.",
      featured: true,
      order: 1
    }
  });
  console.log('✅ Created book 1:', book1.title);

  // Book 2: Breathe, Pray, Release
  const book2 = await prisma.book.upsert({
    where: { slug: 'breathe-pray-release' },
    update: {},
    create: {
      title: 'Breathe, Pray, Release: A Faith Journal for Managing Emotions, Finding Calm, and Surrendering Every Moment to God',
      slug: 'breathe-pray-release',
      coverImage: '/images/placeholder-book-cover.jpg',
      description: 'A gentle, faith-based journal designed to help you slow down, process your emotions, and surrender each moment to God.',
      introductionHeader: 'Meet Your Sacred Companion',
      introduction: 'Breathe, Pray, Release is a gentle, faith-based journal designed to help you slow down, process your emotions, and surrender each moment to God. Through devotional themes, guided prompts, creative pages, and release prayers, this journal creates a safe space to breathe, pray, and let go, all while staying rooted in faith.',
      introductionBodyMd: 'Breathe, Pray, Release is a gentle, faith-based journal designed to help you slow down, process your emotions, and surrender each moment to God. Through devotional themes, guided prompts, creative pages, and release prayers, this journal creates a safe space to breathe, pray, and let go, all while staying rooted in faith.',
      amazonLink: 'https://www.amazon.com/dp/B0G59GTY34',
      painPointsHeader: "You're Not Alone, Friend",
      painPoints: [
        'Life brings seasons of overwhelm, joy, confusion, and longing',
        'Teens and adults alike struggle to process emotions with honesty',
        'Finding calm while staying spiritually grounded can feel hard',
        'Many need a safe, faith-centered space to reflect and release',
        'Emotional and spiritual well-being requires intentional care'
      ],
      painPointsBodyMd: '● Life brings seasons of overwhelm, joy, confusion, and longing\n● Teens and adults alike struggle to process emotions with honesty\n● Finding calm while staying spiritually grounded can feel hard\n● Many need a safe, faith-centered space to reflect and release\n● Emotional and spiritual well-being requires intentional care',
      benefitsHeader: 'How This Journal Will Support You',
      benefits: [
        'Provides devotional themes to center your heart and mind',
        'Offers guided prompts for deep reflection and self-discovery',
        'Encourages creative expression for emotional and spiritual clarity',
        'Invites surrender through prayer and release moments',
        'Allows flexible use at your own pace, honoring your personal journey',
        'Supports emotional and spiritual well-being in a nurturing way'
      ],
      benefitsBodyMd: '● Provides devotional themes to center your heart and mind\n● Offers guided prompts for deep reflection and self-discovery\n● Encourages creative expression for emotional and spiritual clarity\n● Invites surrender through prayer and release moments\n● Allows flexible use at your own pace, honoring your personal journey\n● Supports emotional and spiritual well-being in a nurturing way',
      featuresHeader: 'Inside These Pages',
      features: [
        'Start with Theme Devotionals to align your heart with God\'s truth',
        'Follow Guided Prompts to explore thoughts, faith, and patterns',
        'Explore Creative Pages for drawing, doodling, or writing freely',
        'End Each Section with Prayer & Release to surrender to God',
        'Go at Your Own Pace—no pressure, just presence',
        'Revisit Previous Entries to reflect on growth and answered prayers'
      ],
      featuresBodyMd: '● Start with Theme Devotionals to align your heart with God\'s truth\n● Follow Guided Prompts to explore thoughts, faith, and patterns\n● Explore Creative Pages for drawing, doodling, or writing freely\n● End Each Section with Prayer & Release to surrender to God\n● Go at Your Own Pace—no pressure, just presence\n● Revisit Previous Entries to reflect on growth and answered prayers',
      targetAudienceHeader: 'This Journal Is For You If...',
      targetAudience: [
        'Anyone feeling overwhelmed, stressed, or emotionally tangled',
        'Teens and adults seeking a faith-centered emotional outlet',
        'Youth groups, counseling support, or spiritual mentoring programs',
        'Parents and caregivers looking for a reflective tool for children or teens',
        'Anyone wanting to nurture emotional and spiritual well-being in a gentle, faith-filled way'
      ],
      targetAudienceBodyMd: '● Anyone feeling overwhelmed, stressed, or emotionally tangled\n● Teens and adults seeking a faith-centered emotional outlet\n● Youth groups, counseling support, or spiritual mentoring programs\n● Parents and caregivers looking for a reflective tool for children or teens\n● Anyone wanting to nurture emotional and spiritual well-being in a gentle, faith-filled way',
      faithMessageHeader: 'Breathe, Pray & Release',
      faithMessage: "This journal emphasizes presence, honesty, and surrender. It's a safe and sacred space where emotions are valid, prayers are heard, and God's peace is accessible. The tone is gentle, nurturing, and empowering, inviting personal growth through faith and reflection.",
      faithMessageBodyMd: "This journal emphasizes presence, honesty, and surrender. It's a safe and sacred space where emotions are valid, prayers are heard, and God's peace is accessible. The tone is gentle, nurturing, and empowering, inviting personal growth through faith and reflection.",
      featured: true,
      order: 2
    }
  });
  console.log('✅ Created book 2:', book2.title);

  // Book 3: Gratitude: Our Daily Load of Benefits
  const book3 = await prisma.book.upsert({
    where: { slug: 'gratitude-daily-load-benefits' },
    update: {},
    create: {
      title: 'Gratitude: Our Daily Load of Benefits - A Faith-Based 5-Minute Daily Gratitude Journal Centered on God\'s Daily Blessings',
      slug: 'gratitude-daily-load-benefits',
      coverImage: '/images/placeholder-book-cover.jpg',
      description: 'A simple, faith-filled journal designed to help you pause, notice God\'s blessings, and respond with thankfulness—one day at a time.',
      introductionHeader: 'Meet Your Daily Gratitude Space',
      introduction: 'Gratitude: Our Daily Load of Benefits is a simple, faith-filled journal designed to help you pause, notice God\'s blessings, and respond with thankfulness—one day at a time.\n\nInspired by the truth that God daily loads us with benefits, this journal creates a quiet space to recognize His mercies in both big moments and small details.\n\nNo pressure.\nNo long writing sessions.\nNo perfect words required.\n\nJust five minutes to whisper:\n"Lord, thank You. I see Your hand today."',
      introductionBodyMd: 'Gratitude: Our Daily Load of Benefits is a simple, faith-filled journal designed to help you pause, notice God\'s blessings, and respond with thankfulness—one day at a time.\n\nInspired by the truth that God daily loads us with benefits, this journal creates a quiet space to recognize His mercies in both big moments and small details.\n\nNo pressure.\nNo long writing sessions.\nNo perfect words required.\n\nJust five minutes to whisper:\n"Lord, thank You. I see Your hand today."',
      amazonLink: 'https://www.amazon.com/dp/B0G3HNMT86',
      painPointsHeader: 'Your Days Are Fuller Than You Think',
      painPoints: [
        'Feel overwhelmed by responsibilities and distractions',
        'Struggle to notice God\'s goodness in ordinary days',
        'Find it hard to slow down and reflect',
        'Long for peace but don\'t know where to begin',
        'Want a deeper faith connection without complicated routines'
      ],
      painPointsBodyMd: 'Life moves fast.\nWorries pile up.\nBlessings quietly pass by unnoticed.\n\nMany teens and adults:\n\n● Feel overwhelmed by responsibilities and distractions\n● Struggle to notice God\'s goodness in ordinary days\n● Find it hard to slow down and reflect\n● Long for peace but don\'t know where to begin\n● Want a deeper faith connection without complicated routines\n\nGratitude doesn\'t come naturally in busy seasons.\nSometimes, it needs a gentle invitation.',
      benefitsHeader: 'How This Journal Will Support You',
      benefits: [
        'Encourages daily awareness of God\'s presence',
        'Builds a consistent gratitude habit in just 5 minutes',
        'Helps shift focus from stress to blessing',
        'Strengthens faith through Scripture-based reflection',
        'Creates emotional peace through intentional slowing down',
        'Records God\'s faithfulness over time',
        'Nurtures joy, contentment, and spiritual growth'
      ],
      benefitsBodyMd: '● Encourages daily awareness of God\'s presence\n● Builds a consistent gratitude habit in just 5 minutes\n● Helps shift focus from stress to blessing\n● Strengthens faith through Scripture-based reflection\n● Creates emotional peace through intentional slowing down\n● Records God\'s faithfulness over time\n● Nurtures joy, contentment, and spiritual growth',
      featuresHeader: 'Inside These Pages',
      features: [
        'Read a short Scripture',
        'Reflect on one daily blessing',
        'Identify one small joy',
        'Write a simple prayer of gratitude',
        'Close with a one-line reflection'
      ],
      featuresBodyMd: 'Each day gently guides you to:\n\n● Read a short Scripture\n● Reflect on one daily blessing\n● Identify one small joy\n● Write a simple prayer of gratitude\n● Close with a one-line reflection\n\nDesigned for simplicity, peace, and consistency, perfect for mornings, evenings, or quiet moments in between.',
      targetAudienceHeader: 'This Journal Is For You If...',
      targetAudience: [
        'You want to grow in gratitude without pressure',
        'You feel busy, tired, stressed, or spiritually dry',
        'You\'re learning to notice God in everyday life',
        'You desire a peaceful daily faith habit',
        'You enjoy short, meaningful journaling',
        'You want to document God\'s goodness over time',
        'You\'re a teen, college student, parent, mentor, or faith seeker'
      ],
      targetAudienceBodyMd: '● You want to grow in gratitude without pressure\n● You feel busy, tired, stressed, or spiritually dry\n● You\'re learning to notice God in everyday life\n● You desire a peaceful daily faith habit\n● You enjoy short, meaningful journaling\n● You want to document God\'s goodness over time\n● You\'re a teen, college student, parent, mentor, or faith seeker\n\nPerfect for:\n\n● Personal devotion\n● Teens & young adults\n● Bible study companions\n● Christian gifts\n● Prayer and gratitude challenges\n● Quiet time routines',
      faithMessageHeader: 'A Gentle Daily Practice of Seeing God',
      faithMessage: "This journal is not about perfect faith.\nIt's about present faith.\n\nIt's a space where:\n- Ordinary days become holy\n- Small blessings become visible\n- Gratitude becomes a lifestyle\n- And God's faithfulness becomes personal\n\nFive minutes a day.\nA softer heart.\nA stronger awareness of grace.",
      faithMessageBodyMd: "This journal is not about perfect faith.\nIt's about present faith.\n\nIt's a space where:\n\n● Ordinary days become holy\n● Small blessings become visible\n● Gratitude becomes a lifestyle\n● And God's faithfulness becomes personal\n\nFive minutes a day.\nA softer heart.\nA stronger awareness of grace.",
      featured: true,
      order: 3
    }
  });
  console.log('✅ Created book 3:', book3.title);

  // Book 4: Slay Every Day
  const book4 = await prisma.book.upsert({
    where: { slug: 'slay-every-day' },
    update: {},
    create: {
      title: 'Slay Every Day: A Christian Prayer Journal for Students - A 6-Month Guide to Study, Pray, and Slay Your Goals While Staying Faithful, Focused, and Fearless',
      slug: 'slay-every-day',
      coverImage: '/images/placeholder-book-cover.jpg',
      description: 'A 6-month Christian prayer journal created to walk with students through real life—classes, deadlines, dreams, doubts, and all.',
      introductionHeader: 'Meet Your Daily Study & Prayer Companion',
      introduction: 'Slay Every Day is a 6-month Christian prayer journal created to walk with students through real life—classes, deadlines, dreams, doubts, and all.',
      introductionBodyMd: 'Slay Every Day is a 6-month Christian prayer journal created to walk with students through real life—classes, deadlines, dreams, doubts, and all.',
      amazonLink: 'https://www.amazon.com/dp/B0G4W8K4PG',
      painPointsHeader: 'School Is Hard. Faith Shouldn\'t Be.',
      painPoints: [
        'Feel overwhelmed by academic stress',
        'Struggle to balance faith and school life',
        'Battle self-doubt, burnout, and fear of failure',
        'Want to grow spiritually but don\'t know where to start',
        'Need a safe place to be honest with God'
      ],
      painPointsBodyMd: 'Between assignments, exams, expectations, and pressure to succeed, students today carry a lot.\n\nMany students:\n\n● Feel overwhelmed by academic stress\n● Struggle to balance faith and school life\n● Battle self-doubt, burnout, and fear of failure\n● Want to grow spiritually but don\'t know where to start\n● Need a safe place to be honest with God\n\nYou\'re not weak for feeling tired.\nYou\'re human. And you don\'t have to do this season alone.',
      benefitsHeader: 'How This Journal Will Support You',
      benefits: [],
      benefitsBodyMd: null,
      featuresHeader: 'Inside These Pages',
      features: [],
      featuresBodyMd: null,
      targetAudienceHeader: 'This Journal Is For You If...',
      targetAudience: [],
      targetAudienceBodyMd: null,
      faithMessageHeader: '',
      faithMessage: '',
      faithMessageBodyMd: null,
      featured: false,
      order: 4
    }
  });
  console.log('✅ Created book 4:', book4.title);

  // Book 5: To the Best Dad in the World Ever
  const book5 = await prisma.book.upsert({
    where: { slug: 'best-dad-world-ever' },
    update: {},
    create: {
      title: 'To the Best Dad in the World Ever',
      slug: 'best-dad-world-ever',
      coverImage: '/images/placeholder-book-cover.jpg',
      description: 'A one-of-a-kind keepsake to honor and celebrate the best dad in the world.',
      introductionHeader: 'A Journal for His Heart',
      introduction: 'This journal is a small token of love—a collection of words, memories, and heartfelt messages from those whose lives you have touched the most: your children. Each page captures the laughter, lessons, sacrifices, and everyday moments that make you the incredible dad you are.',
      introductionBodyMd: 'This journal is a small token of love—a collection of words, memories, and heartfelt messages from those whose lives you have touched the most: your children. Each page captures the laughter, lessons, sacrifices, and everyday moments that make you the incredible dad you are.',
      amazonLink: 'https://www.amazon.com/dp/B0F26X63CK',
      painPointsHeader: 'Why This Journal Matters',
      painPoints: [
        'Share favorite memories and moments that made us laugh, smile, or learn',
        'Reflect on lessons only you could teach us',
        'Express gratitude for your love, presence, and guidance',
        'Create a lasting treasure that will remind you of the lives you\'ve touched'
      ],
      painPointsBodyMd: 'This journal is more than just pages; it\'s a keepsake:\n\n● Share favorite memories and moments that made us laugh, smile, or learn\n● Reflect on lessons only you could teach us\n● Express gratitude for your love, presence, and guidance\n● Create a lasting treasure that will remind you of the lives you\'ve touched\n\nEach page is designed to capture your story through our eyes, celebrating everything that makes you uniquely Dad.',
      benefitsHeader: 'How It Works',
      benefits: [
        'Fill the Pages – Complete the prompts, add personal messages, stories, and even photos',
        'Create a Treasure – Once finished, this journal becomes a one-of-a-kind keepsake of love, laughter, and cherished memories',
        'Celebrate Him – Gift it for birthdays, Father\'s Day, milestones, or simply because he\'s the best dad ever'
      ],
      benefitsBodyMd: '1. Fill the Pages – Complete the prompts, add personal messages, stories, and even photos.\n2. Create a Treasure – Once finished, this journal becomes a one-of-a-kind keepsake of love, laughter, and cherished memories.\n3. Celebrate Him – Gift it for birthdays, Father\'s Day, milestones, or simply because he\'s the best dad ever.',
      featuresHeader: '',
      features: [],
      featuresBodyMd: null,
      targetAudienceHeader: '',
      targetAudience: [],
      targetAudienceBodyMd: null,
      faithMessageHeader: 'A Gift He Will Cherish',
      faithMessage: 'To the Best Dad in the World Ever isn\'t just a journal, it\'s a heartfelt tribute, a celebration of your love, guidance, and unwavering presence. May every word remind him how deeply he\'s valued, respected, and cherished.',
      faithMessageBodyMd: 'To the Best Dad in the World Ever isn\'t just a journal, it\'s a heartfelt tribute, a celebration of your love, guidance, and unwavering presence. May every word remind him how deeply he\'s valued, respected, and cherished.',
      featured: false,
      order: 5
    }
  });
  console.log('✅ Created book 5:', book5.title);

  // Book 6: For the Best Mom Ever
  const book6 = await prisma.book.upsert({
    where: { slug: 'best-mom-world-ever' },
    update: {},
    create: {
      title: 'For the Best Mom Ever - A One-of-a-Kind Keepsake to Honor and Celebrate the Best Mom in the World: A Memory Journal Dedicated to Mothers, An Ultimate Tribute to Moms',
      slug: 'best-mom-world-ever',
      coverImage: '/images/placeholder-book-cover.jpg',
      description: 'A one-of-a-kind keepsake to honor and celebrate the best mom in the world.',
      introductionHeader: 'A Journal for Her Heart',
      introduction: 'Dear Mom,\n\nThis journal is a small token of love—a collection of words, memories, and heartfelt messages from those whose lives you have touched the most: your children. Each page captures the laughter, lessons, sacrifices, and everyday moments that make you the incredible mom you are.\n\nThrough every hug, every word of guidance, and every act of care, you\'ve shaped our hearts in ways words can barely express. This book is our way of saying thank you—for your endless love, your unwavering strength, and your beautiful, tender heart.',
      introductionBodyMd: 'Dear Mom,\n\nThis journal is a small token of love—a collection of words, memories, and heartfelt messages from those whose lives you have touched the most: your children. Each page captures the laughter, lessons, sacrifices, and everyday moments that make you the incredible mom you are.\n\nThrough every hug, every word of guidance, and every act of care, you\'ve shaped our hearts in ways words can barely express. This book is our way of saying thank you—for your endless love, your unwavering strength, and your beautiful, tender heart.',
      amazonLink: 'https://www.amazon.com/dp/B0F26X63CK',
      painPointsHeader: 'Why This Journal Matters',
      painPoints: [
        'Share favorite memories, moments that made us laugh, or brought us comfort',
        'Reflect on lessons only you could teach us',
        'Express gratitude for your love, guidance, and presence',
        'Create a lasting treasure that reminds you how deeply you are valued'
      ],
      painPointsBodyMd: 'This journal is more than just pages—it\'s a keepsake:\n\n● Share favorite memories, moments that made us laugh, or brought us comfort\n● Reflect on lessons only you could teach us\n● Express gratitude for your love, guidance, and presence\n● Create a lasting treasure that reminds you how deeply you are valued\n\nEach page is designed to celebrate your story as a mother, through the eyes of the children whose lives you\'ve shaped.',
      benefitsHeader: 'How It Works',
      benefits: [
        'Fill the Pages – Complete the prompts, add personal messages, stories, or even photos',
        'Create a Treasure – When finished, this journal becomes a unique keepsake of love, laughter, and cherished memories',
        'Celebrate Her – Perfect as a gift for birthdays, Mother\'s Day, milestones, or simply to remind her how much she\'s loved'
      ],
      benefitsBodyMd: '1. Fill the Pages – Complete the prompts, add personal messages, stories, or even photos.\n2. Create a Treasure – When finished, this journal becomes a unique keepsake of love, laughter, and cherished memories.\n3. Celebrate Her – Perfect as a gift for birthdays, Mother\'s Day, milestones, or simply to remind her how much she\'s loved.',
      featuresHeader: '',
      features: [],
      featuresBodyMd: null,
      targetAudienceHeader: '',
      targetAudience: [],
      targetAudienceBodyMd: null,
      faithMessageHeader: 'A Gift She Will Cherish',
      faithMessage: 'For the Best Mom Ever isn\'t just a journal—it\'s a heartfelt tribute, a celebration of your love, guidance, and unwavering presence. May every word remind her how deeply she\'s cherished, respected, and loved.',
      faithMessageBodyMd: 'For the Best Mom Ever isn\'t just a journal—it\'s a heartfelt tribute, a celebration of your love, guidance, and unwavering presence. May every word remind her how deeply she\'s cherished, respected, and loved.',
      featured: false,
      order: 6
    }
  });
  console.log('✅ Created book 6:', book6.title);

  // Book 7: Prayer Journal for the Overwhelmed Mom
  const book7 = await prisma.book.upsert({
    where: { slug: 'prayer-journal-overwhelmed-mom' },
    update: {},
    create: {
      title: 'Prayer Journal for the Overwhelmed Mom - Embracing Motherhood Gracefully: 52 Weeks of Guided Reflection, Prayer, and Gratitude for Christian Mothers',
      slug: 'prayer-journal-overwhelmed-mom',
      coverImage: '/images/placeholder-book-cover.jpg',
      description: 'Your safe space to pause, breathe, and reconnect with God and yourself. It\'s not about adding another task to your list—it\'s about creating a sacred rhythm in the midst of the chaos.',
      introductionHeader: 'Because Motherhood is Beautiful... and Sometimes Overwhelming',
      introduction: 'Being a mom is one of the most rewarding callings, but it can also feel exhausting. Between caring for your children, managing your home, keeping up with relationships, and juggling endless responsibilities, it\'s easy to feel stretched thin. Some days, you may wonder if you\'re doing enough—or if you\'re enough.\n\nThis journal is your safe space to pause, breathe, and reconnect with God and yourself. It\'s not about adding another task to your list—it\'s about creating a sacred rhythm in the midst of the chaos.',
      amazonLink: 'https://www.amazon.com/dp/B0DVRBQCS4',
      painPointsHeader: 'What You\'ll Discover Inside',
      painPoints: [
        'Monthly Themes: Focus on self-care, grace, faith, balance, joy, and gratitude throughout the year',
        'Weekly Scripture Reflections: Be inspired by a meaningful verse each week to guide your thoughts and prayers',
        'Guided Journaling Prompts: Thoughtful questions to help you reflect honestly and deeply on your motherhood journey',
        'Prayer Prompts & Reflection Spaces: Gentle exercises to release burdens, pour out your heart, and connect with God\'s presence',
        'Gratitude & Mindfulness Exercises: Weekly reminders to notice the small blessings and victories in your day',
        'Monthly Check-Ins: Reflect, celebrate progress, and see God\'s work in your heart over time'
      ],
      painPointsBodyMd: '● Monthly Themes: Focus on self-care, grace, faith, balance, joy, and gratitude throughout the year\n● Weekly Scripture Reflections: Be inspired by a meaningful verse each week to guide your thoughts and prayers\n● Guided Journaling Prompts: Thoughtful questions to help you reflect honestly and deeply on your motherhood journey\n● Prayer Prompts & Reflection Spaces: Gentle exercises to release burdens, pour out your heart, and connect with God\'s presence\n● Gratitude & Mindfulness Exercises: Weekly reminders to notice the small blessings and victories in your day\n● Monthly Check-Ins: Reflect, celebrate progress, and see God\'s work in your heart over time',
      benefitsHeader: 'Why This Journal is Different',
      benefits: [
        'Faith-centered and heart-focused, designed specifically for Christian moms',
        'Flexible: use daily or weekly—no pressure, no deadlines',
        'Encourages honesty, reflection, and growth without judgment',
        'Helps turn ordinary moments into opportunities for peace, gratitude, and spiritual renewal'
      ],
      benefitsBodyMd: '● Faith-centered and heart-focused, designed specifically for Christian moms\n● Flexible: use daily or weekly—no pressure, no deadlines\n● Encourages honesty, reflection, and growth without judgment\n● Helps turn ordinary moments into opportunities for peace, gratitude, and spiritual renewal',
      featuresHeader: 'How to Use Your Journal',
      features: [
        'Set Aside a Sacred Time – Even 10 minutes a day or a few minutes each week can transform your mindset',
        'Read the Weekly Scripture – Let God\'s Word speak into your heart and guide your reflections',
        'Write Freely – There\'s no right or wrong way; this is your space for honesty, prayer, and growth',
        'Celebrate Progress – Reflect at the end of each week or month, and notice the small victories along the way'
      ],
      featuresBodyMd: '1. Set Aside a Sacred Time – Even 10 minutes a day or a few minutes each week can transform your mindset.\n2. Read the Weekly Scripture – Let God\'s Word speak into your heart and guide your reflections.\n3. Write Freely – There\'s no right or wrong way; this is your space for honesty, prayer, and growth.\n4. Celebrate Progress – Reflect at the end of each week or month, and notice the small victories along the way.',
      targetAudienceHeader: 'Who This Journal is For',
      targetAudience: [
        'Moms who feel stretched thin, overwhelmed, or exhausted',
        'Moms craving quiet, intentional moments with God',
        'Moms seeking encouragement, clarity, and spiritual renewal'
      ],
      targetAudienceBodyMd: '● Moms who feel stretched thin, overwhelmed, or exhausted\n● Moms craving quiet, intentional moments with God\n● Moms seeking encouragement, clarity, and spiritual renewal',
      faithMessageHeader: 'Your Journey Starts Here',
      faithMessage: 'Motherhood doesn\'t have to feel overwhelming. With this journal, you can slow down, release guilt, and step into a year of peace, grace, and growth.\n\nTake a deep breath. Open your heart. You are seen, loved, and enough.',
      faithMessageBodyMd: 'Motherhood doesn\'t have to feel overwhelming. With this journal, you can slow down, release guilt, and step into a year of peace, grace, and growth.\n\nTake a deep breath. Open your heart. You are seen, loved, and enough.',
      featured: true,
      order: 7
    }
  });
  console.log('✅ Created book 7:', book7.title);

  // Book 8: Gratitude Journal for Christian Women
  const book8 = await prisma.book.upsert({
    where: { slug: 'gratitude-journal-christian-women' },
    update: {},
    create: {
      title: 'Gratitude Journal for Christian Women - Walking the Grateful Path: 52 Weeks of Reflection and Prayer',
      slug: 'gratitude-journal-christian-women',
      coverImage: '/images/placeholder-book-cover.jpg',
      description: 'A one-year journey designed to help you cultivate a lifestyle of gratitude as you reflect on God\'s faithfulness in every season of your life.',
      introductionHeader: 'A Year-Long Journey to Embrace God\'s Goodness',
      introduction: 'Dear Sister in Christ,\n\nWelcome to your Gratitude Journal! This one-year journey is designed to help you cultivate a lifestyle of gratitude as you reflect on God\'s faithfulness in every season of your life. Whether you\'re beginning a new chapter, navigating challenges, or celebrating milestones, this journal offers a sacred space to nurture a heart overflowing with thanksgiving.\n\nGratitude is more than an attitude—it\'s an act of worship and faith. Scripture reminds us:\n\n"In every thing give thanks: for this is the will of God in Christ Jesus concerning you."\n\n– 1 Thessalonians 5:18 (KJV)\n\nThrough daily gratitude, we acknowledge God\'s faithfulness, draw closer to His presence, and experience the peace that surpasses understanding.',
      amazonLink: 'https://www.amazon.com/dp/B0DV3YHPDF',
      painPointsHeader: 'What You\'ll Discover Inside',
      painPoints: [
        '12 Monthly Themes – Each month focuses on a unique aspect of gratitude, helping you see God\'s blessings in new ways',
        'Daily Gratitude Logs – Record the gifts and joys God places in your life every day',
        'Weekly Scripture & Reflections – Deepen your spiritual growth with verses and thought-provoking prompts',
        'Prayer Guides & Prompts – Draw near to the Lord with guided prayers and space to create your own',
        'Creative Activities – Engage with the theme each month through journaling exercises, lists, and reflection spaces',
        'Gratitude Corner – Celebrate meaningful moments and milestones that touch your heart'
      ],
      painPointsBodyMd: '● 12 Monthly Themes – Each month focuses on a unique aspect of gratitude, helping you see God\'s blessings in new ways\n● Daily Gratitude Logs – Record the gifts and joys God places in your life every day\n● Weekly Scripture & Reflections – Deepen your spiritual growth with verses and thought-provoking prompts\n● Prayer Guides & Prompts – Draw near to the Lord with guided prayers and space to create your own\n● Creative Activities – Engage with the theme each month through journaling exercises, lists, and reflection spaces\n● Gratitude Corner – Celebrate meaningful moments and milestones that touch your heart',
      benefitsHeader: 'Why This Journal is Different',
      benefits: [
        'Faith-centered and designed specifically for Christian women',
        'Guides you to develop a lasting, intentional habit of gratitude',
        'Encourages reflection, prayer, and creativity',
        'Flexible: Use daily or weekly at your own pace',
        'Supports spiritual growth while bringing peace and contentment into your everyday life'
      ],
      benefitsBodyMd: '● Faith-centered and designed specifically for Christian women\n● Guides you to develop a lasting, intentional habit of gratitude\n● Encourages reflection, prayer, and creativity\n● Flexible: Use daily or weekly at your own pace\n● Supports spiritual growth while bringing peace and contentment into your everyday life',
      featuresHeader: 'How to Use This Journal',
      features: [
        'Begin Each Month with Prayer – Invite God into your reflections and open your heart to His presence',
        'Engage with the Theme – Explore the monthly creative activities and reflection prompts',
        'Record Daily Gratitude – Write down blessings, big or small, and let your heart notice God\'s work',
        'Reflect Weekly – Use scripture and guided questions to meditate on lessons and growth',
        'Celebrate God\'s Faithfulness – In your Gratitude Corner, capture moments that inspire joy, hope, and thanksgiving'
      ],
      featuresBodyMd: '1. Begin Each Month with Prayer – Invite God into your reflections and open your heart to His presence.\n2. Engage with the Theme – Explore the monthly creative activities and reflection prompts.\n3. Record Daily Gratitude – Write down blessings, big or small, and let your heart notice God\'s work.\n4. Reflect Weekly – Use scripture and guided questions to meditate on lessons and growth.\n5. Celebrate God\'s Faithfulness – In your Gratitude Corner, capture moments that inspire joy, hope, and thanksgiving.',
      targetAudienceHeader: 'Who This Journal is For',
      targetAudience: [
        'Christian women seeking a deeper walk with God',
        'Women looking to cultivate gratitude as a daily practice',
        'Anyone who wants to celebrate God\'s blessings and grow in spiritual contentment'
      ],
      targetAudienceBodyMd: '● Christian women seeking a deeper walk with God\n● Women looking to cultivate gratitude as a daily practice\n● Anyone who wants to celebrate God\'s blessings and grow in spiritual contentment',
      faithMessageHeader: 'Begin Your Journey Today',
      faithMessage: 'Let this 52-week guided journal be your companion as you walk the grateful path—reflecting on blessings, deepening your faith, and discovering joy in every season of life.\n\nStart today and experience the peace, contentment, and spiritual growth that come from a heart fully focused on God\'s goodness.',
      faithMessageBodyMd: 'Let this 52-week guided journal be your companion as you walk the grateful path—reflecting on blessings, deepening your faith, and discovering joy in every season of life.\n\nStart today and experience the peace, contentment, and spiritual growth that come from a heart fully focused on God\'s goodness.',
      featured: true,
      order: 8
    }
  });
  console.log('✅ Created book 8:', book8.title);

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
