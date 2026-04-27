import React, { useState } from 'react';
import { Rank, Department } from '../types';
import { Shield, Award, Crown, Star, ChevronRight, Users, Briefcase, Search, Filter, Mail, Globe, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ranks: Rank[] = [
  {
    id: 'org-1',
    title: 'Chủ tịch (1)',
    level: 1,
    description: 'Lãnh đạo cao nhất, chịu trách nhiệm toàn diện về chiến lược, định hướng phát triển và giữ gìn tôn chỉ của Câu lạc bộ.',
    requirements: ['Là người có uy tín tuyệt đối trong ngành', 'Được Đại hội đồng bầu chọn'],
    perks: ['Quyền quyết định tối hậu', 'Đại diện pháp luật của CLB', 'Chủ trì các cuộc họp cấp cao'],
    color: 'bg-rose-600'
  },
  {
    id: 'org-2',
    title: 'Phó Chủ tịch (5)',
    level: 2,
    description: 'Gồm 5 vị trí phụ trách 5 trụ cột chiến lược: Tài chính, Đối ngoại, Chuyên môn, Công nghệ, và Phát triển hội viên.',
    requirements: ['Chuyên gia đầu ngành', 'Phụ trách mảng chuyên biệt', 'Kinh nghiệm quản lý cấp cao'],
    perks: ['Quyết sách trong lĩnh vực phụ trách', 'Ngân sách hoạt động riêng', 'Thay mặt Chủ tịch khi được ủy quyền'],
    color: 'bg-amber-500'
  },
  {
    id: 'org-3',
    title: 'Tổng Thư ký (1)',
    level: 3,
    description: 'Người điều hành hoạt động hàng ngày ("COO"), là cầu nối huyết mạch giữa Ban Lãnh đạo cấp cao và các Ban chuyên môn.',
    requirements: ['Kỹ năng tổ chức xuất sắc', 'Khả năng kết nối và điều phối', 'Thường trực giải quyết sự vụ'],
    perks: ['Điều hành Văn phòng CLB', 'Quản lý con dấu và hành chính', 'Phê duyệt chi tiêu vận hành'],
    color: 'bg-blue-600'
  },
  {
    id: 'org-4',
    title: 'Trưởng/Phó Ban Chuyên môn (8)',
    level: 4,
    description: 'Lãnh đạo 8 tiểu ban mũi nhọn: Đào tạo, Sự kiện, Truyền thông, Kinh tế số, Pháp chế, CSR, Quan hệ Quốc tế, và Khởi nghiệp.',
    requirements: ['Năng lực chuyên môn sâu', 'Cam kết KPI hoạt động quý/năm'],
    perks: ['Tuyển dụng thành viên ban', 'Đề xuất dự án chuyên môn', 'Độc lập tác nghiệp theo quy chế'],
    color: 'bg-emerald-600'
  }
];

const departments: Department[] = [
  { id: 'd1', name: 'Ban Đào tạo', leader: 'PGS.TS. Nguyễn Văn A', membersCount: 12, description: 'Phụ trách giáo trình, học liệu và các khóa học kỹ năng báo chí.', icon: 'GraduationCap' },
  { id: 'd2', name: 'Ban Kinh tế số', leader: 'Ông Trần Văn B', membersCount: 15, description: 'Nghiên cứu mô hình kinh doanh báo chí mới, chuyển đổi số.', icon: 'TrendingUp' },
  { id: 'd3', name: 'Ban Truyền thông', leader: 'Bà Lê Thị C', membersCount: 20, description: 'Quản lý hình ảnh CLB, quan hệ công chúng và các kênh social.', icon: 'Megaphone' },
  { id: 'd4', name: 'Ban Pháp chế', leader: 'LS. Phạm Văn D', membersCount: 8, description: 'Tư vấn bản quyền, luật báo chí và bảo vệ quyền lợi hội viên.', icon: 'Scale' },
];

const members = [
  { id: 'm1', name: 'Nguyễn Hoàng Nam', role: 'Thành viên Platinum', dept: 'Ban Kinh tế số', city: 'Hà Nội', image: 'https://i.pravatar.cc/150?u=m1' },
  { id: 'm2', name: 'Trần Thanh Thủy', role: 'Thành viên Gold', dept: 'Ban Đào tạo', city: 'TP. HCM', image: 'https://i.pravatar.cc/150?u=m2' },
  { id: 'm3', name: 'Lê Minh Quân', role: 'Thành viên Silver', dept: 'Ban Truyền thông', city: 'Đà Nẵng', image: 'https://i.pravatar.cc/150?u=m3' },
  { id: 'm4', name: 'Phạm Bảo Vy', role: 'Thành viên Platinum', dept: 'Ban Pháp chế', city: 'Hà Nội', image: 'https://i.pravatar.cc/150?u=m4' },
  { id: 'm5', name: 'Đặng Tuấn Anh', role: 'Thành viên Diamond', dept: 'Ban Kinh tế số', city: 'Hà Nội', image: 'https://i.pravatar.cc/150?u=m5' },
  { id: 'm6', name: 'Vũ Minh Ngọc', role: 'Thành viên Gold', dept: 'Ban Đào tạo', city: 'Cần Thơ', image: 'https://i.pravatar.cc/150?u=m6' },
];

const Hierarchy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leadership' | 'departments' | 'members'>('leadership');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold font-serif text-slate-900 mb-3">Hệ thống Nhân sự & Tổ chức</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
        
        {/* Navigation Tabs */}
        <div className="inline-flex p-1 bg-slate-200/50 rounded-xl backdrop-blur-sm border border-slate-200">
          {[
            { id: 'leadership', label: 'Cơ cấu Lãnh đạo', icon: Crown },
            { id: 'departments', label: 'Các Ban Chuyên môn', icon: Briefcase },
            { id: 'members', label: 'Danh bạ Hội viên', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-white text-blue-600 shadow-md translate-y-0' 
                : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'leadership' && (
          <motion.div
            key="leadership"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-12"
          >
            <div className="flex justify-center mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-12 text-sm text-slate-500">
                {[
                  { count: '01', label: 'Chủ tịch', color: 'text-rose-600' },
                  { count: '05', label: 'Phó CT', color: 'text-amber-500' },
                  { count: '01', label: 'TTK', color: 'text-blue-600' },
                  { count: '08', label: 'Ban CM', color: 'text-emerald-600' },
                ].map((stat, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center">
                      <span className={`font-bold text-3xl ${stat.color}`}>{stat.count}</span>
                      <span className="font-medium">{stat.label}</span>
                    </div>
                    {i < 3 && <div className="h-10 w-px bg-slate-200"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-rose-200 before:via-slate-300 before:to-emerald-200">
              {ranks.map((rank, index) => (
                <div key={rank.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${rank.color} text-white z-10`}>
                    {index === 0 ? <Crown size={22} fill="currentColor" /> : <Star size={22} fill="currentColor" />}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-50">
                      <h3 className={`font-bold text-xl ${rank.color.replace('bg-', 'text-')}`}>{rank.title}</h3>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-500 uppercase tracking-widest">Level {rank.level}</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-5 leading-relaxed">{rank.description}</p>
                    <div className="flex flex-col gap-3">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center gap-2">
                          <Award size={14} className="text-amber-500" /> Trách nhiệm & Tiêu chuẩn
                        </p>
                        <ul className="grid grid-cols-1 gap-2">
                          {rank.requirements.map((req, i) => (
                            <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                              <span className={`mt-1.5 w-1 h-1 rounded-full ${rank.color} shrink-0`}></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'departments' && (
          <motion.div
            key="departments"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Briefcase size={28} />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-black text-slate-200 group-hover:text-blue-100 transition-colors uppercase italic">{dept.membersCount}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Hội viên</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{dept.name}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{dept.description}</p>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={`https://ui-avatars.com/api/?name=${dept.leader}&background=random`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt={dept.leader} />
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Trưởng ban</span>
                      <span className="text-sm font-bold text-slate-700">{dept.leader}</span>
                    </div>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'members' && (
          <motion.div
            key="members"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm hội viên, ban ngành..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50">
                  <Filter size={16} /> Khu vực
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/20">
                  Xuất PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center gap-4 hover:shadow-xl transition-all cursor-pointer group">
                  <div className="relative shrink-0">
                    <img src={member.image} className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-bold text-slate-900 truncate">{member.name}</h4>
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        member.role.includes('Platinum') ? 'bg-indigo-100 text-indigo-700' :
                        member.role.includes('Diamond') ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>{member.role.split(' ')[1]}</span>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mb-2">
                      <Briefcase size={12} /> {member.dept}
                    </p>
                    <div className="flex gap-2">
                       <button className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                          <Mail size={14} />
                       </button>
                       <button className="p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">
                          <Globe size={14} />
                       </button>
                       <div className="flex-1"></div>
                       <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                          <MapPin size={10} /> {member.city}
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredMembers.length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                <Users size={48} className="mx-auto text-slate-300 mb-4" />
                <p className="text-slate-500 font-medium">Không tìm thấy hội viên phù hợp</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hierarchy;
