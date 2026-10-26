import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenQuiz: () => void;
  onOpenAiChat: () => void;
  onOpenTracking?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRegister,
  onOpenQuiz,
  onOpenAiChat,
  onOpenTracking,
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
      {/* Decorative subtle geographical grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-3">
              <span>{t.hero.kicker}</span>
            </div>

            {/* Slogan & Main Display Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight font-display text-balance mb-4">
              "{t.hero.slogan}"
            </h1>
            
            <p className="text-lg sm:text-xl font-medium text-slate-700 mb-6 font-display">
              {t.hero.subSlogan}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
              {t.hero.description}
            </p>

            {/* Key Assurance Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t.hero.bullet1}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                <span>{t.hero.bullet2}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <HeartHandshake className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{t.hero.bullet3}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{t.hero.bullet4}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenRegister}
                className="px-6 py-3 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>{t.hero.btnApply}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-4 py-3 text-sm font-semibold text-sky-900 bg-sky-100 hover:bg-sky-200/80 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-sky-700" />
                <span>{t.hero.btnQuiz}</span>
              </button>

              <button
                onClick={onOpenAiChat}
                className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                {t.hero.btnAi}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between min-h-[380px]">
              
              {/* Background Map Graphic Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Top Accent Badge */}
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-300">
                  {t.hero.hubBadge}
                </span>
                <span className="text-xs font-medium text-emerald-300 bg-emerald-950/80 border border-emerald-700/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Wave 2026 - 2027
                </span>
              </div>

              {/* Central Geographic Hubs */}
              <div className="relative my-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-800/80 text-sky-200 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Nam Giang & A Lưới (Đại Ngàn)
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      EduTrack · Giáo dục thực chiến & kỹ năng số bản địa
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-800/80 text-emerald-200 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Cù Lao Chàm & Đảo Lý Sơn (Biển Đảo)
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      EcoTrack · Bảo tồn rạn san hô & đại dương không rác thải nhựa
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-800/80 text-amber-200 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Thanh Hà, Trà Quế & Zơrâm (Làng Nghề)
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      HeritageTrack · Số hóa thổ cẩm, gốm thủ công & E-commerce
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{t.hero.badgeCohort}</span>
                </span>
                <span className="font-mono text-sky-300">Da Nang Hub</span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Operational Indicator Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-r border-slate-200/80 pr-4 last:border-none">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display font-mono-num">
              {t.hero.statPrice}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {t.hero.statPriceSub}
            </div>
          </div>

          <div className="border-r border-slate-200/80 pr-4 last:border-none">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display font-mono-num">
              {t.hero.statRatio}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {t.hero.statRatioSub}
            </div>
          </div>

          <div className="border-r border-slate-200/80 pr-4 last:border-none">
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display font-mono-num">
              {t.hero.statHours}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {t.hero.statHoursSub}
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display font-mono-num">
              {t.hero.statCohort}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {t.hero.statCohortSub}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
