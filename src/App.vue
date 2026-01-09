<script setup>
import { ref, onMounted, nextTick } from 'vue';

// --- DATA SOURCE ---
const personalInfo = ref({
  name: "Trần Quang Lương",
  role: "Full-Stack Developer",
  email: "tranquangluong06@gmail.com",
  phone: "0907 987 126",
  address: "Hóc Môn, TP. Hồ Chí Minh",
  github: "https://github.com/LuongNuong131",
  avatar: "https://placehold.co/400x400/0f172a/00f2ff?text=LuNu", // Replace with your real photo
  slogan: "Code with Passion, Build with Vision."
});

const skills = ref({
  frontend: [
    { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#42b883" },
    { name: "Bootstrap 5", icon: "fa-brands fa-bootstrap", color: "#7952b3" },
    { name: "ReactJS", icon: "fa-brands fa-react", color: "#61dafb" }
  ],
  backend: [
    { name: "Node.js", icon: "fa-brands fa-node", color: "#339933" },
    { name: "Java Spring", icon: "fa-brands fa-java", color: "#f89820" },
    { name: "C# .NET", icon: "fa-brands fa-microsoft", color: "#512bd4" }
  ],
  database: [
    { name: "MySQL", icon: "fa-solid fa-database", color: "#00758f" },
    { name: "SQL Server", icon: "fa-solid fa-server", color: "#cc2927" },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ed" }
  ]
});

const projects = ref([
  {
    id: 1,
    name: "EchoMMO (GameFi)",
    category: "Full-Stack / Game",
    role: "Core Developer",
    time: "Development",
    tech: ["Vue.js", "Spring Boot", "MySQL", "WebSocket", "Docker"],
    shortDesc: "Dự án Game nhập vai trực tuyến tích hợp tài chính (GameFi) với kiến trúc Microservices.",
    fullDesc: "EchoMMO là dự án tâm huyết xây dựng một thế giới ảo nơi người chơi có thể tương tác thời gian thực. Hệ thống sử dụng VueJS cho trải nghiệm mượt mà, Spring Boot xử lý logic game phức tạp và WebSocket cho các tính năng PvP/Chat realtime.",
    images: [
      "https://placehold.co/800x450/1e293b/00f2ff?text=EchoMMO+Dashboard",
      "https://placehold.co/800x450/1e293b/00f2ff?text=In-Game+UI",
      "https://placehold.co/800x450/1e293b/00f2ff?text=Marketplace"
    ],
    link: "https://github.com/LuongNuong131/EchoMMO-Frontend",
    featured: true
  },
  {
    id: 2,
    name: "Hệ Thống Ánh Dương",
    category: "Management System",
    role: "Leader & Frontend",
    time: "01/2025 - Present",
    tech: ["Vue.js 3", "Pinia", "Axios", "Bootstrap"],
    shortDesc: "Hệ thống quản lý nội bộ, phân chia công việc và theo dõi tiến độ dự án.",
    fullDesc: "Đóng vai trò Leader, tôi chịu trách nhiệm thiết kế kiến trúc Frontend, review code và quản lý tiến độ của 5 thành viên. Hệ thống giúp tối ưu hóa quy trình làm việc giảm 30% thời gian họp hành.",
    images: [
      "https://placehold.co/800x450/2d3748/cbd5e0?text=Project+Tracking",
      "https://placehold.co/800x450/2d3748/cbd5e0?text=Task+Management"
    ],
    link: "#",
    featured: false
  },
  {
    id: 3,
    name: "Quản Lý Bida Pro",
    category: "Desktop App",
    role: "Full-Stack",
    time: "06/2024",
    tech: ["Java Swing", "JDBC", "MySQL"],
    shortDesc: "Phần mềm quản lý bàn, tính tiền giờ và kho hàng cho quán Bida.",
    fullDesc: "Giải quyết bài toán tính tiền giờ phức tạp (khung giờ vàng, phụ thu). Tích hợp báo cáo doanh thu ngày/tháng và quản lý kho đồ uống.",
    images: [
      "https://placehold.co/800x450/4a5568/a0aec0?text=Table+Map",
      "https://placehold.co/800x450/4a5568/a0aec0?text=Billing+System"
    ],
    link: "#",
    featured: false
  },
  {
    id: 4,
    name: "LuNu House Manager",
    category: "Desktop App",
    role: "Leader",
    time: "04/2024",
    tech: ["C# WinForms", "SQL Server", "Entity Framework"],
    shortDesc: "Ứng dụng quản lý trọ, tính điện nước và xuất hóa đơn tự động.",
    fullDesc: "Phần mềm giúp chủ trọ quản lý 50+ phòng. Tính năng nổi bật: Tự động tính tiền điện nước theo chỉ số cũ/mới, xuất hóa đơn PDF và gửi mail cho người thuê.",
    images: [
      "https://placehold.co/800x450/4a5568/a0aec0?text=Room+List",
      "https://placehold.co/800x450/4a5568/a0aec0?text=Invoice+Export"
    ],
    link: "#",
    featured: false
  }
]);

// --- LOGIC ---
const selectedProject = ref(null);
let modalInstance = null;

const openModal = (project) => {
  selectedProject.value = project;
  // Wait for DOM update then show modal
  nextTick(() => {
    const modalEl = document.getElementById('projectModal');
    if (modalEl) {
      modalInstance = new bootstrap.Modal(modalEl);
      modalInstance.show();
    }
  });
};

// Typing Effect Text
const typingText = ref("");
const fullText = "Full-Stack Developer | Tech Enthusiast";
let i = 0;

const typeWriter = () => {
  if (i < fullText.length) {
    typingText.value += fullText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
};

onMounted(() => {
  typeWriter();
});
</script>

<template>
  <div class="app-container">
    <div class="bg-shape shape-1"></div>
    <div class="bg-shape shape-2"></div>

    <nav class="navbar navbar-expand-lg fixed-top glass-nav">
      <div class="container">
        <a class="navbar-brand fw-bold text-gradient" href="#">
          &lt;LuNu /&gt;
        </a>
        <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center gap-3">
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
            <li class="nav-item">
              <a :href="'tel:' + personalInfo.phone" class="btn btn-glow">Let's Talk</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header id="about" class="hero-section d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center flex-column-reverse flex-lg-row">
          <div class="col-lg-7 text-center text-lg-start animate__animated animate__fadeInLeft">
            <div class="badge-custom mb-3"><i class="fa-solid fa-code me-2"></i>Hello, World!</div>
            <h1 class="display-3 fw-black text-white mb-2">
              I'm <span class="text-gradient">{{ personalInfo.name }}</span>
            </h1>
            <h3 class="typing-text mb-4">{{ typingText }}<span class="cursor">|</span></h3>
            <p class="lead text-light opacity-75 mb-5 w-75 mx-auto mx-lg-0">
              {{ personalInfo.slogan }} <br>
              Chuyên xây dựng các ứng dụng Web & Game với hiệu suất cao và trải nghiệm người dùng tuyệt vời.
            </p>
            <div class="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a :href="personalInfo.github" target="_blank" class="social-btn"><i class="fa-brands fa-github"></i></a>
              <a href="#" class="social-btn"><i class="fa-brands fa-linkedin"></i></a>
              <a :href="'mailto:' + personalInfo.email" class="social-btn"><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
          <div class="col-lg-5 text-center mb-5 mb-lg-0 animate__animated animate__fadeInRight">
            <div class="avatar-wrapper">
              <img :src="personalInfo.avatar" alt="Avatar" class="avatar-img">
              <div class="floating-card glass-card">
                <i class="fa-solid fa-check-circle text-success"></i> Open for Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="skills" class="section py-5">
      <div class="container">
        <h2 class="section-heading text-center mb-5 animate__animated animate__fadeInUp">
          Tech Stack
        </h2>
        <div class="row g-4">
          <div class="col-md-4" v-for="(group, key) in skills" :key="key">
            <div class="glass-card h-100 p-4 animate-hover">
              <h4 class="text-capitalize mb-4 text-white border-bottom pb-2 border-secondary">
                {{ key }}
              </h4>
              <div class="d-flex flex-wrap gap-2">
                <span v-for="item in group" :key="item.name" class="skill-tag" :style="{ borderColor: item.color }">
                  <i :class="item.icon" :style="{ color: item.color }"></i> {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="section py-5">
      <div class="container">
        <h2 class="section-heading text-center mb-5">Featured Projects</h2>
        <div class="row g-4">
          <div class="col-12" v-if="projects.find(p => p.featured)">
            <div class="glass-card p-0 overflow-hidden featured-card d-flex flex-wrap flex-lg-nowrap" 
                 @click="openModal(projects.find(p => p.featured))">
              <div class="img-col col-lg-6">
                <img :src="projects.find(p => p.featured).images[0]" class="w-100 h-100 object-fit-cover" alt="Featured">
                <div class="overlay"><i class="fa-solid fa-expand"></i> View Details</div>
              </div>
              <div class="content-col col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                <div class="badge bg-warning text-dark align-self-start mb-2">⭐ Spotlight</div>
                <h3 class="fw-bold text-white mb-3">{{ projects.find(p => p.featured).name }}</h3>
                <p class="text-light opacity-75 mb-4">{{ projects.find(p => p.featured).shortDesc }}</p>
                <div class="mb-4">
                  <span v-for="tech in projects.find(p => p.featured).tech" :key="tech" class="tech-badge me-2 mb-2">{{ tech }}</span>
                </div>
                <button class="btn btn-outline-info w-auto align-self-start">Explore Project <i class="fa-solid fa-arrow-right ms-2"></i></button>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4" v-for="project in projects.filter(p => !p.featured)" :key="project.id">
            <div class="glass-card project-card h-100 d-flex flex-column" @click="openModal(project)">
              <div class="card-img-top position-relative">
                <img :src="project.images[0]" class="w-100 rounded-top" alt="Project">
                <div class="category-badge">{{ project.category }}</div>
              </div>
              <div class="card-body p-4 flex-grow-1">
                <h5 class="fw-bold text-white mb-2">{{ project.name }}</h5>
                <p class="text-light opacity-50 small mb-3">{{ project.role }} | {{ project.time }}</p>
                <p class="text-light opacity-75 line-clamp-3">{{ project.shortDesc }}</p>
              </div>
              <div class="card-footer p-4 border-0 pt-0">
                <div class="d-flex flex-wrap gap-1">
                  <span v-for="tech in project.tech.slice(0, 3)" :key="tech" class="tech-mini-badge">{{ tech }}</span>
                  <span v-if="project.tech.length > 3" class="tech-mini-badge">+{{ project.tech.length - 3 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="text-center py-4 text-white opacity-50">
      <small>&copy; 2026 {{ personalInfo.name }}. Built with Vue 3 & Passion.</small>
    </footer>

    <div class="modal fade" id="projectModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content glass-modal border-0" v-if="selectedProject">
          <div class="modal-header border-bottom border-secondary">
            <div>
              <h4 class="modal-title fw-bold text-white">{{ selectedProject.name }}</h4>
              <p class="mb-0 text-info small">{{ selectedProject.category }}</p>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <div class="row g-0">
              <div class="col-lg-8 bg-dark">
                <div :id="'carousel-' + selectedProject.id" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item" v-for="(img, index) in selectedProject.images" :key="index" :class="{ active: index === 0 }">
                      <img :src="img" class="d-block w-100" style="height: 500px; object-fit: cover;" alt="Project Image">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + selectedProject.id" data-bs-slide="prev" v-if="selectedProject.images.length > 1">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + selectedProject.id" data-bs-slide="next" v-if="selectedProject.images.length > 1">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                </div>
              </div>
              
              <div class="col-lg-4 p-4 p-lg-5 text-white">
                <h5 class="text-info mb-3">📝 Overview</h5>
                <p class="opacity-75">{{ selectedProject.fullDesc }}</p>
                
                <h5 class="text-info mb-3 mt-4">🛠 Tech Stack</h5>
                <div class="d-flex flex-wrap gap-2 mb-4">
                  <span v-for="tech in selectedProject.tech" :key="tech" class="badge bg-dark border border-secondary">{{ tech }}</span>
                </div>

                <h5 class="text-info mb-3">👨‍💻 My Role</h5>
                <p class="opacity-75">{{ selectedProject.role }}</p>

                <div class="mt-5 d-grid gap-2">
                  <a :href="selectedProject.link" target="_blank" class="btn btn-primary btn-lg fw-bold">
                    <i class="fa-brands fa-github me-2"></i> View Repository
                  </a>
                  <button class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
/* GLOBAL STYLES */
:root {
  --primary: #00f2ff;
  --secondary: #7000ff;
  --dark-bg: #0f172a;
  --card-bg: rgba(30, 41, 59, 0.7);
  --glass: rgba(255, 255, 255, 0.05);
  --border: rgba(255, 255, 255, 0.1);
}

body {
  font-family: 'Outfit', sans-serif;
  background-color: var(--dark-bg);
  color: #fff;
  overflow-x: hidden;
}

/* Background Shapes */
.bg-shape {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  z-index: -1;
  animation: float 10s infinite alternate;
}
.shape-1 { width: 400px; height: 400px; background: var(--secondary); top: -100px; left: -100px; opacity: 0.2; }
.shape-2 { width: 500px; height: 500px; background: var(--primary); bottom: -100px; right: -100px; opacity: 0.15; animation-delay: 2s; }

@keyframes float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 50px); }
}

/* Navbar */
.glass-nav {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding: 15px 0;
}
.nav-link { color: #ccc !important; font-weight: 500; transition: 0.3s; }
.nav-link:hover, .nav-link.active { color: var(--primary) !important; }

/* Text Gradient */
.text-gradient {
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Buttons */
.btn-glow {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  box-shadow: 0 0 10px rgba(0, 242, 255, 0.2);
  transition: 0.3s;
}
.btn-glow:hover {
  background: var(--primary);
  color: #000;
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.6);
}

/* Hero Section */
.hero-section { min-height: 100vh; padding-top: 80px; }
.avatar-wrapper { position: relative; display: inline-block; }
.avatar-img { width: 350px; height: 350px; border-radius: 30px; object-fit: cover; border: 2px solid var(--border); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
.floating-card { position: absolute; bottom: 30px; right: -20px; padding: 10px 20px; border-radius: 15px; font-weight: 600; font-size: 0.9rem; animation: float 3s infinite ease-in-out; }

/* Typing Cursor */
.cursor { animation: blink 1s infinite; margin-left: 5px; color: var(--primary); }
@keyframes blink { 50% { opacity: 0; } }

/* Glass Cards */
.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.glass-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(0, 242, 255, 0.1);
}

/* Skill Tags */
.skill-tag {
  background: rgba(255,255,255,0.05);
  padding: 8px 12px;
  border-radius: 8px;
  border-left: 3px solid;
  font-size: 0.9rem;
}

/* Projects */
.featured-card { cursor: pointer; }
.featured-card .img-col { position: relative; overflow: hidden; }
.featured-card .overlay {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: 0.3s; font-weight: bold; font-size: 1.2rem;
}
.featured-card:hover .overlay { opacity: 1; }
.featured-card img { transition: 0.5s; }
.featured-card:hover img { transform: scale(1.1); }

.tech-badge { background: rgba(0, 242, 255, 0.1); color: var(--primary); padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; }
.tech-mini-badge { font-size: 0.75rem; background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 4px; color: #ccc; }
.category-badge { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.8); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; }

/* Modal */
.glass-modal { background: #1a202c; color: white; border: 1px solid var(--border); }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

/* Responsive */
@media (max-width: 992px) {
  .hero-section { text-align: center; padding-top: 100px; }
  .avatar-img { width: 250px; height: 250px; margin-bottom: 30px; }
  .display-3 { font-size: 2.5rem; }
}
</style>