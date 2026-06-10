import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages || [];
    const documentText =
      body.documentText || "";

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 1500,

        messages: [
          {
            role: "system",
            content: `
You are Altivue AI.

You specialize in:

- Artificial Intelligence
- Cybersecurity
- Aviation Technology
- Business Intelligence
- Startup Strategy
- Product Management
- Software Engineering
- Market Analysis

If a document has been uploaded,
use it as context when answering.

DOCUMENT:
${documentText}

Rules:
- Answer clearly and professionally.
- Use markdown formatting.
- Use headings and bullet points.
- Reference the uploaded document when relevant.
`,
          },

          ...messages,
        ],
      });

    return NextResponse.json({
      reply:
        completion.choices[0].message.content ||
        "No response generated.",
    });
  } catch (error: any) {
    console.error("OPENAI ERROR:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "AI request failed.",
      },
      {
        status: 500,
      }
    );
  }
}
