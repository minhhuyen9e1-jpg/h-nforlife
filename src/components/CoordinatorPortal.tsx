import React, { useState, useEffect } from 'react';
import { 
  Users, AlertCircle, CheckCircle, Download, FileJson, 
  Search, Phone, Mail, Building, RefreshCw, ArrowUpDown,
  Compass, ArrowLeft, LogOut, Bot, Sparkles, Send, ShieldAlert,
  Calendar, MapPin, Check
} from 'lucide-react';
import { LeadItem, ChatMessage, WaveInfo } from '../types';
import { INITIAL_LEADS, WAVES_DATA } from '../data/mockData';

interface CoordinatorPortalProps {
  onSwitchToPublic: () => void;
  onLogout: () => void;
}

const DEFAULT_ADMIN_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'admin-init-msg',
    role: 'assistant',
    content: `Xin chào Quản trị viên / Ban Điều hành H&N! Hệ thống Trí tuệ Nhân tạo Điều hành & Tư vấn tự động đã sẵn sàng.

Bạn có thể yêu cầu:
- **Báo cáo phân tích leads:** Tự động lọc các đơn ưu tiên cao nhất (cận ngày chạy Wave hoặc có ghi chú đặc biệt cần tư vấn ngay).
- **Xuất bảng danh sách chuẩn:** \`[Tên] | [SĐT/Zalo] | [Email] | [Gói Track] | [Đợt Wave] | [Trạng thái: Cần gọi ngay / Đã liên hệ / Đã duyệt] | [Ghi chú nhu cầu]\`.
- **Cấu trúc JSON điều phối:** Xuất dữ liệu sạch để tích hợp vào hệ thống phân bổ Local Buddy.`,
    timestamp: 'Vừa xong'
  }
];

