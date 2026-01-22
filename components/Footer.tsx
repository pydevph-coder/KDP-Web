import { getAuthor } from "@/lib/prisma";
import type { Author } from "@prisma/client";
// Twitter Icon
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 4.56c-.88.39-1.83.65-2.82.77 1.01-.61 1.78-1.57 2.14-2.72-.95.57-2.01.98-3.14 1.2-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.12 1.12C7.69 8.09 4.07 6.13 1.64 3.16c-.43.74-.67 1.6-.67 2.52 0 1.74.88 3.28 2.21 4.18-.82-.03-1.59-.25-2.26-.62v.06c0 2.43 1.73 4.46 4.03 4.91-.42.11-.87.17-1.33.17-.33 0-.65-.03-.97-.09.65 2.03 2.55 3.5 4.8 3.54-1.76 1.38-3.97 2.2-6.38 2.2-.41 0-.81-.02-1.21-.07 2.27 1.46 4.96 2.31 7.85 2.31 9.41 0 14.56-7.8 14.56-14.57 0-.22-.01-.44-.02-.66.99-.72 1.84-1.62 2.52-2.64z"/>
  </svg>
);

// Facebook Icon
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
  </svg>
);

// Pinterest Icon
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 4.9 2.94 9.11 7.15 10.98-.1-.93-.19-2.36.04-3.38.21-.93 1.35-5.93 1.35-5.93s-.34-.68-.34-1.69c0-1.58.92-2.76 2.07-2.76.98 0 1.45.73 1.45 1.61 0 .98-.62 2.44-.94 3.79-.26 1.13.56 2.05 1.66 2.05 1.99 0 3.52-2.1 3.52-5.13 0-2.68-1.93-4.56-4.69-4.56-3.2 0-5.08 2.4-5.08 4.88 0 .97.37 2.01.84 2.58a.34.34 0 01.08.32c-.09.35-.3 1.13-.34 1.29-.05.21-.18.26-.41.16-1.53-.71-2.49-2.94-2.49-4.74 0-3.86 2.81-7.41 8.11-7.41 4.26 0 7.58 3.04 7.58 7.11 0 4.25-2.68 7.67-6.39 7.67-1.25 0-2.42-.65-2.82-1.41l-.77 2.92c-.28 1.07-1.04 2.42-1.55 3.24C9.68 23.84 10.82 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
  </svg>
);

// Instagram Icon
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 011.675 1.005 4.92 4.92 0 011.005 1.675c.163.457.347 1.257.403 2.427.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.005 1.675 4.92 4.92 0 01-1.675 1.005c-.457.163-1.257.347-2.427.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.056-1.97-.24-2.427-.403a4.902 4.902 0 01-1.675-1.005 4.902 4.902 0 01-1.005-1.675c-.163-.457-.347-1.257-.403-2.427-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.17.24-1.97.403-2.427a4.902 4.902 0 011.005-1.675 4.902 4.902 0 011.675-1.005c.457-.163 1.257-.347 2.427-.403 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.78.13 4.736.312 3.85.644 2.96.976 2.202 1.42 1.513 2.11c-.689.689-1.134 1.447-1.466 2.337-.332.886-.514 1.93-.572 3.202C-.013 8.332 0 8.756 0 12c0 3.244.013 3.668.072 4.948.058 1.272.24 2.316.572 3.202.332.89.777 1.648 1.466 2.337.689.689 1.447 1.134 2.337 1.466.886.332 1.93.514 3.202.572 1.28.059 1.704.072 4.948.072s3.668-.013 4.948-.072c1.272-.058 2.316-.24 3.202-.572.89-.332 1.648-.777 2.337-1.466.689-.689 1.134-1.447 1.466-2.337.332-.886.514-1.93.572-3.202.059-1.28.072-1.704.072-4.948s-.013-3.668-.072-4.948c-.058-1.272-.24-2.316-.572-3.202a5.833 5.833 0 00-1.466-2.337 5.833 5.833 0 00-2.337-1.466c-.886-.332-1.93-.514-3.202-.572C15.668.013 15.244 0 12 0z"/>
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
    <circle cx="18.406" cy="5.594" r="1.44"/>
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.54V9h3.54v11.45zM5.31 7.52c-1.13 0-2.05-.93-2.05-2.08 0-1.15.92-2.08 2.05-2.08 1.13 0 2.05.93 2.05 2.08 0 1.15-.92 2.08-2.05 2.08zM20.45 20.45h-3.54v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.93v5.67h-3.54V9h3.4v1.56h.05c.47-.89 1.61-1.83 3.32-1.83 3.55 0 4.2 2.34 4.2 5.38v6.34z"/>
  </svg>
);

