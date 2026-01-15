export default function WhyTheseBooks() {
  const features = [
    {
      title: 'Faith-Based',
      description: 'Rooted in biblical principles and Christian values to guide your spiritual growth.',
      icon: '📖',
    },
    {
      title: 'Mental Wellness',
      description: 'Designed to support your emotional and mental health through faith-centered practices.',
      icon: '💚',
    },
    {
      title: 'Guided Journaling',
      description: 'Structured prompts and exercises to help you reflect, pray, and grow deeper.',
      icon: '✍️',
    },
    {
      title: 'Expert Guidance',
      description: 'Written by a licensed guidance counselor with years of experience helping others.',
      icon: '🎓',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-3 sm:mb-4">
          Why These Books
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-text-primary/70 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-2">
          Each book is carefully crafted to support your journey of faith and wellness.
        </p>

        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-1.5 sm:gap-2 p-2 sm:p-3 md:p-4 lg:p-5 bg-background-1 rounded-md sm:rounded-lg md:rounded-xl md:hover:shadow-lg transition-all duration-300 active:scale-95 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex-shrink-0 mx-auto">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-text-primary mb-1 sm:mb-1.5 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-text-primary/70 leading-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

