import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { prompt } = await req.json();
  const apiKey = process.env.PPLX_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Missing PPLX_API_KEY" }, { status: 400 });
  const r = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ model: "sonar-pro", messages: [{ role: "user", content: prompt }] })
  });
  const data = await r.json();
  return NextResponse.json(data);
}
