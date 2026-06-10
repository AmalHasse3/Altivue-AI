"use client";

import { useState } from "react";

export default function JobMatchPage() {
  const [resume, setResume] = useState("");
  const [job, setJob] = useState("");
  const [score, setScore] = useState<number | null>(null);

  function calculateMatch() {
    const resumeText = resume.toLowerCase();
    const jobText = job.toLowerCase();

    const skills = [
      "java",
      "python",
      "aws",
      "react",
      "next.js",
      "sql",
      "javascript",
      "typescript",
      "cloud",
      "leadership",
    ];

    let matches = 0;

    skills.forEach((skill) => {
      if (
        resumeText.includes(skill) &&
        jobText.includes(skill)
      ) {
        matches++;
      }
    });

    const finalScore = Math.round(
      (matches / skills.length) * 100
    );

    setScore(finalScore);
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Job Match Scorer
      </h1>

      <textarea
        placeholder="Paste Resume"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        className="w-full h-48 mb-4 p-4 bg-black rounded-xl"
      />

      <textarea
        placeholder="Paste Job Description"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        className="w-full h-48 mb-4 p-4 bg-black rounded-xl"
      />

      <button
        onClick={calculateMatch}
        className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold"
      >
        Calculate Match
      </button>

      {score !== null && (
        <div className="mt-8">
          <h2 className="text-3xl font-bold">
            Match Score: {score}%
          </h2>
        </div>
      )}
    </div>
  );
}
