import React, { useState, useRef, useEffect } from 'react';
import { ViewState, User } from './types';
import Sidebar from './components/Sidebar';
import Hierarchy from './components/Hierarchy';
import Philosophy from './components/Philosophy';
import Workshops from './components/Workshops';
import Training from './components/Training';
import NewsFeed from './components/NewsFeed';
import AIConsultant from './components/AIConsultant';
import Whitelist from './components/Whitelist';
import AdminPanel from './components/AdminPanel';
import AuthModal from './components/AuthModal';
import OKRsDashboard from './components/OKRsDashboard';
import { Bell, Search, Menu, User as UserIcon, Pencil, Save, X, Image as ImageIcon, Upload, Type, LayoutGrid, Users, BookOpen, Briefcase, GraduationCap, Newspaper, ScrollText, ArrowRight, Activity } from 'lucide-react';

// --- Dashboard Content State Interface ---
interface DashboardConfig {
  notification: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  imageUrl: string;
}

const DEFAULT_CONFIG: DashboardConfig = {
  notification: 'Thông báo quan trọng: Cập nhật quy chế mới quý 4/2025',
  titleLine1: 'CJCC members',
  titleLine2: 'Văn Hoá Báo Chí',
  description: 'Câu lạc bộ "Báo chí với Văn hóa Doanh nghiệp" - Trực thuộc Hiệp hội Phát triển Văn hoá Doanh nghiệp Việt Nam. Kết nối, hợp tác và lan toả giá trị.',
  imageUrl: 'https://picsum.photos/seed/journalism/400/400'
};

// --- Dashboard Component Props ---
interface DashboardProps {
  user: User | null;
  onChangeView: (view: ViewState) => void;
}

