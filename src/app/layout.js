import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Updated metadata for SEO optimization
export const metadata = {
  title: "Amazon Sales Rank Checker",
  description: "Quickly and easily check the sales rank of any Amazon product with our user-friendly tool.",
  keywords: "Amazon sales rank checker, sales rank, Amazon product rank, eCommerce, product visibility, free sales rank checker",
  author: "HA484991",
  openGraph: {
    title: "Amazon Sales Rank Checker",
    description: "Check the sales rank of any Amazon product quickly and easily.",
    url: "https://www.yourwebsite.com",
    siteName: "Amazon Sales Rank Checker",
    type: "website",
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {<meta name="google-site-verification" content="SD5O9YMVjMidX_2nXukZqSKJyRO3ChLAZhedDjYYNBc" />}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
