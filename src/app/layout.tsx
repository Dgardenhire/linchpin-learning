import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3, Inconsolata } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LINCHPIN Learning — The Library",
  description:
    "Courses built by practitioners, not professors. Crisis communications, grant writing, authority building, AI, civic leadership, and more. Where expertise becomes influence.",
  openGraph: {
    title: "LINCHPIN Learning — The Library",
    description:
      "Courses built by practitioners, not professors. Where expertise becomes influence.",
    siteName: "LINCHPIN Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} ${inconsolata.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
