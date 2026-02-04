import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import avatar from "./assets/avatar.png";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socials Card",
  description: "Nothing ever happens here.",
  keywords: ["920", "anish", "card", "site", "status"],
  openGraph: {
    title: "Socials Card",
    description: "Nothing ever happens here.",
    type: "website",
    images: [avatar.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Socials Card",
    description: "Nothing ever happens here.",
    images: avatar.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
