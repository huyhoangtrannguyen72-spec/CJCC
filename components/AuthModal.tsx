import React, { useState } from 'react';
import { X, Mail, Lock, User, Building, ArrowRight, CheckCircle } from 'lucide-react';
import { User as UserType } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [loading, setLoading] = useState(false);
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      
      // MOCK LOGIN LOGIC
      let role: 'ADMIN' | 'MEMBER' = 'MEMBER';
      
      // Backdoor for admin demo: email contains 'admin'
      if (email.includes('admin')) {
        role = 'ADMIN';
      }

      const mockUser: UserType = {
        id: Math.random().toString(36).substr(2, 9),
        name: isLoginView ? (email.includes('admin') ? 'Administrator' : 'Thành viên CJCC') : name,
        email: email,
        role: role,
        organization: isLoginView ? 'CJCC HQ' : org,
        avatar: `https://ui-avatars.com/api/?name=${name || 'User'}&background=random`,
        status: 'ACTIVE',
        joinedDate: new Date().toLocaleDateString('vi-VN')
      };

      onLogin(mockUser);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-10 pt-10 pb-8 text-center bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-2xl font-black italic text-[#003399] uppercase tracking-tighter mb-2">
              {isLoginView ? 'Đăng nhập Hệ thống' : 'Đăng ký Thành viên'}
            </h2>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {isLoginView 
                ? 'Chào mừng bạn trở lại với CJCC Members' 
                : 'Gia nhập mạng lưới báo chí doanh nghiệp hàng đầu'}
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLoginView && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Họ và Tên</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        required
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#003399] focus:ring-1 focus:ring-[#003399] transition-all text-sm font-bold"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Cơ quan / Doanh nghiệp</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        required
                        type="text" 
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#003399] focus:ring-1 focus:ring-[#003399] transition-all text-sm font-bold"
                        placeholder="Tòa soạn báo X / Công ty Y"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#003399] focus:ring-1 focus:ring-[#003399] transition-all text-sm font-bold"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Mật khẩu</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#003399] focus:ring-1 focus:ring-[#003399] transition-all text-sm font-bold"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-[#003399] hover:bg-[#F58220] text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-2xl shadow-blue-900/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed italic"
              >
                {loading ? (
                  'PROCESSING...'
                ) : (
                  <>
                    {isLoginView ? 'Log In' : 'Sign Up Now'}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest">
                {isLoginView ? 'Chưa có tài khoản?' : 'Đã là thành viên?'}
                <button 
                  onClick={() => setIsLoginView(!isLoginView)}
                  className="ml-2 text-[#F58220] hover:text-[#003399] transition-colors focus:outline-none"
                >
                  {isLoginView ? 'Đăng ký miễn phí' : 'Đăng nhập'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
