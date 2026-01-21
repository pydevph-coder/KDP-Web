import json
import re
from pathlib import Path


def main() -> None:
    src = Path("tmp_books_details_6.txt")
    s = src.read_text(encoding="utf-8")

    # Split into books by "Amazon Link:"
    chunks = re.split(r"\n\s*Amazon Link:\s*", s)
    books = []

    for i in range(1, len(chunks)):
        pre = chunks[i - 1]
        post = chunks[i]

        url = post.split()[0].strip()
        asin = url.rsplit("/", 1)[-1]
        body = post[len(url) :].strip()

        # Title/subtitle: take the last blank-line separated block before the Amazon link
        pre_blocks = re.split(r"\n\s*\n", pre.strip())
        header_lines = pre_blocks[-1].splitlines() if pre_blocks else []
        header_lines = [h.strip() for h in header_lines if h.strip()]

        title = header_lines[0] if header_lines else f"Book {asin}"
        subtitle_lines = header_lines[1:4]

        # Parse TOP-LEVEL numbered sections only: lines like "\n\n1. Header\n"
        # Some books contain nested numbering inside a section (e.g. "1. When I Feel Lost...")
        # so we require the section marker to be preceded by a blank line.
        sec_pat = re.compile(r"\n\s*\n\s*(\d)\.\s+([^\n]+)\n")
        b = "\n" + body  # ensure leading newline for regex
        matches = [m for m in sec_pat.finditer(b) if 1 <= int(m.group(1)) <= 7]

        sections = []
        for idx, m in enumerate(matches):
            num = int(m.group(1))
            head = m.group(2).strip()
            start = m.end()
            end = matches[idx + 1].start() if idx + 1 < len(matches) else len(b)
            content = b[start:end].strip()

            # Normalize common bullets to markdown '- '
            content = re.sub(r"^\s*[•●]\s*", "- ", content, flags=re.M)

            # Normalize common emoji bullets to markdown '- '
            content = re.sub(r"^\s*[🕊📖🤍🙏✍️]\s*", "- ", content, flags=re.M)

            sections.append({"num": num, "header": head, "content": content})

        books.append(
            {
                "asin": asin,
                "url": url,
                "title": title,
                "subtitle": subtitle_lines,
                "sections": sections,
            }
        )

    Path("tmp_books_details_6_parsed.json").write_text(
        json.dumps(books, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"books {len(books)} -> tmp_books_details_6_parsed.json")


if __name__ == "__main__":
    main()


