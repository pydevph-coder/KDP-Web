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
const AmazonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M502.6 232.5c-1.2-3.4-5.1-5.2-8.5-4.1-4.5 1.4-11.4 3.1-18.1 5.1-22.6 6.8-50.4 15.1-86.8 15.1-59.5 0-102.8-31.1-125.5-65.4 12.1-6.1 21.6-12.3 30.8-19.6 18.9-14.1 30.6-30.5 35.1-49.2 1-4.4-1.7-8.8-6-9.8-4.5-1-8.8 1.7-9.8 6-3.6 15.8-14.1 30.1-30.8 42.2-12.2 8.9-26.7 15.5-44.2 20.6-6.1 1.7-12.5 3.3-18.7 4.7-42.5 9.1-88.1 6-132.8-11.2-3.8-1.3-8 0.8-9.3 4.6-1.3 3.8 0.8 8 4.6 9.3 44.1 14.9 90.1 17.9 134.1 9 6.4-1.4 12.7-3 19-4.8 16.5-4.7 31.7-11.3 45.1-20.1 13.3-8.3 23.7-18.3 29.2-29.8 4.9-10.7 6-21.8 3.3-32.4-4.7-18.7-19.6-34.3-41.3-48.4-8.1-5.9-16.8-11.5-27-16.9-3.5-2.1-8-1-10.2 2.5-2.1 3.5-1 8 2.5 10.2 19.1 11.5 33.7 25.7 39.3 43.5 3.5 12.9 2.4 25.8-3.1 38-5.6 12.5-15.8 23.3-30.4 32.3-8.2 5-17.6 9.4-28.2 13.4-5.5 2.1-11.1 4-16.6 5.7-51.2 16.2-103.1 18.3-147.6 4.6-3.8-1.1-7.7 1.2-8.8 5-1.1 3.8 1.2 7.7 5 8.8 46.4 13.2 99.4 11.2 151.5-5.3 5.6-1.8 11.3-3.7 16.8-5.8 10.7-4.1 20.8-8.6 29.3-13.7 15.3-9.3 25.8-20.8 31.8-33.5 6.3-13.3 7.7-27.3 4.1-41-6.8-24.6-28.6-46.6-63.5-66.7-4-2.3-8.9-1.1-11.2 3-2.3 4-1.1 8.9 3 11.2 31.8 18.1 51.4 37.4 57.2 57.5 3.1 11.3 2 22.9-3.4 34.4-5.6 12-16.3 22.1-31 30.1-8.7 5.1-18.6 9.4-29.7 13.1-5.8 2-11.6 3.8-17.3 5.4-52.8 15.2-105.3 17.6-150.6 5.2-3.7-1-7.7 1.2-8.7 5-1 3.7 1.2 7.7 5 8.7 45.5 12.4 98.5 10.1 151-5.3 5.7-1.6 11.4-3.4 17.2-5.4 11.1-3.7 21.3-8 30.2-13 17.8-10.5 29.9-23.5 36.3-38.9 6.9-16 7.5-32.3 1.9-48.1z"/>
  </svg>
);

// Pinterest Icon
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.95-1.878.088-.331.57-2.103.57-2.103s.145-.29.145-.718c0-.672-.39-1.175-.39-1.175s2.832-3.268 2.832-7.15c0-2.83-2.064-4.914-5.5-4.914-3.75 0-5.7 2.8-5.7 5.7 0 2.1 1.3 3.9 3.1 3.9.6 0 1.1-.4 1.3-.9.2-.7.8-2.7.8-2.7.4.7 1.5 1.3 2.7 1.3 3.5 0 5.9-3.6 5.9-7.5 0-3.1-2.2-5.7-5.4-5.7-3.7 0-6 2.7-6 5.5 0 2 1.2 3.7 2.9 3.7.3 0 .6-.1.7-.2.1-.1.1-.2.1-.3-.1-.4-.3-1.1-.3-1.5 0-1.4 1-2.6 2.5-2.6 1.4 0 2.1 1 2.1 2.3 0 1.6-.9 2.9-2.2 2.9-.4 0-.8-.2-1-.5 0 0-.2.8-.3 1-.1.3-.3.4-.6.4-1.1 0-2.1-1.4-2.1-3.4 0-1.8 1.3-3.4 3.7-3.4 2 0 3.5 1.4 3.5 3.3 0 2-1.2 3.6-2.9 3.6-.6 0-1-.3-1.1-.6 0 0-.2.8-.3 1.1-.1.4-.4.5-.7.5-.6 0-1.1-.8-1.3-1.1-.2-.4-.4-.9-.4-1.4 0-1.1.6-2.1 1.5-2.1.4 0 .7.2.9.4.2.2.3.5.3.8 0 .6-.4 1.5-.9 2.4-.3.6-.4.9-.4 1.3 0 .4.3.7.7.7.9 0 1.6-1.1 1.6-2.6 0-1.3-.9-2.4-2.5-2.4z"/>
  </svg>
);


export default async function Footer() {
  const author: Author | null = await getAuthor();

  if (!author) return null;

  const currentYear = new Date().getFullYear();

  const buildSocialLink = (url: string | null | undefined, name: string): string | null => {
    if (!url) return null;
    return url.startsWith("http") ? url : `https://${url}`;
  };

  const socialLinks = [
    author.twitter && { name: "Twitter", href: buildSocialLink(author.twitter, "Twitter"), icon: TwitterIcon },
    author.facebook && { name: "Facebook", href: buildSocialLink(author.facebook, "Facebook"), icon: FacebookIcon },
    author.instagram && { name: "Instagram", href: buildSocialLink(author.instagram, "Instagram"), icon: InstagramIcon },
    author.linkedin && { name: "LinkedIn", href: buildSocialLink(author.linkedin, "LinkedIn"), icon: LinkedInIcon },
    author.amazon && { name: "Amazon", href: buildSocialLink(author.amazon, "Amazon"), icon: AmazonIcon },
    author.pinterest && { name: "Pinterest", href: buildSocialLink(author.pinterest, "Pinterest"), icon: PinterestIcon },
  ].filter((link): link is { name: string; href: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> } => 
    link !== null && link.href !== null
  );
  

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
              <li><a href="/privacy" className="hover:text-white transition-colors block py-1">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors block py-1">Terms</a></li>
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
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-2 -m-2"
                aria-label={link.name}
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
