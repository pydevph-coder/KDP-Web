export default function WhoItsFor() {
  const targetAudiences = [
    {
      title: 'Moms',
      description: 'Find peace and strength in your daily walk with God while balancing motherhood.',
      icon: '👩',
    },
    {
      title: 'Teens',
      description: "Navigate life\u2019s challenges with faith-based guidance and journaling.",
      icon: '👧',
    },
    {
      title: 'Christians',
      description: 'Deepen your relationship with God through intentional reflection and prayer.',
      icon: '✝️',
    },
    {
      title: 'Mentors',
      description: 'Equip yourself with tools to guide others on their spiritual journey.',
      icon: '🤝',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-background-1 to-background-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-3 sm:mb-4">
          {'Who It\u2019s For'}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-text-primary/70 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto px-2">
          These books are designed for anyone seeking to grow in faith and find peace in their daily lives.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 text-center shadow-md sm:shadow-lg md:hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-2 active:scale-95"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 md:mb-4">{audience.icon}</div>
              <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-text-primary mb-1 sm:mb-2 md:mb-3">
                {audience.title}
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-text-primary/70">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