// --- Editable Dashboard Component ---
const Dashboard: React.FC<DashboardProps> = ({ user, onChangeView }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Initialize state from LocalStorage if available
  const [config, setConfig] = useState<DashboardConfig>(() => {
    const saved = localStorage.getItem('cjcc_dashboard_config');
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });
  
  const [tempConfig, setTempConfig] = useState<DashboardConfig>(config);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startEditing = () => {
    setTempConfig(config);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const saveChanges = () => {
    setConfig(tempConfig);
    localStorage.setItem('cjcc_dashboard_config', JSON.stringify(tempConfig));
    setIsEditing(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempConfig({ ...tempConfig, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Control Panel Cards Configuration
  const controlCards = [
    { 
      id: ViewState.HIERARCHY, 
      label: 'Cơ cấu tổ chức', 
      icon: Users, 
      desc: 'Sơ đồ lãnh đạo & nhân sự', 
      status: 'Cập nhật', 
      color: 'text-blue-600', 
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    { 
      id: ViewState.PHILOSOPHY, 
      label: 'Văn hóa & Triết lý', 
      icon: BookOpen, 
      desc: 'Quy tắc ứng xử & Giá trị cốt lõi', 
      status: 'Quan trọng', 
      color: 'text-rose-600', 
      bg: 'bg-rose-50',
      border: 'border-rose-200'
    },
    { 
      id: ViewState.WORKSHOPS, 
      label: 'Workshops & KT Số', 
      icon: Briefcase, 
      desc: 'Sự kiện & Kinh tế báo chí', 
      status: '3 Sự kiện mới', 
      color: 'text-amber-600', 
      bg: 'bg-amber-50',
      border: 'border-amber-200'
    },
    { 
      id: ViewState.TRAINING, 
      label: 'Đào tạo & Học liệu', 
      icon: GraduationCap, 
      desc: 'Khoá học & Tài liệu PDF', 
      status: 'Đang học: 35%', 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50',
      border: 'border-emerald-200'
    },
    { 
      id: ViewState.NEWS, 
      label: 'Bản tin & Sự kiện', 
      icon: Newspaper, 
      desc: 'Tin tức nội bộ & Thị trường', 
      status: 'Mới cập nhật', 
      color: 'text-purple-600', 
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    },
    { 
      id: ViewState.WHITELIST, 
      label: 'Quy chế (White List)', 
      icon: ScrollText, 
      desc: 'Văn bản pháp quy Hiệp hội', 
      status: 'Hiệu lực 2025', 
      color: 'text-slate-600', 
      bg: 'bg-slate-50',
      border: 'border-slate-200'
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in relative">
      
      {/* --- EDITOR TOOLBAR (Visible only when editing) --- */}
      {isEditing && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 border border-slate-700 animate-fade-in-up">
          <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Chế độ chỉnh sửa</span>
          <div className="h-6 w-px bg-slate-700"></div>
          <button 
            onClick={cancelEditing}
            className="flex items-center gap-2 text-sm hover:text-red-400 transition-colors"
          >
            <X size={16} /> Hủy
          </button>
          <button 
            onClick={saveChanges}
            className="flex items-center gap-2 text-sm bg-amber-500 text-slate-900 px-4 py-1.5 rounded-full font-bold hover:bg-amber-400 transition-colors"
          >
            <Save size={16} /> Lưu thay đổi
          </button>
        </div>
      )}

      {/* Modern Welcome Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl border border-slate-800 group">
        
        {/* Admin/Edit Trigger Button (Top Right) */}
        {!isEditing && (
          <button 
            onClick={startEditing}
            className="absolute top-4 right-4 z-30 p-2 bg-white/10 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 border border-white/10"
            title="Chỉnh sửa giao diện"
          >
            <Pencil size={18} />
          </button>
        )}

        {/* Abstract decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl w-full">
            {/* Notification Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-xs font-medium text-amber-300 mb-4 w-full md:w-auto">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
              {isEditing ? (
                 <input 
                   type="text"
                   value={tempConfig.notification}
                   onChange={(e) => setTempConfig({...tempConfig, notification: e.target.value})}
                   className="bg-transparent border-b border-amber-500/50 focus:outline-none focus:border-amber-500 w-full text-amber-300 placeholder-amber-300/50"
                   placeholder="Nhập thông báo..."
                 />
              ) : (
                <span className="truncate">{config.notification}</span>
              )}
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight">
              {isEditing ? (
                <div className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    value={tempConfig.titleLine1}
                    onChange={(e) => setTempConfig({...tempConfig, titleLine1: e.target.value})}
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white focus:outline-none focus:border-amber-500"
                  />
                  <input 
                    type="text" 
                    value={tempConfig.titleLine2}
                    onChange={(e) => setTempConfig({...tempConfig, titleLine2: e.target.value})}
                    className="bg-white/10 border border-white/20 rounded px-2 py-1 text-amber-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              ) : (
                <>
                  {config.titleLine1} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">{config.titleLine2}</span>
                </>
              )}
            </h1>

            {/* Description */}
            <div className="text-slate-300 text-lg mb-8 leading-relaxed">
              {isEditing ? (
                 <textarea 
                    value={tempConfig.description}
                    onChange={(e) => setTempConfig({...tempConfig, description: e.target.value})}
                    className="w-full h-24 bg-white/10 border border-white/20 rounded p-2 text-white focus:outline-none focus:border-amber-500 resize-none"
                 />
              ) : (
                 <p>{user ? `Chào mừng trở lại, ${user.name}. ` : ''}{config.description}</p>
              )}
            </div>

            {/* Buttons (Static for layout) */}
            <div className="flex flex-wrap gap-3">
               <button 
                 onClick={() => onChangeView(ViewState.WORKSHOPS)}
                 className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5"
               >
                 Khám phá ngay
               </button>
               {user && (
                 <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg backdrop-blur-md transition-all border border-white/10 hover:border-white/30">
                   Hồ sơ thành viên
                 </button>
               )}
            </div>
          </div>
          
          {/* Editable Image Area */}
          <div className="hidden md:block relative w-64 h-64 shrink-0 group/image">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-pink-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              
              <div className="relative w-full h-full">
                <img 
                  src={isEditing ? tempConfig.imageUrl : config.imageUrl} 
                  alt="Dashboard Graphic"
                  className={`relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-700 border-4 border-white/10 
                    ${isEditing ? 'opacity-80 ring-4 ring-amber-500 ring-offset-4 ring-offset-slate-900' : 'rotate-3 hover:rotate-0'}`}
                />
                
                {/* Image Edit Overlay */}
                {isEditing && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 rounded-2xl backdrop-blur-sm gap-3">
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full font-bold text-xs hover:bg-amber-400 transition-colors"
                    >
                      <Upload size={14} /> Tải ảnh lên
                    </button>
                    <span className="text-white text-[10px] uppercase font-bold tracking-widest">Hoặc</span>
                    <input 
                      type="text" 
                      placeholder="Dán URL ảnh..." 
                      className="w-5/6 px-2 py-1 text-xs bg-slate-900/80 border border-slate-600 rounded text-white focus:border-amber-500 outline-none"
                      value={tempConfig.imageUrl}
                      onChange={(e) => setTempConfig({...tempConfig, imageUrl: e.target.value})}
                    />
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>

      {/* --- OKRs DASHBOARD SECTION --- */}
      <OKRsDashboard />

      {/* --- CONTROL PANEL / OPERATIONS CENTER --- */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <LayoutGrid className="text-[#003399]" size={24} />
          <h2 className="text-2xl font-black italic text-[#003399] uppercase tracking-tighter">Bảng Điều Khiển Hệ Thống</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {controlCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onChangeView(card.id)}
              className={`
                relative overflow-hidden p-6 rounded-xl border transition-all duration-300 text-left group hover:-translate-y-1 hover:shadow-lg bg-white
                ${card.border}
              `}
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 rounded-full opacity-10 transition-transform group-hover:scale-150 ${card.bg.replace('bg-', 'bg-current text-')}`}></div>

              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3 rounded-lg ${card.bg} ${card.color}`}>
                  <card.icon size={24} />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${card.bg} ${card.color} bg-opacity-50`}>
                  {card.status}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-black text-lg text-slate-800 mb-1 group-hover:text-[#F58220] transition-colors italic uppercase tracking-tighter">
                  {card.label}
                </h3>
                <p className="text-sm text-slate-500 mb-4 h-5 font-medium">
                  {card.desc}
                </p>
                <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-[#003399] transition-colors">
                  Truy cập <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-black text-lg text-slate-800 uppercase italic tracking-tighter flex items-center gap-2">
              <Activity size={18} className="text-[#003399]" /> Thông báo & Nhật ký
            </h3>
            <span 
              onClick={() => onChangeView(ViewState.NEWS)}
              className="text-[10px] text-[#F58220] font-black uppercase tracking-widest cursor-pointer hover:text-[#003399]"
            >
              Xem tất cả
            </span>
          </div>
          <div className="space-y-5">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex gap-4 items-start group cursor-pointer hover:bg-blue-50 p-2 rounded-xl -mx-2 transition-colors" onClick={() => onChangeView(ViewState.NEWS)}>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003399] flex items-center justify-center shrink-0 group-hover:bg-[#003399] group-hover:text-white transition-colors">
                  <Bell size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-800 font-bold group-hover:text-[#003399] transition-colors">Cập nhật quy chế nhuận bút quý 4/2025</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-black uppercase tracking-widest opacity-60">2 giờ trước • Ban Thư ký</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#001A4D] to-[#000F2E] p-6 rounded-[2rem] shadow-2xl text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58220]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="relative z-10">
              <h3 className="font-black text-lg mb-2 text-[#00A8E0] uppercase italic tracking-tighter">
                {user ? 'Nhiệm vụ tuần này' : 'Quyền lợi hội viên'}
              </h3>
              <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest opacity-80">
                {user ? 'Hoàn thành các mục tiêu để thăng hạng CJCC Member' : 'Đăng nhập để mở khóa tính năng theo dõi nhiệm vụ cá nhân.'}
              </p>
              {user ? (
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-5 h-5 rounded border border-slate-500 flex items-center justify-center text-slate-500">✓</div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter line-through">Đăng ký workshop AI</span>
                    </div>
                    <div 
                      onClick={() => onChangeView(ViewState.TRAINING)}
                      className="flex items-center gap-3 p-3 bg-[#00A8E0]/10 rounded-xl border border-[#00A8E0]/20 hover:bg-[#00A8E0]/20 transition-all cursor-pointer group/item"
                    >
                      <div className="w-5 h-5 rounded border border-[#00A8E0] flex items-center justify-center group-hover/item:bg-[#00A8E0] transition-colors"></div>
                      <span className="text-xs font-black text-white uppercase tracking-tighter">Nộp bài thu hoạch khóa PR</span>
                    </div>
                </div>
              ) : (
                <div className="space-y-3">
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#00A8E0]">
                      <div className="w-1.5 h-1.5 bg-[#F58220] rounded-full"></div> Kho học liệu không giới hạn
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#00A8E0]">
                      <div className="w-1.5 h-1.5 bg-[#F58220] rounded-full"></div> Ưu tiên đăng ký sự kiện VIP
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#00A8E0]">
                      <div className="w-1.5 h-1.5 bg-[#F58220] rounded-full"></div> Kết nối chuyên gia đầu ngành
                   </div>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Auth State with LocalStorage Persistence
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('cjcc_user_session');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('cjcc_user_session', JSON.stringify(user));
    // If user is admin, offer to go to admin panel, else dashboard
    if (user.role === 'ADMIN') {
      // setCurrentView(ViewState.ADMIN); // Optional: auto redirect
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('cjcc_user_session');
    setCurrentView(ViewState.DASHBOARD);
  };

  const renderView = () => {
    // Restrict Admin View
    if (currentView === ViewState.ADMIN && currentUser?.role !== 'ADMIN') {
      return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
            <Bell size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Truy cập bị từ chối</h2>
          <p className="text-slate-500">Bạn không có quyền truy cập vào trang quản trị.</p>
          <button 
            onClick={() => setCurrentView(ViewState.DASHBOARD)}
            className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
          >
            Quay lại Trang chủ
          </button>
        </div>
      );
    }

    switch (currentView) {
      case ViewState.HIERARCHY: return <Hierarchy />;
      case ViewState.PHILOSOPHY: return <Philosophy />;
      case ViewState.WORKSHOPS: return <Workshops />;
      case ViewState.TRAINING: return <Training />;
      case ViewState.NEWS: return <NewsFeed />;
      case ViewState.WHITELIST: return <Whitelist />;
      case ViewState.ADMIN: return currentUser ? <AdminPanel currentUser={currentUser} /> : null;
      case ViewState.DASHBOARD:
      default: return <Dashboard user={currentUser} onChangeView={setCurrentView} />;
    }
  };

  return (
    // Applied 'content-bg' class from styled html head for subtle background pattern
    <div className="min-h-screen content-bg flex flex-col lg:flex-row font-sans text-slate-800">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        currentUser={currentUser}
        onLoginClick={() => setIsAuthModalOpen(true)}
        onLogoutClick={handleLogout}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        {/* Top Header - Glassmorphism */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-6 sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-slate-800">
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#003399] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm nội dung..." 
                className="pl-10 pr-4 py-2 bg-slate-100/50 border border-transparent focus:bg-white focus:border-[#003399]/50 rounded-full text-xs font-black uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-blue-500/10 w-64 transition-all"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="relative p-2 text-slate-500 hover:bg-white hover:text-[#F58220] rounded-xl transition-all hover:shadow-lg">
              <Bell size={20} />
              {currentUser && (
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-[#F58220] rounded-full border-2 border-white animate-pulse"></span>
              )}
            </button>
            <div className="w-px h-8 bg-slate-200 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-3">
               {currentUser ? (
                 <span className="text-xs font-black text-[#003399] uppercase italic tracking-tighter">{currentUser.name}</span>
               ) : (
                 <button 
                   onClick={() => setIsAuthModalOpen(true)}
                   className="text-[10px] font-black text-slate-600 hover:text-[#003399] uppercase tracking-widest"
                 >
                   Khách (Đăng nhập)
                 </button>
               )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto scroll-smooth">
          {renderView()}
        </main>
      </div>

      <AIConsultant />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;