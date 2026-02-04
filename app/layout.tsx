import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const inter = Rubik({ subsets: ["latin"] });
const METADATA_BASE = process.env.NEXT_PUBLIC_METADATA_BASE
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE)
  : new URL('https://card.anishmishra.com.np/');

export const metadata: Metadata = {
  metadataBase: METADATA_BASE,
  title: "Socials Card",
  description: "Nothing ever happens here.",
  keywords: ["920", "anish", "card", "site", "status"],
  openGraph: {
    title: "Socials Card",
    description: "Nothing ever happens here.",
    type: "website",
    url: METADATA_BASE.toString(),
    images: [
      {
        url: new URL('/avatar.png', METADATA_BASE).toString(),
        width: 1200,
        height: 630,
        alt: 'Socials Card',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Socials Card",
    description: "Nothing ever happens here.",
    images: [new URL('/avatar.png', METADATA_BASE).toString()],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content={METADATA_BASE.toString()} />
        <meta property="og:logo" content={new URL('/avatar.png', METADATA_BASE).toString()} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}