import React, { useState } from 'react';
import { Workshop } from '../types';
import { Calendar, Clock, ArrowRight, TrendingUp, ChevronLeft, MapPin, Users, Share2, Bookmark, Download, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion, AnimatePresence } from 'motion/react';

const workshops: Workshop[] = [
  {
    id: 'w1',
    title: 'AI trong sáng tạo nội dung: Từ ChatGPT đến Gemini',
    date: '15/11/2025',
    speaker: 'Dr. Nguyen An',
    category: 'Tech',
    description: 'Học cách sử dụng các mô hình ngôn ngữ lớn để tối ưu quy trình viết bài và biên tập.',
    image: 'https://picsum.photos/seed/ai/800/400',
    highlights: ['Prompt Engineering cho nhà báo', 'Tỉ lệ AI vs Human content', 'Thực hành viết bài 1000 chữ trong 5 phút'],
    content: 'Buổi workshop đi sâu vào việc ứng dụng Gemini Pro 1.5 để phân tích dữ liệu và trích xuất thông tin từ các báo cáo tài chính dài hàng trăm trang. Thành viên sẽ được hướng dẫn cách xây dựng các "Custom GPTs" chuyên biệt cho từng loại hình tin tức.',
    materials: [
      { name: 'Slide bài giảng (PDF)', url: '#' },
      { name: 'Bộ mẫu Prompt chuẩn', url: '#' }
    ]
  },
  {
    id: 'w2',
    title: 'Kinh tế số & Cơ hội cho báo chí hiện đại',
    date: '20/11/2025',
    speaker: 'Ms. Tran Bao Chau',
    category: 'Digital Economy',
    description: 'Phân tích xu hướng kiếm tiền từ nội dung số (Subscription, Donation, Premium Content).',
    image: 'https://picsum.photos/seed/econ/800/400',
    highlights: ['Subscription Models', 'Micropayments', 'Native Advertising']
  },
  {
    id: 'w3',
    title: 'Kỹ năng phỏng vấn lãnh đạo cấp cao',
    date: '25/11/2025',
    speaker: 'Journalist Le Minh',
    category: 'Journalism',
    description: 'Nghệ thuật đặt câu hỏi và khai thác thông tin từ C-Level executives.',
    image: 'https://picsum.photos/seed/interview/800/400',
    highlights: ['Psychology of Interviewing', 'Handling Difficult Leaders', 'The Art of Silence']
  },
];

const economicData = [
  { name: 'T1', value: 4000 },
  { name: 'T2', value: 3000 },
  { name: 'T3', value: 5000 },
  { name: 'T4', value: 2780 },
  { name: 'T5', value: 4890 },
  { name: 'T6', value: 6390 },
  { name: 'T7', value: 8490 },
];

