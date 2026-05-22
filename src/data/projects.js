export const projects = [
  {
    id: "travelos",
    title: "TravelOS CRM",
    tagline: "Internal Enterprise Travel Intelligence",
    role: "Full-Stack Developer (Dự án cá nhân)",
    timeline: "Present",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    links: [
      {
        label: "Repository Lõi ↗",
        url: "https://github.com/LuongNuong131/CRM_NoiBo.git",
      },
    ],
    technologies: [
      "Python FastAPI",
      "Vue 3 TS",
      "MySQL",
      "Docker Compose",
      "AI Copilot",
    ],
    overview:
      "Hệ thống quản trị doanh nghiệp nội bộ (CRM) thông minh chuyên biệt cho ngành lữ hành. Tự động hóa toàn bộ quy trình thiết kế tour, quản lý Booking và tích hợp trợ lý trí tuệ nhân tạo (AI Copilot).",
    business_logic: [
      "Interactive Itinerary Builder: Giao diện kéo thả xây dựng tour theo trục thời gian thực (Timeline-based), tự động tính toán chi phí lưu trú và di chuyển.",
      "AI Travel Copilot Engine: Trợ lý AI tự động phân tích dữ liệu điểm đến, đề xuất lịch trình và viết nội dung mô tả tour chuẩn SEO.",
      "Enterprise Map Engine: Tích hợp bản đồ định vị các điểm tham quan, tối ưu hóa cung đường di chuyển thực tế.",
    ],
    architecture:
      "Hệ thống phân tầng (Layered Architecture). Backend FastAPI tận dụng cơ chế Async/Await để xử lý tác vụ AI song song. Frontend Vue 3 + TypeScript quản lý State phức tạp qua Pinia. Toàn bộ hạ tầng được đóng gói bằng Docker Compose.",
    challenges:
      "Xử lý trạng thái (State) phức tạp trên giao diện thiết kế lịch trình dài ngày và tối ưu hóa thời gian phản hồi của AI Engine.",
    solutions:
      "Xây dựng cơ chế Streaming Response cho AI giúp hiển thị dữ liệu tức thời dạng gõ chữ. Sử dụng Pinia Store kết hợp TypeScript Interfaces để quản lý tập trung và chuẩn hóa dữ liệu Itinerary.",
  },
  {
    id: "echommo",
    title: "EchoMMO",
    tagline: "Web-based GameFi MMORPG Platform",
    role: "Team Leader & Core Backend Developer",
    timeline: "08/2025 - 01/2026",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    links: [
      {
        label: "Backend Repository ↗",
        url: "https://github.com/LuongNuong131/EchoMMO-Backend.git",
      },
      {
        label: "Frontend Repository ↗",
        url: "https://github.com/LuongNuong131/EchoMMO-Frontend.git",
      },
      {
        label: "Database Schema Repo ↗",
        url: "https://github.com/LuongNuong131/EchoMMO-DB.git",
      },
    ],
    technologies: [
      "Java Spring Boot",
      "MySQL",
      "Spring Security",
      "WebSockets",
      "Vue.js",
    ],
    overview:
      "Nền tảng trò chơi nhập vai trực tuyến (MMORPG) tích hợp hệ thống kinh tế GameFi. Với vai trò Team Leader, tôi điều phối toàn bộ tiến độ và trực tiếp chịu trách nhiệm thiết kế, lập trình hệ thống sàn giao dịch vật phẩm nội bộ và cấu trúc quản trị hệ thống.",
    business_logic: [
      "Marketplace System: Sàn giao dịch khớp lệnh tự động giữa người chơi với nhau, tính toán khấu trừ tài nguyên túi đồ và xử lý thuế phí giao dịch.",
      "Admin Control Panel: Hệ thống bảng quản trị tối cao giám sát logs thời gian thực, quản lý phân quyền tài khoản người dùng, điều phối phân phối Giftcode động và kiểm soát tỷ lệ rớt vật phẩm.",
      "Anti-Bot Engine: Triển khai kiểm soát Captcha ngẫu nhiên trên Backend nhằm ngăn chặn auto-bot cày cuốc phá hoại cấu trúc lạm phát kinh tế trò chơi.",
    ],
    architecture:
      "Kiến trúc Optimized Monolith. Giao tiếp thời gian thực qua WebSockets (STOMP). Tách biệt tầng dữ liệu MySQL bền vững và tầng xử lý logic game trực tiếp trong bộ nhớ memory. Bảo mật tầng Endpoints chặt chẽ bằng Spring Security.",
    challenges:
      "Xử lý Race Condition (Xung đột dữ liệu đồng thời) khi có hàng trăm tài khoản người chơi cùng thực hiện lệnh tranh mua một vật phẩm độc bản giới hạn trên Marketplace.",
    solutions:
      "Áp dụng triệt để cơ chế khóa bi quan (Pessimistic Locking) trong Spring Data JPA cho toàn bộ luồng giao dịch tiền tệ/vật phẩm kết hợp quy chuẩn Isolation Levels nhằm đảm bảo tính toàn vẹn dữ liệu ACID tuyệt đối.",
  },
  {
    id: "fcdbb",
    title: "FCDBB Management",
    tagline: "Football Club Operating Platform",
    role: "Full-Stack Developer (Dự án cá nhân)",
    timeline: "10/2025 - 11/2025",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop",
    links: [
      {
        label: "Repository Lõi ↗",
        url: "https://github.com/LuongNuong131/FCDBB.git",
      },
    ],
    technologies: ["Node.js", "Vue.js", "TailwindCSS", "MySQL"],
    overview:
      "Nền tảng số hóa quản lý câu lạc bộ bóng đá nội bộ. Hệ thống theo dõi phong độ, quản lý quỹ tài chính đội bóng và tính toán chia đội hình thông minh.",
    business_logic: [
      "Automated Team Splitting: Thuật toán phân tách đội hình thi đấu nội bộ tự động, dựa trên chỉ số vị trí và điểm phong độ thực tế của cầu thủ.",
      "Financial Ledger: Quản lý dòng tiền thu/chi quỹ đội, theo dõi lịch sử đóng tiền và chuyên cần của từng thành viên.",
    ],
    architecture:
      "Kiến trúc Client-Server tiêu chuẩn. Backend Node.js/Express cung cấp RESTful APIs. Database MySQL thiết kế chuẩn hóa bảo đảm toàn vẹn dữ liệu tài chính.",
    challenges:
      "Cân bằng đội hình thi đấu nội bộ khi danh sách người tham gia biến động liên tục qua từng tuần.",
    solutions:
      "Triển khai thuật toán sắp xếp sử dụng trọng số điểm năng lực, kết hợp với phân loại vị trí (Tiền đạo, Hậu vệ, Thủ môn) để đưa ra các phương án chia đội đồng đều nhất.",
  },
  {
    id: "anhduong",
    title: "Ánh Dương Project",
    tagline: "Charity Fundraising Platform",
    role: "Team Leader & Frontend Developer",
    timeline: "01/2025 - 02/2025",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    links: [{ label: "Dự án nội bộ (Bảo mật)", url: "#" }],
    technologies: [
      "Vue.js",
      "Java",
      "SQL Server",
      "Git Workflow",
      "Agile/Scrum",
    ],
    overview:
      "Nền tảng ứng dụng web nhằm kêu gọi và tiếp nhận quyên góp tài chính cho các chiến dịch từ thiện. Đặt tính minh bạch dòng tiền và trải nghiệm người dùng (UX) lên hàng đầu để tối ưu hóa tỷ lệ chuyển đổi ủng hộ.",
    business_logic: [
      "Transparent Donation Flow: Hiển thị công khai, theo thời gian thực danh sách nhà hảo tâm và số tiền quyên góp tương ứng cho từng chiến dịch.",
      "Campaign Analytics: Hệ thống thống kê tiến độ quyên góp (Target vs. Achieved) bằng các biểu đồ trực quan.",
      "Agile Project Management: Điều phối nhóm bằng Jira/Trello, review code và gộp (merge) source code chuẩn Git Flow.",
    ],
    architecture:
      "Single Page Application (SPA) kiến trúc gọn nhẹ, giao tiếp qua RESTful API an toàn. Xây dựng Validation form chặt chẽ trên Vue.js để xử lý luồng chuyển hướng thanh toán không độ trễ.",
    challenges:
      "Tạo dựng giao diện mang lại sự tin cậy tuyệt đối và quản lý xung đột mã nguồn (Merge conflicts) khi nhiều thành viên cùng phát triển giao diện.",
    solutions:
      "Sử dụng thiết kế Minimalist tập trung vào câu chuyện từ thiện. Áp dụng quy chuẩn Branching (Feature/Bugfix) nghiêm ngặt trên Git, giảm thiểu tỷ lệ lỗi khi Merge xuống dưới 2%.",
  },
];
