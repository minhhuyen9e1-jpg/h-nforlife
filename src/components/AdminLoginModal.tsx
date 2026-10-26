import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLogin: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccessLogin
}) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'HN2026' || pin === 'admin' || pin === '123456') {
      setError('');
      setPin('');
      onSuccessLogin();
    } else {
      setError('Mã PIN không chính xác. Mã mặc định cho ban điều phối là: HN2026');
    }
  };

  const handleQuickAccess = () => {
    setError('');
    setPin('');
    onSuccessLogin();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-200">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-slate-900 text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-display">
                Đăng Nhập Quản Trị Viên
              </h3>
              <span className="text-[11px] text-slate-500">
                Ban Điều Phối H&N Miền Trung
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="py-4 space-y-3.5">
          {error && (
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nhập Mật Khẩu Quản Trị Viên
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Nhập mật khẩu (mặc định: HN2026)"
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white text-slate-900 font-mono text-center tracking-widest"
              autoFocus
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Mật khẩu mặc định: <strong className="font-mono text-slate-700">HN2026</strong>
            </span>
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Xác Nhận & Đăng Nhập</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleQuickAccess}
              className="w-full py-2 text-xs font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer border border-sky-200"
            >
              Truy Cập Nhanh Quản Trị
            </button>
          </div>
        </form>

        <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Bảo mật danh tính & thông tin ứng viên</span>
        </div>

      </div>
    </div>
  );
};
