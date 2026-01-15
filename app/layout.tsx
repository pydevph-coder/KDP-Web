import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faith-Based Books & Guided Journals | Your Author Name",
  description: "Discover faith-based books and guided journals for mental wellness, written by a licensed guidance counselor. Transform your spiritual journey today.",
  keywords: "faith-based books, guided journals, mental wellness, Christian books, prayer journals",
  authors: [{ name: "Your Author Name" }],
  openGraph: {
    title: "Faith-Based Books & Guided Journals",
    description: "Discover faith-based books and guided journals for mental wellness.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this
        width: 1200,
        height: 630,
        alt: "Faith-Based Books & Guided Journals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith-Based Books & Guided Journals",
    description: "Discover faith-based books and guided journals for mental wellness.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F2A1B3" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

