"use client";

import { useState } from "react";

type AnalysisResult = {
  score: number;
  strengths: string[];
  weaknesses: string[];
  keywords: string[];
  recruiterFeedback: string;
};

export default function ResumeAnalyzerPage() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  function analyzeResume() {
    if (!resume.trim()) {
      alert("Please paste your resume first.");
      return;
    }

    const text = resume.toLowerCase();

    let score = 50;

    const strengths: string[] = [];
    const weaknesses: string[] = [];
    const keywords: string[] = [];

    if (text.includes("java")) {
      score += 10;
      strengths.push("Java Experience");
      keywords.push("Java");
    } else {
      weaknesses.push("Add Java skills");
    }

    if (text.includes("python")) {
      score += 10;
      strengths.push("Python Experience");
      keywords.push("Python");
    } else {
      weaknesses.push("Add Python skills");
    }

    if (text.includes("aws")) {
      score += 10;
      strengths.push("Cloud Computing");
      keywords.push("AWS");
    } else {
      weaknesses.push("Add AWS certifications or cloud projects");
    }

    if (text.includes("react")) {
      score += 5;
      strengths.push("React Experience");
      keywords.push("React");
    } else {
      weaknesses.push("Add React experience");
    }

    if (
      text.includes("next.js") ||
      text.includes("nextjs")
    ) {
      score += 5;
      strengths.push("Next.js Experience");
      keywords.push("Next.js");
    } else {
      weaknesses.push("Add Next.js projects");
    }

    if (text.includes("github")) {
      score += 5;
      strengths.push("GitHub Portfolio");
      keywords.push("GitHub");
    } else {
      weaknesses.push("Add GitHub portfolio");
    }

    if (text.includes("project")) {
      score += 10;
      strengths.push("Project Experience");
    } else {
      weaknesses.push("Add technical projects");
    }

    if (text.includes("leadership")) {
      score += 5;
      strengths.push("Leadership Experience");
    } else {
      weaknesses.push("Highlight leadership experience");
    }

    if (
      text.includes("intern") ||
      text.includes("internship")
    ) {
      score += 5;
      strengths.push("Internship Experience");
    } else {
      weaknesses.push("Add internship experience");
    }

    score = Math.min(score, 100);

    let recruiterFeedback = "Needs Improvement";

    if (score >= 90) {
      recruiterFeedback =
        "Excellent Resume - Strong candidate for interviews.";
    } else if (score >= 80) {
      recruiterFeedback =
        "Strong Resume - Competitive for internships.";
    } else if (score >= 70) {
      recruiterFeedback =
        "Good Resume - A few improvements recommended.";
    }

    setResult({
      score,
      strengths,
      weaknesses,
      keywords,
      recruiterFeedback,
    });
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Resume Analyzer
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <textarea
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          placeholder="Paste your resume..."
          className="w-full h-72 p-4 rounded-xl bg-black border border-gray-700 text-white resize-none"
        />

        <button
          onClick={analyzeResume}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
        >
          Analyze Resume
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
            ATS Score: {result.score}%
          </h2>

          <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
            <div
              className="bg-cyan-400 h-4 rounded-full transition-all duration-500"
              style={{
                width: `${result.score}%`,
              }}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-green-400 text-xl font-bold">
              Strengths
            </h3>

            <ul className="list-disc ml-6 mt-2">
              {result.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-red-400 text-xl font-bold">
              Areas to Improve
            </h3>

            <ul className="list-disc ml-6 mt-2">
              {result.weaknesses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-cyan-400 text-xl font-bold">
              Keywords Found
            </h3>

            <p className="mt-2">
              {result.keywords.length > 0
                ? result.keywords.join(", ")
                : "No major keywords detected"}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-yellow-400 text-xl font-bold">
              Recruiter Feedback
            </h3>

            <p className="mt-2 text-lg">
              {result.recruiterFeedback}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
