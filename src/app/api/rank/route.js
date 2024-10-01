// src/app/api/rank/route.js
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request) {
  const { url } = await request.json();

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Arguments for serverless environments
    });
    
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    // Extract sales rank
    const salesRank = await page.evaluate(() => {
      const rankElements = document.querySelectorAll('.a-unordered-list.a-nostyle.a-vertical.a-spacing-none.detail-bullet-list li span');

      // Use a Set to store unique ranks
      const ranks = new Set();

      // Collect ranks and format them
      rankElements.forEach(element => {
        const text = element.innerText;

        // Only add entries that contain "Best Sellers Rank:"
        if (text.includes("Best Sellers Rank:")) {
          // Remove unwanted text
          const cleanedText = text
            .replace("Best Sellers Rank:", "")
            .replace(/\(See Top 100 in .+\)/, "") // Remove the text in parentheses
            .trim();

          if (cleanedText) {
            ranks.add(cleanedText); // Add to set to avoid duplicates
          }
        }
      });

      // Convert the set back to an array and join with a separator
      return ranks.size > 0 ? Array.from(ranks).join(" | ") : "Sales Rank not found";
    });

    await browser.close();

    // Format the response
    const formattedResponse = `Sales Rank: ${salesRank}`;

    return NextResponse.json({ salesRank: formattedResponse });
  } catch (error) {
    console.error(`Error fetching sales rank for URL: ${url}`, error);
    return NextResponse.json({ error: "Error fetching sales rank" }, { status: 500 });
  }
}
