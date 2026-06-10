import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    behavioral: [
      "Tell me about yourself.",
      "Describe a challenging project.",
      "Tell me about a time you failed.",
      "Describe a conflict with a teammate.",
      "Tell me about a leadership experience."
    ],

    technical: [
      "Explain REST APIs.",
      "What is React?",
      "What is AWS?",
      "Explain Big-O notation.",
      "Difference between SQL and NoSQL?"
    ]
  });
}