// Amazon Icon

// Amazon Icon (official-style)
const AmazonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
    <path d="M257.2 162.7c-48.7 0-75.7 37.2-75.7 89.7 0 39.7 22.5 79.5 63.8 79.5 25.8 0 48.4-17.1 59.7-43.5v29.7c0 6.2 5 11.2 11.2 11.2h40.7c6.2 0 11.2-5 11.2-11.2V226c0-60.5-25.7-99.3-110.4-99.3-44.7 0-77.2 14.8-93.4 52.4-2.2 5.2.5 11.1 5.8 12.9l39.3 13c5.1 1.7 10.7-1 12.5-6 7.3-19.6 21.3-29.1 44.2-29.1 24.5 0 38.6 14.6 38.6 41.8v7z"/>
    <path d="M392.6 354.3c-4.4-3.3-12.8-1.6-18.1.3-19.8 6.9-48.8 16.1-81.8 16.1-74.3 0-141.1-39.6-170.3-106.1-2.2-5-7.9-6.9-12.7-4.3l-26.7 15.4c-4.5 2.6-6.1 8.2-3.8 12.9C114.1 368.3 186.3 416 276.1 416c40.2 0 84.9-10.5 116.4-30.4 4.6-2.9 4.9-8.7.1-11.3z"/>
  </svg>
);


export default async function Footer() {
  const author: Author | null = await getAuthor();

  if (!author) return null;

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Twitter", href: author.twitter?.startsWith("http") ? author.twitter : author.twitter && `https://${author.twitter}`, icon: TwitterIcon },
    { name: "Facebook", href: author.facebook?.startsWith("http") ? author.facebook : author.facebook && `https://${author.facebook}`, icon: FacebookIcon },
    { name: "Instagram", href: author.instagram?.startsWith("http") ? author.instagram : author.instagram && `https://${author.instagram}`, icon: InstagramIcon },
    { name: "LinkedIn", href: author.linkedin?.startsWith("http") ? author.linkedin : author.linkedin && `https://${author.linkedin}`, icon: LinkedInIcon },
    { name: "Amazon", href: author.amazon?.startsWith("http") ? author.amazon : author.amazon && `https://${author.amazon}`, icon: AmazonIcon },
    { name: "Pinterest", href: author.pinterest?.startsWith("http") ? author.pinterest : author.pinterest && `https://${author.pinterest}`, icon: PinterestIcon },
  ].filter(link => Boolean(link.href));
  
  

  return (
    <footer className="bg-text-primary text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">About</h3>
            <p className="text-sm sm:text-base text-white/80">
              Faith-based books and guided journals for your spiritual journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base text-white/80">
              <li><a href="#books" className="hover:text-white transition-colors block py-1">All Books</a></li>
              <li><a href="#about" className="hover:text-white transition-colors block py-1">About</a></li>
              <li><a href="/pinterest" className="hover:text-white transition-colors block py-1">Pinterest</a></li>
              <li><a href="https://www.amazon.com/stores/Seth-Inin/author/B0D9QX3FCM?ref=ap_rdr&shoppingPortalEnabled=true" className="hover:text-white transition-colors block py-1">Amazon</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            {author.email && (
              <p className="text-sm sm:text-base text-white/80 break-all">
                <a href={`mailto:${author.email}`} className="hover:text-white transition-colors">
                  {author.email}
                </a>
              </p>
            )}
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Follow {author.name}</h3>
            <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href ?? ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`
                      p-2 -m-2 transition-transform hover:scale-110
                      ${link.name === "Twitter" && "text-[#1DA1F2]"}
                      ${link.name === "Facebook" && "text-[#1877F2]"}
                      ${link.name === "Instagram" && "text-pink-500"}
                      ${link.name === "LinkedIn" && "text-[#0A66C2]"}
                      ${link.name === "Amazon" && "text-[#FF9900]"}
                      ${link.name === "Pinterest" && "text-[#E60023]"}
                    `}
                  >
                    <link.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                ))}
              </div>

          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-white/60 text-sm sm:text-base">
          <p>&copy; {currentYear} {author.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}