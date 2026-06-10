"use client";

import { useState } from "react";

export default function MockInterviewPage() {
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<any>(null);

  const question =
    "Tell me about yourself and why you're interested in software engineering.";

  function evaluateAnswer() {
    const text = answer.toLowerCase();

    let score = 50;

    const strengths = [];
    const improvements = [];

    if (text.includes("computer science")) {
      score += 10;
      strengths.push("Mentioned education");
    }

    if (text.includes("project")) {
      score += 10;
      strengths.push("Discussed projects");
    }

    if (text.includes("software")) {
      score += 10;
      strengths.push("Explained software interest");
    }

    if (text.includes("leadership")) {
      score += 10;
      strengths.push("Showed leadership");
    }

    if (text.length > 200) {
      score += 10;
      strengths.push("Detailed response");
    }

    if (!text.includes("project")) {
      improvements.push(
        "Mention technical projects"
      );
    }

    if (!text.includes("leadership")) {
      improvements.push(
        "Include leadership experience"
      );
    }

    if (text.length < 100) {
      improvements.push(
        "Provide a more detailed answer"
      );
    }

    score = Math.min(score, 100);

    setResult({
      score,
      strengths,
      improvements,
    });
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Mock Interview AI
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Interview Question
        </h2>

        <p className="mb-6 text-lg">
          {question}
        </p>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer..."
          className="w-full h-64 p-4 rounded-xl bg-black border border-gray-700 text-white resize-none"
        />

        <button
          onClick={evaluateAnswer}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
        >
          Evaluate Answer
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
            Interview Score: {result.score}%
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

        </div>
      )}
    </div>
  );
}
