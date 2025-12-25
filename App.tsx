import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './components/Button';
import { 
  CheckCircle2,
  XCircle,
  MessageCircle,
  ShieldCheck,
  Clock,
  Zap,
  ChevronDown,
  AlertCircle,
  Gift,
  MousePointer2,
  CalendarDays,
  Video,
  Cpu,
  Users,
  Sparkles,
  Layers,
  ChevronRight,
  UserCheck,
  Loader2
} from 'lucide-react';

const LOGO_URL = "https://static.vncdn.vn/vnetwork.vn/pub/websites/uploads/5/new%20logo%20click%20ai%20(1).png";
// THAY THẾ URL NÀY SAU KHI BẠN DEPLOY GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvrhkOOA1dSzB_Ys4KQknAR6E6wjMz6lSDzev6tpZTlgB3BUmlvndbmmC9dwZUzREvRA/exec"; 

const CURRICULUM = [
  {
    day: "01",
    title: "AI Contents & Video Automation",
    value: "5.000.000đ",
    icon: <Video size={24} />,
    modules: [
      { name: "Bí mật 3 bước xây dựng kênh bền vững", desc: "Nguyên lý xây kênh Social mà 99% creator nghiệp dư bỏ qua." },
      { name: "Tự động hóa xây video đa kênh", desc: "Tạo 100+ video mỗi tháng không cần camera hay editor." },
      { name: "5 phương thức kiếm tiền từ video", desc: "Chiến lược chuyển đổi Attention thành thu nhập thực tế." }
    ]
  },
  {
    day: "02",
    title: "AI Agent & Vibe Coding",
    value: "7.500.000đ",
    icon: <Cpu size={24} />,
    modules: [
      { name: "Kiến trúc AI Agents & Automation", desc: "Xây dựng hệ thống thông minh tự động làm việc thay bạn." },
      { name: "Build AI Agents & Vibe Coding", desc: "Nói cho AI những gì bạn muốn, AI sẽ viết giải pháp cho bạn." },
      { name: "Lộ trình ứng dụng $10K-$50K/tháng", desc: "Chi tiết quy trình triển khai giải pháp AI cho doanh nghiệp." }
    ]
  },
  {
    day: "03",
    title: "AI Coach & Trainer System",
    value: "10.000.000đ",
    icon: <Users size={24} />,
    modules: [
      { name: "AI Training - Quy trình Trainer 4.0", desc: "Scale mô hình đào tạo lên hàng ngàn người với chi phí tối thiểu." },
      { name: "Sức mạnh xây dựng cộng đồng", desc: "Tại sao Community là tài sản quý giá nhất trong kỷ nguyên AI." },
      { name: "MVP 90-Day Roadmap", desc: "Hành động beat sự hoàn hảo. Quy trình bắt đầu ngay hôm nay." }
    ]
  }
];

const SPEAKERS = [
  {
    name: "Nguyễn Thành Trung",
    role: "CMO/Co-founder ClickAi",
    image: "https://i.postimg.cc/tg0hGwwS/Anh-Trung.png",
    cropPos: "object-[center_15%]",
    bio: [
      "Khách mời chia sẻ về AI trên kênh truyền hình An ninh TV và VTV1",
      "Admin của Group Biết tuốt AI (hơn 20.000 thành viên)",
      "Sáng tạo nội dung Youtube TrungCaha ( hơn 40.000 người theo dõi)",
      "10 năm hoạt động đào tạo online với hơn 10.000 học viên",
      "Đào tạo hơn 60 khóa học AI: Giáo dục, May mặc, Thiết kế, Marketing,..."
    ]
  },
  {
    name: "Nguyễn Phước Vĩnh Hưng",
    role: "Founder Duhava Technology JSC",
    image: "https://i.postimg.cc/R0rcxyyP/Hung.png",
    cropPos: "object-[center_10%]",
    bio: [
      "Kinh nghiệm Kinh Doanh Online từ 2016",
      "500.000++ followers trên Social về AI, Kinh Doanh & Marketing",
      "Quản Trị Viên Group AI (300.000++ thành viên)",
      "Triển khai Marketing cho nhiều doanh nghiệp đa ngành hàng",
      "Đào tạo Inhouse cho HTV, FPT, Droppii, Phương Trường An Group..."
    ]
  }
];

const BONUSES = [
  { title: "50+ công cụ AI thực chiến", value: "2.500.000đ", icon: <Zap size={20} /> },
  { title: "Mẫu tự động hóa Copy-Paste", value: "5.000.000đ", icon: <MousePointer2 size={20} /> },
  { title: "Kế hoạch triển khai 90 ngày", value: "3.000.000đ", icon: <CalendarDays size={20} /> }
];

