import React, { useState } from 'react';
import { 
  Bus, Home, Utensils, PackageCheck, ShieldCheck, FileText, Award, 
  CheckCircle2, ArrowRight, Eye, Shield, Users, BadgePercent, AlertTriangle, RefreshCw
} from 'lucide-react';
import { CONTRACT_PREVIEW_TERMS } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';

interface PricingBenefitsSectionProps {
  onOpenRegister: () => void;
}

export const PricingBenefitsSection: React.FC<PricingBenefitsSectionProps> = ({
  onOpenRegister
}) => {
  const { t } = useLanguage();
  const [showContractModal, setShowContractModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0: return <Home className="w-5 h-5 text-emerald-700" />;
      case 1: return <Bus className="w-5 h-5 text-sky-700" />;
      case 2: return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      case 3: return <PackageCheck className="w-5 h-5 text-sky-700" />;
      case 4: return <Users className="w-5 h-5 text-sky-700" />;
      case 5: return <FileText className="w-5 h-5 text-sky-700" />;
      case 6: return <Award className="w-5 h-5 text-amber-600" />;
      case 7: return <BadgePercent className="w-5 h-5 text-sky-700" />;
      default: return <CheckCircle2 className="w-5 h-5 text-sky-700" />;
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-2">
            <span>{t.pricing.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* B2B2C Cooperation Structure Banner */}
        <div className="mb-12 bg-white rounded-2xl border border-sky-100 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-sky-600" />
            <span>{t.pricing.mouTitle}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase mb-2">
                <Home className="w-4 h-4 text-emerald-600" />
                <span>{t.pricing.opsTitle}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{t.pricing.opsItem1}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{t.pricing.opsItem2}</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase mb-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>{t.pricing.hnTitle}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>{t.pricing.hnItem1}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>{t.pricing.hnItem2}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>{t.pricing.hnItem3}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>{t.pricing.hnItem4}</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase mb-2">
                <Bus className="w-4 h-4 text-slate-600" />
                <span>{t.pricing.epTitle}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-start gap-1.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>{t.pricing.epItem1}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>{t.pricing.epItem2}</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>{t.pricing.epItem3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2-Column: Left (Package Pricing & Inclusions) + Right (75-Day Lifecycle) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: All-inclusive Package Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
                  {t.pricing.feeTitle}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-display font-mono-num">
                    2.790.000 VNĐ
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {t.pricing.feeDaily}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {t.pricing.feeSchedule}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowContractModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t.pricing.btnViewContract}</span>
                </button>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors border border-amber-200 cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.pricing.btnViewCert}</span>
                </button>
              </div>
            </div>

            <div className="pt-6">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                {t.pricing.inclusionsTitle}
              </div>

              <div className="space-y-4">
                {t.pricing.inclusions.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-slate-100 shrink-0 mt-0.5">
                      {getBenefitIcon(idx)}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        {b.title}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {b.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  {t.pricing.cohortNote}
                </div>
                <button
                  onClick={onOpenRegister}
                  className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>{t.pricing.btnRegisterSlot}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 75-Day Lifecycle (5 Stages) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-1">
              <span>{t.pricing.pipelineKicker}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-6">
              {t.pricing.pipelineTitle}
            </h3>

            <div className="space-y-5 relative">
              {t.pricing.phases.map((phase, pIdx) => (
                <div key={pIdx} className="relative pl-6 border-l-2 border-sky-200">
                  <div className="absolute -left-2 top-0.5 w-3.5 h-3.5 rounded-full bg-sky-600 ring-4 ring-white" />
                  
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono font-bold text-sky-700">{phase.phase}</span>
                    <span className="text-slate-500 font-mono text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">
                      {phase.duration}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {phase.title}
                  </div>
                  
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Weather Risk Management Callout */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-amber-900">
                  {t.pricing.weatherTitle}
                </div>
                <div className="text-xs text-amber-800/90 mt-1 leading-relaxed">
                  {t.pricing.weatherDesc}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Section: Cancellation, Refund & Compensation Policy */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
                <RefreshCw className="w-4 h-4 text-sky-600" />
                <span>{t.pricing.cancellationKicker}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-1">
                {t.pricing.cancellationTitle}
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
              {t.pricing.cancellationTag}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Tier 1 */}
            <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">
                  {t.pricing.cancelTiers.t1Title}
                </div>
                <div className="text-xs text-slate-700 font-medium mb-3">
                  {t.pricing.cancelTiers.t1Desc}
                </div>
              </div>
              <div className="pt-3 border-t border-red-200/60">
                <div className="text-xs font-bold text-red-900">
                  {t.pricing.cancelTiers.t1Rate}
                </div>
                <div className="text-[11px] text-red-700 mt-1">
                  ⚡ {t.pricing.cancelTiers.t1Time}
                </div>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">
                  {t.pricing.cancelTiers.t2Title}
                </div>
                <div className="text-xs text-slate-700 font-medium mb-3">
                  {t.pricing.cancelTiers.t2Desc}
                </div>
              </div>
              <div className="pt-3 border-t border-amber-200/60">
                <div className="text-xs font-bold text-amber-900">
                  {t.pricing.cancelTiers.t2Rate}
                </div>
                <div className="text-[11px] text-amber-700 mt-1">
                  {t.pricing.cancelTiers.t2Time}
                </div>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/50 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-sky-800 uppercase tracking-wide mb-1">
                  {t.pricing.cancelTiers.t3Title}
                </div>
                <div className="text-xs text-slate-700 font-medium mb-3">
                  {t.pricing.cancelTiers.t3Desc}
                </div>
              </div>
              <div className="pt-3 border-t border-sky-200/60">
                <div className="text-xs font-bold text-sky-900">
                  {t.pricing.cancelTiers.t3Rate}
                </div>
                <div className="text-[11px] text-sky-700 mt-1">
                  {t.pricing.cancelTiers.t3Time}
                </div>
              </div>
            </div>

            {/* Tier 4 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  {t.pricing.cancelTiers.t4Title}
                </div>
                <div className="text-xs text-slate-600 font-medium mb-3">
                  {t.pricing.cancelTiers.t4Desc}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-800">
                  {t.pricing.cancelTiers.t4Rate}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {t.pricing.cancelTiers.t4Time}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Legal Contract 2-Way Protection Preview */}
        {showContractModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold text-sky-700 uppercase">
                    {t.modals.contract.headerKicker}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mt-1">
                    {t.modals.contract.headerTitle}
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {t.modals.contract.headerSub}
                  </div>
                </div>
                <button
                  onClick={() => setShowContractModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-4">
                {CONTRACT_PREVIEW_TERMS.map((term, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      {term.article}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {term.content}
                    </div>
                  </div>
                ))}

                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-xs text-emerald-800">
                  {t.modals.contract.footerNote}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowContractModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  {t.modals.contract.btnClose}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Certificate of Social Leadership Preview */}
        {showCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-700 uppercase">
                    {t.modals.cert.headerKicker}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5">
                    {t.modals.cert.headerTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Certificate Mockup Frame */}
              <div className="my-5 p-6 rounded-xl border-4 border-double border-amber-300 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 text-center shadow-inner">
                <div className="text-[11px] uppercase tracking-widest text-slate-500 font-serif">
                  {t.modals.cert.certSubtitle}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-serif italic">
                  {t.modals.cert.certCertifies}
                </div>
                <div className="text-lg font-black text-slate-900 my-2 font-serif border-b border-slate-300 pb-1 max-w-xs mx-auto">
                  {t.modals.cert.certNamePlaceholder}
                </div>
                <div className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed mb-4">
                  {t.modals.cert.certBody}
                </div>

                <div className="grid grid-cols-2 gap-2 text-left text-xs text-slate-700 max-w-md mx-auto mb-5">
                  <div className="p-2 rounded bg-white border border-amber-200">
                    <span className="font-bold text-amber-800">{t.modals.cert.q1}</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-amber-200">
                    <span className="font-bold text-amber-800">{t.modals.cert.q2}</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-amber-200">
                    <span className="font-bold text-amber-800">{t.modals.cert.q3}</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-amber-200">
                    <span className="font-bold text-amber-800">{t.modals.cert.q4}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-amber-200 text-[10px] text-slate-500 font-mono">
                  <span>ID: HN-CERT-2026-XXXX</span>
                  <span>Verified by H&N Board of Directors</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowCertModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  {t.modals.cert.btnClose}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
