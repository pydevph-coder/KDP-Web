import type { Metadata } from "next";
import "./globals.css";
import { GET } from "@/app/api/configsite/route";

const siteConfig = await GET();
const siteConfigData = await siteConfig.json();

console.log("SiteConfigData:", siteConfigData);
export const metadata: Metadata = {
  title: `${siteConfigData.siteTitle} | ${siteConfigData.siteDescription}`,
  description: siteConfigData.siteDescription,
  keywords: "faith-based books, guided journals, mental wellness, Christian books, prayer journals",
  authors: [{ name: siteConfigData.siteTitle }],
  openGraph: {
    title: siteConfigData.siteTitle,
    description: siteConfigData.siteDescription,
    type: "website",
    ...(siteConfigData.metaImageUrl && {
      images: [
        {
          url: siteConfigData.metaImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfigData.siteTitle,
        },
      ],
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfigData.siteTitle,
    description: siteConfigData.siteDescription,
    ...(siteConfigData.metaImageUrl && {
      images: [siteConfigData.metaImageUrl],
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" sizes="32x32" href="/favicon.png" />
        <link rel="icon" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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

