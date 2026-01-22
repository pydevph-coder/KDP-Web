import React from "react";

type Props = {
  content: string;
  className?: string;
  listVariant?: 'bullet' | 'checkmark' | 'arrow'; // Custom marker style
};

function parseInline(text: string): React.ReactNode[] {
  // Supports **bold** and *italic* (simple, non-nested).
  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < text.length) {
    const boldStart = text.indexOf("**", i);
    const italicStart = text.indexOf("*", i);

    const next = [boldStart === -1 ? Infinity : boldStart, italicStart === -1 ? Infinity : italicStart].sort(
      (a, b) => a - b
    )[0];

    if (next === Infinity) {
      nodes.push(text.slice(i));
      break;
    }

    if (next > i) {
      nodes.push(text.slice(i, next));
      i = next;
    }

    // Bold
    if (text.startsWith("**", i)) {
      const end = text.indexOf("**", i + 2);
      if (end !== -1) {
        const inner = text.slice(i + 2, end);
        nodes.push(
          <strong key={`b-${i}`} className="font-semibold text-text-primary">
            {inner}
          </strong>
        );
        i = end + 2;
        continue;
      }
    }

    // Italic
    if (text.startsWith("*", i)) {
      const end = text.indexOf("*", i + 1);
      if (end !== -1) {
        const inner = text.slice(i + 1, end);
        nodes.push(
          <em key={`i-${i}`} className="italic">
            {inner}
          </em>
        );
        i = end + 1;
        continue;
      }
    }

    // Fallback if unmatched marker
    nodes.push(text[i]);
    i += 1;
  }

  return nodes;
}

function isUnordered(line: string) {
  return /^(\-|\*|•|●)\s+/.test(line);
}

function isOrdered(line: string) {
  return /^\d+[.)]\s+/.test(line);
}

function stripListPrefix(line: string) {
  return line
    .replace(/^(\-|\*|•|●)\s+/, "")
    .replace(/^\d+[.)]\s+/, "")
    .trim();
}

export default function MarkdownContent({ content, className, listVariant = 'bullet' }: Props) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");

  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    // Skip empty lines
    while (i < lines.length && lines[i].trim() === "") i++;
    if (i >= lines.length) break;

    const line = lines[i].trim();

    // Headings (#, ##, ###)
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const Tag = level === 1 ? "h2" : level === 2 ? "h3" : "h4";
      blocks.push(
        <Tag key={`h-${i}`} className="font-bold text-text-primary">
          {parseInline(text)}
        </Tag>
      );
      i++;
      continue;
    }

    // Unordered list - styled with primary color markers
    if (isUnordered(line)) {
      const items: string[] = [];
      while (i < lines.length && isUnordered(lines[i].trim())) {
        items.push(stripListPrefix(lines[i].trim()));
        i++;
      }
      
      // Render marker based on variant
      const renderMarker = () => {
        if (listVariant === 'checkmark') {
          return (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-1 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          );
        } else if (listVariant === 'arrow') {
          return <span className="text-primary-1 text-xl sm:text-2xl flex-shrink-0 mt-1">→</span>;
        } else {
          // Default: bullet
          return <span className="text-primary-1 text-xl sm:text-2xl flex-shrink-0 mt-1">•</span>;
        }
      };
      
      blocks.push(
        <ul key={`ul-${i}`} className="space-y-3 sm:space-y-4">
          {items.map((t, idx) => (
            <li key={idx} className="flex items-start gap-3 sm:gap-4">
              {renderMarker()}
              <span className="text-base sm:text-lg md:text-xl text-text-primary/90 leading-relaxed">
                {parseInline(t)}
              </span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list - styled with primary color
    if (isOrdered(line)) {
      const items: string[] = [];
      while (i < lines.length && isOrdered(lines[i].trim())) {
        items.push(stripListPrefix(lines[i].trim()));
        i++;
      }
      blocks.push(
        <ol key={`ol-${i}`} className="space-y-3 sm:space-y-4">
          {items.map((t, idx) => (
            <li key={idx} className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary-1 text-base sm:text-lg md:text-xl font-semibold flex-shrink-0">{idx + 1}.</span>
              <span className="text-base sm:text-lg md:text-xl text-text-primary/90 leading-relaxed">
                {parseInline(t)}
              </span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph: collect until blank line
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() !== "") {
      para.push(lines[i].trim());
      i++;
    }
    const paragraphText = para.join(" ");
    blocks.push(
      <p key={`p-${i}`} className="text-base sm:text-lg md:text-xl text-text-primary/80 leading-relaxed">
        {parseInline(paragraphText)}
      </p>
    );
  }

  return <div className={className ?? ""}>{blocks}</div>;
}


