"use client";

import { useState } from "react";

export default function LinkedInOptimizerPage() {
  const [profile, setProfile] = useState("");
  const [result, setResult] = useState<any>(null);

  function optimizeProfile() {
    const text = profile.toLowerCase();

    let score = 50;

    if (
      text.includes("software engineer") ||
      text.includes("software developer") ||
      text.includes("swe")
    ) {
      score += 10;
    }

    if (text.includes("aws")) score += 10;
    if (text.includes("python")) score += 10;
    if (text.includes("java")) score += 10;
    if (text.includes("project")) score += 5;
    if (text.includes("leadership")) score += 5;
    if (text.includes("github")) score += 5;
    if (text.includes("cloud")) score += 5;

    const improvements: string[] = [];

    if (
      !text.includes("software engineer") &&
      !text.includes("software developer") &&
      !text.includes("swe")
    ) {
      improvements.push(
        "Add Software Engineer to your headline"
      );
    }

    if (!text.includes("aws")) {
      improvements.push(
        "Mention AWS certifications and cloud skills"
      );
    }

    if (!text.includes("github")) {
      improvements.push(
        "Add your GitHub portfolio"
      );
    }

    if (!text.includes("project")) {
      improvements.push(
        "Showcase technical projects"
      );
    }

    if (!text.includes("leadership")) {
      improvements.push(
        "Highlight leadership experience"
      );
    }

    let headline =
      "Software Engineer | AI | Cloud Computing | Cybersecurity";

    if (text.includes("cloud")) {
      headline =
        "Cloud Engineer | AWS | AI | Software Engineering";
    }

    if (text.includes("cybersecurity")) {
      headline =
        "Cybersecurity Analyst | AI | Cloud Computing";
    }

    if (
      text.includes("machine learning") ||
      text.includes("artificial intelligence")
    ) {
      headline =
        "AI Engineer | Machine Learning | Cloud Computing";
    }

    score = Math.min(score, 100);

    setResult({
      score,
      headline,
      improvements,
    });
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        LinkedIn Optimizer
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <textarea
          value={profile}
          onChange={(e) =>
            setProfile(e.target.value)
          }
          placeholder="Paste your LinkedIn profile..."
          className="w-full h-72 p-4 rounded-xl bg-black border border-gray-700 text-white resize-none"
        />

        <button
          onClick={optimizeProfile}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
        >
          Optimize LinkedIn
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            LinkedIn Score: {result.score}%
          </h2>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-green-400">
              Suggested Headline
            </h3>

            <p className="mt-2 text-lg">
              {result.headline}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-yellow-400">
              Improvements
            </h3>

            <ul className="list-disc ml-6 mt-2 space-y-2">
              {result.improvements.map(
                (item: string) => (
                  <li key={item}>
                    {item}
                  </li>
                )
              )}
            </ul>

            {result.improvements.length === 0 && (
              <p className="text-green-400 mt-3">
                Excellent profile. No major improvements found.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
