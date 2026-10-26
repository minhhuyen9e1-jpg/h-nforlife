import React, { useState, useEffect } from 'react';
import { 
  Users, AlertCircle, CheckCircle, Download, FileJson, 
  Search, Filter, Phone, Mail, Building, RefreshCw, ArrowUpDown
} from 'lucide-react';
import { LeadItem } from '../types';
import { INITIAL_LEADS } from '../data/mockData';

interface AdminDashboardSectionProps {
  onTriggerAiAdmin: (prompt: string) => void;
}

export const AdminDashboardSection: React.FC<AdminDashboardSectionProps> = ({
  onTriggerAiAdmin
}) => {
  const [leads, setLeads] = useState<LeadItem[]>(INITIAL_LEADS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [sortByPriority, setSortByPriority] = useState(true);

  // Fetch leads from backend
  const fetchLeads = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const data = await res.json();
        if (data.leads && data.leads.length > 0) {
          setLeads(data.leads);
        }
      }
    } catch (e) {
      console.warn('Backend fetch failed, using local leads', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (leadId: string, newStatus: LeadItem['status']) => {
    // Update local state immediately
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));

    try {
      await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {
      console.error('Update status error', e);
    }
  };

  // Filter & Sort leads
  const filteredLeads = leads
    .filter(l => {
      const matchesSearch = 
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.phone.includes(searchQuery) ||
        l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.note.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTrack = selectedTrackFilter === 'all' || l.track === selectedTrackFilter;
      const matchesStatus = selectedStatusFilter === 'all' || l.status === selectedStatusFilter;

      return matchesSearch && matchesTrack && matchesStatus;
    })
    .sort((a, b) => {
      if (sortByPriority) {
        const priorityOrder: Record<string, number> = { 'Khẩn cấp': 1, 'Cao': 2, 'Trung bình': 3 };
        const pA = priorityOrder[a.priority] || 4;
        const pB = priorityOrder[b.priority] || 4;
        if (pA !== pB) return pA - pB;
      }
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['ID', 'Họ Tên', 'SĐT/Zalo', 'Email', 'Gói Track', 'Đợt Wave', 'Trạng Thái', 'Mức Ưu Tiên', 'Ghi Chú Nhu Cầu'];
    const rows = filteredLeads.map(l => [
      l.id,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.track}"`,
      `"${l.wave}"`,
      `"${l.status}"`,
      `"${l.priority}"`,
      `"${l.note.replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `HN_Leads_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics
  const totalCount = leads.length;
  const urgentCount = leads.filter(l => l.priority === 'Khẩn cấp' || l.status === 'Cần gọi ngay').length;
  const approvedCount = leads.filter(l => l.status === 'Đã duyệt').length;
  const estimatedRevenue = approvedCount * 2790000;

  return (
    <section id="admin" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-1">
              <span>Hệ Thống Quản Trị & Ban Điều Phối</span>
              <span aria-hidden="true">·</span>
              <span>Cơ Chế Phân Bổ TNVs Miền Trung</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
              Bảng Điều Phối Leads & Hồ Sơ Ứng Viên
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Tự động phân loại ưu tiên cao nhất cho các đơn sắp tới ngày chạy Wave hoặc có yêu cầu khẩn cấp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={fetchLeads}
              className="p-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Làm mới dữ liệu"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Làm mới</span>
            </button>

            <button
              onClick={() => setShowJsonModal(true)}
              className="px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <FileJson className="w-3.5 h-3.5 text-sky-700" />
              <span>Xuất JSON</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải File CSV</span>
            </button>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Tổng Số Hồ Sơ Leads</span>
              <Users className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-2xl font-black text-slate-900 font-display font-mono-num">
              {totalCount}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Từ các trường ĐH miền Trung
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Đơn Cần Gọi Ngay (Khẩn cấp)</span>
              <AlertCircle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-2xl font-black text-rose-600 font-display font-mono-num">
              {urgentCount}
            </div>
            <div className="text-[11px] text-rose-600 font-medium mt-0.5">
              Ưu tiên liên hệ trong 24 giờ
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Đã Duyệt & Ký Hợp Đồng</span>
              <CheckCircle className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-emerald-700 font-display font-mono-num">
              {approvedCount}
            </div>
            <div className="text-[11px] text-emerald-700 font-medium mt-0.5">
              Đã kích hoạt bảo hiểm du lịch
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Doanh Thu Ước Tính (2.790k)</span>
              <Building className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl font-black text-slate-900 font-display font-mono-num">
              {(estimatedRevenue / 1000000).toFixed(1)} triệu đ
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Từ các TNV đã duyệt chính thức
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-4 rounded-t-xl border border-slate-200 border-b-0 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm theo tên, SĐT, email, ghi chú..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 focus:bg-white text-slate-900"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedTrackFilter}
                onChange={(e) => setSelectedTrackFilter(e.target.value)}
                className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-600"
              >
                <option value="all">Tất cả Track</option>
                <option value="EduTrack">EduTrack</option>
                <option value="EcoTrack">EcoTrack</option>
                <option value="HeritageTrack">HeritageTrack</option>
              </select>

              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-1 focus:ring-sky-600"
              >
                <option value="all">Tất cả Trạng thái</option>
                <option value="Cần gọi ngay">Cần gọi ngay</option>
                <option value="Đã liên hệ">Đã liên hệ</option>
                <option value="Đã duyệt">Đã duyệt</option>
                <option value="Hủy">Hủy</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSortByPriority(!sortByPriority)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                sortByPriority ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-600'
              }`}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>{sortByPriority ? 'Ưu tiên khẩn cấp trước' : 'Mới nhất trước'}</span>
            </button>

            <button
              onClick={() => onTriggerAiAdmin('Phân tích toàn bộ danh sách leads hiện tại và xuất danh sách các đơn cần gọi gấp')}
              className="px-3 py-1.5 text-xs font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Hỏi AI Điều Phối
            </button>
          </div>
        </div>

        {/* Lead Table Container */}
        <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                <th className="p-3 whitespace-nowrap">Ứng Viên</th>
                <th className="p-3 whitespace-nowrap">Liên Hệ</th>
                <th className="p-3 whitespace-nowrap">Gói Track</th>
                <th className="p-3 whitespace-nowrap">Đợt Wave</th>
                <th className="p-3 whitespace-nowrap">Ưu Tiên</th>
                <th className="p-3 whitespace-nowrap">Trạng Thái</th>
                <th className="p-3 min-w-[220px]">Ghi Chú Nhu Cầu</th>
                <th className="p-3 whitespace-nowrap text-right">Hành Động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-slate-500">
                    Không tìm thấy ứng viên nào phù hợp với bộ lọc.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => {
                  const isUrgent = lead.priority === 'Khẩn cấp';

                  return (
                    <tr
                      key={lead.id}
                      className={`hover:bg-slate-50/80 transition-colors ${
                        isUrgent ? 'bg-rose-50/30' : ''
                      }`}
                    >
                      {/* Name & Uni */}
                      <td className="p-3 whitespace-nowrap">
                        <div className="font-bold text-slate-900">{lead.name}</div>
                        <div className="text-[11px] text-slate-500">{lead.university || 'Sinh viên'}</div>
                      </td>

                      {/* Contact */}
                      <td className="p-3 whitespace-nowrap font-mono-num">
                        <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{lead.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <span>{lead.email}</span>
                        </div>
                      </td>

                      {/* Track */}
                      <td className="p-3 whitespace-nowrap">
                        <span className="font-semibold text-slate-900">
                          {lead.track}
                        </span>
                      </td>

                      {/* Wave */}
                      <td className="p-3 whitespace-nowrap">
                        <div className="text-slate-800 font-medium">{lead.wave.split(' - ')[0]}</div>
                        <div className="text-[11px] text-slate-500">{lead.wave.split(' - ')[1]?.split(' (')[0]}</div>
                      </td>

                      {/* Priority */}
                      <td className="p-3 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold ${
                            lead.priority === 'Khẩn cấp'
                              ? 'bg-rose-100 text-rose-800'
                              : lead.priority === 'Cao'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {lead.priority}
                        </span>
                      </td>

                      {/* Status Dropdown */}
                      <td className="p-3 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value as any)}
                          className={`text-xs rounded-lg px-2 py-1 font-semibold border cursor-pointer ${
                            lead.status === 'Cần gọi ngay'
                              ? 'bg-rose-50 text-rose-700 border-rose-200'
                              : lead.status === 'Đã liên hệ'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : lead.status === 'Đã duyệt'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-50 text-slate-600 border-slate-200'
                          }`}
                        >
                          <option value="Cần gọi ngay">Cần gọi ngay</option>
                          <option value="Đã liên hệ">Đã liên hệ</option>
                          <option value="Đã duyệt">Đã duyệt (Ký HĐ)</option>
                          <option value="Hủy">Đã hủy</option>
                        </select>
                      </td>

                      {/* Notes */}
                      <td className="p-3 text-slate-700 leading-relaxed text-[11px]">
                        <p className="line-clamp-2" title={lead.note}>
                          {lead.note}
                        </p>
                      </td>

                      {/* Quick Call Action */}
                      <td className="p-3 whitespace-nowrap text-right">
                        <a
                          href={`tel:${lead.phone}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 rounded border border-sky-200 transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Gọi Zalo</span>
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Modal: JSON Output for Coordinator */}
        {showJsonModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FileJson className="w-5 h-5 text-sky-700" />
                  <h3 className="text-base font-bold text-slate-900 font-display">
                    Cấu Trúc JSON Chuẩn Ban Điều Phối H&N
                  </h3>
                </div>
                <button
                  onClick={() => setShowJsonModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="my-4">
                <p className="text-xs text-slate-600 mb-2">
                  Cấu trúc chuẩn theo đặc tả: <code className="bg-slate-100 px-1 py-0.5 rounded text-sky-800">[Tên] | [SĐT/Zalo] | [Email] | [Gói Track] | [Đợt Wave] | [Trạng thái] | [Ghi chú nhu cầu]</code>
                </p>
                <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs font-mono overflow-x-auto max-h-[450px]">
                  {JSON.stringify(
                    leads.map(l => ({
                      ten: l.name,
                      sdt_zalo: l.phone,
                      email: l.email,
                      goi_track: l.track,
                      dot_wave: l.wave,
                      trang_thai: l.status,
                      muc_uu_tien: l.priority,
                      ghi_chu_nhu_cau: l.note
                    })),
                    null,
                    2
                  )}
                </pre>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-mono">
                  Tổng {leads.length} bản ghi
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(leads, null, 2));
                    alert('Đã sao chép toàn bộ dữ liệu JSON vào bộ nhớ tạm!');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg cursor-pointer"
                >
                  Sao Chép JSON
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
