import React, { useState } from 'react';
import { NewsItem } from '../types';
import { CalendarDays, Tag, ArrowLeft, User, Clock, Share2, Bookmark } from 'lucide-react';

// Expanded data with full content
const news: NewsItem[] = [
  {
    id: 'n1',
    title: 'Lễ ra mắt nền tảng dữ liệu mở cho doanh nghiệp SME',
    excerpt: 'Sự kiện đánh dấu bước ngoặt trong việc minh bạch hóa thông tin thị trường, hỗ trợ các doanh nghiệp vừa và nhỏ tiếp cận nguồn vốn.',
    date: '12/10/2023',
    category: 'Sự kiện CLB',
    imageUrl: 'https://picsum.photos/seed/news1/800/500',
    author: 'Ban Thư Ký',
    content: `
      <p class="mb-4"><strong>Hà Nội, ngày 12/10/2023</strong> – Sáng nay, Câu lạc bộ "Báo chí với Văn hóa Doanh nghiệp" (CJCC) phối hợp cùng Hiệp hội VNABC đã chính thức ra mắt "Nền tảng dữ liệu mở dành cho doanh nghiệp vừa và nhỏ (SME Open Data Platform)".</p>
      
      <p class="mb-4">Đây là nỗ lực kéo dài 6 tháng của Tiểu ban Công nghệ và Tiểu ban Doanh nghiệp, nhằm giải quyết bài toán "khát" thông tin thị trường chính thống của cộng đồng doanh nghiệp.</p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Minh bạch hóa thông tin</h3>
      <p class="mb-4">Phát biểu tại buổi lễ, Ông Chủ tịch CLB nhấn mạnh: <em>"Trong kỷ nguyên số, dữ liệu là tài sản. Việc chia sẻ dữ liệu không chỉ giúp doanh nghiệp tìm kiếm cơ hội kinh doanh mà còn thể hiện văn hóa minh bạch, sẵn sàng hợp tác."</em></p>
      
      <p class="mb-4">Nền tảng cung cấp:</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Báo cáo xu hướng tiêu dùng theo quý.</li>
        <li>Danh sách các quỹ đầu tư và tiêu chí rót vốn.</li>
        <li>Hồ sơ năng lực đã được thẩm định của các thành viên CLB.</li>
      </ul>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Cơ hội kết nối</h3>
      <p class="mb-4">Sự kiện thu hút hơn 200 CEO và 50 cơ quan báo chí. Ngay tại sự kiện, 15 biên bản ghi nhớ hợp tác (MOU) đã được ký kết giữa các doanh nghiệp thành viên, mở ra cơ hội giao thương trị giá ước tính 50 tỷ đồng.</p>
    `
  },
  {
    id: 'n2',
    title: 'Tổng kết quý 3: Những con số biết nói',
    excerpt: 'Báo cáo chi tiết về hoạt động của Câu lạc bộ trong quý vừa qua, vinh danh top 10 phóng viên có đóng góp xuất sắc nhất.',
    date: '10/10/2023',
    category: 'Bản tin nội bộ',
    imageUrl: 'https://picsum.photos/seed/news2/800/500',
    author: 'Tiểu ban Tổ chức',
    content: `
      <p class="mb-4">Quý 3/2023 đã khép lại với những biến động mạnh mẽ của nền kinh tế, nhưng hoạt động của CJCC vẫn duy trì đà tăng trưởng ấn tượng.</p>
      
      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Các chỉ số chính (Key Metrics)</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-slate-50 p-4 rounded border border-slate-200">
          <span class="block text-sm text-slate-500">Thành viên mới</span>
          <span class="text-2xl font-bold text-amber-600">+45</span>
        </div>
        <div class="bg-slate-50 p-4 rounded border border-slate-200">
          <span class="block text-sm text-slate-500">Sự kiện tổ chức</span>
          <span class="text-2xl font-bold text-blue-600">08</span>
        </div>
        <div class="bg-slate-50 p-4 rounded border border-slate-200">
          <span class="block text-sm text-slate-500">Bài viết chuyên sâu</span>
          <span class="text-2xl font-bold text-emerald-600">120+</span>
        </div>
        <div class="bg-slate-50 p-4 rounded border border-slate-200">
          <span class="block text-sm text-slate-500">Quỹ thiện nguyện</span>
          <span class="text-2xl font-bold text-rose-600">500 Triệu VNĐ</span>
        </div>
      </div>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Vinh danh thành viên xuất sắc</h3>
      <p class="mb-4">Tiểu ban Giải thưởng xin trân trọng vinh danh Top 3 cá nhân có đóng góp tích cực nhất:</p>
      <ol class="list-decimal pl-5 mb-4 space-y-2">
         <li><strong>Nhà báo Minh Tú</strong> - Báo Đầu tư: Chuỗi bài phóng sự về Văn hóa Doanh nhân.</li>
         <li><strong>CEO Trần Hùng</strong> - TechCorp: Tài trợ hệ thống LMS đào tạo.</li>
         <li><strong>Ms. Lan Anh</strong> - Chuyên gia truyền thông: Speaker của 3 workshop liên tiếp.</li>
      </ol>
    `
  },
  {
    id: 'n3',
    title: 'Góc nhìn chuyên gia: AI sẽ thay thế nhà báo hay trở thành trợ lý đắc lực?',
    excerpt: 'Bài phân tích chuyên sâu từ ông Nguyễn Văn A - Giám đốc công nghệ FPT, về tương lai của ngành báo chí trong kỷ nguyên trí tuệ nhân tạo.',
    date: '08/10/2023',
    category: 'Góc nhìn',
    imageUrl: 'https://picsum.photos/seed/news3/800/500',
    author: 'Nguyễn Văn A (Khách mời)',
    content: `
      <p class="italic text-slate-500 mb-6 border-l-4 border-amber-500 pl-4">"AI không thay thế nhà báo. Nhưng nhà báo biết sử dụng AI sẽ thay thế nhà báo không biết sử dụng AI."</p>

      <p class="mb-4">Đó là khẳng định của tôi khi quan sát sự bùng nổ của Generative AI (AI tạo sinh) trong 12 tháng qua. Các tòa soạn lớn trên thế giới như AP, Reuters đã ứng dụng AI để tự động hóa các bản tin tài chính, thể thao từ nhiều năm nay. Tuy nhiên, ChatGPT hay Gemini đã đưa cuộc chơi lên một tầm cao mới.</p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">AI làm được gì?</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Xử lý dữ liệu thô:</strong> Phân tích hàng ngàn trang báo cáo tài chính trong vài giây để tìm ra điểm bất thường.</li>
        <li><strong>Gợi ý tiêu đề:</strong> Tối ưu hóa SEO và tăng tỷ lệ click (CTR) dựa trên hành vi người dùng.</li>
        <li><strong>Cá nhân hóa nội dung:</strong> Đề xuất tin tức phù hợp với từng độc giả.</li>
      </ul>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Giá trị cốt lõi của con người</h3>
      <p class="mb-4">Dù AI thông minh đến đâu, nó vẫn thiếu đi <strong>Lòng trắc ẩn</strong> và <strong>Đạo đức</strong> - hai trụ cột của văn hóa báo chí. Máy móc có thể viết một bản tin về thiên tai, nhưng chỉ có nhà báo mới có thể lăn xả vào hiện trường, cảm nhận nỗi đau của người dân và truyền tải cảm xúc đó qua từng câu chữ.</p>
      
      <p class="mb-4">Tại CJCC, chúng tôi khuyến khích hội viên làm chủ công nghệ, nhưng luôn giữ vững "tâm sáng, bút sắc".</p>
    `
  },
  {
    id: 'n4',
    title: 'Hội thảo: Kỹ năng viết Feature Story cho tạp chí doanh nghiệp',
    excerpt: 'Buổi workshop chuyên sâu giúp các cây bút nâng cao kỹ năng kể chuyện, tạo ra những bài viết có chiều sâu và sức lan tỏa.',
    date: '05/10/2023',
    category: 'Đào tạo',
    imageUrl: 'https://picsum.photos/seed/news4/800/500',
    author: 'Tiểu ban Đào tạo',
    content: `
      <p class="mb-4">Feature Story (Bài ký sự/phóng sự chuyên sâu) luôn là "đặc sản" của báo chí chất lượng cao. Khác với tin tức (News) khô khan, Feature Story thổi hồn vào câu chuyện, khắc họa chân dung nhân vật và văn hóa doanh nghiệp một cách sống động.</p>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Nội dung khóa học</h3>
      <p class="mb-4">Buổi hội thảo diễn ra vào 05/10/2023 sẽ tập trung vào:</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Cấu trúc kim tự tháp ngược vs. Cấu trúc kể chuyện:</strong> Khi nào dùng cái nào?</li>
        <li><strong>Show, don't tell:</strong> Nghệ thuật tả thực trong báo chí.</li>
        <li><strong>Phỏng vấn sâu:</strong> Cách đặt câu hỏi để nhân vật "dốc lòng".</li>
      </ul>

      <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">Giảng viên</h3>
      <p class="mb-4">Chương trình được dẫn dắt bởi Nhà báo kỳ cựu Phạm Lan Hương - Thư ký tòa soạn Tạp chí Forbes Việt Nam (cũ), người có 20 năm kinh nghiệm viết về chân dung doanh nhân.</p>
      
      <div class="bg-amber-50 p-4 rounded border-l-4 border-amber-500 mt-6">
         <p class="font-bold">Lưu ý:</p>
         <p>Hội viên CJCC được miễn phí vé tham dự. Vui lòng đăng ký trước ngày 01/10 qua ứng dụng.</p>
      </div>
    `
  }
];

