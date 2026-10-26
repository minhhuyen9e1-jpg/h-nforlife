import React from 'react';
import { Compass, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onOpenAdminLogin?: () => void;
  onOpenTracking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminLogin, onOpenTracking }) => {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Compass className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-base tracking-tight">
                {BRAND_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 font-medium">
              "{BRAND_INFO.slogan}" — {BRAND_INFO.subSlogan}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {t.footer.desc}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              {t.footer.col1Title}
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#tracks" className="hover:text-white transition-colors">EduTrack (SDG 4 {lang === 'en' ? 'Quality Education' : 'Giáo dục'})</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">EcoTrack (SDG 14 & 15 {lang === 'en' ? 'Marine Conservation' : 'Bảo tồn'})</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">HeritageTrack (SDG 8 {lang === 'en' ? 'Living Heritage' : 'Di sản'})</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{lang === 'en' ? '2.790k Benefits & Insurance' : 'Quyền lợi 2.790k & Bảo hiểm'}</a></li>
              <li><a href="#waves" className="hover:text-white transition-colors">{lang === 'en' ? 'Wave Schedules 2026-2027' : 'Lịch các đợt Wave 2026-2027'}</a></li>
              {onOpenTracking && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenTracking}
                    className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer text-left"
                  >
                    🔍 {t.footer.trackingLink}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Contact & Legal */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              {t.footer.col2Title}
            </div>
            <div className="space-y-1.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{lang === 'en' ? 'Headquarters: Hai Chau District, Da Nang City, Vietnam' : 'Trụ sở điều phối: Quận Hải Châu, TP. Đà Nẵng'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Hotline / Zalo: 0905 123 456 ({lang === 'en' ? '24/7 Support' : 'Hỗ trợ 24/7'})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>dieuphoi@hn-mientrung.edu.vn</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{lang === 'en' ? 'Verified PVI/Bao Viet Travel Insurance' : 'Bảo hiểm du lịch nội địa được bảo chứng'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 gap-4">
          <div>
            {t.footer.rights}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#pricing" className="hover:text-slate-400 transition-colors">
              {lang === 'en' ? 'Terms of Service' : 'Điều khoản dịch vụ'}
            </a>
            <span>·</span>
            <a href="#pricing" className="hover:text-slate-400 transition-colors">
              {lang === 'en' ? '2-Way Legal Protection' : 'Chính sách bảo hộ pháp lý 2 chiều'}
            </a>
            <span>·</span>
            <button
              onClick={onOpenAdminLogin}
              className="hover:text-slate-200 text-slate-400 underline transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Internal Coordinator Portal' : 'Cổng điều phối nội bộ'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
