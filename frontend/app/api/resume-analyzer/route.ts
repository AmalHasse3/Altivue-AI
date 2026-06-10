import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const text = body.text.toLowerCase();

    let score = 50;

    const strengths: string[] = [];
    const weaknesses: string[] = [];

    if (text.includes("java")) {
      score += 10;
      strengths.push("Java");
    }

    if (text.includes("python")) {
      score += 10;
      strengths.push("Python");
    }

    if (text.includes("aws")) {
      score += 10;
      strengths.push("AWS");
    }

    if (!text.includes("aws")) {
      weaknesses.push("Add AWS");
    }

    score = Math.min(score, 100);

    return NextResponse.json({
      score,
      strengths,
      weaknesses,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Analysis failed" },
      { status: 500 }
    );
  }
}
