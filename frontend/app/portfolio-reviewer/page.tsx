"use client";

import { useState } from "react";

export default function PortfolioReviewerPage() {
  const [portfolio, setPortfolio] = useState("");
  const [result, setResult] = useState<any>(null);

  function reviewPortfolio() {
    const text = portfolio.toLowerCase();

    let score = 50;

    const strengths = [];
    const improvements = [];

    if (text.includes("github")) {
      score += 10;
      strengths.push("GitHub Projects");
    } else {
      improvements.push("Add GitHub projects");
    }

    if (text.includes("project")) {
      score += 10;
      strengths.push("Technical Projects");
    } else {
      improvements.push("Showcase more projects");
    }

    if (text.includes("react")) {
      score += 10;
      strengths.push("Frontend Development");
    } else {
      improvements.push("Build a React project");
    }

    if (text.includes("aws")) {
      score += 10;
      strengths.push("Cloud Computing");
    } else {
      improvements.push("Add a cloud project");
    }

    if (text.includes("linkedin")) {
      score += 5;
      strengths.push("Professional Branding");
    } else {
      improvements.push("Link your LinkedIn profile");
    }

    if (text.includes("portfolio")) {
      score += 5;
      strengths.push("Personal Portfolio");
    }

    score = Math.min(score, 100);

    let readiness = "★☆☆☆☆";

    if (score >= 90) readiness = "★★★★★";
    else if (score >= 80) readiness = "★★★★☆";
    else if (score >= 70) readiness = "★★★☆☆";
    else if (score >= 60) readiness = "★★☆☆☆";

    setResult({
      score,
      strengths,
      improvements,
      readiness,
    });
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Portfolio Reviewer
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <textarea
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
          placeholder="Paste portfolio content..."
          className="w-full h-72 p-4 rounded-xl bg-black border border-gray-700 text-white resize-none"
        />

        <button
          onClick={reviewPortfolio}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
        >
          Review Portfolio
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-2xl p-6">
          <h2
            className={`text-3xl font-bold ${
              result.score >= 80
                ? "text-green-400"
                : result.score >= 60
                ? "text-yellow-400"
                : "text-red-400"
            }`}
          >
            Portfolio Score: {result.score}%
          </h2>

          <div className="mt-6">
            <h3 className="text-green-400 text-xl font-bold">
              Strengths
            </h3>

            <ul className="list-disc ml-6 mt-2">
              {result.strengths.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-yellow-400 text-xl font-bold">
              Improvements
            </h3>

            <ul className="list-disc ml-6 mt-2">
              {result.improvements.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-cyan-400 text-xl font-bold">
              Recruiter Readiness
            </h3>

            <p className="text-3xl mt-2">
              {result.readiness}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
