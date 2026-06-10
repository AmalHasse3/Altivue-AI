import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const text = body.profile || "";

    const suggestions = [];

    if (!text.includes("Software Engineer")) {
      suggestions.push(
        "Add Software Engineer to your headline."
      );
    }

    if (!text.includes("AWS")) {
      suggestions.push(
        "Mention AWS certifications and cloud skills."
      );
    }

    if (!text.includes("GitHub")) {
      suggestions.push(
        "Add your GitHub portfolio."
      );
    }

    if (!text.includes("Projects")) {
      suggestions.push(
        "Showcase technical projects."
      );
    }

    return NextResponse.json({
      score: 92,
      headline:
        "Software Engineer | AI | Cloud Computing | Cybersecurity",
      suggestions,
    });
  } catch {
    return NextResponse.json(
      { error: "Optimization failed" },
      { status: 500 }
    );
  }
}
