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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 active:scale-95"
            >
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{audience.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2 sm:mb-3">
                {audience.title}
              </h3>
              <p className="text-sm sm:text-base text-text-primary/70">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

