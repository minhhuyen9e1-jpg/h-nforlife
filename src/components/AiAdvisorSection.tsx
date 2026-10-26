import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, ShieldAlert, RefreshCw, Copy, Check, Globe } from 'lucide-react';
import { ChatMessage, LanguageType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface AiAdvisorSectionProps {
  initialMode?: 'user' | 'admin';
  isPublicUserOnly?: boolean;
  onOpenRegisterWithInfo?: (info: { track?: string; wave?: string; name?: string }) => void;
}

const WELCOME_MESSAGES: Record<LanguageType, string> = {
  vi: `Chào bạn! Mình là Trí tuệ Nhân tạo Điều hành & Tư vấn của **H&N Miền Trung** 🌿

Khẩu hiệu của chúng mình là: *"It’s not 4 weeks in a life, it’s a life in 4 weeks” – Trải nghiệm bản địa, đọng lại giá trị.*

Đến với H&N, bạn sẽ được trải nghiệm chương trình tình nguyện chuẩn quốc tế với mức phí sinh viên trọn gói **2.790.000 VNĐ / EP / 30 ngày** (~93.000 VNĐ/ngày; 6h/ngày Mon–Sat), đối tác địa phương (OPs) tài trợ 100% ăn ở, bảo hiểm du lịch PVI/Bảo Việt (30M–50M), bảo hộ pháp lý 2 chiều an toàn tuyệt đối và Local Buddy đồng hành 24/7.

Bạn có thể chia sẻ với mình chuyên ngành, sở thích hoặc những băn khoăn về chi phí, an toàn để mình định hướng Track phù hợp nhất cho bạn nhé!`,
  en: `Hello! I am the AI Operating Coordinator of **H&N Central Vietnam** 🌿

Our motto: *"It’s not 4 weeks in a life, it’s a life in 4 weeks” – Local immersion, lasting value.*

Experience our international-standard volunteer program with an all-inclusive student fee of **2,790,000 VNĐ / EP / 30 days** (~93,000 VNĐ/day; 6h/day Mon–Sat). Local Partners (OPs) sponsor 100% accommodation and 3 meals/day, domestic travel accident insurance PVI/Bao Viet (30M–50M VNĐ) is included, alongside 24/7 on-site Local Buddy support.

Feel free to ask in English about our 3 Tracks (EduTrack, EcoTrack, HeritageTrack), cohort capacity (4-8 EPs), or cancellation policies!`
};

const DEFAULT_ADMIN_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-welcome-admin',
    role: 'assistant',
    content: `Xin chào Quản trị viên / Ban Điều hành H&N! Hệ thống Điều hành & Vận hành 75 ngày tự động đã sẵn sàng.

Các thông số điều phối hiện tại:
- **Mức phí:** 2.790.000 VNĐ / EP / 30 ngày (Lịch 6h/ngày Thứ Hai – Thứ Bảy).
- **Quy mô đợt:** Giới hạn nghiêm ngặt 04 – 08 EPs/đợt.
- **Điểm hòa vốn (BEP):** 1.87 EPs/đợt (~02 EPs). Ngưỡng xuất phát chuẩn: 06 – 08 EPs.
- **Quy trình 75 ngày:** T-45..T-30 (MOU) -> T-30..T-20 (Duyệt <=48h) -> T-20..T-15 (Ký & thu phí) -> T-07..D-Day (IPS & PVI) -> D-Day..Day 30 (Field 6h/ngày).
- **Quản trị thời tiết SLA >= 50%:** Tháng 10-12 dừng tuyến biển đảo Cù Lao Chàm/Lý Sơn, chuyển sang EduTrack & HeritageTrack đô thị Đà Nẵng, Tam Kỳ, Hội An.

Bạn có thể yêu cầu:
- Báo cáo phân tích leads và các đơn ưu tiên cao nhất
- Xuất bảng danh sách ứng viên theo định dạng chuẩn H&N
- Xuất cấu trúc JSON điều phối chuẩn`,
    timestamp: 'Vừa xong'
  }
];

