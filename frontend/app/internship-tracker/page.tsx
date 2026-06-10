"use client";

import { useState } from "react";

export default function InternshipTrackerPage() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [applications, setApplications] = useState<any[]>([]);

  function addApplication() {
    if (!company || !role) return;

    setApplications([
      ...applications,
      {
        company,
        role,
        status: "Applied",
      },
    ]);

    setCompany("");
    setRole("");
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Internship Tracker
      </h1>

      <div className="bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="w-full p-4 mb-4 rounded-xl bg-black border border-gray-700"
        />

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="w-full p-4 rounded-xl bg-black border border-gray-700"
        />

        <button
          onClick={addApplication}
          className="mt-4 px-6 py-3 bg-cyan-500 text-black rounded-xl font-bold hover:bg-cyan-400"
        >
          Add Application
        </button>
      </div>

      <div className="mt-8 bg-[#01082E] border border-gray-700 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">
          Applications
        </h2>

        {applications.length === 0 ? (
          <p className="text-gray-400">
            No applications added yet.
          </p>
        ) : (
          applications.map((app, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-4 mb-3"
            >
              <p className="font-bold">
                {app.company}
              </p>

              <p>{app.role}</p>

              <p className="text-yellow-400">
                {app.status}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
