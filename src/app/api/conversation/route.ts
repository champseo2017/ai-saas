import { Configuration, OpenAIApi, CreateCompletionRequest } from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ExtendedCreateCompletionRequest extends CreateCompletionRequest {
  messages: Message[]; // ปรับเปลี่ยนประเภทข้อมูลที่นี่ตามที่ API ต้องการ
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(configuration);

export const POST = async (req: Request) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { messages } = body;
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    const response = await openAi.createCompletion({
      model: "gpt-3.5-turbo",
      messages,
    } as ExtendedCreateCompletionRequest);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
