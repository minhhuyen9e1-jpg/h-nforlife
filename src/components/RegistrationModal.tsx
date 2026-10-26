import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, RefreshCw, X, Search } from 'lucide-react';
import { TRACKS_DATA, WAVES_DATA, BRAND_INFO } from '../data/mockData';
import { TrackType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: TrackType;
  initialWave?: string;
  onSuccessLeadCreated?: () => void;
  onOpenTrackingWithPhone?: (phone: string) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  initialTrack,
  initialWave,
  onSuccessLeadCreated,
  onOpenTrackingWithPhone
}) => {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    track: initialTrack || 'EduTrack',
    wave: initialWave || 'Wave 01 - Khăn Ấm Non Cao - Vùng Núi Nam Giang (Khởi hành 15/11/2026)',
    university: '',
    skills: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (initialTrack) {
      const matchedWave = initialWave || (() => {
        const found = WAVES_DATA.find(w => w.trackId === initialTrack);
        return found ? `${found.code} - ${found.name} (Khởi hành ${found.startDate})` : '';
      })();
      setFormData(prev => ({
        ...prev,
        track: initialTrack,
        wave: matchedWave || prev.wave
      }));
    } else if (initialWave) {
      setFormData(prev => ({
        ...prev,
        wave: initialWave
      }));
    }
  }, [initialTrack, initialWave]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      setErrorMessage('');
      onClose();
    }
  };

  const handleTrackChange = (newTrack: TrackType) => {
    const wavesInTrack = WAVES_DATA.filter(w => w.trackId === newTrack);
    const defaultWave = wavesInTrack.length > 0 
      ? `${wavesInTrack[0].code} - ${wavesInTrack[0].name} (Khởi hành ${wavesInTrack[0].startDate})`
      : '';
    setFormData(prev => ({
      ...prev,
      track: newTrack,
      wave: defaultWave
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error(lang === 'en' ? 'Unable to submit application. Please check your information.' : 'Không thể gửi hồ sơ. Vui lòng kiểm tra lại thông tin.');
      }

      setIsSuccess(true);
      if (onSuccessLeadCreated) {
        onSuccessLeadCreated();
      }
    } catch (err: any) {
      setErrorMessage(err.message || (lang === 'en' ? 'Network error. Please try again.' : 'Đã có lỗi xảy ra khi kết nối máy chủ.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">
              {t.modals.register.kicker}
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
              {t.modals.register.title}
            </h3>
            <div className="text-xs text-slate-500 mt-1">
              {t.modals.register.subtitle}
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="py-5 space-y-4">
            {errorMessage && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
                {errorMessage}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.modals.register.labelName} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.modals.register.placeholderName}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all"
              />
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.modals.register.labelPhone} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.modals.register.placeholderPhone}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all font-mono-num"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.modals.register.labelEmail} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.modals.register.placeholderEmail}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Track Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.modals.register.labelTrack} <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.track}
                onChange={(e) => handleTrackChange(e.target.value as TrackType)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all font-medium"
              >
                {TRACKS_DATA.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Wave Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.modals.register.labelWave} <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.wave}
                onChange={(e) => setFormData({ ...formData, wave: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all font-medium"
              >
                {WAVES_DATA.filter(w => w.trackId === formData.track).map(w => (
                  <option key={w.id} value={`${w.code} - ${w.name} (Khởi hành ${w.startDate})`}>
                    {w.code}: {w.name} — Khởi hành {w.startDate} ({w.totalSlots - w.registeredCount > 0 ? (lang === 'en' ? `Còn ${w.totalSlots - w.registeredCount} slot` : `Còn ${w.totalSlots - w.registeredCount} slot`) : (lang === 'en' ? 'Full' : 'Đã đủ')})
                  </option>
                ))}
              </select>
            </div>

            {/* University & Major */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.modals.register.labelMajor}
              </label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                placeholder={t.modals.register.placeholderMajor}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all"
              />
            </div>

            {/* Expectations / Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.modals.register.labelNotes}
              </label>
              <textarea
                rows={2}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder={t.modals.register.placeholderNotes}
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 focus:bg-white transition-all"
              />
            </div>

            {/* Reassurance Callout */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {t.modals.register.reassurance}
              </span>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                {t.modals.register.btnCancel}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>{t.modals.register.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{t.modals.register.btnSubmit}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="py-8 text-center animate-in zoom-in-95 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h4 className="text-xl font-bold text-slate-900 font-display">
              {t.modals.register.successTitle}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {lang === 'en' ? 'Thank you ' : 'Cảm ơn bạn '} 
              <strong className="text-slate-900 font-semibold">{formData.name}</strong>. 
              {t.modals.register.successDesc}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="font-bold text-slate-900">
                {lang === 'en' ? 'Your next 3 onboarding steps:' : 'Quy trình 3 bước tiếp theo của bạn:'}
              </div>
              <div className="text-slate-600">
                1. <strong>{lang === 'en' ? 'Within 24h:' : 'Trong 24h:'}</strong> {lang === 'en' ? `H&N Coordinator will contact via WhatsApp/Zalo (${formData.phone}) to schedule your orientation interview.` : `Điều phối viên H&N sẽ liên hệ qua Zalo (${formData.phone}) để xác nhận lịch phỏng vấn định hướng.`}
              </div>
              <div className="text-slate-600">
                2. <strong>{lang === 'en' ? 'Sign legal contract:' : 'Ký hợp đồng pháp lý:'}</strong> {lang === 'en' ? 'Sign digital 2-way protection contract and activate PVI/Bao Viet travel insurance.' : 'Ký kết hợp đồng điện tử bảo hộ 2 chiều và kích hoạt bảo hiểm du lịch nội địa.'}
              </div>
              <div className="text-slate-600">
                3. <strong>{lang === 'en' ? 'Prepare for departure:' : 'Chuẩn bị khởi hành:'}</strong> {lang === 'en' ? 'Receive official volunteer kit and connect with your on-site Local Buddy.' : 'Nhận Volunteer Kit độc quyền và kết nối cùng Local Buddy tại địa bàn.'}
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  const phone = formData.phone;
                  handleClose();
                  if (onOpenTrackingWithPhone) {
                    onOpenTrackingWithPhone(phone);
                  }
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg cursor-pointer shadow-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Search className="w-4 h-4" />
                <span>{t.modals.register.btnTrackNow}</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
              >
                {t.modals.register.btnClose}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
