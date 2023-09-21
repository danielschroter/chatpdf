// /api/create-chat

import { loadS3IntoPinecone } from "@/lib/pinecone";
import { uploadToS3 } from "@/lib/s3";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  console.log("Got into route");
  try {
    const body = await req.json();
    const { file_key, file_name } = body;
    console.log(file_key, file_name);
    const pages = await loadS3IntoPinecone(file_key);
    return NextResponse.json({ pages });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
