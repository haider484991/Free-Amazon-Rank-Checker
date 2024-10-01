// src/app/page.js
import Head from "next/head";
import RankChecker from './components/RankChecker';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Blog from "./components/Blog";
import InstructionCard from './components/InstructionCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon Sales Rank Checker</title>
        <meta name="description" content="Check the sales rank of any Amazon product quickly and easily." />
        <meta name="keywords" content="Amazon sales rank checker, free sales rank checker, Amazon product rank, rank checker, eCommerce, product visibility" />
        <meta name="author" content="HA484991" />
        <meta property="og:title" content="Amazon Sales Rank Checker" />
        <meta property="og:description" content="Check the sales rank of any Amazon product free and easily." />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Amazon Sales Rank Checker",
              "url": "https://www.yourwebsite.com",
              "description": "Check your Amazon sales rank free and easily with our user-friendly tool."
            }
          `}
        </script>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="container mx-auto p-5">
        <header className="bg-blue-600 text-white py-6 text-center shadow-lg">
          <h1 className="text-3xl font-bold animate-pulse">Free Amazon Rank Checker</h1>
          <nav className="mt-4">
            <a href="#rank-checker" className="mx-2 hover:underline">Home</a>
            <a href="#testimonials" className="mx-2 hover:underline">Testimonials</a>
            <a href="#faq" className="mx-2 hover:underline">FAQ</a>
            <a href="#newsletter" className="mx-2 hover:underline">Newsletter</a>
          </nav>
          
        </header>

        <main className="my-8">

        <p className="text-2x1 text-center font-bold text-white"> Unlock the power of data-driven decisions with our Free Amazon Sales Rank Checker. This intuitive and user-friendly tool allows sellers, marketers, and eCommerce enthusiasts to quickly and accurately check the sales rank of any Amazon product. </p>
        <InstructionCard />
          <RankChecker />
          <Testimonials />
          <Blog />
          <FAQ />
          <Newsletter />
        </main>

        <footer className="bg-blue-600 text-white text-center py-4">
          <p>&copy; 2024 Amazon Rank Checker. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
