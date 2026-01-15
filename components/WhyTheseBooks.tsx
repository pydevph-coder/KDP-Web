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

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 lg:p-8 bg-background-1 rounded-lg sm:rounded-xl md:rounded-2xl md:hover:shadow-xl transition-all duration-300 active:scale-95 text-center sm:text-left"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0 mx-auto sm:mx-0">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-text-primary mb-1 sm:mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-text-primary/70 leading-relaxed">
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

