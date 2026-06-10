"use client";

import { useState } from "react";

export default function CareerCoachPage() {
  const [career, setCareer] = useState("");
  const [result, setResult] = useState<any>(null);

  function generateRoadmap() {
    const path = career.toLowerCase();

    if (path.includes("software")) {
      setResult({
        title: "Software Engineering Roadmap",
        steps: [
          "Master Data Structures & Algorithms",
          "Build 3-5 Full Stack Projects",
          "Learn Git and GitHub",
          "Practice LeetCode",
          "Apply for SWE Internships",
        ],
      });
    } else if (path.includes("cloud")) {
      setResult({
        title: "Cloud Engineering Roadmap",
        steps: [
          "Learn AWS Fundamentals",
          "Earn AWS Cloud Practitioner",
          "Build Cloud Projects",
          "Learn Docker & Kubernetes",
          "Earn AWS Solutions Architect",
        ],
      });
    } else if (path.includes("cyber")) {
      setResult({
        title: "Cybersecurity Roadmap",
        steps: [
          "Learn Networking Basics",
          "Study Linux",
          "Earn Security+",
          "Practice Labs on TryHackMe",
          "Apply for Security Roles",
        ],
      });
    } else if (path.includes("ai")) {
      setResult({
        title: "AI Engineer Roadmap",
        steps: [
          "Learn Python",
          "Study Machine Learning",
          "Build AI Projects",
          "Learn LLMs & Prompt Engineering",
          "Create AI Portfolio",
        ],
      });
    } else {
      setResult({
        title: "General Tech Roadmap",
        steps: [
          "Learn Programming",
          "Build Projects",
          "Create Portfolio",
          "Network with Professionals",
          "Apply for Internships",
        ],
      });
    }
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        AI Career Coach
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <input
          value={career}
          onChange={(e) => setCareer(e.target.value)}
          placeholder="Example: Software Engineer, AI Engineer, Cloud Engineer..."
          className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
        />

        <button
          onClick={generateRoadmap}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
        >
          Generate Roadmap
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            {result.title}
          </h2>

          <ol className="list-decimal ml-6 mt-6 space-y-3">
            {result.steps.map(
              (step: string, index: number) => (
                <li key={index}>{step}</li>
              )
            )}
          </ol>
        </div>
      )}
    </div>
  );
}

