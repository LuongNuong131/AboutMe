export const projectGroups = {
  operations: { vi: "Vận hành", en: "Operations" },
  products: { vi: "Ứng dụng", en: "Applications" },
  games: { vi: "Game & realtime", en: "Games & realtime" },
  academic: { vi: "Đồ án", en: "Academic" },
};

export const projects = [
  {
    id: "af-booking",
    title: "AF_Booking",
    group: "operations",
    featured: true,
    name: { vi: "Không gian điều phối booking", en: "Booking operations workspace" },
    summary: {
      vi: "Một nơi để đội vận hành tra cứu booking, bàn giao công việc và theo dõi lịch sử thay đổi.",
      en: "One workspace for operations teams to find bookings, hand over work and trace what changed.",
    },
    technologies: ["Vue 3", "TypeScript", "FastAPI", "TiDB", "WebSocket"],
    live: "https://af-booking-bice.vercel.app/",
    source: "https://github.com/LuongNuong131/AF_Booking",
    access: "private",
    role: { vi: "Phát triển full-stack", en: "Full-stack development" },
    cover: {
      width: 1440, height: 1000,
      alt: { vi: "Không gian tra cứu và xử lý booking của AF_Booking", en: "AF_Booking workspace showing booking search and details" },
    },
    gallery: [{
      file: "af-booking-add", width: 1440, height: 1000,
      alt: { vi: "Hộp thoại kiểm tra mã và thêm booking", en: "Dialog for checking a booking key and adding a booking" },
    }],
    challenge: {
      vi: "Khi nhiều agent cùng xử lý một booking, họ cần biết ai đang phụ trách, trạng thái hiện tại và những gì đã thay đổi. Hai người lưu gần như cùng lúc có thể vô tình ghi đè công việc của nhau.",
      en: "When multiple agents handle one booking, they need to know who owns it, its current state and what has changed. Saving at nearly the same time can overwrite another person's work.",
    },
    approach: {
      vi: "Chuẩn hóa mã booking để mỗi hồ sơ có một định danh thống nhất. Kiểm tra phiên bản trước khi lưu, dùng mã yêu cầu để lần thử lại không tạo ghi chú trùng, và lưu ghi chú cùng trạng thái booking trong một giao dịch.",
      en: "Normalize booking keys around a canonical record. Check the expected version before saving, use request IDs to make retries safe and write the note and booking snapshot in one transaction.",
    },
    architecture: {
      vi: "Vue 3 và TypeScript lấy dữ liệu qua FastAPI. TiDB lưu hồ sơ, ghi chú và lịch sử. WebSocket truyền cập nhật về trạng thái hiện diện và phiên chỉnh sửa.",
      en: "Vue 3 and TypeScript fetch data through FastAPI. TiDB persists bookings, notes and history. WebSocket updates keep presence and editing state visible.",
    },
  },
  {
    id: "fcdbb",
    title: "FCDBB",
    group: "operations",
    featured: true,
    name: { vi: "Quản lý đội bóng phong trào", en: "Grassroots football club management" },
    summary: {
      vi: "Từ lịch sân và điểm danh GPS đến đội hình, biên bản A/B, bảng xếp hạng và quỹ đội.",
      en: "Match scheduling, GPS check-ins, A/B lineups and results, standings and club finances.",
    },
    technologies: ["Vue 3", "NestJS", "TypeScript", "PostgreSQL"],
    live: "https://fcdbb.vercel.app/",
    source: "https://github.com/LuongNuong131/LuNu_FCDBB",
    role: { vi: "Phát triển full-stack", en: "Full-stack development" },
    links: [{ label: { vi: "Repo phiên bản đầu", en: "Original repository" }, url: "https://github.com/LuongNuong131/FCDBB" }],
    cover: {
      width: 1440, height: 900,
      alt: { vi: "Trang tổng quan FCDBB với trận tiếp theo và bảng xếp hạng A/B", en: "FCDBB dashboard showing the next match and A/B standings" },
    },
    gallery: [{
      file: "fcdbb-mobile", width: 390, height: 844,
      alt: { vi: "Trang chủ FCDBB ở chế độ tối trên điện thoại", en: "FCDBB home screen in dark mode on mobile" },
    }],
    challenge: {
      vi: "Lịch đá, điểm danh, kết quả và quỹ thường nằm ở nhiều nơi. Thành viên cần kiểm tra thông tin ngay trên điện thoại, còn quản trị viên cần dữ liệu đủ tin cậy để chốt biên bản và tính điểm mùa giải.",
      en: "Schedules, attendance, results and expenses often live in different places. Players need quick access on their phones, while admins need dependable records for match reports and league points.",
    },
    approach: {
      vi: "Gắn thời gian và phạm vi điểm danh vào từng trận. Dùng danh sách đã điểm danh làm nguồn cho đội hình A/B, cho phép quản trị viên bổ sung cầu thủ, rồi tính bảng xếp hạng từ kết quả đã chốt.",
      en: "Set a check-in window and radius per match. Use the check-in list to seed A/B lineups, let admins add players and derive standings from finalized results.",
    },
    architecture: {
      vi: "Frontend Vue gọi NestJS API. Backend dùng TypeORM, với PostgreSQL khi triển khai và SQLite để chạy local. Giao diện hỗ trợ sáng, tối và điều hướng dành riêng cho điện thoại.",
      en: "Vue talks to a NestJS API backed by TypeORM. The app uses PostgreSQL in production and SQLite locally, with light and dark themes and dedicated mobile navigation.",
    },
  },
  {
    id: "lunu-music",
    title: "LuNu Music",
    group: "products",
    featured: true,
    name: { vi: "Thư viện nhạc và phòng xem riêng", en: "Private music and video library" },
    summary: {
      vi: "Thư viện nhạc cá nhân với trình phát xuyên trang, hàng đợi, lyrics, playlist và phòng xem video.",
      en: "A personal music library with persistent playback, a queue, lyrics, playlists and a private video room.",
    },
    technologies: ["Vue 3", "FastAPI", "Supabase", "Cloudinary", "FFmpeg"],
    live: "https://lunu-music.vercel.app/",
    source: "https://github.com/LuongNuong131/LuNu_Music",
    access: "private",
    role: { vi: "Phát triển full-stack", en: "Full-stack development" },
    cover: {
      width: 1440, height: 980,
      alt: { vi: "Màn hình đăng nhập LuNu Music với minh họa đĩa than", en: "LuNu Music sign-in screen with a vinyl record illustration" },
    },
    challenge: {
      vi: "Người nghe cần chuyển giữa thư viện, playlist và lời bài hát mà luồng phát vẫn liên tục. Việc tiếp nhận nhạc và video mới cũng cần có trạng thái rõ ràng cho người đề xuất lẫn người duyệt.",
      en: "Listeners should be able to switch between the library, playlists and lyrics without interrupting playback. Media proposals also need a visible lifecycle for listeners and reviewers.",
    },
    approach: {
      vi: "Duy trì trình phát và hàng đợi ở cấp ứng dụng. Tách đề xuất, kiểm duyệt và xử lý media thành các bước riêng, rồi báo kết quả qua hộp thông báo.",
      en: "Keep playback and the queue at the application level. Separate proposals, moderation and media processing into distinct steps, then surface outcomes in the notification inbox.",
    },
    architecture: {
      vi: "Vue kết nối FastAPI. Supabase lưu tài khoản và metadata, Cloudinary lưu nội dung, còn FFmpeg tham gia xử lý media.",
      en: "Vue connects to FastAPI. Supabase stores accounts and metadata, Cloudinary serves media, and FFmpeg helps process it.",
    },
  },
  {
    id: "lunu-boardgame",
    title: "LuNu Boardgame",
    group: "games",
    name: { vi: "Nền tảng game nhiều người chơi", en: "Multiplayer party-game platform" },
    summary: {
      vi: "Một phòng chơi realtime có thể chạy nhiều bộ luật với trạng thái riêng cho từng người.",
      en: "A real-time room engine that runs multiple games with player-specific state.",
    },
    technologies: ["Vue 3", "TypeScript", "Fastify", "WebSocket", "Zod"],
    source: "https://github.com/LuongNuong131/LuNu_BoardGame",
    role: { vi: "Phát triển full-stack và hệ thống game", en: "Full-stack and game systems development" },
    challenge: {
      vi: "UNO, Ma Sói và Spyfall có luật và thông tin bí mật khác nhau, nhưng cùng cần phòng, lời mời và kết nối realtime.",
      en: "UNO, Werewolf and Spyfall have different rules and secrets while sharing rooms, invitations and real-time connections.",
    },
    approach: {
      vi: "Tách luật thành mô-đun theo một hợp đồng chung. Server kiểm tra hành động và chỉ gửi phần trạng thái mà từng người được xem.",
      en: "Wrap game rules in modules with a shared contract. The server validates actions and sends each player only the state they can see.",
    },
    architecture: {
      vi: "Vue và TypeScript nối tới Fastify qua REST và WebSocket. Game core định nghĩa luật, reducer và dữ liệu hiển thị theo từng người chơi.",
      en: "Vue and TypeScript connect to Fastify over REST and WebSocket. A shared game core defines rules, reducers and player-specific projections.",
    },
  },
  {
    id: "travelos",
    title: "TravelOS CRM",
    group: "operations",
    name: { vi: "Không gian thiết kế tour", en: "Travel itinerary workspace" },
    summary: {
      vi: "Tổ chức lịch trình, chi phí và dữ liệu điểm đến trong một workspace có bản đồ.",
      en: "Plan itineraries, costs and destinations in one map-enabled workspace.",
    },
    technologies: ["Vue 3", "TypeScript", "Pinia", "Mapbox", "Leaflet"],
    source: "https://github.com/LuongNuong131/CRM_NoiBo",
    role: { vi: "Phát triển full-stack", en: "Full-stack development" },
    challenge: {
      vi: "Một tour nhiều ngày cần giữ mối liên hệ giữa lịch trình, địa điểm và chi phí trong lúc người dùng chỉnh sửa.",
      en: "A multi-day itinerary needs to preserve the relationship between the schedule, destinations and costs as users make edits.",
    },
    approach: {
      vi: "Chia lịch trình thành các khối có thể sắp xếp lại và đặt bản đồ cạnh phần chỉnh sửa để giữ ngữ cảnh địa lý.",
      en: "Break the itinerary into reorderable blocks and place the map next to the editor to preserve geographic context.",
    },
    architecture: {
      vi: "Vue và TypeScript dùng Pinia quản lý trạng thái, Mapbox và Leaflet hiển thị bản đồ, Axios gọi API.",
      en: "Vue and TypeScript use Pinia for state, Mapbox and Leaflet for maps, and Axios for API requests.",
    },
  },
  {
    id: "echommo",
    title: "EchoMMO",
    group: "games",
    name: { vi: "Hệ thống MMORPG trên web", en: "Web MMORPG systems" },
    summary: {
      vi: "Game nhập vai với nhiệm vụ, kho đồ, giao dịch vật phẩm và tương tác realtime.",
      en: "A role-playing game with quests, inventory, a marketplace and real-time interactions.",
    },
    technologies: ["Java 17", "Spring Boot", "WebSocket", "MySQL", "Vue 3"],
    source: "https://github.com/LuongNuong131/EchoMMO-Backend",
    role: { vi: "Trưởng nhóm và phát triển full-stack", en: "Team lead and full-stack developer" },
    links: [
      { label: { vi: "Mã frontend", en: "Frontend code" }, url: "https://github.com/LuongNuong131/EchoMMO-Frontend" },
      { label: { vi: "Mã cơ sở dữ liệu", en: "Database code" }, url: "https://github.com/LuongNuong131/EchoMMO-DB" },
    ],
    challenge: {
      vi: "Giao dịch vật phẩm, ví và kho đồ phải nhất quán khi trò chơi đồng thời xử lý chat, trận đấu và nhiệm vụ.",
      en: "Marketplace trades, wallets and inventory must stay consistent while the game also handles chat, battles and quests.",
    },
    approach: {
      vi: "Tách service theo nghiệp vụ và xử lý giao dịch trên backend. Dùng WebSocket cho trận đấu, chat và thông báo.",
      en: "Separate domain services and handle transactions on the backend. Use WebSocket for battles, chat and notifications.",
    },
    architecture: {
      vi: "Spring Boot trên Java 17 với JPA, MySQL và Spring Security. Frontend Vue tổ chức trạng thái theo nghiệp vụ bằng Pinia.",
      en: "Spring Boot on Java 17 with JPA, MySQL and Spring Security. The Vue frontend organizes state by domain with Pinia.",
    },
  },
  {
    id: "anhduong",
    title: "Ánh Dương",
    group: "academic",
    name: { vi: "Nền tảng gây quỹ", en: "Fundraising platform" },
    summary: {
      vi: "Đồ án nhóm về chiến dịch quyên góp và trải nghiệm của người đóng góp.",
      en: "A team project exploring fundraising campaigns and the donor experience.",
    },
    technologies: ["Vue.js", "Java", "SQL Server"],
    role: { vi: "Trưởng nhóm và phát triển frontend", en: "Team lead and frontend developer" },
    challenge: {
      vi: "Người đóng góp cần hiểu mục tiêu chiến dịch và biết cách hoàn tất quyên góp.",
      en: "Donors need to understand the campaign goal and see how to complete a contribution.",
    },
    approach: {
      vi: "Đặt câu chuyện chiến dịch, hướng dẫn và trạng thái quyên góp theo thứ tự dễ đọc. Nhóm phối hợp qua sprint và review code.",
      en: "Arrange the campaign story, instructions and donation status in reading order. The team collaborated through sprints and code review.",
    },
    architecture: {
      vi: "Ứng dụng Vue giao tiếp qua REST API với Java và SQL Server.",
      en: "A Vue application connects to a Java REST API backed by SQL Server.",
    },
  },
  {
    id: "bidamanagement",
    title: "Billiards Club Tool",
    group: "academic",
    name: { vi: "Quản lý bàn bida và tính tiền", en: "Billiards tables and billing" },
    summary: {
      vi: "Ứng dụng desktop theo dõi giờ chơi, dịch vụ và doanh thu.",
      en: "A desktop tool for tracking table time, services and revenue.",
    },
    technologies: ["Java", "SQL Server"],
    role: { vi: "Trưởng nhóm và phát triển backend", en: "Team lead and backend developer" },
    challenge: {
      vi: "Đổi bàn hoặc thêm dịch vụ trong một lượt chơi cần giữ đúng thời lượng và hóa đơn.",
      en: "Moving tables or adding services mid-session must preserve elapsed time and billing details.",
    },
    approach: {
      vi: "Giữ trạng thái lượt chơi trong bộ đệm trước khi kết xuất hóa đơn và lưu vào cơ sở dữ liệu.",
      en: "Keep working session state in a buffer before finalizing the invoice in the database.",
    },
    architecture: { vi: "Ứng dụng desktop Java với SQL Server.", en: "A Java desktop application backed by SQL Server." },
  },
  {
    id: "nhatromanagement",
    title: "Boarding House Tool",
    group: "academic",
    name: { vi: "Quản lý nhà trọ và tiền điện nước", en: "Rental units and utility billing" },
    summary: {
      vi: "Theo dõi phòng, hợp đồng và hóa đơn định kỳ.",
      en: "Track rooms, tenancy agreements and recurring utility bills.",
    },
    technologies: ["Java", "SQL Server"],
    role: { vi: "Trưởng nhóm và phát triển ứng dụng", en: "Team lead and application developer" },
    challenge: {
      vi: "Khi giá điện nước thay đổi, hóa đơn cũ vẫn cần phản ánh đúng chỉ số và đơn giá lúc lập.",
      en: "When utility rates change, earlier invoices must still reflect their original meter readings and prices.",
    },
    approach: {
      vi: "Lưu đơn giá và chỉ số theo kỳ trong từng hóa đơn để có thể tra cứu lịch sử.",
      en: "Store readings and unit prices per billing period to preserve the historical record.",
    },
    architecture: { vi: "Java phân tầng với SQL Server.", en: "A layered Java application backed by SQL Server." },
  },
];
