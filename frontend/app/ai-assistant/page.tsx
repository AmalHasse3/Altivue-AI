"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  role: string;
  content: string;
};

export default function AIAssistantPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const [uploadedText, setUploadedText] =
    useState("");

  const [uploadedFileName, setUploadedFileName] =
    useState("");

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function handleFileUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await fetch(
        "/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setUploadedText(data.text || "");
      setUploadedFileName(file.name);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `📄 Uploaded document: **${file.name}**\n\nDocument ready for analysis.`,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Failed to process uploaded PDF.",
        },
      ]);
    }
  }

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const userMessage = message;

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: userMessage,
      },
    ];

    setMessages(updatedMessages);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            messages: [
              ...(uploadedText
                ? [
                    {
                      role: "system",
                      content: `Document Context:\n${uploadedText}`,
                    },
                  ]
                : []),
              ...updatedMessages,
            ],
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            data.error ||
            "No response received.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Failed to connect to AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function newChat() {
    setMessages([]);
    setMessage("");
    setUploadedText("");
    setUploadedFileName("");
  }

  return (
    <div className="flex flex-col h-screen bg-[#020B3A] text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-bold">
          Altivue AI Assistant
        </h1>

        <div className="flex gap-3">
          <label className="px-5 py-3 bg-green-600 rounded-xl hover:bg-green-700 cursor-pointer">
            Upload PDF
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={newChat}
            className="px-5 py-3 bg-gray-700 rounded-xl hover:bg-gray-600"
          >
            + New Chat
          </button>
        </div>
      </div>

      {uploadedFileName && (
        <div className="mb-4 text-green-400">
          📄 Loaded:
          {" "}
          {uploadedFileName}
        </div>
      )}

      <div className="flex-1 border border-gray-700 rounded-xl p-6 overflow-y-auto bg-[#01082E]">
        {messages.length === 0 && (
          <div className="text-gray-400">
            Start a conversation with Altivue AI...
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className="mb-8"
          >
            <div
              className={`font-bold text-2xl mb-2 ${
                msg.role === "user"
                  ? "text-blue-400"
                  : "text-green-400"
              }`}
            >
              {msg.role === "user"
                ? "You"
                : "Altivue AI"}
            </div>

            <div className="text-lg leading-relaxed">
              <ReactMarkdown>
                {msg.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {loading && (
          <div className="mb-8">
            <div className="font-bold text-2xl text-green-400 mb-2">
              Altivue AI
            </div>

            <div className="animate-pulse text-gray-300">
              Altivue AI is thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex gap-4">
        <textarea
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Ask about markets, cybersecurity, aviation, startups, strategy, or uploaded documents..."
          className="flex-1 h-28 p-4 rounded-xl bg-black border border-gray-700 resize-none text-white"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 font-semibold disabled:opacity-50"
        >
          {loading
            ? "Thinking..."
            : "Send"}
        </button>
      </div>
    </div>
  );
}
