import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { resume, jobDescription } =
      await req.json();

    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an expert recruiter.",
          },
          {
            role: "user",
            content: `
Resume:
${resume}

Job Description:
${jobDescription}

Generate a professional cover letter.
`,
          },
        ],
      });

    return NextResponse.json({
      coverLetter:
        response.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Generation failed" },
      { status: 500 }
    );
  }
}
