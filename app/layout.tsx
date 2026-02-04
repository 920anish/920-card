import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socials Card",
  description: "Nothing ever happens here.",
  keywords: ["920", "anish", "card", "site", "status"],
  metadataBase: new URL('https://card.anishmishra.com.np/'), 
  openGraph: {
    title: "Socials Card",
    description: "Nothing ever happens here.",
    type: "website",
    url: 'https://920-card.anish920.workers.dev',
    images: [
      {
        url: 'app/assets/avatar.png', // Will be resolved with metadataBase
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
    images: ['app/assets/avatar.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}