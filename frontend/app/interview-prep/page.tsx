"use client";

import { useState } from "react";

export default function InterviewPrepPage() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState<string[]>([]);

  function generateQuestions() {
    const text = role.toLowerCase();

    if (text.includes("software")) {
      setQuestions([
        "Tell me about yourself.",
        "Explain a project you built.",
        "What is a HashMap?",
        "Difference between ArrayList and LinkedList?",
        "What is Big-O notation?",
        "Describe a time you solved a difficult problem.",
      ]);
      return;
    }

    if (text.includes("cloud")) {
      setQuestions([
        "What is AWS?",
        "What is EC2?",
        "What is a VPC?",
        "Difference between IaaS and PaaS?",
        "Explain Load Balancers.",
      ]);
      return;
    }

    if (text.includes("cyber")) {
      setQuestions([
        "What is phishing?",
        "What is the CIA triad?",
        "Explain incident response.",
        "Difference between IDS and IPS?",
        "What is least privilege?",
      ]);
      return;
    }

    setQuestions([
      "Tell me about yourself.",
      "Why do you want this role?",
      "What are your strengths?",
      "Describe a challenge you overcame.",
    ]);
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Interview Prep
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Software Engineer, Cloud Engineer, Cybersecurity..."
          className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
        />

        <button
          onClick={generateQuestions}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
        >
          Generate Questions
        </button>
      </div>

      {questions.length > 0 && (
        <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Interview Questions
          </h2>

          <ul className="space-y-3">
            {questions.map((q, index) => (
              <li
                key={index}
                className="bg-black/30 p-4 rounded-xl"
              >
                {index + 1}. {q}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
