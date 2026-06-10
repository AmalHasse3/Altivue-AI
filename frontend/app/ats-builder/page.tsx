"use client";

import { useState } from "react";

export default function ATSBuilderPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");

  function generateResume() {
    const text = jobDescription.toLowerCase();

    const skills: string[] = [];

    if (text.includes("java")) skills.push("Java");
    if (text.includes("python")) skills.push("Python");
    if (text.includes("react")) skills.push("React");
    if (text.includes("aws")) skills.push("AWS");
    if (text.includes("cloud")) skills.push("Cloud Computing");
    if (text.includes("sql")) skills.push("SQL");
    if (text.includes("javascript")) skills.push("JavaScript");
    if (text.includes("git")) skills.push("Git");
    if (text.includes("cybersecurity"))
      skills.push("Cybersecurity");
    if (text.includes("machine learning"))
      skills.push("Machine Learning");

    setResult(`
AMAL HASSEN
Software Engineer | AI | Cloud Computing

EDUCATION
University of Minnesota Twin Cities
B.A. Computer Science

TECHNICAL SKILLS
${skills.join(", ") || "Java, Python, AWS, React"}

PROJECTS
• AI Resume Analyzer
• ATS Resume Builder
• LinkedIn Optimizer
• Cybersecurity AI Agent

EXPERIENCE
• GSOC Security Analyst
• Amazon Process Assistant
• Leadership and Operations Experience

KEYWORDS DETECTED
${skills.join(", ")}

ATS OPTIMIZATION
✓ Resume tailored to job description
✓ Keywords added
✓ Technical skills highlighted
✓ Projects aligned with role
`);
  }

  function downloadResume() {
    const blob = new Blob(
      [result],
      { type: "text/plain" }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "ATS_Resume.txt";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        ATS Resume Builder
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <textarea
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
          placeholder="Paste Job Description..."
          className="w-full h-72 p-4 rounded-xl bg-black border border-gray-700 text-white resize-none"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={generateResume}
            className="px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
          >
            Generate ATS Resume
          </button>

          {result && (
            <button
              onClick={downloadResume}
              className="px-6 py-3 bg-green-500 text-black rounded-xl font-bold hover:bg-green-400"
            >
              Download Resume
            </button>
          )}
        </div>
      </div>

      {result && (
        <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Generated ATS Resume
          </h2>

          <pre className="whitespace-pre-wrap text-sm">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
