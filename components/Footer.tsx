export default function Footer() {
  const currentYear = new Date().getFullYear();

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
            <p className="text-sm sm:text-base text-white/80">
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors break-all">
                contact@example.com
              </a>
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://pinterest.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors p-2 -m-2"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.95-1.878.088-.331.57-2.103.57-2.103s.145-.29.145-.718c0-.672-.39-1.175-.39-1.175s2.832-3.268 2.832-7.15c0-2.83-2.064-4.914-5.5-4.914-3.75 0-5.7 2.8-5.7 5.7 0 2.1 1.3 3.9 3.1 3.9.6 0 1.1-.4 1.3-.9.2-.7.8-2.7.8-2.7.4.7 1.5 1.3 2.7 1.3 3.5 0 5.9-3.6 5.9-7.5 0-3.1-2.2-5.7-5.4-5.7-3.7 0-6 2.7-6 5.5 0 2 1.2 3.7 2.9 3.7.3 0 .6-.1.7-.2.1-.1.1-.2.1-.3-.1-.4-.3-1.1-.3-1.5 0-1.4 1-2.6 2.5-2.6 1.4 0 2.1 1 2.1 2.3 0 1.6-.9 2.9-2.2 2.9-.4 0-.8-.2-1-.5 0 0-.2.8-.3 1-.1.3-.3.4-.6.4-1.1 0-2.1-1.4-2.1-3.4 0-1.8 1.3-3.4 3.7-3.4 2 0 3.5 1.4 3.5 3.3 0 2-1.2 3.6-2.9 3.6-.6 0-1-.3-1.1-.6 0 0-.2.8-.3 1.1-.1.4-.4.5-.7.5-.6 0-1.1-.8-1.3-1.1-.2-.4-.4-.9-.4-1.4 0-1.1.6-2.1 1.5-2.1.4 0 .7.2.9.4.2.2.3.5.3.8 0 .6-.4 1.5-.9 2.4-.3.6-.4.9-.4 1.3 0 .4.3.7.7.7.9 0 1.6-1.1 1.6-2.6 0-1.3-.9-2.4-2.5-2.4z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-white/60 text-sm sm:text-base">
          <p>&copy; {currentYear} Ruel Awayan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

