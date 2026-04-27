import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in the settings menu.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const generateAIResponse = async (prompt: string, systemInstruction?: string): Promise<string> => {
  try {
    const ai = getClient();
    const modelId = 'gemini-3-flash-preview'; 
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction || "Bạn là một trợ lý AI chuyên nghiệp của Câu lạc bộ Báo chí Doanh nghiệp (Business Press Club). Bạn am hiểu sâu sắc về truyền thông, kinh tế số, quản trị doanh nghiệp và kỹ năng báo chí hiện đại. Hãy trả lời ngắn gọn, súc tích, chuyên nghiệp và mang tính xây dựng.",
      },
    });

    return response.text || "Xin lỗi, tôi không thể tạo câu trả lời ngay lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (error instanceof Error && error.message.includes("GEMINI_API_KEY")) {
       return "Hệ thống AI chưa được cấu hình. Vui lòng liên hệ quản trị viên để thiết lập GEMINI_API_KEY.";
    }
    return "Hiện tại hệ thống AI đang bận. Vui lòng thử lại sau.";
  }
};
