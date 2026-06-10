"use client";

import { useState } from "react";

export default function CloudArchitecturePage() {
  const [architecture, setArchitecture] =
    useState("");

  const [result, setResult] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function analyzeArchitecture() {
    if (!architecture.trim()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "/api/cloud-architecture",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            architecture,
          }),
        }
      );

      const data = await response.json();

      setResult(
        data.result ||
          data.error ||
          "No response received."
      );
    } catch {
      setResult(
        "Failed to analyze architecture."
      );
    }

    setLoading(false);
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Cloud Architecture Analyzer
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <textarea
          value={architecture}
          onChange={(e) =>
            setArchitecture(
              e.target.value
            )
          }
          placeholder="Describe your application architecture..."
          className="w-full h-72 p-4 rounded-xl bg-black border border-gray-700 resize-none"
        />

        <button
          onClick={analyzeArchitecture}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold"
        >
          {loading
            ? "Analyzing..."
            : "Analyze Architecture"}
        </button>
      </div>

      {result && (
        <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            AI Cloud Analysis
          </h2>

          <pre className="whitespace-pre-wrap text-sm">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
