import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();

    if (!apiKey) {
      throw new Error("VITE_GEMINI_API_KEY environment variable is required.");
    }

    aiClient = new GoogleGenAI({ apiKey });
  }

  return aiClient;
};

export const generateAIResponse = async (
  prompt: string,
  systemInstruction?: string
): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction:
          systemInstruction ||
          "Ban la tro ly AI chuyen nghiep cua CJCC. Hay tra loi ngan gon, ro rang, huu ich va mang tinh xay dung.",
      },
    });

    return response.text || "Xin loi, toi khong the tao cau tra loi ngay luc nay.";
  } catch (error) {
    console.error("Gemini API error:", error);

    if (error instanceof Error && error.message.includes("VITE_GEMINI_API_KEY")) {
      return "He thong AI chua duoc cau hinh. Hay them VITE_GEMINI_API_KEY vao file .env.local.";
    }

    return "He thong AI dang ban. Vui long thu lai sau.";
  }
};
