import Image from 'next/image';

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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-background-2 to-background-1">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-8 sm:mb-12 md:mb-16">
          What Readers Are Saying
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                {testimonial.imageUrl && (
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                      sizes="(max-width: 640px) 48px, 56px"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex gap-0.5 sm:gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-text-primary font-semibold truncate">
                    — {testimonial.name}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-text-primary/80 italic leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

