import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      content: body.resume,
    });
  } catch {
    return NextResponse.json(
      { error: "Export failed" },
      { status: 500 }
    );
  }
}
