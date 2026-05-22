export const projects = [
  {
    id: "travelos",
    title: "TravelOS CRM",
    tagline: "Internal Enterprise Travel Intelligence",
    role: {
      vi: "Full-Stack Developer (Dự án cá nhân)",
      en: "Full-Stack Developer (Personal Project)",
    },
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
    role: {
      vi: "Full-Stack Developer & Team Leader",
      en: "Full-Stack Developer & Team Leader",
    },
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
      "Database Design & Optimization: Phân tích nghiệp vụ sâu và trực tiếp thiết kế cơ sở dữ liệu toàn diện cho hệ thống nhân vật, vật phẩm; tối ưu hóa triệt để các truy vấn SQL đảm bảo hệ năng chịu tải ổn định khi lượng người chơi truy cập lớn.",
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
    role: {
      vi: "Full-Stack Developer (Làm độc lập 100%)",
      en: "Independent Full-Stack Developer",
    },
    timeline: "10/2025 - 11/2025",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop",
    links: [
      {
        label: "Repository Lõi ↗",
        url: "https://github.com/LuongNuong131/FCDBB.git",
      },
    ],
    technologies: ["Node.js", "ExpressJS", "Vue.js", "TailwindCSS", "MySQL"],
    overview:
      "Hệ thống quản lý thông tin cầu thủ, lịch thi đấu và kết quả trận đấu cho một đội bóng. Nền tảng số hóa quản lý câu lạc bộ bóng đá nội bộ giúp theo dõi phong độ, quản lý quỹ tài chính đội bóng và tính toán chia đội hình thông minh.",
    business_logic: [
      "Full-cycle Development: Chịu trách nhiệm toàn trình 100% độc lập từ khâu lên ý tưởng, phác thảo thiết kế UI/UX cho đến lập trình hệ thống cốt lõi và kiểm thử sản phẩm.",
      "Automated Team Splitting: Thuật toán phân tách đội hình thi đấu nội bộ tự động, dựa trên chỉ số vị trí và điểm phong độ thực tế của cầu thủ.",
      "Financial Ledger & Security: Quản lý dòng tiền thu/chi quỹ đội, theo dõi lịch sử đóng tiền và tính chuyên cần; triển khai bảo mật cơ bản cùng phân quyền chặt chẽ giữa quản trị viên và người xem.",
    ],
    architecture:
      "Kiến trúc Client-Server tiêu chuẩn. Backend Node.js/Express cung cấp RESTful APIs tinh gọn. Database MySQL thiết kế chuẩn hóa bảo đảm toàn vẹn dữ liệu tài chính.",
    challenges:
      "Cân bằng đội hình thi đấu nội bộ khi danh sách người tham gia biến động liên tục qua từng tuần.",
    solutions:
      "Triển khai thuật toán sắp xếp sử dụng trọng số điểm năng lực, kết hợp với phân loại vị trí (Tiền đạo, Hậu vệ, Thủ môn) để đưa ra các phương án chia đội đồng đều nhất.",
  },
  {
    id: "anhduong",
    title: "Ánh Dương Project",
    tagline: "Charity Fundraising Platform",
    role: {
      vi: "Team Leader & Frontend Developer",
      en: "Team Leader & Frontend Developer",
    },
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
      "Agile Project Management: Điều phối vận hành nhóm lập trình, chịu trách nhiệm lên kế hoạch Sprint chi tiết và quản lý tiến độ dự án qua các công cụ Jira/Trello.",
      "Code Quality Control: Trực tiếp chịu trách nhiệm review chất lượng mã nguồn của toàn bộ thành viên trong nhóm và thực hiện gộp (merge) source code chuẩn quy trình Git Flow.",
      "Transparent Donation Flow: Hiển thị công khai và cập nhật theo thời gian thực danh sách nhà hảo tâm cùng số tiền quyên góp; lập trình các module Frontend chủ chốt đảm bảo trải nghiệm UX không độ trễ.",
    ],
    architecture:
      "Single Page Application (SPA) kiến trúc gọn nhẹ, giao tiếp qua RESTful API an toàn. Xây dựng Validation form chặt chẽ trên Vue.js để xử lý luồng chuyển hướng thanh toán không độ trễ.",
    challenges:
      "Tạo dựng giao diện mang lại sự tin cậy tuyệt đối và quản lý xung đột mã nguồn (Merge conflicts) khi nhiều thành viên cùng phát triển giao diện.",
    solutions:
      "Sử dụng thiết kế Minimalist tập trung vào câu chuyện từ thiện. Áp dụng quy chuẩn Branching (Feature/Bugfix) nghiêm ngặt trên Git, giảm thiểu tỷ lệ lỗi khi Merge xuống dưới 2%.",
  },
  {
    id: "bidamanagement",
    title: "Phần Mềm Quản Lý Quán Bida",
    tagline: "Billiards Club Operating Platform",
    role: {
      vi: "Team Leader & Backend Developer",
      en: "Team Leader & Backend Developer",
    },
    timeline: "06/2024 - 07/2024",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070&auto=format&fit=crop",
    links: [{ label: "Dự án học tập", url: "#" }],
    technologies: ["Java", "SQL Server", "OOP", "Algorithms"],
    overview:
      "Ứng dụng quản lý bàn, tính tiền giờ và dịch vụ ăn uống dành riêng cho các quán kinh doanh CLB Bida, tối ưu hóa quy trình dịch vụ và quản trị dòng tiền tự động.",
    business_logic: [
      "Automated Timing Algorithm: Nghiên cứu và thiết kế thuật toán tính tiền giờ hoàn toàn tự động dựa trên thời gian chính xác của hệ thống tại thời điểm check-in và check-out.",
      "Inventory Control: Module quản lý kho hàng hóa, đồ ăn thức uống khép kín, xuất báo cáo tổng kết doanh thu ngày/tháng trực quan.",
      "Data Integrity Validation: Khắc phục triệt để các lỗi logic nghiệp vụ phát sinh và bảo đảm tính chính xác tuyệt đối, không sai lệch của dữ liệu tài chính hệ thống.",
    ],
    architecture:
      "Xây dựng trên nền tảng ứng dụng Java Desktop tận dụng triệt để tư duy lập trình hướng đối tượng (OOP). Liên kết tầng lưu trữ SQL Server qua hệ cơ sở dữ liệu quan hệ chặt chẽ.",
    challenges:
      "Xử lý bài toán logic dồn hóa đơn, tính tiền lũy tiến hoặc đổi bàn chơi linh hoạt của khách hàng trong khoảng thời gian thực tế.",
    solutions:
      "Triển khai thiết kế các cấu trúc lưu trữ trạng thái bàn tạm thời (In-memory buffer state) trước khi thực hiện kết xuất hóa đơn lưu dữ liệu cứng.",
  },
  {
    id: "nhatromanagement",
    title: "Phần Mềm Quản Lý Nhà Trọ",
    tagline: "Boarding House Management System",
    role: {
      vi: "Team Leader & Developer",
      en: "Team Leader & Developer",
    },
    timeline: "04/2024 - 05/2024",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    links: [{ label: "Dự án học tập", url: "#" }],
    technologies: [
      "Java",
      "SQL Server",
      "CRUD Architecture",
      "Data Automation",
    ],
    overview:
      "Hệ thống số hóa quy trình quản lý vận hành phòng trọ, lưu trữ hồ sơ thông tin khách thuê và tự động hóa toàn bộ công tác tính toán hóa đơn điện nước định kỳ.",
    business_logic: [
      "Room Matrix CRUD: Xây dựng toàn diện hệ thống chức năng CRUD (Thêm, Xóa, Sửa, Xem) phục vụ quản lý thông tin chi tiết của từng khách thuê, hợp đồng và tình trạng phòng trống.",
      "Utility Billing Automation: Tự động hóa hoàn toàn luồng tính toán hóa đơn chi phí điện, nước hàng tháng của từng phòng dựa vào chỉ số đồng hồ nhập vào, loại bỏ sai sót thủ công.",
    ],
    architecture:
      "Sử dụng mô hình kiến trúc phân tầng kết hợp ngôn ngữ Java Core vững chắc. Tích hợp SQL Server làm cơ sở dữ liệu xử lý tập trung.",
    challenges:
      "Lưu vết lịch sử biến động chỉ số tiêu thụ điện nước và giá cả dịch vụ theo thời gian mà không làm sai lệch các hóa đơn cũ.",
    solutions:
      "Thiết kế cấu trúc bảng Database dạng Historical Snapshot, lưu trữ dữ liệu hóa đơn tĩnh độc lập hoàn toàn với thông số cấu hình động hiện tại.",
  },
];
