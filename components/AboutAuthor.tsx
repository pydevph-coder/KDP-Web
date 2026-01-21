import Image from 'next/image';

interface Author {
  id: string;
  name: string;
  bio: string;
  photo?: string | null;
  credentials?: string | null;
}

interface AboutAuthorProps {
  author: Author;
}

export default function AboutAuthor({ author }: AboutAuthorProps) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-8 sm:mb-12 md:mb-16">
          About the Author
        </h2>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
          {author.photo && (
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src={author.photo}
                  alt={author.name}
                  width={256}
                  height={256}
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 256px"
                />
              </div>
            </div>
          )}

          <div className="flex-1 text-center md:text-left px-2 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              {author.name}
            </h3>
            {author.credentials && (
              <p className="text-base sm:text-lg text-primary-1 font-semibold mb-3 sm:mb-4">
                {author.credentials}
              </p>
            )}
            {author.bio.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-text-primary/70 leading-relaxed text-left md:text-justify mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}