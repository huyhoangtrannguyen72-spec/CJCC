import React, { useState } from 'react';
import { User, Course, Article } from '../types';
import { Users, Settings, Shield, FileCheck, Ban, Check, Search, Save, LayoutTemplate, FileText, BookOpen, Plus, Trash2, Edit3, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AdminPanelProps {
  currentUser: User;
}

const mockUsers: User[] = [
  { id: 'u1', name: 'Nguyễn Văn An', email: 'an.nguyen@press.vn', role: 'MEMBER', organization: 'Báo Đầu Tư', status: 'ACTIVE', joinedDate: '12/01/2024' },
  { id: 'u2', name: 'Trần Thị B', email: 'b.tran@tech.com', role: 'MEMBER', organization: 'FPT Software', status: 'PENDING', joinedDate: '15/02/2024' },
  { id: 'u3', name: 'Lê C', email: 'c.le@vtv.vn', role: 'MEMBER', organization: 'VTV Digital', status: 'BANNED', joinedDate: '10/11/2023' },
  { id: 'u4', name: 'Admin System', email: 'admin@cjcc.vn', role: 'ADMIN', organization: 'CJCC HQ', status: 'ACTIVE', joinedDate: '01/01/2023' },
];

const AdminPanel: React.FC<AdminPanelProps> = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState<'USERS' | 'SETTINGS' | 'CONTENT'>('USERS');
  const [activeContentTab, setActiveContentTab] = useState<'NEWS' | 'COURSES'>('NEWS');
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');

  // Settings States
  const [siteName, setSiteName] = useState('Business Press Club Admin');
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleStatusChange = (userId: string, newStatus: 'ACTIVE' | 'BANNED' | 'PENDING') => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: newStatus } : u));
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderUsersTab = () => (
    <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
           <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">Quản lý Hội viên ({filteredUsers.length})</h3>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Duyệt & Quản lý tư cách thành viên</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium focus:outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
          </div>
          <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl border border-slate-100"><Filter size={20}/></button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
            <tr>
              <th className="px-8 py-4">Thành viên</th>
              <th className="px-8 py-4">Tổ chức</th>
              <th className="px-8 py-4">Ngày gia nhập</th>
              <th className="px-8 py-4">Trạng thái</th>
              <th className="px-8 py-4 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-400 font-black text-xs uppercase italic">
                      {user.name.substring(0, 2)}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 italic uppercase text-xs">{user.name}</div>
                      <div className="text-[10px] font-bold text-slate-400 tracking-tight">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 font-bold text-slate-600 text-xs uppercase tracking-tighter">{user.organization}</td>
                <td className="px-8 py-5 font-bold text-slate-400 text-xs">{user.joinedDate}</td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                    ${user.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-700' : ''}
                    ${user.status === 'PENDING' ? 'bg-amber-100 text-amber-700 shadow-sm shadow-amber-500/10 animate-pulse' : ''}
                    ${user.status === 'BANNED' ? 'bg-rose-100 text-rose-700' : ''}
                  `}>
                    {user.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {user.status === 'PENDING' && (
                      <button 
                        onClick={() => handleStatusChange(user.id, 'ACTIVE')}
                        className="p-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20" title="Phê duyệt"
                      >
                        <Check size={16} />
                      </button>
                    )}
                    {user.status !== 'BANNED' && user.role !== 'ADMIN' && (
                      <button 
                         onClick={() => handleStatusChange(user.id, 'BANNED')}
                         className="p-2.5 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20" title="Chặn"
                      >
                        <Ban size={16} />
                      </button>
                    )}
                     {user.status === 'BANNED' && (
                      <button 
                         onClick={() => handleStatusChange(user.id, 'ACTIVE')}
                         className="p-2.5 bg-slate-200 text-slate-900 rounded-xl hover:bg-slate-300 transition-all" title="Khôi phục"
                      >
                        <Check size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContentTab = () => (
    <div className="space-y-6">
       <div className="flex flex-wrap gap-2">
          {['NEWS', 'COURSES'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveContentTab(tab as any)}
              className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeContentTab === tab ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-500 border border-slate-100'
              }`}
            >
              {tab === 'NEWS' ? 'Tin tức & Thông báo' : 'Học liệu & Khóa học'}
            </button>
          ))}
       </div>

       <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
             <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">
               {activeContentTab === 'NEWS' ? 'Bài viết News Feed' : 'Danh sách Khóa học'}
             </h3>
             <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20">
                <Plus size={16} /> Thêm mới
             </button>
          </div>
          <div className="p-8">
             <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                   {activeContentTab === 'NEWS' ? <FileText size={32} className="text-slate-300" /> : <BookOpen size={32} className="text-slate-300" />}
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase italic">Chưa có nội dung chỉnh sửa</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Dữ liệu hiện đang đồng bộ từ database chính</p>
             </div>
          </div>
       </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 border-t-8 border-t-amber-500">
          <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter mb-8 flex items-center gap-3">
            <LayoutTemplate size={24} className="text-amber-500" />
            Cấu hình Hệ thống
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tên CLB (SEO)</label>
              <input 
                type="text" 
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:bg-white focus:ring-4 focus:ring-amber-500/10 transition-all"
              />
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl flex items-center justify-between">
              <div>
                <span className="block text-xs font-black text-slate-900 uppercase italic">Chế độ Bảo trì</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Khóa đăng ký hội viên mới</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={maintenanceMode} onChange={() => setMaintenanceMode(!maintenanceMode)} className="sr-only peer"/>
                <div className="w-12 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
            <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-900/20 active:scale-95">
              <Save size={18} /> Lưu cấu hình
            </button>
          </div>
       </div>

       <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 border-t-8 border-t-blue-500">
             <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter mb-4 flex items-center gap-3">
                <Shield size={24} className="text-blue-500" />
                Security Hub
             </h3>
             <p className="text-xs font-bold text-slate-500 leading-relaxed mb-6">Mọi thay đổi nhạy cảm sẽ được lưu vết vào audit logs của hệ thống tập trung.</p>
             <div className="space-y-3">
                <button className="w-full py-4 px-6 border-2 border-slate-100 rounded-2xl text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-between group">
                   Audit Logs <ArrowRight size={16} className="text-slate-200 group-hover:text-blue-500 transition-colors" />
                </button>
                <button className="w-full py-4 px-6 border-2 border-rose-50 bg-rose-50/30 text-rose-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-rose-50 transition-all flex items-center justify-between group">
                   Wipe Cache Data <Trash2 size={16} className="text-rose-300 group-hover:text-rose-600" />
                </button>
             </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-900 to-slate-950 p-8 rounded-[2rem] text-white overflow-hidden relative group">
             <div className="relative z-10">
                <h3 className="text-lg font-black uppercase italic mb-2 tracking-tighter">System Health</h3>
                <div className="flex items-center gap-2 mt-4">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">All systems operational</span>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                   <div>
                      <div className="text-2xl font-black italic tracking-tighter">99.9%</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Uptime</div>
                   </div>
                   <div>
                      <div className="text-2xl font-black italic tracking-tighter">12ms</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Latency</div>
                   </div>
                </div>
             </div>
             <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform">
                <Settings size={200} />
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pb-12 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest rounded-lg">Admin View</span>
              <div className="h-1 w-12 bg-slate-200 rounded-full"></div>
           </div>
          <h2 className="text-5xl font-black font-serif text-slate-900 uppercase italic tracking-tighter leading-none">Command Center</h2>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-4">Welcome back, {currentUser.name}. Accessing with root privileges.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'USERS', label: 'Hội viên', icon: Users },
            { id: 'CONTENT', label: 'Nội dung', icon: BookOpen },
            { id: 'SETTINGS', label: 'Hệ thống', icon: Settings },
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 transition-all ${
                activeTab === tab.id 
                ? 'bg-slate-900 text-white shadow-2xl translate-y-[-4px]' 
                : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'
              }`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? 'text-blue-400' : 'text-slate-400'} /> 
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={activeTab}
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.98 }}
           transition={{ duration: 0.2 }}
        >
          {activeTab === 'USERS' && renderUsersTab()}
          {activeTab === 'CONTENT' && renderContentTab()}
          {activeTab === 'SETTINGS' && renderSettingsTab()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AdminPanel;