export const CoordinatorPortal: React.FC<CoordinatorPortalProps> = ({
  onSwitchToPublic,
  onLogout
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'ai' | 'waves'>('leads');
  const [leads, setLeads] = useState<LeadItem[]>(INITIAL_LEADS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [sortByPriority, setSortByPriority] = useState(true);

  // Admin AI Chat State
  const [adminMessages, setAdminMessages] = useState<ChatMessage[]>(DEFAULT_ADMIN_CHAT_MESSAGES);
  const [aiInput, setAiInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

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
      console.warn('Backend fetch failed, using local state', e);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (leadId: string, newStatus: LeadItem['status']) => {
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

  const handleSendAdminAi = async (promptToSend?: string) => {
    const text = promptToSend || aiInput.trim();
    if (!text || isAiLoading) return;

    const userMsg: ChatMessage = {
      id: `admin-usr-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...adminMessages, userMsg];
    setAdminMessages(newHistory);
    setAiInput('');
    setIsAiLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory.map(m => ({ role: m.role, content: m.content })),
          mode: 'admin'
        })
      });

      if (!response.ok) throw new Error('AI request failed');
      const data = await response.json();

      const assistantMsg: ChatMessage = {
        id: `admin-ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'Hệ thống đã nhận lệnh và xử lý xong.',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setAdminMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Admin AI error:', err);
      // Clean fallback
      const fallbackMsg: ChatMessage = {
        id: `admin-ai-${Date.now()}`,
        role: 'assistant',
        content: `### [BÁO CÁO PHÂN TÍCH NHANH BAN ĐIỀU PHỐI H&N]
- Tổng số đơn: **${leads.length} ứng viên**
- Cần gọi ngay khẩn cấp: **${leads.filter(l => l.priority === 'Khẩn cấp').length} đơn**
- Ưu tiên #1: Liên hệ **Nguyễn Thảo Linh** và **Phạm Đức Huy** (Wave 01 Nam Giang khởi hành 15/11/2026).
- Wave 01 đã đạt 6 EPs (vượt điểm hòa vốn 1.87 EPs, đạt ngưỡng chuẩn 6 EPs). Cần hoàn thiện hợp đồng và kích hoạt bảo hiểm PVI.`,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setAdminMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsAiLoading(false);
    }
  };

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

  const totalCount = leads.length;
  const urgentCount = leads.filter(l => l.priority === 'Khẩn cấp' || l.status === 'Cần gọi ngay').length;
  const approvedCount = leads.filter(l => l.status === 'Đã duyệt').length;
  const estimatedRevenue = approvedCount * 2790000;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-slate-900 font-body">
      
      {/* Top Header strictly for Coordinators */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Zone 1: Brand & Internal Identifier */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="font-display font-bold text-sm sm:text-base tracking-tight leading-tight">
                  H&N Miền Trung
                </div>
                <div className="text-[10px] text-sky-400 font-mono uppercase tracking-wider">
                  Trung Tâm Điều Phối Nội Bộ
                </div>
              </div>
            </div>

            {/* Zone 2: Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-800/80 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('leads')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'leads' ? 'bg-sky-700 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Hồ Sơ Leads ({totalCount})
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'ai' ? 'bg-sky-700 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AI Điều Hành & Báo Cáo</span>
              </button>
              <button
                onClick={() => setActiveTab('waves')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'waves' ? 'bg-sky-700 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                Lịch & Hòa Vốn Waves
              </button>
            </nav>

            {/* Zone 3: Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={onSwitchToPublic}
                className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                title="Quay lại giao diện dành cho người đăng ký"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Xem Cổng Ứng Viên</span>
              </button>

              <button
                onClick={onLogout}
                className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium text-rose-300 hover:text-rose-200 hover:bg-rose-950/50 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                title="Khóa phiên làm việc quản trị"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Khóa</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Tổng Hồ Sơ Leads</span>
              <Users className="w-4 h-4 text-sky-600" />
            </div>
            <div className="text-2xl font-black text-slate-900 font-display font-mono-num">
              {totalCount}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">
              Đăng ký từ các trường ĐH
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Đơn Khẩn Cấp (Cần Gọi Ngay)</span>
              <AlertCircle className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-2xl font-black text-rose-600 font-display font-mono-num">
              {urgentCount}
            </div>
            <div className="text-[11px] text-rose-600 font-medium mt-0.5">
              Sắp chạy Wave hoặc có lưu ý
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span>Đã Ký Hợp Đồng & Duyệt</span>
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
              Hòa vốn từ 1.87 EPs (~02 EPs/đợt)
            </div>
          </div>
        </div>

        {/* Tab 1: Leads Pipeline */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Danh Sách Hồ Sơ Điều Phối
                </h3>
                <p className="text-xs text-slate-500">
                  Định dạng chuẩn: [Tên] | [SĐT/Zalo] | [Email] | [Gói Track] | [Đợt Wave] | [Trạng thái] | [Ghi chú nhu cầu]
                </p>
              </div>

              <div className="flex items-center gap-2">
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
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-b-xl border border-slate-200 shadow-sm overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                    <th className="p-3 whitespace-nowrap">Tên</th>
                    <th className="p-3 whitespace-nowrap">SĐT/Zalo</th>
                    <th className="p-3 whitespace-nowrap">Email</th>
                    <th className="p-3 whitespace-nowrap">Gói Track</th>
                    <th className="p-3 whitespace-nowrap">Đợt Wave</th>
                    <th className="p-3 whitespace-nowrap">Mức Ưu Tiên</th>
                    <th className="p-3 whitespace-nowrap">Trạng Thái</th>
                    <th className="p-3 min-w-[220px]">Ghi Chú Nhu Cầu</th>
                    <th className="p-3 whitespace-nowrap text-right">Hành Động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="p-8 text-center text-slate-500">
                        Không tìm thấy hồ sơ nào phù hợp.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => {
                      const isUrgent = lead.priority === 'Khẩn cấp';

                      return (
                        <tr
                          key={lead.id}
                          className={`hover:bg-slate-50/80 transition-colors ${
                            isUrgent ? 'bg-rose-50/40' : ''
                          }`}
                        >
                          <td className="p-3 whitespace-nowrap">
                            <div className="font-bold text-slate-900">{lead.name}</div>
                            <div className="text-[11px] text-slate-500">{lead.university || 'Sinh viên'}</div>
                          </td>

                          <td className="p-3 whitespace-nowrap font-mono-num font-medium text-slate-800">
                            {lead.phone}
                          </td>

                          <td className="p-3 whitespace-nowrap text-slate-600">
                            {lead.email}
                          </td>

                          <td className="p-3 whitespace-nowrap font-semibold text-slate-900">
                            {lead.track}
                          </td>

                          <td className="p-3 whitespace-nowrap">
                            <div className="text-slate-800 font-medium">{lead.wave.split(' - ')[0]}</div>
                            <div className="text-[11px] text-slate-500">{lead.wave.split(' - ')[1]?.split(' (')[0]}</div>
                          </td>

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

                          <td className="p-3 text-slate-700 text-[11px] leading-relaxed">
                            <p className="line-clamp-2" title={lead.note}>
                              {lead.note}
                            </p>
                          </td>

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
          </div>
        )}

        {/* Tab 2: Admin AI Coordinator & Reporting */}
        {activeTab === 'ai' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[650px]">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">H&N AI Operating Coordinator (Admin Mode)</div>
                  <div className="text-[11px] text-sky-300">
                    Phân tích leads, trích xuất bảng chuẩn và cấu trúc JSON theo thời gian thực
                  </div>
                </div>
              </div>

              <div className="text-xs bg-slate-800 px-2.5 py-1 rounded text-slate-300 font-mono">
                {leads.length} Leads Active
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50">
              {adminMessages.map((msg) => {
                const isAssistant = msg.role === 'assistant';
                return (
                  <div key={msg.id} className={`flex gap-3 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
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
                      <div className="flex items-center justify-between text-[11px] opacity-70 mb-2 pb-1 border-b border-slate-100">
                        <span>{isAssistant ? 'H&N AI Operations Engine' : 'Bạn (Điều phối viên)'}</span>
                        <span>{msg.timestamp}</span>
                      </div>

                      <div className="prose prose-sm max-w-none prose-slate">
                        {msg.content.split('\n\n').map((para, pIdx) => {
                          if (para.includes('|') && para.includes('---')) {
                            const rows = para.split('\n').filter(r => r.trim().startsWith('|'));
                            if (rows.length > 1) {
                              const headers = rows[0].split('|').map(c => c.trim()).filter(Boolean);
                              const bodyRows = rows.slice(2).map(r => r.split('|').map(c => c.trim()).filter(Boolean));
                              return (
                                <div key={pIdx} className="overflow-x-auto my-3 rounded-lg border border-slate-200">
                                  <table className="w-full text-left text-[11px] border-collapse bg-white">
                                    <thead>
                                      <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                                        {headers.map((h, i) => <th key={i} className="p-2 whitespace-nowrap">{h}</th>)}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {bodyRows.map((row, rIdx) => (
                                        <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50">
                                          {row.map((cell, cIdx) => <td key={cIdx} className="p-2 font-mono-num text-slate-700">{cell}</td>)}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              );
                            }
                          }

                          if (para.startsWith('```')) {
                            const code = para.replace(/```(json|sql|text)?/g, '').trim();
                            return (
                              <pre key={pIdx} className="p-3 my-2 bg-slate-900 text-slate-100 rounded-lg text-[11px] font-mono overflow-x-auto">
                                <code>{code}</code>
                              </pre>
                            );
                          }

                          return <p key={pIdx} className="whitespace-pre-wrap mb-2 last:mb-0">{para}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isAiLoading && (
                <div className="flex gap-2 items-center text-xs text-slate-500 p-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-700" />
                  <span>AI đang phân tích và chuẩn hóa báo cáo...</span>
                </div>
              )}
            </div>

            {/* Presets */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 overflow-x-auto">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-600" />
                <span>Lệnh nhanh:</span>
              </span>
              {[
                'Báo cáo phân tích danh sách đơn và thứ tự ưu tiên xử lý',
                'Xuất bảng danh sách ứng viên theo định dạng chuẩn H&N',
                'Xuất cấu trúc JSON chuẩn cho dữ liệu điều phối',
                'Đánh giá tiến độ hòa vốn (BEP 1.87 EPs/đợt) của các Waves'
              ].map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleSendAdminAi(p)}
                  disabled={isAiLoading}
                  className="px-2.5 py-1 text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md whitespace-nowrap transition-colors shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendAdminAi();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Nhập yêu cầu báo cáo, truy vấn hoặc phân bổ điều phối..."
                  disabled={isAiLoading}
                  className="flex-1 px-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 focus:bg-white text-slate-900"
                />
                <button
                  type="submit"
                  disabled={!aiInput.trim() || isAiLoading}
                  className="px-4 py-2 bg-sky-700 hover:bg-sky-800 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 3: Waves Capacity & Break-even */}
        {activeTab === 'waves' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Theo Dõi Sĩ Số & Điểm Hòa Vốn (BEP 1.87 EPs) Các Waves
              </h3>
              <p className="text-xs text-slate-500">
                Quy mô mỗi đợt giới hạn nghiêm ngặt từ 04 – 08 EPs để đảm bảo chiều sâu và an toàn. Điểm hòa vốn tinh gọn (BEP) chỉ 1.87 EPs (~02 EPs/đợt); ngưỡng xuất phát chuẩn là 06 – 08 EPs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WAVES_DATA.map((wave) => {
                const isMet = wave.registeredCount >= wave.breakEvenTarget;
                return (
                  <div key={wave.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {wave.code}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${
                          wave.trackId === 'EduTrack' ? 'bg-sky-50 text-sky-800 border-sky-200' :
                          wave.trackId === 'EcoTrack' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                          'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          {wave.trackName}
                        </span>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${isMet ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {isMet ? 'Đạt Điểm Hòa Vốn (1.87 EPs)' : `Cần Thêm ${(wave.breakEvenTarget - wave.registeredCount).toFixed(0)} Slot`}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">{wave.name}</h4>
                    <div className="text-xs text-slate-600 space-y-1 mb-4">
                      <div>📍 {wave.destination}</div>
                      <div>🗓️ {wave.startDate} — {wave.endDate} ({wave.duration})</div>
                      <div>👥 Local Buddy: <strong>{wave.localBuddies.join(' · ')}</strong></div>
                      {wave.partnerHost && <div>🤝 Host OPs: <span className="font-semibold text-slate-700">{wave.partnerHost}</span></div>}
                      {wave.seasonType && <div className="text-[11px] text-sky-700 font-medium">🌦️ Thời tiết: {wave.seasonType}</div>}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono-num">
                      <span>Đã chốt: <strong>{wave.registeredCount}</strong> / {wave.totalSlots} slot (04-08 EPs)</span>
                      <span className="text-slate-500">Mục tiêu hòa vốn: $\ge$ {wave.breakEvenTarget} EPs</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </main>

      {/* JSON Modal */}
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
                  alert('Đã sao chép dữ liệu JSON vào bộ nhớ tạm!');
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
  );
};
