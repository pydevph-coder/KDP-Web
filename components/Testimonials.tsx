interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  imageUrl?: string | null;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background-2 to-background-1">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-16">
          What Readers Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {testimonial.imageUrl && (
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-text-primary font-semibold">
                    — {testimonial.name}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-text-primary/80 italic leading-relaxed">
                {`“${testimonial.text}”`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

