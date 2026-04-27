import React from 'react';
import { ScrollText, ShieldCheck, Target, Calendar, Award } from 'lucide-react';

const Whitelist: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-12">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-2">
          <ScrollText className="w-8 h-8 text-amber-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-600 uppercase tracking-widest">Hiệp hội Phát triển Văn hoá Doanh nghiệp Việt Nam</h2>
        <div className="w-24 h-1 bg-slate-200 mx-auto"></div>
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-slate-900">QUY CHẾ HOẠT ĐỘNG</h1>
        <h3 className="text-xl md:text-2xl font-serif text-amber-600 font-bold">CÂU LẠC BỘ “BÁO CHÍ VỚI VĂN HOÁ DOANH NGHIỆP”</h3>
        <p className="text-slate-500 italic">(Trực thuộc Hiệp hội Phát triển Văn hoá Doanh nghiệp Việt Nam – VNABC)</p>
      </div>

      {/* Document Content */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-slate-200">
        {/* Section I */}
        <div className="p-8 md:p-10 border-b border-slate-100">
          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">I</span>
            CƠ SỞ XÂY DỰNG ĐỀ ÁN
          </h4>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h5 className="font-bold text-slate-800 mb-2">1. Căn cứ pháp lý</h5>
              <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
                <li>Căn cứ Điều lệ Hiệp hội Phát triển Văn hoá Doanh nghiệp Việt Nam được Bộ Nội vụ phê duyệt;</li>
                <li>Căn cứ Nghị quyết của Ban Chấp hành VNABC về việc đẩy mạnh các hoạt động chuyên môn, hợp tác với báo chí – truyền thông nhằm lan toả văn hoá doanh nghiệp Việt Nam;</li>
                <li>Căn cứ nhu cầu thực tiễn trong việc tăng cường phối hợp giữa giới báo chí, truyền thông và cộng đồng doanh nghiệp để thúc đẩy phát triển văn hoá doanh nghiệp lành mạnh, nhân văn, bền vững.</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-800 mb-2">2. Căn cứ thực tiễn</h5>
              <ul className="list-disc pl-5 space-y-2 marker:text-amber-500">
                <li>Trong bối cảnh kinh tế – xã hội hiện nay, văn hoá doanh nghiệp ngày càng trở thành một trụ cột của phát triển bền vững, gắn liền với trách nhiệm xã hội, quản trị minh bạch và bản sắc thương hiệu.</li>
                <li>Báo chí và truyền thông đóng vai trò quan trọng trong việc định hướng dư luận, lan toả giá trị tốt đẹp, phản biện hành vi lệch chuẩn và tôn vinh những doanh nghiệp có văn hoá tích cực.</li>
                <li>Tuy nhiên, giữa báo chí và doanh nghiệp vẫn còn khoảng trống trong hiểu biết, chia sẻ thông tin và cơ chế hợp tác dài hạn.</li>
                <li>Vì vậy, việc thành lập Câu lạc bộ “Báo chí với Văn hoá Doanh nghiệp” trực thuộc VNABC là cần thiết và kịp thời, nhằm tạo diễn đàn kết nối, hợp tác, và lan toả các giá trị văn hoá doanh nghiệp trong đời sống xã hội.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section II */}
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">II</span>
            TÊN GỌI, TÍNH CHẤT, TỔ CHỨC
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Tên tiếng Việt</p>
                <p className="font-bold text-slate-800">CÂU LẠC BỘ “BÁO CHÍ VỚI VĂN HOÁ DOANH NGHIỆP”</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Tên tiếng Anh</p>
                <p className="font-bold text-slate-800">CLUB OF JOURNALISTS FOR CORPORATE CULTURE (CJCC)</p>
             </div>
          </div>
          <div className="mt-6 space-y-4 text-slate-700">
            <p><strong className="text-slate-900">Trực thuộc:</strong> Hiệp hội Phát triển Văn hoá Doanh nghiệp Việt Nam (VNABC).</p>
            <p><strong className="text-slate-900">Tính chất hoạt động:</strong> Là tổ chức xã hội – nghề nghiệp tự nguyện của các nhà báo, cơ quan báo chí, chuyên gia truyền thông, các doanh nghiệp, cá nhân quan tâm đến việc phát triển văn hoá doanh nghiệp tại Việt Nam; hoạt động không vì mục đích lợi nhuận, theo định hướng và sự quản lý của VNABC.</p>
          </div>
        </div>

        {/* Section III */}
        <div className="p-8 md:p-10 border-b border-slate-100">
          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">III</span>
            TÔN CHỈ, MỤC ĐÍCH, SỨ MỆNH
          </h4>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
             <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                <Target className="text-amber-600 mb-3" />
                <h5 className="font-bold text-slate-800 mb-2">Tôn chỉ</h5>
                <p className="text-sm text-slate-600">Kết nối, hợp tác và lan toả các giá trị văn hoá doanh nghiệp Việt Nam thông qua báo chí và truyền thông.</p>
             </div>
             <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <ShieldCheck className="text-blue-600 mb-3" />
                <h5 className="font-bold text-slate-800 mb-2">Sứ mệnh</h5>
                <p className="text-sm text-slate-600">Là cầu nối giữa báo chí và doanh nghiệp, góp phần hình thành hệ sinh thái truyền thông – kinh doanh có trách nhiệm và nhân văn.</p>
             </div>
             <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                <Award className="text-emerald-600 mb-3" />
                <h5 className="font-bold text-slate-800 mb-2">Phương châm</h5>
                <p className="text-sm font-bold text-emerald-700 uppercase leading-relaxed">Chân thực<br/>Nhân văn<br/>Đồng hành<br/>Chuyên nghiệp<br/>Lan toả</p>
             </div>
          </div>
          <div>
            <h5 className="font-bold text-slate-800 mb-3">Mục đích cụ thể:</h5>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 marker:text-amber-500">
              <li>Thúc đẩy sự hiểu biết và hợp tác giữa báo chí, doanh nghiệp và các tổ chức xã hội trong phát triển văn hoá doanh nghiệp.</li>
              <li>Tuyên truyền, phổ biến các điển hình tiên tiến, mô hình hay trong xây dựng văn hoá doanh nghiệp.</li>
              <li>Đào tạo, bồi dưỡng, chia sẻ kinh nghiệm cho đội ngũ phóng viên, biên tập viên và chuyên viên truyền thông nội bộ về lĩnh vực văn hoá doanh nghiệp.</li>
              <li>Thực hiện các chương trình truyền thông, toạ đàm, giải thưởng, xuất bản ấn phẩm… nhằm lan toả giá trị của văn hoá doanh nghiệp Việt Nam.</li>
              <li>Góp phần xây dựng văn hoá kinh doanh Việt Nam lành mạnh, tích cực, gắn với giá trị chân – thiện – mỹ.</li>
            </ul>
          </div>
        </div>

        {/* Section IV */}
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
          <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">IV</span>
            CƠ CẤU TỔ CHỨC
          </h4>
          <div className="space-y-6 text-slate-700">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h5 className="font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">1. Ban Điều hành CLB</h5>
                <p className="mb-2 text-sm text-slate-500">Gồm 5–7 thành viên do Thường vụ VNABC quyết định bổ nhiệm:</p>
                <ul className="list-none space-y-2 font-medium text-slate-800">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-500 rounded-full"></span> 01 Chủ tịch (đại diện giới báo chí hoặc chuyên gia văn hoá doanh nghiệp)</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> 03–05 Phó Chủ tịch phụ trách các tiểu ban chuyên môn</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> 01 Tổng Thư ký</li>
                </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                   <h5 className="font-bold text-slate-800 mb-2">2. Các Tiểu ban chuyên môn</h5>
                   <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
                     <li>Tiểu ban Báo chí – Truyền thông</li>
                     <li>Tiểu ban Doanh nghiệp – Văn hoá</li>
                     <li>Tiểu ban Nghiên cứu – Đào tạo</li>
                     <li>Tiểu ban Giải thưởng – Vinh danh</li>
                   </ul>
                </div>
                <div>
                   <h5 className="font-bold text-slate-800 mb-2">3. Ban Cố vấn</h5>
                   <p className="text-sm">Gồm các nhà quản lý, nhà báo kỳ cựu, doanh nhân và học giả uy tín, hỗ trợ định hướng chuyên môn và chiến lược cho CLB.</p>
                </div>
            </div>
          </div>
        </div>

        {/* Section V & VI & VII */}
        <div className="p-8 md:p-10 border-b border-slate-100">
           <div className="mb-10">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">V</span>
                THÀNH VIÊN CÂU LẠC BỘ
              </h4>
              <div className="pl-4 border-l-2 border-slate-200 space-y-4 text-slate-700">
                 <p><strong className="text-slate-900">Đối tượng:</strong> Tập thể (cơ quan báo chí, doanh nghiệp), Cá nhân (nhà báo, chuyên gia), Danh dự.</p>
                 <p><strong className="text-slate-900">Tiêu chí:</strong> Uy tín, cam kết đồng hành, tích cực tham gia.</p>
                 <p><strong className="text-slate-900">Quyền lợi:</strong> Tham gia hoạt động, ưu tiên đào tạo/vinh danh, tuân thủ quy chế.</p>
              </div>
           </div>

           <div className="mb-10">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">VI</span>
                NỘI DUNG HOẠT ĐỘNG
              </h4>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5 text-slate-700 marker:text-amber-500">
                  <li>Tổ chức diễn đàn, toạ đàm, hội thảo.</li>
                  <li>Xây dựng Giải thưởng “Báo chí vì Văn hoá Doanh nghiệp”.</li>
                  <li>Phát hành ấn phẩm, chuyên trang số.</li>
                  <li>Đào tạo, bồi dưỡng chuyên môn.</li>
                  <li>Nghiên cứu, tư vấn, xuất bản tài liệu.</li>
                  <li>Mạng lưới báo chí – doanh nghiệp – học giả.</li>
                  <li>Hoạt động xã hội, thiện nguyện.</li>
              </ul>
           </div>

           <div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">VII</span>
                KINH PHÍ HOẠT ĐỘNG
              </h4>
              <p className="text-slate-700 pl-11">Nguồn thu gồm: Hỗ trợ từ VNABC, Hội phí/Tài trợ thành viên, Nguồn thu từ sự kiện/hoạt động chuyên môn hợp pháp.</p>
           </div>
        </div>

        {/* Section VIII - Roadmap */}
        <div className="p-8 md:p-10 bg-slate-900 text-white">
           <h4 className="text-xl font-bold text-amber-500 mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-slate-900 text-sm">VIII</span>
            LỘ TRÌNH TRIỂN KHAI
          </h4>
           <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-slate-700">
              <div className="relative pl-12">
                 <div className="absolute left-2 top-1 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-900"></div>
                 <h5 className="text-lg font-bold text-white mb-2">Giai đoạn 1 (Quý IV/2025)</h5>
                 <ul className="list-disc pl-5 text-slate-300 space-y-1">
                    <li>Trình duyệt Đề án và ra Quyết định thành lập CLB.</li>
                    <li>Thành lập Ban Điều hành lâm thời và Ban Cố vấn.</li>
                    <li>Xây dựng Quy chế, kết nạp thành viên sáng lập.</li>
                    <li className="text-amber-300 font-medium">Lễ ra mắt chính thức: Dự kiến dịp Diễn đàn “Văn hoá với Doanh nghiệp” (tháng 12/2025).</li>
                 </ul>
              </div>
              <div className="relative pl-12">
                 <div className="absolute left-2 top-1 w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-900"></div>
                 <h5 className="text-lg font-bold text-white mb-2">Giai đoạn 2 (2026)</h5>
                 <ul className="list-disc pl-5 text-slate-300 space-y-1">
                    <li>Phát động chương trình “Báo chí đồng hành cùng Văn hoá Doanh nghiệp Việt Nam”.</li>
                    <li>Diễn đàn Báo chí – Văn hoá Doanh nghiệp thường niên lần thứ I.</li>
                    <li>Chuẩn bị Giải thưởng “Báo chí vì Văn hoá Doanh nghiệp” lần đầu tiên.</li>
                 </ul>
              </div>
              <div className="relative pl-12">
                 <div className="absolute left-2 top-1 w-4 h-4 bg-slate-600 rounded-full border-4 border-slate-900"></div>
                 <h5 className="text-lg font-bold text-white mb-2">Giai đoạn 3 (Từ 2027 trở đi)</h5>
                 <ul className="list-disc pl-5 text-slate-300 space-y-1">
                    <li>Duy trì hoạt động thường kỳ & Mở rộng mạng lưới toàn quốc.</li>
                    <li>Đề xuất sáng kiến, chính sách, và hợp tác quốc tế.</li>
                 </ul>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Whitelist;