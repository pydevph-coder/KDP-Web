import type { Metadata } from "next";
import "./globals.css";
import { getSiteConfig } from "@/lib/getSiteConfig";
const siteConfig = await getSiteConfig();

export const metadata: Metadata = {
  title: `${siteConfig.siteTitle} | ${siteConfig.siteDescription}`,
  description: siteConfig.siteDescription,
  keywords: "faith-based books, guided journals, mental wellness, Christian books, prayer journals",
  authors: [{ name: siteConfig.siteTitle }],
  openGraph: {
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    type: "website",
    ...(siteConfig.metaImageUrl && {
      images: [
        {
          url: siteConfig.metaImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.siteTitle,
        },
      ],
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    ...(siteConfig.metaImageUrl && {
      images: [siteConfig.metaImageUrl],
    }),
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
        <link rel="icon" href="/fabicon.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="/fabicon.png" />
        <link rel="icon" sizes="16x16" href="/fabicon.png" />
        <link rel="apple-touch-icon" href="/fabicon.png" />
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

