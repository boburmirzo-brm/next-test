import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  console.log("ok");

  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const data = await res.json();
  

  const response = NextResponse.json({ success: true });
  response.cookies.set("token", data.accessToken, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
