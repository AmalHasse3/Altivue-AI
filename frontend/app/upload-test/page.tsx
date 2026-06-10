"use client";

import { useState } from "react";

export default function UploadTest() {
  const [file, setFile] = useState<File | null>(null);

  async function uploadFile() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        S3 Upload Test
      </h1>

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <button
        onClick={uploadFile}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Upload
      </button>
    </div>
  );
}
