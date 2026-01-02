
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Zap, RefreshCw, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AISupport: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm Zeus AI. How can I help you with your hosting infrastructure today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are Zeus AI, a specialized technical support engineer for ZEUS HOSTING. You help users with Nginx, PHP, WordPress, SSL, and server optimization. Keep answers concise, professional, and tailored to the Zeus Hosting architecture (Firebase + VPS workers). Highlight that we support MTN MoMo payments.",
        }
      });

      const aiText = response.text || "I'm having trouble connecting to my knowledge base. Please try again later.";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Service temporarily unavailable. Please check your network connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">AI Assistant</h1>
          <p className="text-slate-400 text-sm">Real-time technical help for your cloud journey.</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Knowledge Base Active</span>
        </div>
      </div>

      <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-3xl flex flex-col overflow-hidden">
        {/* Chat Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${
                m.role === 'assistant' ? 'bg-sky-500/10 text-sky-400' : 'bg-slate-800 text-slate-400'
              }`}>
                {m.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === 'assistant' 
                  ? 'bg-slate-800/50 text-slate-200 border border-slate-700/50' 
                  : 'bg-sky-500 text-white font-medium'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center animate-spin">
                <RefreshCw size={20} />
              </div>
              <div className="bg-slate-800/50 text-slate-400 p-4 rounded-2xl text-xs font-medium border border-slate-700/50">
                Zeus AI is thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/50">
          <div className="relative flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Ask about Nginx configs, PHP memory limits, or WP migrations..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-sm text-slate-200 outline-none focus:border-sky-500/50 transition-all shadow-inner"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-sky-500 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-600 p-4 rounded-2xl text-white transition-all shadow-lg shadow-sky-500/10"
            >
              <Send size={20} />
            </button>
          </div>
          <p className="mt-4 text-[10px] text-center text-slate-500 flex items-center justify-center gap-1.5 uppercase tracking-widest font-bold">
            <Zap size={10} className="text-yellow-400" /> Powered by Gemini 3 Flash Edge
          </p>
        </div>
      </div>
    </div>
  );
};

export default AISupport;