const NewsFeed: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  // Detail View Implementation
  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in pb-12">
        {/* Navigation Bar */}
        <button 
          onClick={() => setSelectedArticle(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-amber-600 mb-6 group transition-colors"
        >
          <div className="p-2 rounded-full bg-white border border-slate-200 group-hover:border-amber-500 shadow-sm">
            <ArrowLeft size={20} />
          </div>
          <span className="font-medium">Quay lại danh sách</span>
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          {/* Hero Image */}
          <div className="relative h-[300px] md:h-[400px] w-full">
             <img 
               src={selectedArticle.imageUrl} 
               alt={selectedArticle.title} 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
             <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
                <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded mb-4 uppercase tracking-wide shadow-sm">
                  {selectedArticle.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold font-serif leading-tight mb-4">
                  {selectedArticle.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200 font-medium">
                   <span className="flex items-center gap-2"><User size={16} className="text-amber-400"/> {selectedArticle.author || 'Admin'}</span>
                   <span className="flex items-center gap-2"><Clock size={16} className="text-amber-400"/> {selectedArticle.date}</span>
                   <span className="flex items-center gap-2"><Tag size={16} className="text-amber-400"/> Tin nổi bật</span>
                </div>
             </div>
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-12">
             <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Text */}
                <div className="flex-1">
                   <p className="text-xl font-serif text-slate-600 leading-relaxed mb-8 font-medium border-b border-slate-100 pb-8">
                     {selectedArticle.excerpt}
                   </p>
                   
                   <div 
                     className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-a:text-amber-600 hover:prose-a:text-amber-500 prose-img:rounded-xl"
                     dangerouslySetInnerHTML={{ __html: selectedArticle.content }} 
                   />

                   {/* Interaction Footer */}
                   <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors text-sm font-medium">
                           <Share2 size={16} /> Chia sẻ
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors text-sm font-medium">
                           <Bookmark size={16} /> Lưu bài viết
                        </button>
                      </div>
                      <div className="text-sm text-slate-400 italic">
                        Bản quyền thuộc về CJCC
                      </div>
                   </div>
                </div>

                {/* Sidebar - Related */}
                <div className="w-full lg:w-72 shrink-0 space-y-8">
                   <div>
                      <h4 className="font-bold text-slate-800 mb-4 font-serif text-lg">Tin liên quan</h4>
                      <div className="space-y-4">
                         {news.filter(n => n.id !== selectedArticle.id).slice(0, 3).map(item => (
                           <div key={item.id} className="group cursor-pointer" onClick={() => setSelectedArticle(item)}>
                              <div className="h-32 rounded-lg overflow-hidden mb-2 relative">
                                 <img src={item.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                                 <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">{item.category}</div>
                              </div>
                              <h5 className="font-bold text-slate-800 text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">{item.title}</h5>
                              <p className="text-xs text-slate-500 mt-1">{item.date}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-2 font-serif">Đăng ký bản tin</h4>
                      <p className="text-xs text-slate-500 mb-4">Nhận thông báo về các sự kiện mới nhất qua email.</p>
                      <input type="email" placeholder="Email của bạn" className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg mb-2 focus:outline-none focus:border-amber-500"/>
                      <button className="w-full py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-amber-600 transition-colors">Đăng ký ngay</button>
                   </div>
                </div>
             </div>
          </div>
        </article>
      </div>
    );
  }

  // List View Implementation
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold font-serif text-slate-900">Bản tin & Sự kiện</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">Tất cả</button>
          <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-full text-sm font-medium">Nội bộ</button>
          <button className="px-4 py-2 bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-full text-sm font-medium">Thị trường</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Featured Item - Takes up 2 columns on large screens */}
        <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer" onClick={() => setSelectedArticle(news[0])}>
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-md">
            <img src={news[0].imageUrl} alt={news[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded mb-3 uppercase tracking-wide">
                {news[0].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif leading-tight group-hover:text-amber-300 transition-colors">
                {news[0].title}
              </h3>
              <p className="text-slate-300 line-clamp-3 mb-4 text-sm md:text-base">
                {news[0].excerpt}
              </p>
              <div className="flex items-center text-slate-400 text-sm gap-4">
                <span className="flex items-center gap-1"><CalendarDays size={16} /> {news[0].date}</span>
                <span className="flex items-center gap-1"><User size={16} /> {news[0].author || 'Admin'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Standard Items */}
        {news.slice(1).map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedArticle(item)}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group cursor-pointer flex flex-col h-full hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden relative">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Tag size={14} className="text-amber-500" />
                <span className="text-xs font-bold text-amber-600 uppercase">{item.category}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 font-serif group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1">
                {item.excerpt}
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
                <span>{item.date}</span>
                <span className="text-amber-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Xem chi tiết &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;