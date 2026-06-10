
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      sector: "Aerospace AI",
      growth: 48,
    },
    {
      sector: "Enterprise Automation",
      growth: 63,
    },
    {
      sector: "Predictive Infrastructure",
      growth: 81,
    },
  ]);
}

