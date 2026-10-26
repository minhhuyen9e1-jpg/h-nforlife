import React from 'react';
import { Compass, UserCheck, Search, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageType } from '../types';

interface HeaderProps {
  onOpenRegister: () => void;
  onOpenTracking: () => void;
  onOpenAiChat: (initialMode?: 'user' | 'admin') => void;
  onOpenAdminLogin: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenRegister,
  onOpenTracking,
  onOpenAiChat,
  onOpenAdminLogin,
}) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-slate-900 hover:text-sky-700 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-700 flex items-center justify-center text-white shadow-sm group-hover:bg-sky-800 transition-colors">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              {t.header.brandName}
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a
              href="#tracks"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              {t.header.navTracks}
            </a>
            <a
              href="#pricing"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              {t.header.navPricing}
            </a>
            <a
              href="#waves"
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              {t.header.navWaves}
            </a>
            <button
              onClick={() => onOpenAiChat('user')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.header.navAi}
            </button>
          </nav>

          {/* Zone 3: Language Switcher + Tracking + Admin + Register */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Global Bilingual Switcher: VI | EN */}
            <div className="flex items-center gap-0.5 p-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
              <Globe className="w-3.5 h-3.5 text-slate-400 mx-1" />
              {(['vi', 'en'] as LanguageType[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase transition-all cursor-pointer ${
                    lang === l
                      ? 'bg-sky-700 text-white shadow-xs font-black'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title={l === 'vi' ? 'Tiếng Việt' : 'English'}
                >
                  {l === 'vi' ? 'VI' : 'EN'}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenTracking}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 hover:text-sky-900 rounded-lg transition-colors flex items-center gap-1.5 border border-sky-200/80 cursor-pointer whitespace-nowrap"
              title={lang === 'en' ? 'Track application status' : 'Tra cứu tiến độ hồ sơ & vé'}
            >
              <Search className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.header.btnTracking}</span>
            </button>

            <button
              onClick={onOpenAdminLogin}
              className="hidden lg:flex px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors items-center gap-1.5 whitespace-nowrap cursor-pointer border border-slate-200"
              title={lang === 'en' ? 'Coordinator portal' : 'Cổng Ban Điều Phối'}
            >
              <UserCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>{t.header.btnAdmin}</span>
            </button>

            <button
              onClick={onOpenRegister}
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-sky-700 rounded-lg hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 shadow-sm hover:shadow cursor-pointer"
            >
              {t.header.btnApply}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
