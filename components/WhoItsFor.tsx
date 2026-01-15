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

        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 lg:p-5 text-center shadow-sm sm:shadow-md md:hover:shadow-lg transition-all duration-300 transform md:hover:-translate-y-1 active:scale-95"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 md:mb-3">{audience.icon}</div>
              <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-text-primary mb-1 sm:mb-1.5 md:mb-2">
                {audience.title}
              </h3>
              <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-text-primary/70 leading-tight">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

