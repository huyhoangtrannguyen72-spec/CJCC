import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { generateAIResponse } from '../services/geminiService';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Xin chào! Tôi là trợ lý ảo của CLB Báo chí Doanh nghiệp. Tôi có thể giúp gì cho bạn về quy chế, lịch học hoặc thông tin thị trường?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

const suggestions = [
    "Quy tắc ứng xử hội viên là gì?",
    "Lịch workshop tháng này?",
    "Cách đổi điểm BP-Coin?",
    "Lộ trình học AI cho người mới?"
  ];

  const handleSend = async (text: string = input) => {
    const messageText = text || input;
    if (!messageText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateAIResponse(messageText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Có lỗi xảy ra, vui lòng thử lại.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 group">
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-3 px-6 py-4 bg-[#003399] border border-[#001A4D] text-white rounded-2xl shadow-2xl transition-all hover:scale-105 hover:bg-[#001A4D] active:scale-95 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div className="relative">
            <Sparkles size={20} className="text-[#00A8E0]" />
            <div className="absolute inset-0 bg-[#00A8E0] blur-md opacity-20"></div>
          </div>
          <span className="font-black text-xs uppercase tracking-widest italic">AI Consultant</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[400px] h-[600px] max-h-[85vh] bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] flex flex-col border border-slate-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white p-6 flex items-center justify-between border-b border-slate-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#003399] rounded-2xl flex items-center justify-center relative shadow-lg">
                  <Bot size={24} className="text-[#00A8E0]" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white"></div>
                </div>
                <div>
                  <h3 className="text-slate-900 font-black text-sm uppercase italic tracking-tighter">Gemini Advisor</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest opacity-60">Deep context model</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 rounded-xl">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mr-3 mt-1">
                      <Bot size={16} className="text-slate-500" />
                    </div>
                  )}
                  <div 
                    className={`
                      max-w-[85%] rounded-[1.5rem] px-5 py-3.5 text-sm font-bold italic leading-relaxed tracking-tight
                      ${msg.role === 'user' 
                        ? 'bg-[#003399] text-white rounded-tr-none shadow-xl shadow-blue-900/20' 
                        : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'}
                      ${msg.isError ? 'bg-rose-50 border-rose-100 text-rose-600' : ''}
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                   <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mr-3 mt-1">
                      <Bot size={16} className="text-slate-500" />
                   </div>
                   <div className="bg-slate-50 rounded-2xl rounded-tl-none px-5 py-3.5 border border-slate-100 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                     <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Default actions */}
            {messages.length === 1 && !isLoading && (
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                   {suggestions.map((s, i) => (
                     <button 
                       key={i}
                       onClick={() => handleSend(s)}
                       className="px-4 py-2 bg-white border border-slate-100 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all active:scale-95"
                     >
                       {s}
                     </button>
                   ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-6 bg-white border-t border-slate-50">
              <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent outline-none text-sm font-medium text-slate-800 placeholder:text-slate-400 resize-none max-h-32"
                />
                <button 
                  onClick={() => handleSend()} 
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-[#003399] hover:bg-[#F58220] text-white rounded-xl disabled:opacity-20 disabled:cursor-not-allowed transition-all active:scale-90 shadow-xl shadow-blue-900/30"
                >
                  <Send size={18} className="text-[#00A8E0]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConsultant;