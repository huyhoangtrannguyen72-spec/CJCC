import React, { useState } from 'react';
import { Course, CourseModule, Lesson } from '../types';
import { PlayCircle, FileText, CheckCircle, Download, ChevronLeft, ArrowRight, Lock, Clock, BookOpen, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const courses: Course[] = [
  {
    id: 'c1',
    title: 'Nhập môn Báo chí Doanh nghiệp',
    category: 'Căn bản',
    description: 'Nắm vững kiến thức nền tảng về mối quan hệ giữa báo chí và doanh nghiệp trong kỷ nguyên số.',
    progress: 100,
    author: 'TS. Lê Thẩm Dương',
    thumbnail: 'https://picsum.photos/seed/c1/800/600',
    modules: [
      {
        id: 'm1',
        title: 'Chương 1: Tổng quan Ngành',
        lessons: [
          { id: 'l1', title: 'Vai trò của Báo chí trong Kinh tế', duration: '15:00', isCompleted: true },
          { id: 'l2', title: 'Các loại hình Báo chí Doanh nghiệp', duration: '20:00', isCompleted: true },
        ]
      }
    ]
  },
  {
    id: 'c2',
    title: 'Kỹ năng viết PR & Thông cáo báo chí',
    category: 'Kỹ năng',
    description: 'Học cách soạn thảo thông cáo báo chí chuyên nghiệp, thu hút sự chú ý của biên tập viên.',
    progress: 45,
    author: 'Nhà báo Phan Đăng',
    thumbnail: 'https://picsum.photos/seed/c2/800/600',
    modules: [
      {
        id: 'm2',
        title: 'Chương 1: Cấu trúc Thông cáo',
        lessons: [
          { id: 'l3', title: 'Nguyên tắc 5W1H trong PR', duration: '12:00', isCompleted: true },
          { id: 'l4', title: 'Cách đặt tiêu đề "giật gân" nhưng văn minh', duration: '18:00', isCompleted: false },
        ]
      },
      {
        id: 'm3',
        title: 'Chương 2: Phối hợp với Tòa soạn',
        lessons: [
          { id: 'l5', title: 'Xây dựng mạng lưới quan hệ báo chí', duration: '25:00', isCompleted: false },
        ]
      }
    ]
  },
  {
    id: 'c3',
    title: 'Xử lý khủng hoảng truyền thông',
    category: 'Nâng cao',
    description: 'Quy trình 5 bước và các tình huống thực tế trong việc quản trị rủi ro thương hiệu.',
    progress: 0,
    author: 'Chuyên gia Nguyễn Thanh Sơn',
    thumbnail: 'https://picsum.photos/seed/c3/800/600',
    modules: []
  }
];

const documents = [
  { id: 1, title: 'Sổ tay phóng viên doanh nghiệp 2024', size: '2.4 MB', type: 'PDF' },
  { id: 2, title: 'Template kế hoạch truyền thông quý', size: '1.1 MB', type: 'XLSX' },
  { id: 3, title: 'Bộ quy tắc ứng xử mạng xã hội', size: '500 KB', type: 'PDF' },
];

const Training: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  const renderCourseList = () => (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fade-in">
      <div className="xl:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black italic text-[#003399] uppercase tracking-tighter">Hệ Thống Đào Tạo</h2>
          <div className="flex gap-2">
            {['Tất cả', 'Căn bản', 'Kỹ năng', 'Nâng cao'].map((cat) => (
              <button key={cat} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl border border-slate-200 hover:bg-[#003399] hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          {courses.map((course) => (
            <div 
              key={course.id} 
              onClick={() => setSelectedCourse(course)}
              className="flex flex-col md:flex-row bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 gap-6 hover:shadow-2xl hover:shadow-blue-900/10 transition-all cursor-pointer group"
            >
              <div className="relative md:w-56 h-40 md:h-auto rounded-2xl overflow-hidden shrink-0">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#003399]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="text-white w-14 h-14" />
                </div>
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/20 backdrop-blur-md text-[10px] text-white font-black rounded-lg uppercase tracking-widest">
                   {course.category}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-bold text-xl text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Giảng viên: {course.author}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-slate-600">{course.progress}% Hoàn thành</span>
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                       <Layers size={12} /> {course.modules.length} Chương
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      className={`h-full rounded-full ${course.progress === 100 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-blue-600'}`} 
                    ></motion.div>
                  </div>
                </div>
              </div>
              {course.progress === 100 && (
                <div className="flex items-center justify-center md:border-l border-slate-100 md:pl-6">
                   <div className="text-center">
                     <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-1">
                        <CheckCircle className="w-6 h-6 text-emerald-600" />
                     </div>
                     <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">Chứng chỉ</span>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-950 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="font-bold text-xl mb-4 text-white flex items-center gap-2 italic">
            <BookOpen className="text-amber-500" size={20} />
            Học liệu Hội viên
          </h3>
          <p className="text-xs text-slate-400 mb-6 leading-relaxed">Bộ công cụ & tài nguyên độc quyền dành cho các hội viên chính thức của CJCC.</p>
          
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3.5 bg-white/5 border border-white/5 rounded-xl group cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="text-amber-500" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate text-slate-100 group-hover:text-white">{doc.title}</p>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{doc.type} • {doc.size}</p>
                  </div>
                </div>
                <Download size={16} className="text-slate-500 group-hover:text-amber-500 transition-colors shrink-0" />
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
            Xem tất cả kho báu
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden h-48">
           <div className="relative z-10">
              <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-widest text-blue-600">Hỏi đáp AI</h3>
              <p className="text-sm font-medium text-slate-600 mb-4">Bạn chưa hiểu rõ về thuật ngữ báo chí?</p>
              <button className="px-6 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                Thử ngay
              </button>
           </div>
           <div className="absolute right-0 bottom-0 opacity-10">
              <PlayCircle size={120} />
           </div>
        </div>
      </div>
    </div>
  );

  const renderCourseDetail = (course: Course) => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[600px]"
    >
      {/* Sidebar: Modules */}
      <div className="w-full md:w-80 bg-slate-50 border-r border-slate-100 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-4">
           <button onClick={() => setSelectedCourse(null)} className="p-2 hover:bg-white rounded-lg transition-colors">
              <ChevronLeft size={20} />
           </button>
           <h3 className="font-black text-slate-900 uppercase italic tracking-tighter">Nội dung học</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {course.modules.length > 0 ? course.modules.map((module) => (
            <div key={module.id} className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                <Layers size={12} /> {module.title}
              </div>
              <div className="space-y-1">
                {module.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(lesson)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                      activeLesson?.id === lesson.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'hover:bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {lesson.isCompleted ? <CheckCircle size={16} className={activeLesson?.id === lesson.id ? 'text-blue-200' : 'text-emerald-500'} /> : <PlayCircle size={16} />}
                      <span className="text-sm font-bold truncate">{lesson.title}</span>
                    </div>
                    <span className="text-[10px] opacity-60 font-medium shrink-0 ml-2">{lesson.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          )) : (
            <div className="text-center py-12 text-slate-400 italic text-sm">Chưa có bài học nào</div>
          )}
        </div>
      </div>

      {/* Main: Player context */}
      <div className="flex-1 p-8 md:p-12 flex flex-col">
          {activeLesson ? (
            <div className="flex-1 flex flex-col">
               <div className="aspect-video bg-slate-900 rounded-3xl mb-8 flex items-center justify-center relative group overflow-hidden shadow-2xl shadow-blue-900/10">
                  <PlayCircle size={80} className="text-white opacity-40 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 cursor-pointer" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <div className="h-1 w-64 bg-white/20 rounded-full overflow-hidden">
                           <div className="h-full w-1/3 bg-blue-500"></div>
                        </div>
                        <span className="text-[10px] text-white/60 font-bold">04:22 / {activeLesson.duration}</span>
                     </div>
                  </div>
               </div>
               <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-4">
                     <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[10px] font-black uppercase rounded tracking-widest">Đang học</span>
                     <span className="text-slate-300">•</span>
                     <span className="text-xs text-slate-500 font-bold flex items-center gap-1"><Clock size={12} /> Bài {activeLesson.id.replace('l','')}</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-6 italic">{activeLesson.title}</h2>
                  <div className="prose prose-slate max-w-none">
                     <p className="text-slate-600 leading-relaxed text-lg">
                        Trong bài học này, chúng ta sẽ tìm hiểu về cách mà thông tin từ doanh nghiệp được các tòa soạn tiếp nhận và xử lý. 
                        Hiểu được quy trình này giúp bạn chuẩn bị nội dung tốt hơn và tăng khả năng bài viết được đăng tải.
                     </p>
                  </div>
               </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
               <div className="w-32 h-32 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <BookOpen size={48} className="text-slate-200" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.title}</h3>
               <p className="text-slate-500 max-w-md mb-8">Hãy chọn một bài học từ danh sách bên trái để bắt đầu hoặc tiếp tục hành trình của bạn.</p>
               <div className="flex items-center gap-12 text-sm text-slate-400">
                  <div className="text-center">
                     <span className="block text-2xl font-black text-slate-900 mb-1">{course.modules.length}</span>
                     <span className="uppercase text-[10px] font-bold tracking-widest">Chương học</span>
                  </div>
                  <div className="h-8 w-px bg-slate-100"></div>
                  <div className="text-center">
                     <span className="block text-2xl font-black text-slate-900 mb-1">{course.progress}%</span>
                     <span className="uppercase text-[10px] font-bold tracking-widest">Tiến độ</span>
                  </div>
               </div>
            </div>
          )}

          <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
             <div className="flex items-center gap-4">
                <img src={`https://ui-avatars.com/api/?name=${course.author}&background=random`} className="w-12 h-12 rounded-2xl" alt={course.author} />
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-tighter">Giảng viên chuyên môn</span>
                  <span className="text-base font-black text-slate-900 italic">{course.author}</span>
                </div>
             </div>
             <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
                Bài tiếp theo <ArrowRight size={16} />
             </button>
          </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto pb-12">
      {selectedCourse ? renderCourseDetail(selectedCourse) : renderCourseList()}
    </div>
  );
};

export default Training;
