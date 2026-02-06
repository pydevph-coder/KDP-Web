'use client';

import Image from 'next/image';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import { trackClick } from '@/lib/analytics';
import { usePathname } from "next/navigation";
import { GET } from "@/app/api/configsite/route";
// import GET from '@/app/api/configsite/route';

interface Book {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  benefits: string[];
  amazonLink: string;
}

interface BookShowcaseProps {
  books: Book[];
}



export default function BookShowcase({ books }: BookShowcaseProps) {
  const pathname = usePathname();
  const [myConfig, setMyConfig] = useState<any | null>(null);
  const [siteConfigData, setSiteConfigData] = useState<any | null>(null);
  useEffect(() => {
    const fetchSiteConfig = async () => {
      const res = await fetch('/api/configsite');
      const data = await res.json();
      setSiteConfigData(data);
      console.log("SiteConfigData:", data);
    }; 
    fetchSiteConfig();
  }, []);
  // Rename state to avoid shadowing the prop
  const [pagedBooks, setPagedBooks] = useState<Book[]>([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [booksPerPage, setBooksPerPage] = useState(10);
   useEffect(() => {
    fetchSiteConfig();
  }, []);
  // Example: paginate books from props
  useEffect(() => {
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    setPagedBooks(
      books
        .filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(start, end)
    );
    setTotalBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      ).length
    );
  }, [books, currentPage, booksPerPage, searchQuery]);
  useEffect(() => {
    const booksSection = document.getElementById("books");
    if (booksSection) {
      booksSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);
  // Ensure books is always an array
  const booksArray = Array.isArray(books) ? books : [];
  
  const fetchBooks = async () => {
    const res = await fetch(
      `/api/books?search=${encodeURIComponent(searchQuery)}&page=${currentPage}&limit=${booksPerPage}`
    );
    const data = await res.json();
    setPagedBooks(data.books); // ✅ update state, not prop
    setTotalBooks(data.total);
  };
    const fetchSiteConfig = async () => {
      const res = await fetch('/api/configsite');
      const data = await res.json();
      setMyConfig(data.pagination);
      setBooksPerPage(data.pagination);
      console.log("BooksPerPage:", data.pagination);
    };

  const totalPages = Math.ceil(totalBooks / booksPerPage);

  function getPaginationPages(currentPage: number, totalPages: number, maxButtons = 5) {
    const pages: (number | string)[] = [];
    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const left = Math.max(2, currentPage - 1);
      const right = Math.min(totalPages - 1, currentPage + 1);
  
      pages.push(1);
      if (left > 2) pages.push("...");
      for (let i = left; i <= right; i++) pages.push(i);
      if (right < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  }
  
  
  useEffect(() => {
    setLoadingBookId(null); // reset loading when route changes
  }, [pathname]);
  const [loadingBookId, setLoadingBookId] = useState<string | null>(null);

  const handleBuyClick = (link: string, bookId: string) => {
    trackClick(link, 'showcase', bookId);
    window.open(link, '_blank');
  };

  const handleBookClick = (bookId: string) => {
    setLoadingBookId(bookId); // Show loading overlay
    window.location.href = `/book/${bookId}`; // Navigate to book details
  };
 

  // Pagination calculation
  // const indexOfLastBook = currentPage * booksPerPage;
  // const indexOfFirstBook = indexOfLastBook - booksPerPage;
  // const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const pages = getPaginationPages(currentPage, totalPages);
    // Filtered books based on search
    
  

  if (setPagedBooks.length === 0) {
    return (
      <section id="books" className="py-20 px-4 bg-site-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Our Books
          </h2>
          <p className="text-lg text-text-primary/70">
            No Books Found
          </p>
        </div>
        
      </section>
    );
  }

  return (
    <section id="books" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-site-gradient relative">
      {/* Loading overlay */}
      {loadingBookId && (
          <div className="fixed inset-0 z-[1000] bg-black/70 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary-1 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
      

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-text-primary mb-8 sm:mb-12 md:mb-16">
          Discover Our Books
        </h2>
        <div className="max-w-2xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Search for a book..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-12"> */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-12">
          {pagedBooks.map((book) => (
            <div
              key={book.id}
              className="bg-gradient-to-br from-primary-1/25 via-white to-primary-2/25 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-md sm:shadow-lg md:hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-2 active:scale-95 flex flex-col cursor-pointer"
              onClick={() => handleBookClick(book.id)}
            >
              <div className="rounded-[10px] sm:rounded-[14px] md:rounded-[18px] lg:rounded-[22px] h-full flex flex-col">
              {/* Book Cover */}
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 group">
                <div className="relative w-full max-w-[80px] sm:max-w-[100px] md:max-w-[140px] lg:max-w-[192px] aspect-[2/3] transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="rounded-md sm:rounded-lg shadow-lg sm:shadow-xl object-cover group-hover:shadow-2xl transition-shadow duration-300"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 140px, 192px"
                  />
                </div>
              </div>

              {/* Book Title */}
              <h3 className="text-[10px] sm:text-xs md:text-base lg:text-xl font-bold text-text-primary mb-2 sm:mb-3 md:mb-4 text-center line-clamp-2">
                {book.title}
              </h3>

              {/* Mobile Description
              <p className="bg-background-2 lg:hidden text-justify text-sm text-text-primary/70 mt-4 mb-4 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                {book.description}
              </p> */}

              {/* Description + Benefits block
                  - On desktop: fills available vertical space so buttons align
                  - On mobile: does not stretch, to avoid large empty gaps */}
              <div className="flex flex-col lg:flex-1">
                {/* Desktop Description */}
                <p className="bg-background-2 hidden lg:block text-justify text-sm lg:text-base text-text-primary/70 mt-4 lg:mt-6 line-clamp-3 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  {book.description}
                </p>

                {/* Desktop Benefits */}
                {book.benefits && book.benefits.length > 0 && (
                  <ul className="hidden lg:flex flex-col space-y-1 mb-6 sm:space-y-1.5 md:space-y-2 mt-3">
                    {book.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-sm lg:text-base">
                        <span className="text-primary-1 mr-2 mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-text-primary/80 leading-tight">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Buy Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering book click
                  handleBuyClick(book.amazonLink, book.id);
                }}
                className="bg-primary-1 hover:bg-primary-2 active:bg-primary-2 mt-3 lg:mt-auto text-white font-semibold text-[9px] sm:text-[10px] md:text-xs lg:text-sm py-1.5 sm:py-2 md:py-2.5 lg:py-3 px-3 sm:px-4 md:px-5 lg:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg items-center justify-center active:scale-95 w-full"
              >
                Buy on Amazon
              </button>
              </div>
            </div>
          ))}
          
        </div>
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {pages.map((p, i) =>
              typeof p === "number" ? (
                <button
                  key={i}
                  className={`px-3 py-1 rounded-full mt-auto ${
                    currentPage === p
                      ? "bg-primary-1 text-white"
                      : "bg-background-2 text-text-primary"
                  }`}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </button>
              ) : (
                <span key={i} className="px-3 py-1 text-text-primary">
                  {p}
                </span>
              )
            )}
          </div>
      </div>
    </section>
  );
}