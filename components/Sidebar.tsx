import React from 'react';
import { ViewState, User } from '../types';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Briefcase,
  GraduationCap,
  Newspaper,
  X,
  ScrollText,
  ShieldCheck,
  LogIn,
  LogOut,
} from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  currentUser: User | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onChangeView,
  isOpen,
  toggleSidebar,
  currentUser,
  onLoginClick,
  onLogoutClick,
}) => {
  const logoSrc = `${import.meta.env.BASE_URL}cjcc-logo.png`;

  const menuItems = [
    { id: ViewState.DASHBOARD, label: 'Tổng quan', icon: LayoutDashboard },
    { id: ViewState.WHITELIST, label: 'Quy chế (White List)', icon: ScrollText },
    { id: ViewState.HIERARCHY, label: 'Cơ cấu tổ chức', icon: Users },
    { id: ViewState.PHILOSOPHY, label: 'Văn hóa & Triết lý', icon: BookOpen },
    { id: ViewState.WORKSHOPS, label: 'Workshops & KT Số', icon: Briefcase },
    { id: ViewState.TRAINING, label: 'Đào tạo & Học liệu', icon: GraduationCap },
    { id: ViewState.NEWS, label: 'Bản tin & Sự kiện', icon: Newspaper },
  ];

  if (currentUser?.role === 'ADMIN') {
    menuItems.push({ id: ViewState.ADMIN, label: 'Quản trị hệ thống', icon: ShieldCheck });
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-30 h-screen w-64 bg-[#001A4D] text-white transition-transform duration-300 ease-in-out shadow-2xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:h-auto border-r border-slate-700 flex flex-col
        `}
      >
        <div className="flex flex-col justify-center h-24 px-6 bg-[#000F2E] border-b border-slate-700 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center min-w-0">
              <img
                src={logoSrc}
                alt="CJCC"
                className="h-20 w-40 object-contain object-left"
              />
            </div>
            <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col overflow-y-auto">
          <div className="mb-8 px-2">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-4 pl-2 opacity-60">Control Center</p>
            <nav className="space-y-1.5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onChangeView(item.id);
                    if (window.innerWidth < 1024) toggleSidebar();
                  }}
                  className={`
                    w-full flex items-center px-4 py-3.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 group
                    ${currentView === item.id
                      ? 'bg-gradient-to-r from-[#003399] to-[#00A8E0] text-white shadow-xl shadow-blue-900/40 translate-x-1'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'}
                    ${item.id === ViewState.ADMIN ? 'mt-8 border border-[#F58220]/30 text-[#F58220]' : ''}
                  `}
                >
                  <item.icon className={`mr-3 h-4 w-4 transition-all duration-300 ${currentView === item.id ? 'text-white scale-110' : item.id === ViewState.ADMIN ? 'text-[#F58220]' : 'text-slate-500 group-hover:text-white group-hover:scale-110'}`} />
                  <span className={item.id === ViewState.DASHBOARD ? 'text-pink-500' : ''}>
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-4 mt-auto bg-[#000F2E] border-t border-slate-700">
          {currentUser ? (
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="relative">
                <img
                  src={currentUser.avatar || 'https://picsum.photos/40/40?random=99'}
                  alt="User"
                  className="w-10 h-10 rounded-xl border-2 border-[#F58220]/50 object-cover"
                />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-[#000F2E] rounded-full"></span>
              </div>
              <div className="overflow-hidden flex-1">
                <p className="text-xs font-black text-white truncate italic uppercase tracking-tighter">{currentUser.name}</p>
                <p className="text-[9px] text-[#00A8E0] truncate uppercase font-black tracking-widest">{currentUser.role}</p>
              </div>
              <button
                onClick={onLogoutClick}
                className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-700 rounded"
                title="Đăng xuất"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-medium transition-colors"
            >
              <LogIn size={18} />
              Đăng nhập
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