export const AiAdvisorSection: React.FC<AiAdvisorSectionProps> = ({
  initialMode = 'user',
  isPublicUserOnly = false,
  onOpenRegisterWithInfo
}) => {
  const { lang, setLang, t } = useLanguage();
  const [mode, setMode] = useState<'user' | 'admin'>(isPublicUserOnly ? 'user' : initialMode);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome-user',
      role: 'assistant',
      content: WELCOME_MESSAGES[lang] || WELCOME_MESSAGES['vi'],
      timestamp: lang === 'en' ? 'Just now' : 'Vừa xong'
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === 'user' && messages.length <= 1) {
      setMessages([
        {
          id: `msg-welcome-user-${lang}`,
          role: 'assistant',
          content: WELCOME_MESSAGES[lang],
          timestamp: lang === 'en' ? 'Just now' : 'Vừa xong'
        }
      ]);
    }
  }, [lang, mode]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleLanguageChange = (newLang: LanguageType) => {
    setLang(newLang);
    if (mode === 'user') {
      setMessages(prev => [
        ...prev,
        {
          id: `lang-switch-${Date.now()}`,
          role: 'assistant',
          content: WELCOME_MESSAGES[newLang],
          timestamp: new Date().toLocaleTimeString(newLang === 'en' ? 'en-US' : 'vi-VN', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  const handleModeChange = (newMode: 'user' | 'admin') => {
    setMode(newMode);
    if (newMode === 'admin') {
      setMessages(DEFAULT_ADMIN_MESSAGES);
    } else {
      setMessages([
        {
          id: `msg-welcome-user-${Date.now()}`,
          role: 'assistant',
          content: WELCOME_MESSAGES[lang],
          timestamp: lang === 'en' ? 'Just now' : 'Vừa xong'
        }
      ]);
    }
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text, mode })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || (lang === 'en' ? 'Information received and being processed.' : 'Hệ thống đã nhận thông tin và đang xử lý.'),
        timestamp: new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: mode === 'admin'
          ? `### [BÁO CÁO BAN ĐIỀU PHỐI H&N]
Hệ thống ghi nhận yêu cầu điều phối. Mức phí: 2.790.000 VNĐ / EP / 30 ngày. Điểm hòa vốn: 1.87 EPs (~02 EPs/đợt). Quy mô mỗi đợt 04 – 08 EPs. Vui lòng mở bảng điều hành bên dưới để phân bổ Local Buddy.`
          : lang === 'en'
          ? `Thank you for reaching out! The all-inclusive fee for **H&N Central Vietnam** is **2,790,000 VNĐ / EP / 30 days** (~93,000 VNĐ/day). Local Partners sponsor 100% accommodation and 3 meals/day, PVI/Bao Viet travel accident insurance (30M–50M), 2-way pickup from Da Nang, legal contract, and 24/7 Local Buddy support are all included. Please share your **Full Name, WhatsApp/Phone, and Target Wave** to hold your slot!`
          : `Cảm ơn bạn! Mức phí trọn gói tại H&N là **2.790.000 VNĐ / 30 ngày** (~93.000 VNĐ/ngày), đối tác địa phương tài trợ 100% ăn ở, bảo hiểm du lịch PVI/Bảo Việt (30M–50M), xe đưa đón 2 chiều từ Đà Nẵng, hợp đồng pháp lý 2 chiều và Local Buddy 24/7. Bạn hãy để lại **Họ tên, SĐT/Zalo và Đợt Wave** để Ban Điều Phối giữ slot nhé!`,
        timestamp: new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = (content: string, id: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const userQuickPromptsByLang: Record<LanguageType, string[]> = {
    vi: [
      'Gói 2.790.000 VNĐ (~93k/ngày) đã gồm những quyền lợi gì?',
      'Chính sách hoàn hủy và bồi hoàn đền bù như thế nào?',
      'Mình học Sư phạm Ngoại ngữ / CNTT thì nên chọn Track nào?',
      'Quy mô mỗi đợt bao nhiêu người và lịch trình 30 ngày ra sao?'
    ],
    en: [
      'What does the 2,790,000 VNĐ all-inclusive fee cover?',
      'What is the 4-tier cancellation and refund policy?',
      'I am interested in education/culture, which track?',
      'What is the cohort size (4-8 EPs) and schedule?'
    ]
  };

  const adminQuickPrompts = [
    'Báo cáo phân tích leads và các đơn ưu tiên cao nhất',
    'Xuất bảng danh sách ứng viên theo định dạng chuẩn H&N',
    'Kiểm tra tiến độ điểm hòa vốn (BEP 1.87 EPs) các Waves',
    'Chính sách SLA thời tiết và phương án dự phòng mưa bão'
  ];

  return (
    <section id="ai-advisor" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-2">
            <span>{t.advisor.kicker}</span>
            <span aria-hidden="true">·</span>
            <span>Bilingual (VI & EN)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            {isPublicUserOnly ? t.advisor.title : (lang === 'en' ? '24/7 Online AI Coordinator' : 'Trợ Lý AI Trực Tuyến 24/7')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.advisor.subtitle}
          </p>
        </div>

        {/* AI Chat Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[640px]">
          
          {/* Card Top Toolbar */}
          <div className="p-4 sm:px-6 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-700 text-white flex items-center justify-center shadow-sm">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-900">
                    {t.advisor.botRole}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    {t.advisor.onlineStatus}
                  </span>
                </div>
                <div className="text-xs text-slate-500">
                  {mode === 'user' 
                    ? t.advisor.userModeSubtitle
                    : t.advisor.adminModeSubtitle}
                </div>
              </div>
            </div>

            {/* Right toolbar controls: Language Switcher & Mode Switcher */}
            <div className="flex items-center gap-2">
              {/* Language Switcher: Vietnamese & English */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5" />
                {(['vi', 'en'] as LanguageType[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLanguageChange(l)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer uppercase ${
                      lang === l
                        ? 'bg-sky-700 text-white shadow-xs font-black'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {l === 'vi' ? 'VI' : 'EN'}
                  </button>
                ))}
              </div>

              {/* Segmented Mode Control - Only if not public-only */}
              {!isPublicUserOnly && (
                <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg shrink-0">
                  <button
                    onClick={() => handleModeChange('user')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      mode === 'user'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {t.advisor.tabUser}
                  </button>
                  <button
                    onClick={() => handleModeChange('admin')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                      mode === 'admin'
                        ? 'bg-sky-700 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{t.advisor.tabAdmin}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-sky-700 text-white flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-2xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      isAssistant
                        ? 'bg-white text-slate-800 border border-slate-200 shadow-sm'
                        : 'bg-sky-700 text-white shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-2 pb-1 border-b border-slate-100/50 text-[11px] opacity-70">
                      <span>{isAssistant ? t.advisor.botRole : (lang === 'en' ? 'You' : 'Bạn')}</span>
                      <div className="flex items-center gap-2">
                        <span>{msg.timestamp}</span>
                        {isAssistant && (
                          <button
                            onClick={() => handleCopyText(msg.content, msg.id)}
                            className="hover:opacity-100 transition-opacity cursor-pointer text-slate-400 hover:text-slate-600"
                            title={lang === 'en' ? 'Copy response' : 'Sao chép câu trả lời'}
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="whitespace-pre-line prose prose-sm max-w-none prose-slate">
                      {msg.content}
                    </div>

                    {isAssistant && onOpenRegisterWithInfo && mode === 'user' && (
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-end">
                        <button
                          onClick={() => onOpenRegisterWithInfo({})}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                          <span>{t.advisor.btnHoldSlot}</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {!isAssistant && (
                    <div className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-sky-700 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-500 shadow-sm flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-600" />
                  <span>{t.advisor.loadingText}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions */}
          <div className="p-3 bg-white border-t border-slate-100 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold shrink-0 text-[11px] uppercase">
                {t.advisor.suggestLabel}
              </span>
              <div className="flex gap-2">
                {(mode === 'user' ? userQuickPromptsByLang[lang] : adminQuickPrompts).map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors whitespace-nowrap cursor-pointer shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder={
                  mode === 'admin'
                    ? "Nhập lệnh: 'báo cáo leads', 'xuất danh sách'..."
                    : t.advisor.inputPlaceholder
                }
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
              />
              <button
                type="submit"
                disabled={!inputPrompt.trim() || isLoading}
                className="px-4 py-2.5 bg-sky-700 hover:bg-sky-800 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed shrink-0"
              >
                <span>{t.advisor.btnSend}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
