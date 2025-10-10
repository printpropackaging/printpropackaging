import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { secret, tag } = body;

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    if (!tag) {
      return NextResponse.json({ message: "Tag is required" }, { status: 400 });
    }

    // Revalidate the specific tag
    revalidateTag(tag);

    return NextResponse.json({
      message: `Revalidated tag: ${tag}`,
      revalidated: true,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
