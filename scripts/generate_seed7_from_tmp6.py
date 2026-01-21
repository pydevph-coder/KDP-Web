import re
from pathlib import Path


def slugify_from_asin(asin: str) -> str:
    return f"batch6-{asin.lower()}"


def esc_ts(s: str) -> str:
    # minimal TS string escape for template literals via JSON-ish escaping
    return (
        s.replace("\\", "\\\\")
        .replace("`", "\\`")
        .replace("${", "\\${")
    )


def ts_str_or_null(val: str | None) -> str:
    if not val:
        return "null"
    return '"' + esc_ts(val) + '"'


def extract_section(body: str, n: int) -> tuple[str | None, str | None]:
    """
    Extract section header+content for section n using markers like:
      1. Header
      ...content...
      2. Next header
    """
    next_n = n + 1
    # normalize line endings
    b = body.replace("\r\n", "\n").replace("\r", "\n")
    # match header on same line as "n."
    if next_n <= 7:
        pat = re.compile(
            rf"(?ms)^\s*{n}\.\s*(?P<header>[^\n]+?)\s*$\n(?P<content>.*?)(?=^\s*{next_n}\.\s)",
        )
    else:
        pat = re.compile(
            rf"(?ms)^\s*{n}\.\s*(?P<header>[^\n]+?)\s*$\n(?P<content>.*)$",
        )
    m = pat.search(b)
    if not m:
        return None, None

    header = m.group("header").strip()
    content = m.group("content").strip()

    # Normalize some bullet glyphs into markdown list items
    content = re.sub(r"^\s*[•●]\s*", "- ", content, flags=re.M)
    content = re.sub(r"^\s*[🕊📖🤍🙏✍️]\s*", "- ", content, flags=re.M)
    return header, content


def main() -> None:
    src = Path("tmp_books_details_6.txt")
    s = src.read_text(encoding="utf-8")

    # Split by "Amazon Link:"
    chunks = re.split(r"\n\s*Amazon Link:\s*", s)
    books: list[dict] = []

    for i in range(1, len(chunks)):
        pre = chunks[i - 1]
        post = chunks[i]

        url = post.split()[0].strip()
        asin = url.rsplit("/", 1)[-1]
        body = post[len(url) :].strip()

        # Title/subtitle: last blank-line separated block before Amazon Link
        pre_blocks = re.split(r"\n\s*\n", pre.strip())
        header_lines = pre_blocks[-1].splitlines() if pre_blocks else []
        header_lines = [h.strip() for h in header_lines if h.strip()]
        title = header_lines[0] if header_lines else f"Book {asin}"
        subtitle = " ".join(header_lines[1:4]).strip() if len(header_lines) > 1 else ""

        s1h, s1 = extract_section(body, 1)
        s2h, s2 = extract_section(body, 2)
        s3h, s3 = extract_section(body, 3)
        s4h, s4 = extract_section(body, 4)
        s5h, s5 = extract_section(body, 5)
        s6h, s6 = extract_section(body, 6)

        books.append(
            {
                "asin": asin,
                "url": url,
                "slug": slugify_from_asin(asin),
                "title": title,
                "subtitle": subtitle,
                "s1h": s1h,
                "s1": s1,
                "s2h": s2h,
                "s2": s2,
                "s3h": s3h,
                "s3": s3,
                "s4h": s4h,
                "s4": s4,
                "s5h": s5h,
                "s5": s5,
                "s6h": s6h,
                "s6": s6,
            }
        )

    # Emit seed7.ts
    out: list[str] = []
    out.append('import { PrismaClient } from "@prisma/client";')
    out.append("")
    out.append("const prisma = new PrismaClient();")
    out.append("")
    out.append("async function main() {")
    out.append('  console.log("🌱 Starting seed7...");')
    out.append('  const placeholderCover = "/images/placeholder-book-cover.jpg";')
    out.append("")

    base_order = 700
    for idx, b in enumerate(books, start=1):
        order = base_order + idx
        out.append(f"  // Book {idx}: {esc_ts(b['title'])}")
        out.append("  await prisma.book.upsert({")
        out.append(f'    where: {{ slug: "{b["slug"]}" }},')
        out.append("    update: {},")
        out.append("    create: {")
        out.append(f'      title: "{esc_ts(b["title"])}",')
        out.append(f'      slug: "{b["slug"]}",')
        out.append("      coverImage: placeholderCover,")
        desc = b["subtitle"] or b["title"]
        out.append(f'      description: "{esc_ts(desc)}",')
        out.append(f'      amazonLink: "{b["url"]}",')
        out.append("")
        out.append(f"      painPointsHeader: {ts_str_or_null(b['s1h'])},")
        out.append("      painPoints: [],")
        out.append(f"      painPointsBodyMd: {ts_str_or_null(b['s1'])},")
        out.append("")
        out.append(f"      introductionHeader: {ts_str_or_null(b['s2h'])},")
        out.append("      introduction: null,")
        out.append(f"      introductionBodyMd: {ts_str_or_null(b['s2'])},")
        out.append("")
        out.append(f"      benefitsHeader: {ts_str_or_null(b['s3h'])},")
        out.append("      benefits: [],")
        out.append(f"      benefitsBodyMd: {ts_str_or_null(b['s3'])},")
        out.append("")
        out.append(f"      featuresHeader: {ts_str_or_null(b['s4h'])},")
        out.append("      features: [],")
        out.append(f"      featuresBodyMd: {ts_str_or_null(b['s4'])},")
        out.append("")
        out.append(f"      targetAudienceHeader: {ts_str_or_null(b['s5h'])},")
        out.append("      targetAudience: [],")
        out.append(f"      targetAudienceBodyMd: {ts_str_or_null(b['s5'])},")
        out.append("")
        out.append(f"      faithMessageHeader: {ts_str_or_null(b['s6h'])},")
        out.append("      faithMessage: null,")
        out.append(f"      faithMessageBodyMd: {ts_str_or_null(b['s6'])},")
        out.append("")
        out.append("      featured: false,")
        out.append(f"      order: {order},")
        out.append("    },")
        out.append("  });")
        out.append("")

    out.append('  console.log("🎉 Seed7 completed successfully!");')
    out.append("}")
    out.append("")
    out.append("main()")
    out.append("  .catch((e) => {")
    out.append('    console.error("❌ Seed7 failed:", e);')
    out.append("    process.exit(1);")
    out.append("  })")
    out.append("  .finally(async () => {")
    out.append("    await prisma.$disconnect();")
    out.append("  });")
    out.append("")

    Path("prisma/seed7.ts").write_text("\n".join(out), encoding="utf-8")
    print(f"wrote prisma/seed7.ts with {len(books)} books")


if __name__ == "__main__":
    main()