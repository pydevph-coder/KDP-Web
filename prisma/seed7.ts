import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed7...");
  const placeholderCover = "/images/placeholder-book-cover.jpg";

  // Book 1: Even When You’re Grieving
  await prisma.book.upsert({
    where: { slug: "batch6-b0fdgyxdtm" },
    update: {},
    create: {
      title: "Even When You’re Grieving",
      slug: "batch6-b0fdgyxdtm",
      coverImage: placeholderCover,
      description: "A Faith‑Based Journey Toward Healing After Loss Daily Scriptures, Reflections, and Guided Prayers for the Grieving Heart",
      amazonLink: "https://www.amazon.com/dp/B0FDGYXDTM",

      painPointsHeader: "Dear Mama, You Are Not Alone",
      painPoints: [],
      painPointsBodyMd: "Grief is not a straight line.  
 It is a sacred, winding journey —quiet some days, overwhelming on others.  
Whether your loss is fresh or many years behind you…  
 Whether you speak about it openly or carry it silently…  
 Whether your arms feel empty or your heart feels heavy…  
Please hear this:  
You are still a mother.  
 Your love is still real.  
 And you are not walking alone.  
God sees every tear you wipe away.  
 He hears every prayer you can’t put into words.  
 He walks with you, even in the darkest valleys.",

      introductionHeader: "A Journal Created for Your Tender Heart",
      introduction: null,
      introductionBodyMd: "Still a Good Mom Even When You’re Grieving was created for the mother who 
loves deeply and grieves quietly (or loudly), faithfully, and honestly.  
This journal is not meant to rush your healing.  
 It will never tell you to “move on.”  
 It will never demand strength you don’t have today.  
Instead, it offers you:  
- A safe place to breathe  
- God’s Word to anchor your heart  
- Gentle reflections for heavy days  
- Guided prayers when your own words fall short  
- ️ Space to remember, release, cry, and heal —at your own pace",

      benefitsHeader: "What You’ll Find Inside",
      benefits: [],
      benefitsBodyMd: "Each day includes:  
- Scripture to remind you that God is near  
- A short, compassionate reflection  
- A guided prayer for your hurting heart  
- Space to write honestly —if and when you’re ready  
 
You may use one page a day…  
 one page a week…  
 or pause and return when your heart allows.  
This journal is a companion, not a task.",

      featuresHeader: "There Is No Right Way to Grieve",
      features: [],
      featuresBodyMd: "Some days you may write pages.  
 Some days you may only read a verse.  
 Some days you may close the book and simply breathe.  
All of it is okay.  
Healing does not mean forgetting.  
 Strength does not mean silence.  
 Faith does not mean you never feel broken.  
It means you keep showing up —softly, imperfectly, bravely.",

      targetAudienceHeader: "This Journal Is For You If…",
      targetAudience: [],
      targetAudienceBodyMd: "- You are grieving the loss of a child (at any age or stage)  
- You feel guilt, sadness, anger, confusion, or emptiness  
- You want a faith ‑centered space to process your pain  
- You need gentle guidance without pressure  
- You want to remember your child while caring for your heart  
 
It is also a meaningful gift for a grieving mother who needs comfort beyond 
words.",

      faithMessageHeader: "A Gentle Reminder",
      faithMessage: null,
      faithMessageBodyMd: "You are still held.  
 You are still loved.  
 You are still a good mom.  
 And your story matters —every single word of it.  
Let this journal walk with you through the silence, the questions, the tears, and 
the tiny moments of peace.  
God is near.  
 Your love remains.  
 And healing, however slow, is still possible.",

      featured: false,
      order: 701,
    },
  });

  // Book 2: Still a Good Mom Even When You Yell
  await prisma.book.upsert({
    where: { slug: "batch6-b0fbgn8ftb" },
    update: {},
    create: {
      title: "Still a Good Mom Even When You Yell",
      slug: "batch6-b0fbgn8ftb",
      coverImage: placeholderCover,
      description: "A Guided Prayer Journal for Moms Learning to Yell Less and Love More 6-Weeks of Daily Prompts and Prayers for Mothers Who Want to Shout Less and Show Up with Love",
      amazonLink: "https://www.amazon.com/dp/B0FBGN8FTB",

      painPointsHeader: "Welcome, Mama",
      painPoints: [],
      painPointsBodyMd: "Motherhood is beautiful… and messy.  
Some days feel like joy -filled celebrations;  
 Other days feel like a battle with exhaustion, guilt, and frustration.  
If you’ve ever yelled, felt overwhelmed, or questioned your worth as a mom…  
 You are still a good mom.  
God sees you. He loves you. And this journal was created to walk gently 
alongside you, not to judge, shame, or add pressure.",

      introductionHeader: "Meet Your Gentle Companion",
      introduction: null,
      introductionBodyMd: "Still a Good Mom Even When You Yell is a 6 -week guided journal designed to 
help you:  
- Pause, breathe, and reflect  
- Forgive yourself and let go of guilt  
- Grow in self -awareness, grace, and patience  
- Connect with God in the messy moments of motherhood  
 
Each week focuses on real, common motherhood themes: emotional overload, 
finding calm, learning to love yourself, and showing up for your kids with 
intention.",

      benefitsHeader: "How This Journal Works",
      benefits: [],
      benefitsBodyMd: "Weekly Themes  
Each week centers on a meaningful theme that reflects the ups and downs of 
motherhood.  
Daily Prompts  
Spend a few minutes each day reflecting. Write honestly —there’s no right or 
wrong way. Growth often begins in the honest, messy places.  
Scripture & Prayer  
Scripture and guided prayers remind you that God meets you exactly where you 
are—even in the moments you wish you could undo.  
Reflection Sections  
At the end of each week, capture your wins, acknowledge your struggles, and 
speak truth over yourself.  
Be Gentle With Yourself  
This is not a scorecard. Miss a day? Fall back into old habits? That’s okay. Grace 
is always here.  
Use It Your Way  
Some days you may write pages; other days, just a single word. Every step 
counts. Every moment matters.",

      featuresHeader: "This Journal Is For You If…",
      features: [],
      featuresBodyMd: "- You want to yell less and love more  
- You feel guilty after losing your patience  
- You crave a faith -centered space to process motherhood  
- You want practical tools to reflect, pray, and grow  
- You’re ready to let God guide your heart through the messy moments",

      targetAudienceHeader: null,
      targetAudience: [],
      targetAudienceBodyMd: null,

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 702,
    },
  });

  // Book 3: Still a Good Mom Even When You Feel Lost
  await prisma.book.upsert({
    where: { slug: "batch6-b0fccqcb12" },
    update: {},
    create: {
      title: "Still a Good Mom Even When You Feel Lost",
      slug: "batch6-b0fccqcb12",
      coverImage: placeholderCover,
      description: "A Not -So-Perfect Christian Mom’s Guide Journal to Feeling Less Lost and a Lot More Like Herself Explores Struggles Moms Face with Creative & Reflective Prompts + Inspirational",
      amazonLink: "https://www.amazon.com/dp/B0FCCQCB12",

      painPointsHeader: "You Are Not Alone, Mama",
      painPoints: [],
      painPointsBodyMd: "Motherhood is beautiful… and sometimes messy, exhausting, and confusing.  
If you’ve whispered, “Am I doing enough?”  
 If you’ve cried behind closed doors asking, “Where did I go in all of this?”  
 If you’ve felt lost in the middle of giving, growing, and going…  
You are not alone.  
God sees your heart. He loves you fully. And this journal was created to walk with 
you through the real, messy, tender moments of motherhood.",

      introductionHeader: "Meet Your Gentle Companion",
      introduction: null,
      introductionBodyMd: "Still a Good Mom Even When You Feel Lost is a faith -centered journal designed 
to help you:  
- Pause, breathe, and reconnect with yourself  
- Reflect on your motherhood journey honestly  
- Process struggles with scripture, prayer, and reflection  
- Reclaim grace, peace, and confidence in your own heart  
- Use creativity as a tool for healing and self -care",

      benefitsHeader: "How This Journal Supports You",
      benefits: [],
      benefitsBodyMd: "5 Heart -Centered Parts  
Each part guides you through a stage of your journey:  
1. When I Feel Lost – Acknowledge and process your emotions  
 
2. Reclaiming the Present – Slow down and reconnect with today  
 
3. Reconnecting with Myself – Remember who you are beyond motherhood",

      featuresHeader: "Reframing the Struggle – Turn challenges into lessons of grace",
      features: [],
      featuresBodyMd: null,

      targetAudienceHeader: null,
      targetAudience: [],
      targetAudienceBodyMd: null,

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 703,
    },
  });

  // Book 4: Still a Good Mom, Even When the House Is Messy
  await prisma.book.upsert({
    where: { slug: "batch6-b0fd431vfw" },
    update: {},
    create: {
      title: "Still a Good Mom, Even When the House Is Messy",
      slug: "batch6-b0fd431vfw",
      coverImage: placeholderCover,
      description: "A Mom’s Prayer Journal for Showing Up With Love Even When the House is a Disaster Topics Different Mom Messy Issues, Prayer Guide, and Reflection",
      amazonLink: "https://www.amazon.com/dp/B0FD431VFW",

      painPointsHeader: "You’re Not Alone, Mama",
      painPoints: [],
      painPointsBodyMd: "Motherhood is holy work… but sometimes it doesn’t feel that way.  
If your mornings are chaotic, your coffee cold, your laundry piled, or your heart 
weary, you are not alone.  
 This journal is for the mama who loves her family deeply, wonders if she’s 
enough, and is tired of striving, comparing, and chasing perfection.  
God sees your heart. He knows your mess. And He is meeting you here, 
whispering: “Come unto me… and I will give you rest”  (Matthew 11:28, KJV).",

      introductionHeader: "Meet Your Grace -Filled Companion",
      introduction: null,
      introductionBodyMd: "Still a Good Mom, Even When the House Is Messy is a faith -centered prayer 
journal created to help you:  
- Breathe, reflect, and slow down  
- Release unrealistic standards and perfectionism  
- Discover God’s presence in ordinary, messy moments  
- Embrace motherhood rooted in grace, love, and faithfulness  
- Transform everyday chaos into sacred moments",

      benefitsHeader: "How This Journal Will Walk With You",
      benefits: [],
      benefitsBodyMd: "5 Themed Sections  
Each part builds gently from weariness to grace -filled rest:  
1. When the Mess Feels Like a Reflection of Me  
 Theme: Letting Go of Shame and Unrealistic Standards  
 Learn to stop seeing the mess as a reflection of your worth and start 
seeing yourself as Jesus sees you.  
 
2. Breaking Up with Perfection  
 Theme: Choosing Heart Over Image  
 Let go of perfectionism and embrace that God values your heart more than 
appearances.  
 
3. Progress, Not Pinterest  
 Theme: Redefining Success as Faithfulness, Not Flawlessness  
 Celebrate faithfulness in the small, unseen, everyday acts of motherhood.",

      featuresHeader: "Jesus, Crumbs, and the Sacredness of Ordinary",
      features: [],
      featuresBodyMd: "Theme: Finding God in the Everyday Chaos  
 Discover the holy in snack crumbs, bedtime routines, and piles of dishes.",

      targetAudienceHeader: null,
      targetAudience: [],
      targetAudienceBodyMd: null,

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 704,
    },
  });

  // Book 5: Dear Mama, You Are Enough
  await prisma.book.upsert({
    where: { slug: "batch6-b0f6vw9gx6" },
    update: {},
    create: {
      title: "Dear Mama, You Are Enough",
      slug: "batch6-b0f6vw9gx6",
      coverImage: placeholderCover,
      description: "A 6-Week Prayer Journal for Moms to Release Guilt, Embrace Grace, and Find Peace in God’s Love A Faith -Based Devotional for Christian Mothers",
      amazonLink: "https://www.amazon.com/dp/B0F6VW9GX6",

      painPointsHeader: "You’re Not Alone, Mama",
      painPoints: [],
      painPointsBodyMd: "Motherhood is beautiful —but it’s also messy, demanding, and full of self -doubt. If 
you’ve ever felt:  
- Like you’re never doing enough  
- Burdened by guilt or comparison  
- Overwhelmed by expectations or responsibilities  
 
You are not alone.  
This journal reminds you of the truth every mother needs to hear: You are 
enough —not because of what you do, but because of who you are in Christ.",

      introductionHeader: "Meet Your Grace -Filled Companion",
      introduction: null,
      introductionBodyMd: "Dear Mama, You Are Enough is a 6 -week prayer journal designed to:  
- Help you release guilt and stop striving for perfection  
- Encourage you to embrace God’s grace in everyday motherhood  
- Guide you toward peace, rest, and spiritual refreshment  
- Provide reflections, prayers, and creative prompts for self -discovery  
- Create a sacred space to reconnect with God and yourself",

      benefitsHeader: "How This Journal Will Walk With You",
      benefits: [],
      benefitsBodyMd: "This journal gently guides you through six weeks of growth and transformation 
with tools to support your heart and faith:  
- Practical Reflections: Explore your thoughts, feelings, and challenges as a 
mother  
- Guided Prayers: Release guilt and surrender worries to God  
- Creative Activities: Express emotions through writing, drawing, or lists  
- Truth Mirror Pages: See yourself through God’s eyes and replace lies with 
His truth  
- Replay “Mom Moment” Activities: Reflect on real -life parenting challenges 
and grow in perspective  
- Commitment & Bonus Pages: Solidify intentions and apply lessons in 
everyday life",

      featuresHeader: "Tips to Make the Most of This Journal",
      features: [],
      featuresBodyMd: "- Set Aside Consistent Time: Morning, nap time, or evening —create a daily 
or weekly routine  
- Create a Peaceful Space: Find a quiet, distraction -free environment to 
focus on reflection  
- Take Your Time: There’s no rush —journal at your own pace  
- Be Honest: This is a safe space to express your true feelings  
- Use Creative Activities: Draw, write, or make lists to process emotions and 
embrace God’s grace  
- Don’t Skip the Letting Go Prayers: Use these to release burdens and invite 
peace  
- Reflect on Truth Mirror Pages: Internalize God’s perspective on your 
identity and worth  
- Celebrate Progress: Track growth, no matter how small, and embrace the 
journey",

      targetAudienceHeader: "This Journal Is For You If…",
      targetAudience: [],
      targetAudienceBodyMd: "- You feel weighed down by guilt or comparison  
- You struggle with self -doubt in your role as a mother  
- You want a faith -centered tool to nurture peace, rest, and grace  
- You desire reflective prompts, prayers, and creative exercises to grow 
spiritually and emotionally  
- You want to be reminded that God sees, loves, and values you just as you 
are",

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 705,
    },
  });

  // Book 6: Rejoice and Be Thankful!
  await prisma.book.upsert({
    where: { slug: "batch6-b0dwf6bs64" },
    update: {},
    create: {
      title: "Rejoice and Be Thankful!",
      slug: "batch6-b0dwf6bs64",
      coverImage: placeholderCover,
      description: "A Simple Dose of Happiness: A Gratitude & Happiness Journal for Kids Easy and Simple 30 -Day Scriptures and Prayer for Kids ages 8 -12",
      amazonLink: "https://www.amazon.com/dp/B0DWF6BS64",

      painPointsHeader: "Hey There, Happy Kid!",
      painPoints: [],
      painPointsBodyMd: "Life is full of little things to smile about, laugh about, and be thankful for —but 
sometimes we forget to notice them. If you’ve ever thought:  
- “I don’t know what to be thankful for today”  
- “I wish I could remember all the good things”  
- “I want to feel happy and thankful every day”  
 
This journal is for you!  
It’s a fun, simple way to celebrate the joys of every day and remember that 
happiness comes from God.",

      introductionHeader: "Meet Your Daily Happiness Companion",
      introduction: null,
      introductionBodyMd: "Rejoice and Be Thankful! is a 30 -day journal designed to help kids ages 8 –12: 
- Notice God’s blessings in everyday life  
- Reflect on the good things happening around them  
- Connect with God through short prayers  
- Build a habit of gratitude and joy  
- Experience happiness in small, fun steps each day",

      benefitsHeader: "How This Journal Works",
      benefits: [],
      benefitsBodyMd: "Each day, you’ll enjoy:  
- A Short Bible Verse: Something inspiring to guide your heart  
- A Simple Question: Helps you think about the good things in your life  
- A Space to Write: Record your thoughts, feelings, and thankfulness  
- A Quick Prayer Prompt: Talk to God about your day and blessings  
 
It’s easy, quick, and fun —just a few minutes each day to grow closer to God and 
discover the joy in every moment.",

      featuresHeader: "This Journal Is For You If…",
      features: [],
      featuresBodyMd: "- You want a daily dose of happiness and gratitude  
- You love learning about God’s blessings in fun ways  
- You enjoy writing, reflecting, and praying each day  
- You want to feel thankful, happy, and closer to God every day",

      targetAudienceHeader: null,
      targetAudience: [],
      targetAudienceBodyMd: null,

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 706,
    },
  });

  // Book 7: Whispers of Peace
  await prisma.book.upsert({
    where: { slug: "batch6-b0dmnxrw5y" },
    update: {},
    create: {
      title: "Whispers of Peace",
      slug: "batch6-b0dmnxrw5y",
      coverImage: placeholderCover,
      description: "Finding Serenity in Life's Chaos: A Six -Month Christian Journal for Women",
      amazonLink: "https://www.amazon.com/dp/B0DMNXRW5Y",

      painPointsHeader: "Hey, Beautiful Soul",
      painPoints: [],
      painPointsBodyMd: "Life can feel overwhelming. Balancing responsibilities, meeting expectations, and 
navigating challenges can leave your heart heavy and your mind restless. You 
may feel like there’s never a quiet moment to breathe.  
You are not alone.  
This journal is here to be your safe space —a sanctuary where you can pause, 
reflect, and reconnect with God’s peace, even in the middle of life’s chaos.",

      introductionHeader: "Meet Your Peaceful Companion",
      introduction: null,
      introductionBodyMd: "Whispers of Peace is a 6 -month journal designed to help women:  
- Pause and center their hearts in God’s presence  
- Reflect on their thoughts, emotions, and spiritual journey  
- Cultivate calm, hope, and assurance daily  
- Let go of worry, stress, and anxiety through prayer and scripture  
- Explore themes of peace, gratitude, stillness, and faith  
 
This isn’t just a journal —it’s a guided journey toward living serenely, fully, and 
faithfully in every season of life.",

      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "Each month introduces a unique theme to explore:  
- Embracing Stillness: Learning to pause and breathe in God’s presence  
- Letting Go of Anxiety: Releasing worries and surrendering control  
- Cultivating Gratitude: Seeing blessings, even in small moments  
- Nurturing Community: Finding peace in connection with others  
- Strengthening Faith: Drawing on God’s promises and Word  
- Living with Serenity: Bringing calm into everyday routines  
 
You’ll be guided with:  
- Reflective Prompts – Gentle questions to help you explore your heart  
- Practical Exercises – Tools to practice peace in real -life situations  
- Scriptural Encouragement – Verses to anchor your thoughts and 
strengthen faith",

      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "- Step into a calm, faith -filled space every day  
- Reflect honestly on emotions, challenges, and blessings  
- Pray, release, and draw closer to God’s peace  
- Move through monthly themes at your own pace  
- Celebrate small moments of serenity and growth",

      targetAudienceHeader: "This Journal Is For You If…",
      targetAudience: [],
      targetAudienceBodyMd: "- You crave quiet moments in the chaos of life  
- You want to grow closer to God while finding emotional calm  
- You desire practical, faith -based guidance to navigate daily challenges  
- You’re ready to make peace, reflection, and prayer part of your routine",

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 707,
    },
  });

  // Book 8: Clear the Clutter
  await prisma.book.upsert({
    where: { slug: "batch6-b0f6ck54fg" },
    update: {},
    create: {
      title: "Clear the Clutter",
      slug: "batch6-b0f6ck54fg",
      coverImage: placeholderCover,
      description: "Letting Go to Make Room for God’s Best: A 6 -Week Women’s Christian Journal for Heart and Home",
      amazonLink: "https://www.amazon.com/dp/B0F6CK54FG",

      painPointsHeader: "Hey, Beautiful Soul",
      painPoints: [],
      painPointsBodyMd: "Life can feel full —too full. From cluttered counters to cluttered thoughts, from 
emotional baggage to overflowing schedules, it’s easy to feel weighed down. You 
may wonder: “How do I make space for what really matters?”  
You are not alone.  
This journal is your gentle companion for creating space —inside your home, your 
mind, and your heart —so God’s best can take root and flourish.",

      introductionHeader: "Meet Your Decluttering Guide",
      introduction: null,
      introductionBodyMd: "Clear the Clutter is a 6 -week faith -based journal designed to help women:  
- Release physical, emotional, and mental clutter  
- Pause and reflect on what’s truly important  
- Align their hearts with God’s truth and purpose  
- Create lasting habits of letting go and renewal  
- Experience transformation, one drawer, one thought, one prayer at a time  
 
This isn’t about speed or perfection. It’s about a sacred, intentional walk with 
God, decluttering so He can fill the space with His peace, love, and purpose.",

      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "Each week focuses on a specific theme, inviting you to:  
- Reflect on Scripture (KJV) – Anchor your thoughts in God’s truth  
- Mental Prompt – Explore what’s cluttering your mind and heart  
- Material Prompt – Examine physical clutter with spiritual insight  
- Reflection Questions – Gain self -awareness and spiritual clarity  
- Task – Take one small, practical step to create space  
- Creative Space – Doodle, journal, or visually express your journey  
- Letting Go Prayer – Surrender your burdens and invite God’s restoration",

      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "- Six weeks of thoughtful guidance to declutter heart and home  
- Space to reflect, release, and renew at your own pace  
- Prompts and prayers to anchor your life in God’s presence  
- Creative pages to explore your thoughts visually or through words  
- Gentle encouragement to cry, laugh, and experience freedom",

      targetAudienceHeader: "This Journal Is For You If…",
      targetAudience: [],
      targetAudienceBodyMd: "- You feel weighed down by mental, emotional, or physical clutter  
- You want to create intentional space for God’s best in your life  
- You need a faith -centered guide for decluttering both home and heart  
- You’re ready to walk slowly, intentionally, and with purpose toward 
freedom",

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 708,
    },
  });

  // Book 9: Burned -Out Mom to Balanced Mom
  await prisma.book.upsert({
    where: { slug: "batch6-b0f7ltzrf1" },
    update: {},
    create: {
      title: "Burned -Out Mom to Balanced Mom",
      slug: "batch6-b0f7ltzrf1",
      coverImage: placeholderCover,
      description: "Regain Strength Through Faith and Quiet Moments: An 8 -Week Christian Devotional Journal for Moms Seeking Rest, Clarity, and Spiritual Renewal",
      amazonLink: "https://www.amazon.com/dp/B0F7LTZRF1",

      painPointsHeader: "Hey, Mama",
      painPoints: [],
      painPointsBodyMd: "If you’re holding this journal, chances are you’re feeling stretched thin —juggling 
work, home, relationships, and responsibilities with little time left for yourself. 
Burnout may be whispering —or shouting —through your body, mind, and soul.  
You are not alone.  
This 8 -week devotional journal was created for moms like you: women who give 
their all but sometimes forget to pause and let God fill them. Here is your gentle 
invitation to step away from the noise, breathe, and rediscover the balance only 
God can give.",

      introductionHeader: "Meet Your 8 -Week Companion",
      introduction: null,
      introductionBodyMd: "Burned -Out Mom to Balanced Mom is a faith -filled, practical journal designed to 
help you:  
- Pause, reflect, and reconnect with God  
- Explore themes like rest, strength, patience, joy, peace, and wisdom  
- Gain clarity in your heart, mind, and home  
- Replenish your spiritual, emotional, and physical well -being  
- Take small, intentional moments each day for renewal  
 
This isn’t about perfection. It’s about progress, grace, and creating sacred space 
for God to work in your life.",

      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "Each week guides you with:  
- Scripture – A KJV verse to anchor your heart in God’s truth  
- Weekly Overview – Insight and reflection on the week’s theme  
- Daily Prompts – Simple yet intentional spaces to journal your thoughts, 
prayers, and gratitude  
- Reflection Questions – Notice God’s work in your week and your personal 
growth  
- Creative Space – Add notes, prayers, or doodles for expression and clarity  
 
Daily entries include:  
- My Heart Today:  Share your feelings honestly  
- God, I Need You In:  Ask for His guidance in a specific area  
- A Glimpse of Grace:  Record moments of thankfulness or God’s movement  
- My Prayer:  Offer a personal prayer to God",

      featuresHeader: "Weekly Reflection",
      features: [],
      featuresBodyMd: "At the end of each week, pause to:  
- Reflect on what you’ve learned  
- Notice shifts in your thoughts, prayers, or actions  
- Observe how God has worked in your heart  
- Celebrate even the small steps toward balance and renewal",

      targetAudienceHeader: "Be Gentle With Yourself",
      targetAudience: [],
      targetAudienceBodyMd: "This journal is not a to -do list —it’s a sacred space for progress, not perfection. 
Some days you may write a lot, others only a few lines. Both are okay. This 
journey moves at your pace, guided by grace.",

      faithMessageHeader: "Make It Your Own",
      faithMessage: null,
      faithMessageBodyMd: "Add notes, drawings, prayers, or reflections. Revisit previous entries for 
encouragement. This journal is a mirror of your heart and a meeting place with 
God.",

      featured: false,
      order: 709,
    },
  });

  // Book 10: Whispers of Gratitude
  await prisma.book.upsert({
    where: { slug: "batch6-b0dqglzhfr" },
    update: {},
    create: {
      title: "Whispers of Gratitude",
      slug: "batch6-b0dqglzhfr",
      coverImage: placeholderCover,
      description: "Gratitude Journal for Women: A 6 -Month Guided Journal, Embracing Blessings in Every Season",
      amazonLink: "https://www.amazon.com/dp/B0DQGLZHFR",

      painPointsHeader: "Hey, Beautiful Soul",
      painPoints: [],
      painPointsBodyMd: "Life moves fast, and it’s easy to forget the quiet blessings tucked into each day. 
Whispers of Gratitude  is here to help you pause, breathe, and notice the ways 
God is at work in your life. This is your sacred space to reflect, pray, and embrace 
the many gifts God gives —whether in seasons of joy, challenge, or rest.",

      introductionHeader: "Meet Your 6 -Month Companion",
      introduction: null,
      introductionBodyMd: "Whispers of Gratitude is a gentle, faith -centered journal designed to help you:  
- Cultivate a heart of gratitude  
- Deepen your walk with God  
- Reflect on daily blessings with intention  
- Find peace and joy even in challenging seasons  
- Track your growth in faith and thankfulness  
 
Each month focuses on a unique theme —grace, guidance, protection, love —and 
invites you to slow down and notice God’s goodness in every season.",

      benefitsHeader: "How This Journal Will Support You",
      benefits: [],
      benefitsBodyMd: "Inside, you’ll find:  
- Monthly Themes – Center your heart on different aspects of God’s 
goodness  
- Weekly Scripture – Verses that guide your reflection for the month  
- Daily Prompts – Gentle questions to cultivate gratitude in your thoughts, 
prayers, and actions  
- Reflection Spaces – Room to journal your experiences, insights, and 
prayers  
- Personal Prayer Pages – Opportunities to speak to God freely and honestly  
 
Daily entries guide you to:  
- Pause and reflect on the blessings of the day  
- Connect with God through scripture and prayer  
- Journal honestly about your experiences and emotions  
- Practice gratitude even in small, ordinary moments",

      featuresHeader: "Why This Journal is For You",
      features: [],
      featuresBodyMd: "- Women seeking to deepen their faith and gratitude practice  
- Anyone wanting to pause, slow down, and notice everyday blessings  
- Those navigating busy seasons and needing a gentle, faith -centered reset  
- Anyone longing for a personal, sacred space for prayer, reflection, and 
journaling",

      targetAudienceHeader: "Inside These Pages",
      targetAudience: [],
      targetAudienceBodyMd: "- Month -by-Month Themes – Focus your gratitude on God’s work in different 
areas of life  
- Weekly Scripture & Reflection Prompts – Anchor your heart and meditate 
on God’s goodness  
- Daily Journaling – Record blessings, prayers, and thoughts  
- Ample Writing Space – Give your heart room to explore, express, and grow",

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 710,
    },
  });

  // Book 11: A Book About You
  await prisma.book.upsert({
    where: { slug: "batch6-b0f1lhylkn" },
    update: {},
    create: {
      title: "A Book About You",
      slug: "batch6-b0f1lhylkn",
      coverImage: placeholderCover,
      description: "Stories From Those Who Love You – A Friendship Keepsake Journal",
      amazonLink: "https://www.amazon.com/dp/B0F1LHYLKN",

      painPointsHeader: "Hey, Friend -Lover",
      painPoints: [],
      painPointsBodyMd: "Everyone has a story worth celebrating —and yours is no exception! A Book 
About You  is a keepsake journal that transforms into a priceless collection of 
memories, laughter, and love, told by the people who know you best. It’s more 
than a gift —it’s a treasure that captures the heart of your friendships and the 
magic of shared experiences.",

      introductionHeader: "Meet Your Friendship Journal",
      introduction: null,
      introductionBodyMd: "This guided journal is thoughtfully designed to:  
- Celebrate the people you love and the memories you share  
- Capture stories, impressions, and heartfelt messages from friends  
- Create a keepsake that becomes more meaningful over time  
- Provide a creative, interactive space for doodles, photos, and reflections  
 
Each page allows a friend to tell a part of your story, adding laughter, love, and 
personal touches that make this a one -of-a-kind gift.",

      benefitsHeader: "How to Use This Journal",
      benefits: [],
      benefitsBodyMd: "1. Pass it Around – Share the book with friends, family, and loved ones.  
 
2. Fill in the Prompts – Each person writes, draws, or adds photos on their 
page. Fun, heartfelt prompts guide their reflections.  
 
3. Collect Memories – Watch as the book fills with stories, advice, and love 
notes.",

      featuresHeader: "Treasure it Forever – When completed, this book becomes a cherished",
      features: [],
      featuresBodyMd: "keepsake full of joy, encouragement, and shared history.  
 
 
4. Why This Book is Perfect  
- Ideal for birthdays, milestones, or “just because” gifts  
- Creates a lasting record of your friendships and shared memories  
- A fun, interactive way for friends to celebrate the amazing person you are  
- A source of encouragement, smiles, and warmth every time it’s opened",

      targetAudienceHeader: "Inside These Pages",
      targetAudience: [],
      targetAudienceBodyMd: "- Guided Prompts – Thoughtful questions to capture memories, lessons, and 
laughter  
- Creative Spaces – Add doodles, photos, and personal touches for a unique 
keepsake  
- Friendship Stories – Each page tells a piece of your story through the eyes 
of someone who loves you  
- A Treasure to Keep – A heartfelt collection that grows more meaningful 
over time",

      faithMessageHeader: null,
      faithMessage: null,
      faithMessageBodyMd: null,

      featured: false,
      order: 711,
    },
  });

  // Book 12: I Feel So Alone
  await prisma.book.upsert({
    where: { slug: "batch6-b0f8mtr5zz" },
    update: {},
    create: {
      title: "I Feel So Alone",
      slug: "batch6-b0f8mtr5zz",
      coverImage: placeholderCover,
      description: "Overcoming the Silent Struggles of Motherhood: An 8 -Week Prayer Journal for Stay -at-Home Moms",
      amazonLink: "https://www.amazon.com/dp/B0F8MTR5ZZ",

      painPointsHeader: "You’re Not Really Alone, Mama",
      painPoints: [],
      painPointsBodyMd: "Being a stay -at-home mom can be beautiful, but it can also feel incredibly 
isolating. You pour your heart into your family —nurturing, teaching, cleaning, 
organizing —but sometimes it seems like no one notices, and no one truly 
understands the silent struggl es you carry. The quiet of an empty house, the 
endless demands of children, and the pressure to “have it all together” can leave 
your heart heavy and lonely.  
Here’s the truth: You are not alone. God sees you, knows your heart, and is 
walking with you through every sleepless night, every overwhelmed moment, and 
every quiet sigh.",

      introductionHeader: "Meet Your Sacred Companion",
      introduction: null,
      introductionBodyMd: "I Feel So Alone  is an 8 -week guided prayer journal specifically designed for stay -
at-home moms who need rest, peace, and God’s presence. Through scripture, 
reflection questions, guided prayers, and gentle weekly activities, this journal 
helps you:  
- Connect with God in the quiet moments  
- Reflect on your feelings of loneliness, overwhelm, and self -doubt  
- Discover rest, reassurance, and renewed strength  
- Celebrate small victories and spiritual growth  
 
This journal is not about adding tasks to your day —it’s about creating space to 
breathe, reflect, and experience God’s love in the midst of motherhood’s 
busyness.",

      benefitsHeader: "How This Journal Supports You",
      benefits: [],
      benefitsBodyMd: "- Guided Scripture & Reflection – Each week, a scripture anchors your 
reflections, giving God’s truth a place to settle in your heart.  
- Thoughtful Journaling Prompts – Explore your emotions, challenges, and 
victories with honesty and grace.  
- Practical Weekly Activities – Apply what you’ve reflected on through 
mindfulness, gratitude, prayer, or creative exercises.  
- Weekly Summary & Celebration – Pause at the end of each week to note 
growth, insights, and God’s presence in your journey.",

      featuresHeader: "Inside These Pages",
      features: [],
      featuresBodyMd: "Weekly Structure:  
1. Begin with Prayer – Invite God into your time and ask Him to meet your 
heart where you are.  
 
2. Read Scripture – Meditate on a verse chosen for the week’s theme.  
 
3. Reflect & Journal – Use guided prompts to explore your thoughts, feelings, 
and faith.  
 
4. Weekly Activity – Engage in a practical or creative exercise to deepen your 
connection with God.",

      targetAudienceHeader: "Reflection & Summary – Capture insights, progress, and prayer intentions.",
      targetAudience: [],
      targetAudienceBodyMd: "This rhythm creates a gentle, intentional journey toward peace, clarity, and 
spiritual renewal.  
 
5. This Journal is for You If…  
- You’re a stay -at-home mom feeling isolated, exhausted, or invisible  
- You want to connect with God in the midst of daily demands  
- You desire a structured, faith -centered way to reflect, pray, and find peace  
- You need encouragement, hope, and assurance that your work and love 
matter",

      faithMessageHeader: "Step Into Peace, Strength, and Rest",
      faithMessage: null,
      faithMessageBodyMd: "Take a moment for yourself. Breathe. Release the guilt, the pressure, and the 
weight of expectations. Each page of this journal is a safe, sacred space where 
God’s love meets your heart, where your feelings are valid, and where your 
journey is honored.  
Over the next 8 weeks, may you discover that:  
- You are seen.  
- You are valued.  
- You are doing an incredible job.  
- God is with you, always.",

      featured: false,
      order: 712,
    },
  });

  console.log("🎉 Seed7 completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed7 failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
