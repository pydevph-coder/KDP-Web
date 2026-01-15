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
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-background-2 to-background-1">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-8 sm:mb-12 md:mb-16">
          What Readers Are Saying
        </h2>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-md sm:shadow-lg md:hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 active:scale-95 flex flex-col"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                {testimonial.imageUrl && (
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover"
                      sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="flex gap-0.5 sm:gap-1 mb-1 justify-center sm:justify-start">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm sm:text-base md:text-lg lg:text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-text-primary font-semibold truncate">
                    — {testimonial.name}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-text-primary/80 italic leading-relaxed">
                {`"${testimonial.text}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

