import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  CheckCircle2,
  Clock,
  PhoneCall,
  Calendar,
  MapPin,
  Bus,
  UserCheck,
  ShieldCheck,
  FileText,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Info,
  Utensils,
  Home,
  Check,
  AlertCircle
} from 'lucide-react';
import { LeadItem, ApplicantItinerary } from '../types';
import { getItineraryForLead, INITIAL_LEADS } from '../data/mockData';
import { useLanguage } from '../i18n/LanguageContext';

interface ApplicantTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const ApplicantTrackingModal: React.FC<ApplicantTrackingModalProps> = ({
  isOpen,
  onClose,
  initialQuery = ''
}) => {
  const { t, lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [foundLead, setFoundLead] = useState<LeadItem | null>(null);
  const [activeTab, setActiveTab] = useState<'status' | 'itinerary' | 'logistics'>('status');

  // Sync initial query if passed
  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      handleSearch(initialQuery);
    } else if (isOpen && !foundLead) {
      // Default to a realistic demo lead so the user immediately sees what the tracking looks like
      const defaultDemo = INITIAL_LEADS[2]; // Lê Hoàng Yến Vy (Đã duyệt)
      if (defaultDemo) {
        setSearchQuery(defaultDemo.phone);
        setFoundLead(defaultDemo);
      }
    }
  }, [initialQuery, isOpen]);

  if (!isOpen) return null;

  const handleSearch = async (queryToSearch?: string) => {
    const q = (queryToSearch !== undefined ? queryToSearch : searchQuery).trim();
    if (!q) {
      setErrorMessage('Vui lòng nhập Số điện thoại hoặc Mã hồ sơ (VD: 0935889900 hoặc HN-2026-003).');
      return;
    }

    setIsSearching(true);
    setErrorMessage('');

    try {
      // Attempt server search first
      const res = await fetch(`/api/leads/track?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      if (res.ok && data.success && data.lead) {
        setFoundLead(data.lead);
        setErrorMessage('');
      } else {
        // Fallback to client-side search in INITIAL_LEADS or local storage leads
        const cleanQ = q.toLowerCase().replace(/[\s.-]/g, '');
        const localMatch = INITIAL_LEADS.find((l) => {
          const cleanPhone = l.phone.toLowerCase().replace(/[\s.-]/g, '');
          const cleanId = l.id.toLowerCase().replace(/[\s.-]/g, '');
          return (
            cleanPhone === cleanQ ||
            cleanId === cleanQ ||
            cleanPhone.endsWith(cleanQ) ||
            cleanId.includes(cleanQ)
          );
        });

        if (localMatch) {
          setFoundLead(localMatch);
          setErrorMessage('');
        } else {
          setFoundLead(null);
          setErrorMessage(
            data.message || `Không tìm thấy hồ sơ nào với thông tin "${q}". Vui lòng kiểm tra lại số điện thoại.`
          );
        }
      }
    } catch (err) {
      // Offline fallback
      const cleanQ = q.toLowerCase().replace(/[\s.-]/g, '');
      const localMatch = INITIAL_LEADS.find((l) => {
        const cleanPhone = l.phone.toLowerCase().replace(/[\s.-]/g, '');
        const cleanId = l.id.toLowerCase().replace(/[\s.-]/g, '');
        return cleanPhone === cleanQ || cleanId === cleanQ || cleanPhone.endsWith(cleanQ);
      });

      if (localMatch) {
        setFoundLead(localMatch);
        setErrorMessage('');
      } else {
        setFoundLead(null);
        setErrorMessage(`Chưa tìm thấy đơn với "${q}". Bạn có thể thử số mẫu: 0935889900 hoặc 0905123456.`);
      }
    } finally {
      setIsSearching(false);
    }
  };

  const itinerary: ApplicantItinerary | null = foundLead
    ? getItineraryForLead(foundLead.track, foundLead.wave)
    : null;

  // Determine stage progress
  const getStageStatus = (stageIndex: number) => {
    if (!foundLead) return 'pending';
    const status = foundLead.status;

    if (stageIndex === 1) {
      // Stage 1: Placed ticket / registered
      return 'completed';
    }
    if (stageIndex === 2) {
      // Stage 2: Feedback & verification
      if (status === 'Cần gọi ngay') return 'in-progress';
      if (status === 'Đã liên hệ' || status === 'Đã duyệt') return 'completed';
      return 'pending';
    }
    if (stageIndex === 3) {
      // Stage 3: Contract & insurance
      if (status === 'Đã liên hệ') return 'in-progress';
      if (status === 'Đã duyệt') return 'completed';
      return 'pending';
    }
    if (stageIndex === 4) {
      // Stage 4: Ready for departure
      if (status === 'Đã duyệt') return 'completed';
      return 'pending';
    }
    return 'pending';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Top Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-700 text-white flex items-center justify-center shadow-xs">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                {t.modals.tracking.title}
              </h3>
              <p className="text-xs text-slate-500">
                {t.modals.tracking.subtitle}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={lang === 'en' ? 'Close' : 'Đóng'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Quick Fill */}
        <div className="p-4 sm:p-5 bg-white border-b border-slate-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.modals.tracking.inputPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white text-slate-900 font-medium transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-60"
            >
              {isSearching ? (lang === 'en' ? 'Searching...' : 'Đang tra cứu...') : t.modals.tracking.btnSearch}
            </button>
          </form>

          {/* Quick Demo Samples */}
          <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-600">
              {lang === 'en' ? 'Quick demo profiles:' : 'Thử nhanh hồ sơ mẫu:'}
            </span>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('0935889900');
                handleSearch('0935889900');
              }}
              className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 cursor-pointer font-medium"
            >
              0935889900 (Đã duyệt · Yến Vy)
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('0988776655');
                handleSearch('0988776655');
              }}
              className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 cursor-pointer font-medium"
            >
              0988776655 (Đã liên hệ · Minh Quân)
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('0905123456');
                handleSearch('0905123456');
              }}
              className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 cursor-pointer font-medium"
            >
              0905123456 (Cần gọi ngay · Thảo Linh)
            </button>
          </div>

          {errorMessage && (
            <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Modal Body / Results */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50 space-y-6">
          {foundLead ? (
            <>
              {/* Applicant Card Summary */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                        {foundLead.id}
                      </span>
                      <span className="text-xs text-slate-500">
                        Đăng ký lúc: {new Date(foundLead.createdAt).toLocaleDateString('vi-VN')}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 font-display mt-1">
                      {foundLead.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      SĐT Zalo: <span className="font-semibold text-slate-900">{foundLead.phone}</span> · Email: {foundLead.email}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-xs text-slate-500">Trạng thái hồ sơ:</div>
                    <div className="mt-1">
                      {foundLead.status === 'Đã duyệt' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Đã Duyệt Chính Thức · Sẵn Sàng Khởi Hành
                        </span>
                      )}
                      {foundLead.status === 'Đã liên hệ' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-sky-50 text-sky-800 border border-sky-200">
                          <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
                          Đã Liên Hệ Xác Nhận · Chờ Ký Hợp Đồng
                        </span>
                      )}
                      {foundLead.status === 'Cần gọi ngay' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                          <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                          Đã Nhận Đơn · Điều Phối Viên Sẽ Gọi Trong 24h
                        </span>
                      )}
                      {foundLead.status === 'Hủy' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-700">
                          Đã Hủy Đơn
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block mb-0.5">Gói Chuyên Môn (Track):</span>
                    <strong className="text-slate-900 font-semibold">{foundLead.track}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block mb-0.5">Đợt Đi (Wave):</span>
                    <strong className="text-slate-900 font-semibold truncate block" title={foundLead.wave}>
                      {foundLead.wave}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 block mb-0.5">Chi Phí Trọn Gói:</span>
                    <strong className="text-sky-700 font-bold">2.790.000 VNĐ / 30 ngày (~93k/ngày)</strong>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 gap-1 bg-white p-1 rounded-xl shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('status')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === 'status'
                      ? 'bg-sky-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>{t.modals.tracking.tabStatus}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('itinerary')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === 'itinerary'
                      ? 'bg-sky-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.modals.tracking.tabItinerary}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('logistics')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeTab === 'logistics'
                      ? 'bg-sky-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Bus className="w-4 h-4" />
                  <span>{t.modals.tracking.tabLogistics}</span>
                </button>
              </div>

              {/* TAB 1: 4-Step Status Pipeline */}
              {activeTab === 'status' && (
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-5">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                      Tiến Trình Xử Lý Hồ Sơ & Chuẩn Bị Khởi Hành
                    </h5>
                    <span className="text-xs text-slate-500">
                      Mô hình vận hành chuẩn quốc tế H&N Miền Trung
                    </span>
                  </div>

                  <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center ring-4 ring-white">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3.5">
                        <div className="flex items-center justify-between">
                          <h6 className="text-xs sm:text-sm font-bold text-slate-900">
                            1. Tiếp Nhận Đơn & Cấp Mã Định Danh Slot
                          </h6>
                          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            Hoàn tất
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Hệ thống H&N đã lưu hồ sơ vào hàng đợi ưu tiên của đợt <strong>{foundLead.wave}</strong>. Bạn đã giữ một trong số 12–15 suất của đợt này.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div
                        className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${
                          getStageStatus(2) === 'completed'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-500 text-white animate-pulse'
                        }`}
                      >
                        {getStageStatus(2) === 'completed' ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <PhoneCall className="w-3 h-3" />
                        )}
                      </div>
                      <div
                        className={`rounded-xl p-3.5 border ${
                          getStageStatus(2) === 'completed'
                            ? 'bg-emerald-50/60 border-emerald-200'
                            : 'bg-amber-50 border-amber-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h6 className="text-xs sm:text-sm font-bold text-slate-900">
                            2. Ban Điều Phối Phản Hồi & Tư Vấn (Trong 24h)
                          </h6>
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                              getStageStatus(2) === 'completed'
                                ? 'text-emerald-800 bg-emerald-100'
                                : 'text-amber-800 bg-amber-100'
                            }`}
                          >
                            {getStageStatus(2) === 'completed'
                              ? 'Đã gọi xác nhận'
                              : 'Đang xếp lịch gọi'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {getStageStatus(2) === 'completed' ? (
                            <>
                              Điều phối viên H&N đã liên hệ tư vấn thành công qua số Zalo <strong>{foundLead.phone}</strong>. Đã giải đáp chi tiết lịch học/thi trùng lặp và xác nhận thế mạnh cá nhân phù hợp với nhiệm vụ của Track.
                            </>
                          ) : (
                            <>
                              Điều phối viên H&N sẽ gọi điện thoại hoặc nhắn tin Zalo tới số <strong>{foundLead.phone}</strong> trong vòng 24 giờ kể từ khi đăng ký để tư vấn lịch trình, hợp đồng và giải đáp thắc mắc.
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div
                        className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${
                          getStageStatus(3) === 'completed'
                            ? 'bg-emerald-600 text-white'
                            : getStageStatus(3) === 'in-progress'
                            ? 'bg-sky-600 text-white'
                            : 'bg-slate-300 text-slate-600'
                        }`}
                      >
                        {getStageStatus(3) === 'completed' ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <FileText className="w-3 h-3" />
                        )}
                      </div>
                      <div
                        className={`rounded-xl p-3.5 border ${
                          getStageStatus(3) === 'completed'
                            ? 'bg-emerald-50/60 border-emerald-200'
                            : getStageStatus(3) === 'in-progress'
                            ? 'bg-sky-50 border-sky-200'
                            : 'bg-slate-50 border-slate-200 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h6 className="text-xs sm:text-sm font-bold text-slate-900">
                            3. Ký Hợp Đồng Bảo Hộ Pháp Lý 2 Chiều & Bảo Hiểm
                          </h6>
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                              getStageStatus(3) === 'completed'
                                ? 'text-emerald-800 bg-emerald-100'
                                : getStageStatus(3) === 'in-progress'
                                ? 'text-sky-800 bg-sky-100'
                                : 'text-slate-600 bg-slate-200'
                            }`}
                          >
                            {getStageStatus(3) === 'completed'
                              ? 'Đã kích hoạt'
                              : getStageStatus(3) === 'in-progress'
                              ? 'Đang gửi hợp đồng'
                              : 'Chờ bước 2'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Ký kết hợp đồng dịch vụ điện tử minh bạch, chi phí trọn gói 2.790.000 VNĐ cam kết không phụ thu. Bảo hiểm tai nạn du lịch nội địa PVI / Bảo Việt (hạn mức 30.000.000 – 50.000.000 VNĐ/vụ) được kích hoạt bảo vệ an toàn cho bạn.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative">
                      <div
                        className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${
                          getStageStatus(4) === 'completed'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-300 text-slate-600'
                        }`}
                      >
                        {getStageStatus(4) === 'completed' ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Bus className="w-3 h-3" />
                        )}
                      </div>
                      <div
                        className={`rounded-xl p-3.5 border ${
                          getStageStatus(4) === 'completed'
                            ? 'bg-emerald-50/60 border-emerald-200'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h6 className="text-xs sm:text-sm font-bold text-slate-900">
                            4. Sẵn Sàng Khởi Hành & Kết Nối Local Buddy
                          </h6>
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                              getStageStatus(4) === 'completed'
                                ? 'text-emerald-800 bg-emerald-100'
                                : 'text-slate-600 bg-slate-200'
                            }`}
                          >
                            {getStageStatus(4) === 'completed'
                              ? 'Sẵn sàng khởi hành'
                              : 'Đang mở'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Xem chi tiết điểm đón xe 29 chỗ tại Đà Nẵng, danh tính Local Buddy đồng hành 24/7 và giáo án/nhiệm vụ 4 tuần thực chiến ở các tab bên trên.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-start gap-2.5 text-xs text-sky-900">
                    <Info className="w-4 h-4 shrink-0 text-sky-700 mt-0.5" />
                    <div>
                      <strong>Cần hỗ trợ gấp về lịch thi hoặc thay đổi đợt Wave?</strong>
                      <div className="text-sky-800 mt-0.5">
                        Bạn có thể gọi trực tiếp Hotline điều phối viên H&N: <span className="font-bold underline">0905 123 789</span> (hỗ trợ từ 08:00 - 21:00 hàng ngày).
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: 4-Week Detailed Itinerary */}
              {activeTab === 'itinerary' && itinerary && (
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-sky-700 uppercase tracking-wider block">
                        Lộ Trình 4 Tuần Thực Chiến · Tỷ Lệ Chuẩn 65/35
                      </span>
                      <h5 className="text-base font-bold text-slate-900 font-display">
                        {itinerary.trackName}
                      </h5>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                      Địa bàn: {itinerary.destination}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {itinerary.weeks.map((week) => (
                      <div
                        key={week.weekNumber}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all space-y-2.5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200/60">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-sky-700 text-white text-xs font-bold flex items-center justify-center">
                              T{week.weekNumber}
                            </span>
                            <h6 className="text-sm font-bold text-slate-900">
                              Tuần {week.weekNumber}: {week.title}
                            </h6>
                          </div>
                          <span className="text-xs font-medium text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                            {week.ratio}
                          </span>
                        </div>

                        <div className="text-xs text-slate-600 font-medium italic">
                          Trọng tâm: {week.focus}
                        </div>

                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {week.activities.map((act, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Quyền lợi hậu trải nghiệm: Không gian Debrief Space
                    </div>
                    <p className="text-amber-800 leading-relaxed">
                      Kết thúc 30 ngày (4 tuần), bạn sẽ tham gia phiên đúc kết đa chiều Closing Showcase để phản chiếu 4 phẩm chất lãnh đạo chuẩn quốc tế (Self-Aware, Solution-Oriented, Empowering Others, World Citizen) và nhận chứng chỉ song ngữ <strong>Certificate of Social Leadership</strong> có mã tra cứu hồ sơ quốc tế.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: Logistics - Bus Pick-up Point & Local Buddy */}
              {activeTab === 'logistics' && itinerary && (
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-5">
                  <div className="pb-2 border-b border-slate-100">
                    <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                      Thông Tin Hậu Cần, Xe 29 Chỗ & Local Buddy Bản Địa
                    </h5>
                    <p className="text-xs text-slate-500">
                      Đảm bảo an toàn 2 chiều, tiện nghi sinh hoạt và hỗ trợ 24/7
                    </p>
                  </div>

                  {/* 1. Pick-up Point & Vehicle */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                      <Bus className="w-4 h-4 text-sky-700" />
                      <span>1. Điểm Đón Xe 29 Chỗ & Lịch Trình Di Chuyển</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-slate-500 block">Địa điểm tập trung chính:</span>
                        <strong className="text-slate-900 font-semibold">{itinerary.pickupPoint.location}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Loại phương tiện:</span>
                        <strong className="text-slate-900 font-semibold">{itinerary.pickupPoint.vehicleType}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Giờ tập trung điểm danh:</span>
                        <strong className="text-amber-700 font-bold">{itinerary.pickupPoint.gatherTime}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Giờ xuất phát chính thức:</span>
                        <strong className="text-emerald-700 font-bold">{itinerary.pickupPoint.departureTime}</strong>
                      </div>
                    </div>

                    <div className="text-xs bg-white p-2.5 rounded-lg border border-slate-200 text-slate-600 space-y-1">
                      <div>
                        <strong>Ghi chú tài xế:</strong> {itinerary.pickupPoint.driverNote}
                      </div>
                      <div>
                        <strong>Bãi đỗ gửi xe:</strong> {itinerary.pickupPoint.mapNote}
                      </div>
                    </div>
                  </div>

                  {/* 2. Local Buddy Contact */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                      <UserCheck className="w-4 h-4 text-sky-700" />
                      <span>2. Local Buddy Bản Địa Đồng Hành 24/7</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-white rounded-lg border border-slate-200">
                      <div>
                        <h6 className="text-sm font-bold text-slate-900">
                          {itinerary.localBuddy.name}
                        </h6>
                        <span className="text-xs text-sky-700 font-medium block">
                          {itinerary.localBuddy.role}
                        </span>
                        <p className="text-xs text-slate-500 mt-1 max-w-md">
                          {itinerary.localBuddy.bio}
                        </p>
                      </div>

                      <div className="shrink-0 flex flex-col sm:items-end gap-1">
                        <a
                          href={`tel:${itinerary.localBuddy.phone}`}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition-colors flex items-center gap-1.5"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>Gọi: {itinerary.localBuddy.phone}</span>
                        </a>
                        <span className="text-[11px] text-slate-500">
                          Zalo kết nối trước: {itinerary.localBuddy.zalo}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Accommodation & Food */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                      <Home className="w-4 h-4 text-sky-700" />
                      <span>3. Tiêu Chuẩn Homestay & 3 Bữa Ăn Địa Phương</span>
                    </div>

                    <div className="text-xs space-y-1">
                      <div>
                        <strong>Địa điểm lưu trú:</strong> {itinerary.accommodation.name} ({itinerary.accommodation.address})
                      </div>
                      <div className="text-slate-600">
                        <strong>Khẩu phần ăn:</strong> {itinerary.accommodation.mealsIncluded}
                      </div>
                    </div>

                    <ul className="text-xs space-y-1 text-slate-600 pl-4 list-disc">
                      {itinerary.accommodation.standards.map((std, i) => (
                        <li key={i}>{std}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 4. Volunteer Kit & Insurance */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-1">
                      <strong className="text-emerald-900 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                        Bảo hiểm Du Lịch Nội Địa:
                      </strong>
                      <div className="text-slate-700 font-medium">
                        {itinerary.insuranceStatus.provider}
                      </div>
                      <div className="text-slate-500">
                        Hạn mức: {itinerary.insuranceStatus.coverage}
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                        {itinerary.insuranceStatus.status}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-200 space-y-1">
                      <strong className="text-sky-900 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-sky-700" />
                        Bộ Volunteer Kit:
                      </strong>
                      <div className="text-slate-700">
                        {itinerary.kitStatus.items.join(' · ')}
                      </div>
                      <div className="text-slate-500">
                        {itinerary.kitStatus.deliveryMethod}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h5 className="text-base font-bold text-slate-800 font-display">
                Nhập số điện thoại Zalo để tra cứu hồ sơ
              </h5>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Sau khi đăng ký thành công, bạn có thể tra cứu tình trạng xác nhận vé, lịch gọi điện của ban điều phối và toàn bộ lịch trình 4 tuần tại đây.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3.5 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="text-slate-500 text-center sm:text-left">
            Ban điều phối H&N Miền Trung · Bảo hộ pháp lý 2 chiều · Hotline: <strong>0905 123 789</strong>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            Đóng Cửa Sổ
          </button>
        </div>

      </div>
    </div>
  );
};
