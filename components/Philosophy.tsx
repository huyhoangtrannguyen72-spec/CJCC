import React, { useState } from 'react';
import { Scale, Heart, Zap, Globe, ChevronRight, Book, Shield, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sections = [
  {
    id: 'vision',
    title: 'Tầm nhìn & Sứ mệnh',
    icon: Target,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-[#003399] to-[#000F2E] text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-3xl font-black uppercase italic mb-6 text-[#00A8E0]">Vision 2030</h3>
            <p className="text-xl font-medium leading-relaxed mb-8 font-primary">
              Trở thành cộng đồng báo chí doanh nghiệp lớn nhất Việt Nam, dẫn đầu xu hướng chuyển đổi số và kiến tạo tiêu chuẩn mới cho truyền thông hiện đại.
            </p>
            <div className="flex gap-4">
               <div className="px-5 py-2 bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#FFC800]">Tin cậy</div>
               <div className="px-5 py-2 bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#FFC800]">Minh bạch</div>
               <div className="px-5 py-2 bg-white/10 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#FFC800]">Sáng tạo</div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
             <Target size={300} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-black text-slate-900 mb-3 uppercase italic tracking-tighter">Sứ mệnh xã hội</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Đồng hành cùng doanh nghiệp trong việc minh bạch hóa thông tin, giúp cộng đồng có cái nhìn đúng đắn về giá trị kinh tế mà doanh nghiệp mang lại.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-black text-slate-900 mb-3 uppercase italic tracking-tighter">Sứ mệnh nghề nghiệp</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Nâng cao vị thế của người làm báo chí doanh nghiệp, cung cấp học liệu và công cụ để mỗi thành viên trở thành một chuyên gia truyền thông thực thụ.</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'values',
    title: 'Giá trị Cốt lõi',
    icon: Heart,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: 'Tốc độ & Chính xác', color: '#003399', bg: '#E6EBF5', text: 'Thông tin phải đi trước nhưng phải tuyệt đối chính xác. Chúng ta không đánh đổi sự thật lấy lượt xem.' },
          { icon: Scale, title: 'Đạo đức nghề nghiệp', color: '#00A8E0', bg: '#E6F6FC', text: 'Giữ vững sự khách quan. Không trục lợi cá nhân. Tôn trọng bản quyền và quyền riêng tư tuyệt đối.' },
          { icon: Heart, title: 'Trách nhiệm cộng đồng', color: '#F58220', bg: '#FEEFE3', text: 'Mỗi bài viết đều hướng tới giá trị cộng đồng. Hỗ trợ doanh nghiệp nhỏ, lan tỏa sáng kiến xanh.' },
        ].map((v, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
            <div 
              style={{ backgroundColor: v.bg, color: v.color }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm"
            >
              <v.icon size={28} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight uppercase italic tracking-tighter">{v.title}</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'conduct',
    title: 'Quy tắc ứng xử',
    icon: Shield,
    content: (
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
           <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">Luật chơi chung - Code of Conduct</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { num: '01', title: 'Chia sẻ tri thức', desc: 'Mọi thành viên có trách nhiệm đóng góp ít nhất 1 bài học/kinh nghiệm mỗi quý lên kho học liệu chung.' },
            { num: '02', title: 'Văn hóa phản biện', desc: 'Khuyến khích tranh luận thẳng thắn, xây dựng trên tinh thần tôn trọng sự khác biệt. Tuyệt đối không công kích cá nhân.' },
            { num: '03', title: 'Bảo mật thông tin', desc: 'Thông tin dự án mật hoặc các thảo luận nội bộ CLB phải được bảo vệ tuyệt đối. Tiết lộ trái phép sẽ dẫn đến đình chỉ tư cách hội viên.' },
            { num: '04', title: 'Hợp tác phát triển', desc: 'Hội viên ưu tiên sử dụng dịch vụ và hỗ trợ lẫn nhau trong các chiến dịch truyền thông vì lợi ích chung của tập thể.' },
          ].map((item, i) => (
            <div key={i} className="p-8 flex gap-6 hover:bg-blue-50/30 transition-colors group">
              <div className="text-5xl font-black text-slate-100 group-hover:text-[#F58220] transition-colors italic shrink-0 leading-none">{item.num}</div>
              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase italic tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
];

const Philosophy: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-12">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
              activeSection === s.id 
              ? 'bg-slate-900 text-white shadow-2xl translate-y-[-4px]' 
              : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <s.icon size={18} className={activeSection === s.id ? 'text-blue-400' : 'text-slate-400'} />
            {s.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {sections.find(s => s.id === activeSection)?.content}
        </motion.div>
      </AnimatePresence>

      {/* Footer CTA */}
      <div className="bg-amber-500 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-amber-500/20">
         <div className="text-slate-900">
            <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">Bạn đã thấu hiểu tôn chỉ?</h3>
            <p className="font-medium text-slate-800">Cùng chúng tôi kiến tạo tương lai báo chí doanh nghiệp mới.</p>
         </div>
         <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-2">
            Cam kết thực hiện <ChevronRight size={18} />
         </button>
      </div>
    </div>
  );
};

export default Philosophy;