const TOTAL_VALUE = "33.000.000đ";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [utm, setUtm] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Bắt mã UTM từ URL
    const params = new URLSearchParams(window.location.search);
    const utmTags = [];
    if (params.get('utm_source')) utmTags.push(`src:${params.get('utm_source')}`);
    if (params.get('utm_medium')) utmTags.push(`med:${params.get('utm_medium')}`);
    if (params.get('utm_campaign')) utmTags.push(`cam:${params.get('utm_campaign')}`);
    setUtm(utmTags.join(' | ') || "Direct");

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const RegistrationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      
      try {
        // Gửi dữ liệu qua Apps Script
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Apps Script yêu cầu no-cors hoặc xử lý CORS phức tạp
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, utm })
        });
        
        // Vì no-cors không trả về response body, ta giả định thành công nếu không crash
        setSuccess(true);
      } catch (err) {
        console.error("Lỗi gửi dữ liệu:", err);
        // Vẫn set success để user không bị kẹt, hoặc thông báo lỗi tùy bạn
        setSuccess(true);
      } finally {
        setLoading(false);
      }
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/20 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white p-8 md:p-12 rounded-[32px] shadow-2xl overflow-hidden"
            >
              <button onClick={onClose} className="absolute top-6 right-6 text-apple-dark-gray hover:text-apple-black transition-colors"><XCircle size={28} /></button>
              
              {!success ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-apple-black">Đăng ký tham dự</h2>
                    <p className="text-apple-blue text-sm font-semibold">Ưu đãi miễn phí dành cho 97 người đầu tiên.</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { key: 'name', label: "Họ và tên", type: "text" },
                      { key: 'phone', label: "Số điện thoại (Zalo)", type: "tel" },
                      { key: 'email', label: "Email nhận tài liệu", type: "email" }
                    ].map((field) => (
                      <div key={field.key} className="space-y-1.5">
                        <label className="text-[12px] font-semibold text-apple-dark-gray ml-1">{field.label}</label>
                        <input 
                          required 
                          type={field.type}
                          value={(formData as any)[field.key]}
                          onChange={(e) => setFormData({...formData, [field.key]: e.target.value})}
                          className="w-full bg-apple-gray rounded-2xl py-3.5 px-5 text-apple-black border-none outline-none focus:ring-2 focus:ring-apple-blue/20 transition-all" 
                        />
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-[#007AFF] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#0071E3] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? <Loader2 className="animate-spin" size={24} /> : "Hoàn tất đăng ký"}
                    </button>
                    <p className="text-[11px] text-center text-apple-dark-gray mt-4 flex items-center justify-center gap-1.5 font-medium">
                      <ShieldCheck size={14} className="text-green-500" /> Dữ liệu bảo mật chuẩn doanh nghiệp
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-500" size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-apple-black">Hẹn gặp bạn tại Workshop</h3>
                    <p className="text-apple-dark-gray">Thông tin đã được lưu. Vui lòng tham gia nhóm hỗ trợ.</p>
                  </div>
                  <a href="https://zalo.me/g/clickai" target="_blank" className="flex items-center justify-center w-full bg-[#007AFF] text-white h-14 rounded-2xl font-semibold hover:bg-[#0071E3] transition-all shadow-lg shadow-blue-500/20">
                    <MessageCircle className="mr-2" size={20} /> Tham gia Group Zalo ngay
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="bg-[#1D1D1F] text-[#F5F5F7] text-center py-3 px-4 text-[13px] font-medium flex items-center justify-center gap-2 fixed top-0 w-full z-[110]">
        <AlertCircle size={14} className="text-apple-blue" />
        Sự kiện giới hạn 97 người. Đăng ký sớm để nhận trọn bộ quà tặng.
      </div>

      <header className={`fixed top-11 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'translate-y-[-2px]' : ''}`}>
        <nav className={`max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full mt-2 border border-black/5 mx-4 md:mx-auto' : ''}`}>
          <div className="flex items-center gap-8">
            <img 
              src={LOGO_URL} 
              alt="Click AI" 
              className="h-6 md:h-8 object-contain cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            />
            <div className="hidden md:flex gap-6 text-[12px] font-medium text-apple-black/80">
              <a href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')} className="hover:text-apple-blue transition-colors">Chương trình</a>
              <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} className="hover:text-apple-blue transition-colors">Chuyên gia</a>
              <a href="#valuestack" onClick={(e) => scrollToSection(e, 'valuestack')} className="hover:text-apple-blue transition-colors">Ưu đãi</a>
            </div>
          </div>
          <Button 
            text="Đăng ký FREE" 
            variant="primary" 
            className="h-9 px-6 text-[13px]" 
            onClick={() => setModalOpen(true)} 
          />
        </nav>
      </header>

      <section className="hero-gradient pt-48 md:pt-64 pb-20 md:pb-32 px-6">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-apple-blue text-sm md:text-base font-semibold tracking-wide uppercase"
          >
            The AI Solopreneur Workshop 2025
          </motion.span>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 space-y-4"
          >
            <h1 className="text-5xl md:text-[80px] font-bold tracking-tight text-apple-black leading-[1.1]">
              Đừng chỉ dùng AI.<br/>
              <span className="text-apple-dark-gray">Hãy xây dựng hệ thống.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.4 }} 
            className="mt-10 max-w-2xl mx-auto space-y-8"
          >
            <p className="text-lg md:text-2xl text-apple-dark-gray font-medium leading-relaxed">
              Workshop thực chiến giúp bạn cài đặt một AI Infrastructure để vận hành doanh nghiệp thay bạn 24/7.
            </p>
            <div className="flex flex-col items-center gap-6 pt-4">
              <Button text="Giữ chỗ miễn phí ngay" className="px-12 py-5 text-xl" onClick={() => setModalOpen(true)} />
              <p className="text-apple-dark-gray text-sm flex items-center gap-2 font-medium">
                <CalendarDays size={16} className="text-apple-blue" /> 19:30 – 21:00 | 05/01 – 07/01 | Trên Zoom
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="gap" className="section-padding px-6 bg-white border-t border-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-apple-black italic">The Gap.</h2>
            <p className="text-apple-dark-gray text-lg md:text-xl font-medium">Khoảng cách giữa nỗ lực và kết quả chính là Hệ thống.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="apple-card p-10 md:p-14">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold">A</div>
                <h3 className="text-2xl font-bold text-apple-black">Thực trạng của bạn</h3>
              </div>
              <ul className="space-y-6">
                {["Làm việc 12h/ngày vẫn bế tắc", "Tăng trưởng phụ thuộc sức người", "Luôn trong trạng thái quá tải", "Không có thời gian cho chiến lược"].map((t, i) => (
                  <li key={i} className="flex items-start gap-4 text-apple-dark-gray font-medium">
                    <XCircle size={22} className="text-red-400 mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="apple-card p-10 md:p-14 border-2 border-apple-blue/10 bg-white shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-apple-blue font-bold">B</div>
                <h3 className="text-2xl font-bold text-apple-black">Mục tiêu Workshop</h3>
              </div>
              <ul className="space-y-6">
                {["AI tự động hóa 80% quy trình", "Mở rộng quy mô không giới hạn", "Làm ít hơn, giá trị cao hơn", "Sở hữu Infrastructure bền vững"].map((t, i) => (
                  <li key={i} className="flex items-start gap-4 text-apple-black font-semibold">
                    <CheckCircle2 size={22} className="text-green-500 mt-0.5 flex-shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="section-padding px-6 bg-apple-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-apple-black">Lộ trình 3 buổi học.</h2>
            <p className="text-apple-dark-gray text-lg mt-4 font-medium">Từng bước làm chủ AI để giải phóng sức lao động.</p>
          </div>
          
          <div className="space-y-8">
            {CURRICULUM.map((day, idx) => (
              <div key={idx} className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 group transition-all duration-500 hover:shadow-xl hover:shadow-black/5">
                <div className="md:w-1/3 space-y-4">
                  <div className="inline-flex items-center gap-2 text-apple-blue font-bold text-sm tracking-wider uppercase">
                    <Sparkles size={16} /> Buổi {day.day}
                  </div>
                  <h3 className="text-3xl font-bold text-apple-black leading-tight">{day.title}</h3>
                  <div className="flex items-center gap-2 pt-4">
                    <span className="text-apple-dark-gray line-through text-sm">{day.value}</span>
                    <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Free</span>
                  </div>
                </div>
                <div className="md:w-2/3 grid gap-8">
                  {day.modules.map((m, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-lg font-bold text-apple-black flex items-center gap-3">
                        <ChevronRight size={18} className="text-apple-blue" /> {m.name}
                      </h4>
                      <p className="text-apple-dark-gray pl-[30px] leading-relaxed font-medium">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="speakers" className="section-padding px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-apple-blue font-bold text-sm tracking-widest uppercase mb-2">
              <UserCheck size={20} /> Chuyên gia đồng hành
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-apple-black">Học từ những người thực chiến.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {SPEAKERS.map((speaker, idx) => (
              <div key={idx} className="apple-card p-8 md:p-12 flex flex-col gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                  <div className="relative group/img flex-shrink-0 w-44 h-44 md:w-56 md:h-56">
                    <div className="absolute inset-0 bg-apple-blue/5 rounded-[40px] -rotate-3 transition-transform group-hover/img:rotate-0 duration-500"></div>
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-apple-gray">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className={`absolute inset-0 w-full h-full object-cover ${speaker.cropPos} grayscale group-hover/img:grayscale-0 transition-all duration-700 scale-[1.12] group-hover/img:scale-105`}
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[40px]"></div>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left space-y-3 flex-grow pt-2">
                    <h3 className="text-3xl font-bold text-apple-black tracking-tight leading-none">{speaker.name}</h3>
                    <p className="text-apple-blue font-bold tracking-wide text-sm md:text-base uppercase">{speaker.role}</p>
                    <div className="h-1 w-12 bg-apple-blue/20 rounded-full mx-auto md:mx-0"></div>
                  </div>
                </div>
                
                <div className="space-y-4 border-t border-apple-border/30 pt-8">
                  {speaker.bio.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 bg-apple-blue/10 p-1 rounded-full">
                        <CheckCircle2 size={16} className="text-apple-blue" />
                      </div>
                      <p className="text-apple-dark-gray font-medium leading-relaxed text-sm md:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="valuestack" className="section-padding px-6 bg-white border-t border-apple-gray">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-[#1D1D1F] rounded-[40px] text-white p-8 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-apple-blue/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 italic">The Value Stack</h2>
                <p className="text-apple-dark-gray font-medium tracking-wide">Trọn bộ hành trang cho Solopreneur 4.0</p>
              </div>

              <div className="space-y-6">
                {[...CURRICULUM, ...BONUSES].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-5 border-b border-white/10 group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-apple-blue group-hover:scale-110 transition-transform">
                        {'icon' in item ? item.icon : <Gift size={20} />}
                      </div>
                      <span className="text-lg md:text-xl font-semibold text-apple-gray">{item.title}</span>
                    </div>
                    <span className="text-apple-dark-gray font-medium hidden md:block">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-20 text-center space-y-12">
                <div className="space-y-4">
                  <p className="text-apple-dark-gray text-sm font-bold uppercase tracking-widest">Tổng giá trị chương trình</p>
                  <div className="flex items-center justify-center">
                    <span className="strikethrough-apple text-4xl md:text-6xl font-bold">{TOTAL_VALUE}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-apple-blue font-bold uppercase tracking-widest">Đăng ký ngay hôm nay</p>
                  <h3 className="text-[100px] md:text-[160px] font-bold leading-none tracking-tighter">Miễn phí</h3>
                </div>

                <div className="pt-8 space-y-8">
                  <Button text="Đăng ký giữ chỗ và Nhận quà ngay" fullWidth className="py-7 text-2xl" onClick={() => setModalOpen(true)} />
                  <div className="flex flex-wrap justify-center gap-8 text-[12px] text-apple-dark-gray font-semibold uppercase tracking-wider">
                    <div className="flex items-center gap-2 font-medium"><Clock size={16} /> 19:30 – 21:00 | 05/01 – 07/01 | ZOOM</div>
                    <div className="flex items-center gap-2 text-apple-blue font-bold"><Layers size={16} /> Giới hạn 97 chỗ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-apple-gray bg-apple-gray">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <img src={LOGO_URL} alt="Logo" className="h-6 grayscale opacity-40 mx-auto md:mx-0" />
            <p className="text-apple-dark-gray text-[12px] font-medium leading-relaxed">
              Copyright &copy; 2025 Click AI Architecture.<br/>
              Hệ thống AI dành cho thế hệ Solopreneur mới.
            </p>
          </div>
          <div className="flex gap-10 text-[12px] font-semibold text-apple-dark-gray uppercase tracking-widest">
            <a href="#curriculum" onClick={(e) => scrollToSection(e, 'curriculum')} className="hover:text-apple-blue transition-colors">Chương trình</a>
            <a href="#speakers" onClick={(e) => scrollToSection(e, 'speakers')} className="hover:text-apple-blue transition-colors">Chuyên gia</a>
            <a href="#valuestack" onClick={(e) => scrollToSection(e, 'valuestack')} className="hover:text-apple-blue transition-colors">Ưu đãi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
