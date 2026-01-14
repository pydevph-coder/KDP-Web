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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-4">
          Why These Books
        </h2>
        <p className="text-xl text-center text-text-primary/70 mb-16 max-w-3xl mx-auto">
          Each book is carefully crafted to support your journey of faith and wellness.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-6 p-8 bg-background-1 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-primary/70 leading-relaxed">
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

