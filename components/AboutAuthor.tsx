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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary mb-16">
          About the Author
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {author.photo && (
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src={author.photo}
                  alt={author.name}
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-text-primary mb-2">
              {author.name}
            </h3>
            {author.credentials && (
              <p className="text-primary-1 font-semibold mb-4">
                {author.credentials}
              </p>
            )}
            <p className="text-lg text-text-primary/70 leading-relaxed">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

