import Image from 'next/image';
import React from 'react';

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

/**
 * Parse inline markdown highlights (**text**) into JSX
 */
function parseInlineHighlights(text: string): (string | JSX.Element)[] {
  const parts: (string | JSX.Element)[] = [];
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    parts.push(
      <span key={key++} className="text-primary-1 font-semibold">
        {match[1]}
      </span>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length ? parts : [text];
}

function parseBioMarkdown(bio: string): JSX.Element[] {
  const lines = bio.split('\n');
  const elements: JSX.Element[] = [];

  let listBuffer: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listBuffer.length) {
      elements.push(
        <ul
          key={key++}
          className="list-disc pl-6 mb-4 text-text-primary/70 text-base sm:text-lg text-left"
        >
          {listBuffer.map((item, i) => (
            <li key={i}>{parseInlineHighlights(item)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  lines.forEach(line => {
    const trimmed = line.trim();

    // List item detection (robust)
    if (/^-\s+/.test(trimmed)) {
      listBuffer.push(trimmed.replace(/^-\s+/, ''));
    } else if (trimmed === '') {
      flushList();
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          className="mb-4 text-base sm:text-lg text-text-primary/70 leading-relaxed text-justify"
        >
          {parseInlineHighlights(trimmed)}
        </p>
      );
    }
  });

  flushList();

  return elements;
}

export default function AboutAuthor({ author }: AboutAuthorProps) {
  const bioContent = parseBioMarkdown(author.bio);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white"
    >
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
              <p className="text-base sm:text-lg text-primary-1 font-semibold mb-4">
                {author.credentials}
              </p>
            )}

            <div>
              {bioContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
