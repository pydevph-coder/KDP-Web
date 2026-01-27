'use client';

import Link from 'next/link';
import { trackClick } from '@/lib/analytics';
import Image from 'next/image';
import { useEffect, useState } from 'react';
interface Book {
  id: string;
  amazonLink: string;
}

interface HeaderProps {
  books: Book[];
}

export default function Header({ books }: HeaderProps) {
  const featuredBook = books[0] || null;
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
  const handleBuyClick = () => {
    if (featuredBook) {
      trackClick('https://www.amazon.com/stores/Seth-Inin/author/B0D9QX3FCM?ref=ap_rdr&shoppingPortalEnabled=true', 'header', featuredBook.id);
      window.open('https://www.amazon.com/stores/Seth-Inin/author/B0D9QX3FCM?ref=ap_rdr&shoppingPortalEnabled=true', '_blank');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-background-2 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-1 to-primary-2 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow overflow-hidden">
            <Image
                src={siteConfigData?.metaImageUrl || 'https://m.media-amazon.com/images/S/amzn-author-media-prod/nrd5rhnko6vcv1o0jt733o1oau._SY600_._SL200_._PQ50_._FMwebp_.jpg'}
                alt="Logo"
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold text-text-primary leading-tight">
                {siteConfigData?.siteTitle || 'SethInin'}
              </span>
              <span className="text-xs sm:text-sm text-text-primary/60 leading-tight">
                {siteConfigData?.shortDescription || 'Spiritual Journey'}
              </span>
            </div>
          </Link>

           
        
            <button
              onClick={handleBuyClick}
              className=" btn-primary text-xs sm:text-sm py-2 px-4 sm:px-6"
              aria-label="Visit Store on Amazon"
            >
              Visit Store on Amazon
            </button>
        

          {/* Navigation - desktop only */}
          {/* <nav className="hidden md:flex items-center gap-6">
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
          </nav> */}
        </div>
      </div>
    </header>
  );
}

