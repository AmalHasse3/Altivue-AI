import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { architecture } = await req.json();

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7,
        max_tokens: 1500,
        messages: [
          {
            role: "system",
            content: `
You are a Senior Cloud Architect.

Analyze the user's architecture and provide:

# Architecture Score (0-100)

# AWS Recommendations
- EC2
- Lambda
- S3
- CloudFront
- RDS
- DynamoDB
- IAM

# Docker Recommendations

# Kubernetes Recommendations

# Security Improvements

# Cost Optimization

# Scalability Recommendations

Use markdown formatting.
`,
          },
          {
            role: "user",
            content: architecture,
          },
        ],
      });

    return NextResponse.json({
      result:
        completion.choices[0].message.content ||
        "No analysis generated.",
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error.message ||
          "Cloud analysis failed.",
      },
      {
        status: 500,
      }
    );
  }
}
