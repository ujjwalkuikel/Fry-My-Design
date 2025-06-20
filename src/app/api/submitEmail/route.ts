import { NextResponse } from "next/server";
import { db } from "@/lib/firebase"; // ✅ use the shared one
import { collection, addDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await addDoc(collection(db, "waitlist"), {
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ message: "Email added to waitlist" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save email" }, { status: 500 });
  }
}
