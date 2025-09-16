import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const res = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  
  const data = await res.json();
  const nextResponse = NextResponse.json(data);

  if (res.status === 401 || res.status === 403) {
    nextResponse.cookies.set("token", "", { maxAge: 0 });
  }

  return nextResponse
}