const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  const renderWorkshopList = () => (
    <div className="space-y-12 animate-fade-in">
      {/* Economy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 italic uppercase tracking-tighter">
                  <TrendingUp className="text-[#003399]" size={24} />
                  Chỉ số Kinh tế số CLB
                </h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest opacity-60">Tăng trưởng giá trị & Token nội bộ</p>
              </div>
              <select className="bg-slate-100 border border-slate-200 text-[10px] font-black uppercase tracking-widest rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all">
                <option>Quý 4/2025</option>
                <option>Quý 3/2025</option>
              </select>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={economicData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#003399" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#003399" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#003399', opacity: 0.5 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#003399', opacity: 0.5 }} />
                  <CartesianGrid vertical={false} stroke="#E2E8F0" strokeDasharray="4 4" />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', padding: '16px', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
                    itemStyle={{ fontSize: '10px', fontWeight: 900, color: '#003399', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#003399" fillOpacity={1} fill="url(#colorValue)" strokeWidth={4} dot={{ r: 4, fill: '#003399', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 0 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A8E0]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
        </div>

        <div className="bg-slate-950 text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
          <div>
            <h3 className="text-xs font-black text-amber-500 mb-2 uppercase tracking-widest italic leading-tight">Member Wallet</h3>
            <p className="text-slate-400 text-sm font-medium">Tài sản tích lũy chuyên môn</p>
          </div>
          <div className="my-10 text-center">
            <span className="text-6xl font-black text-white italic tracking-tighter">2,450</span>
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-widest">
               BP-Coin Active
            </div>
          </div>
          <div className="space-y-3">
             <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]">Đổi đặc quyền</button>
             <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-xs font-bold uppercase tracking-widest transition-all border border-white/5">Lịch sử thu nhập</button>
          </div>
        </div>
      </div>

      {/* Workshops List */}
      <div>
        <div className="flex items-end justify-between mb-8">
           <div>
              <h2 className="text-4xl font-black font-serif text-slate-900 uppercase italic leading-none tracking-tighter">Sự kiện Sắp tới</h2>
              <div className="w-20 h-1.5 bg-blue-600 mt-2 rounded-full"></div>
           </div>
           <div className="flex gap-2">
              <button className="text-xs font-bold text-blue-600 px-4 py-2 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">Xem theo Lịch</button>
           </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((ws) => (
            <motion.div 
              key={ws.id} 
              whileHover={{ y: -8 }}
              onClick={() => setSelectedWorkshop(ws)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={ws.image} 
                  alt={ws.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border border-white/20">
                  {ws.category}
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                   <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase rounded-lg">LIVE 20/11</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-blue-500" /> {ws.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue-500" /> 14:00</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors italic uppercase tracking-tighter">{ws.title}</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed font-medium">{ws.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <img src={`https://ui-avatars.com/api/?name=${ws.speaker}&background=random`} className="w-8 h-8 rounded-full border-2 border-slate-100" alt="speaker"/>
                    <span className="text-xs font-bold text-slate-700">{ws.speaker}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                     <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderWorkshopDetail = (ws: Workshop) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      <button 
        onClick={() => setSelectedWorkshop(null)}
        className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors group"
      >
        <div className="p-2 rounded-xl group-hover:bg-blue-50 transition-colors">
          <ChevronLeft size={20} />
        </div>
        Quay lại sự kiện
      </button>

      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
         <div className="relative h-[400px]">
            <img src={ws.image} className="w-full h-full object-cover" alt={ws.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
               <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-black uppercase rounded-full">{ws.category}</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase rounded-full border border-white/20">Quốc tế</span>
               </div>
               <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter leading-none mb-6 max-w-3xl">{ws.title}</h1>
               <div className="flex flex-wrap items-center gap-8 text-white/80 text-sm font-bold">
                  <div className="flex items-center gap-2"><Calendar size={20} className="text-amber-500" /> {ws.date}</div>
                  <div className="flex items-center gap-2"><Clock size={20} className="text-amber-500" /> 14:00 - 17:00</div>
                  <div className="flex items-center gap-2"><MapPin size={20} className="text-amber-500" /> Online (Zoom Premium)</div>
               </div>
            </div>
         </div>

         <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
               <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase italic mb-4">Mô tả sự kiện</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {ws.content || ws.description}
                  </p>
               </div>

               <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase italic mb-4">Nội dung cốt lõi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {ws.highlights?.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                           <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                              <TrendingUp size={16} />
                           </div>
                           <span className="text-sm font-bold text-slate-700">{h}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {ws.materials && (
                 <div>
                    <h3 className="text-xl font-black text-slate-900 uppercase italic mb-4">Tài liệu đính kèm</h3>
                    <div className="space-y-3">
                       {ws.materials.map((m, i) => (
                         <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-3">
                               <FileText size={20} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
                               <span className="text-sm font-bold text-slate-700">{m.name}</span>
                            </div>
                            <Download size={18} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
                         </div>
                       ))}
                    </div>
                 </div>
               )}
            </div>

            <div className="space-y-8">
               <div className="p-8 bg-slate-950 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                   <h3 className="text-lg font-black uppercase italic mb-6">Đăng ký tham gia</h3>
                   <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                         <span className="text-slate-400 font-medium">Giá vé hội viên:</span>
                         <span className="font-black text-emerald-400 tracking-widest">FREE</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-slate-400 font-medium">Số lượng còn lại:</span>
                         <span className="font-black text-white">42 / 100</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                         <div className="h-full w-[58%] bg-blue-600"></div>
                      </div>
                   </div>
                   <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                      Giữ chỗ ngay
                   </button>
                   <div className="mt-4 flex gap-2">
                       <button className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5 flex items-center justify-center gap-2">
                          <Bookmark size={14} /> Lưu lại
                       </button>
                       <button className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/5">
                          <Share2 size={14} />
                       </button>
                   </div>
               </div>

               <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
                  <h3 className="text-sm font-black text-slate-900 uppercase italic mb-6">Diễn giả tài năng</h3>
                  <img src={`https://ui-avatars.com/api/?name=${ws.speaker}&background=random`} className="w-24 h-24 rounded-3xl mx-auto mb-4 border-4 border-slate-50 shadow-lg" alt={ws.speaker} />
                  <h4 className="text-xl font-black text-slate-900 mb-1 italic">{ws.speaker}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Chuyên gia cấp cao</p>
                  <button className="text-xs font-black text-blue-600 uppercase tracking-widest hover:underline">Xem profile chi tiết</button>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto pb-12">
      {selectedWorkshop ? renderWorkshopDetail(selectedWorkshop) : renderWorkshopList()}
    </div>
  );
};

export default Workshops;
