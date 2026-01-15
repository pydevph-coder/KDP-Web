import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-background-2 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-1 to-primary-2 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg sm:text-xl">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold text-text-primary leading-tight">
                Faith Books
              </span>
              <span className="text-xs sm:text-sm text-text-primary/60 leading-tight">
                Spiritual Journey
              </span>
            </div>
          </Link>

          {/* Navigation - hidden on mobile, shown on desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#books" className="text-text-primary hover:text-primary-1 transition-colors font-medium">
              Books
            </a>
            <a href="#about" className="text-text-primary hover:text-primary-1 transition-colors font-medium">
              About
            </a>
            <a href="#testimonials" className="text-text-primary hover:text-primary-1 transition-colors font-medium">
              Reviews
            </a>
            <a href="#signup" className="text-text-primary hover:text-primary-1 transition-colors font-medium">
              Sign Up
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-primary hover:text-primary-1 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

