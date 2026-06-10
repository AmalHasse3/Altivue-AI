"use client";

import { useState } from "react";

export default function CoverLetterPage() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] =
    useState("");
  const [coverLetter, setCoverLetter] =
    useState("");

  async function generateCoverLetter() {
    const response = await fetch(
      "/api/cover-letter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resume,
          jobDescription,
        }),
      }
    );

    const data = await response.json();

    setCoverLetter(data.coverLetter);
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Cover Letter Generator
      </h1>

      <textarea
        placeholder="Paste Resume"
        value={resume}
        onChange={(e) =>
          setResume(e.target.value)
        }
        className="w-full h-48 p-4 rounded-xl bg-black border border-gray-700"
      />

      <textarea
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
        className="w-full h-48 mt-4 p-4 rounded-xl bg-black border border-gray-700"
      />

      <button
        onClick={generateCoverLetter}
        className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold"
      >
        Generate Cover Letter
      </button>

      {coverLetter && (
        <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-xl p-6 whitespace-pre-wrap">
          {coverLetter}
        </div>
      )}
    </div>
  );
}

