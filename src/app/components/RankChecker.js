"use client";

import { useState } from "react";
import axios from "axios";

const RankChecker = () => {
  const [url, setUrl] = useState("");
  const [salesRank, setSalesRank] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0); // State for progress

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSalesRank(null); // Reset sales rank
    setIsLoading(true);
    setProgress(0); // Reset progress

    // Define the interval variable outside the try block
    let interval;

    try {
      // Simulating a delay for progress (can be adjusted)
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 10; // Increase progress
          return prev;
        });
      }, 100);

      const response = await axios.post("/api/rank", { url });

      // Update sales rank and progress once data is received
      setSalesRank(response.data.salesRank);
      setProgress(100);
    } catch (err) {
      setError("Error fetching sales rank. Please try again.");
      // Clear the interval on error
    } finally {
      // Clear the interval to avoid memory leaks and stop progress updates
      clearInterval(interval);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center">Amazon Sales Rank Checker</h1>

      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Amazon Product URL"
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Check Sales Rank
        </button>
      </form>
      {isLoading && (
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-blue-500 rounded"
              style={{ width: `${progress}%`, transition: "width 0.1s" }} // Smooth transition for width
            />
          </div>
          <p className="mt-2 text-lg text-gray-600">{progress}%</p>
        </div>
      )}
      {salesRank && (
        <p className="mt-4 text-lg text-blue-600">
          {salesRank}
        </p>
      )}
      {error && <p className="mt-4 text-lg text-red-600">{error}</p>}
    </div>
  );
};

export default RankChecker;
