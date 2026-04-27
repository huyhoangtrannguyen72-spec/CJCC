import React, { useState } from 'react';
import { Target, Flag, TrendingUp, Calendar, CheckCircle, ArrowRight, BarChart3, Zap, Shield, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TimeFrame = '6M' | '1Y' | '3Y';

interface KeyResult {
  text: string;
  target: string;
  current: number; // Percentage
}

interface Objective {
  title: string;
  description: string;
  krs: KeyResult[];
  icon: React.ReactNode;
}

const OKR_DATA: Record<TimeFrame, Objective[]> = {
  '6M': [
    {
      title: "Khởi tạo & Vận hành",
      description: "Xây dựng nền móng vững chắc về nhân sự và quy trình cho CLB.",
      icon: <Zap className="text-amber-500" />,
      krs: [
        { text: "Hoàn thiện bộ máy nhân sự chủ chốt", target: "100%", current: 80 },
        { text: "Kết nạp thành viên sáng lập", target: "500 Members", current: 45 },
        { text: "Tổ chức Lễ ra mắt chính thức", target: "Done", current: 20 },
      ]
    },
    {
      title: "Hạ tầng Số hóa",
      description: "Triển khai nền tảng quản lý hội viên và học liệu số.",
      icon: <Globe className="text-blue-500" />,
      krs: [
        { text: "Ra mắt Website & Mobile App", target: "Go Live", current: 90 },
        { text: "Kho học liệu báo chí chuyên sâu", target: "50 Files", current: 30 },
      ]
    }
  ],
  '1Y': [
    {
      title: "Mở rộng Tác động",
      description: "Khẳng định vị thế nền tảng uy tín nhất về Báo chí & Văn hóa.",
      icon: <TrendingUp className="text-emerald-500" />,
      krs: [
        { text: "Tăng trưởng hội viên toàn quốc", target: "2,000", current: 0 },
        { text: "Giải thưởng Báo chí & Doanh nghiệp", target: "Annual", current: 0 },
        { text: "Hợp tác chiến lược quốc tế", target: "20 MOU", current: 0 },
      ]
    },
    {
      title: "Tự chủ Tài chính",
      description: "Đảm bảo nguồn thu từ đào tạo và dịch vụ chuyên môn.",
      icon: <BarChart3 className="text-indigo-500" />,
      krs: [
        { text: "Doanh thu từ đào tạo", target: "5 Tỷ", current: 0 },
        { text: "Tỷ lệ hội viên đóng phí", target: "95%", current: 0 },
      ]
    }
  ],
  '3Y': [
    {
      title: "Vươn tầm ASEAN",
      description: "Trở thành tổ chức tham vấn chính sách văn hóa kinh doanh.",
      icon: <Shield className="text-rose-500" />,
      krs: [
        { text: "Mạng lưới hội viên 63 tỉnh thành", target: "10k", current: 0 },
        { text: "Cố vấn Văn hóa DN Quốc gia", target: "Strategic", current: 0 },
        { text: "Đối tác báo chí khu vực", target: "ASEAN Network", current: 0 },
      ]
    }
  ]
};

const OKRsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TimeFrame>('6M');

  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="p-10 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-8 bg-gradient-to-r from-slate-50 to-white">
        <div className="flex items-center gap-5">
          <div className="p-4 bg-slate-900 text-blue-400 rounded-2xl shadow-xl shadow-slate-900/10">
            <Target size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-2">Strategy & OKRs</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lộ trình thực thi chiến lược CLB</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex bg-slate-100/80 p-1.5 rounded-2xl backdrop-blur-md border border-slate-200">
          {(['6M', '1Y', '3Y'] as TimeFrame[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                ${activeTab === tab 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white'}
              `}
            >
              {tab === '6M' && 'H1 Execution'}
              {tab === '1Y' && 'FY 2026'}
              {tab === '3Y' && 'Scale 2028'}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {OKR_DATA[activeTab].map((objective, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-slate-100 p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 opacity-[0.03] group-hover:scale-110 transition-transform">
                  <div className="p-12">{objective.icon}</div>
                </div>
                
                <div className="flex items-start gap-5 mb-8">
                  <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {React.cloneElement(objective.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">{objective.title}</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{objective.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {objective.krs.map((kr, kIdx) => (
                    <div key={kIdx} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter max-w-[70%]">
                          {kr.text}
                        </span>
                        <div className="text-right">
                          <span className="block text-[10px] font-black text-slate-300 uppercase leading-none">Target</span>
                          <span className="text-xs font-black text-slate-900 uppercase italic">{kr.target}</span>
                        </div>
                      </div>
                      
                      {/* Modern Progress Track */}
                      <div className="relative pt-2">
                        <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${kr.current}%` }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className={`h-full rounded-full bg-slate-900 shadow-[0_0_12px_rgba(0,0,0,0.1)]`}
                          />
                        </div>
                        <div 
                          className="absolute bottom-full mb-1 transition-all duration-1000"
                          style={{ left: `calc(${kr.current}% - 12px)` }}
                        >
                          <span className="text-[10px] font-black italic text-slate-900">{kr.current}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Intelligence Alert */}
        <div className="mt-12 p-8 bg-blue-900 rounded-[2rem] text-white overflow-hidden relative group">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-xl">
                    <TrendingUp className="text-blue-300" />
                 </div>
                 <div>
                    <h4 className="text-lg font-black uppercase italic tracking-tighter">Strategic Insights</h4>
                    <p className="text-xs font-bold text-blue-200 uppercase tracking-widest">Dự báo khả năng hoàn thành mục tiêu 6 tháng: 85%</p>
                 </div>
              </div>
              <button className="px-8 py-3 bg-white text-blue-900 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-950/20 hover:scale-105 transition-all">
                 View Detaled Report
              </button>
           </div>
           <div className="absolute right-0 top-0 opacity-10 -translate-y-1/2 translate-x-1/4 group-hover:rotate-12 transition-transform">
              <BarChart3 size={240} />
           </div>
        </div>

        <div className="mt-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <Calendar size={14} className="text-slate-300" />
            Last Synced: {new Date().toLocaleDateString('en-US')}
          </div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
             Official Strategy Document <Shield size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OKRsDashboard;
