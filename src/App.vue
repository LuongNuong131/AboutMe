<script setup>
import { ref, onMounted, nextTick, computed } from 'vue';

// --- DATA SOURCE ---
const personalInfo = ref({
  name: "Trần Quang Lương",
  role: "Full-Stack Developer",
  email: "tranquangluong06@gmail.com",
  phone: "0907 987 126",
  address: "Hóc Môn, TP. Hồ Chí Minh",
  github: "https://github.com/LuongNuong131",
  linkedin: "https://linkedin.com/in/tranquangluong",
  avatar: "https://placehold.co/400x400/0f172a/00f2ff?text=LuNu",
  slogan: "Code with Passion, Build with Vision.",
  bio: "Passionate developer with 3+ years of experience in building scalable web applications and game systems. Specialized in modern JavaScript frameworks and microservices architecture."
});

const stats = ref([
  { number: "15+", label: "Projects Completed", icon: "fa-solid fa-rocket" },
  { number: "3+", label: "Years Experience", icon: "fa-solid fa-calendar-check" },
  { number: "10+", label: "Tech Stacks", icon: "fa-solid fa-layer-group" },
  { number: "99%", label: "Client Satisfaction", icon: "fa-solid fa-heart" }
]);

const skills = ref({
  frontend: [
    { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "#42b883", level: 95 },
    { name: "Bootstrap 5", icon: "fa-brands fa-bootstrap", color: "#7952b3", level: 90 },
    { name: "ReactJS", icon: "fa-brands fa-react", color: "#61dafb", level: 85 }
  ],
  backend: [
    { name: "Node.js", icon: "fa-brands fa-node", color: "#339933", level: 90 },
    { name: "Java Spring", icon: "fa-brands fa-java", color: "#f89820", level: 88 },
    { name: "C# .NET", icon: "fa-brands fa-microsoft", color: "#512bd4", level: 82 }
  ],
  database: [
    { name: "MySQL", icon: "fa-solid fa-database", color: "#00758f", level: 92 },
    { name: "SQL Server", icon: "fa-solid fa-server", color: "#cc2927", level: 88 },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ed", level: 85 }
  ]
});

const experience = ref([
  {
    year: "2025 - Present",
    role: "Team Leader & Senior Frontend Developer",
    company: "Hệ Thống Ánh Dương",
    description: "Leading a team of 5 developers, architecting scalable frontend solutions, and implementing best practices for code quality and performance.",
    achievements: ["30% reduction in meeting time", "Improved team productivity by 40%", "Implemented CI/CD pipeline"]
  },
  {
    year: "2024 - 2025",
    role: "Full-Stack Game Developer",
    company: "EchoMMO Project",
    description: "Core developer for GameFi MMORPG project, handling both frontend and backend development with real-time features.",
    achievements: ["Built microservices architecture", "Implemented WebSocket for real-time gameplay", "Optimized database queries by 60%"]
  },
  {
    year: "2023 - 2024",
    role: "Junior Developer",
    company: "Freelance Projects",
    description: "Developed various management systems for small businesses including billing, inventory, and customer management.",
    achievements: ["Delivered 10+ projects on time", "100% client satisfaction rate", "Built reusable component library"]
  }
]);

const projects = ref([
  {
    id: 1,
    name: "EchoMMO (GameFi)",
    category: "Full-Stack / Game",
    role: "Core Developer",
    time: "Development",
    tech: ["Vue.js", "Spring Boot", "MySQL", "WebSocket", "Docker"],
    shortDesc: "Dự án Game nhập vai trực tuyến tích hợp tài chính (GameFi) với kiến trúc Microservices.",
    fullDesc: "EchoMMO là dự án tâm huyết xây dựng một thế giới ảo nơi người chơi có thể tương tác thời gian thực. Hệ thống sử dụng VueJS cho trải nghiệm mượt mà, Spring Boot xử lý logic game phức tạp và WebSocket cho các tính năng PvP/Chat realtime. Tích hợp blockchain cho tài sản in-game và marketplace.",
    images: [
      "https://placehold.co/800x450/1e293b/00f2ff?text=EchoMMO+Dashboard",
      "https://placehold.co/800x450/1e293b/00f2ff?text=In-Game+UI",
      "https://placehold.co/800x450/1e293b/00f2ff?text=Marketplace"
    ],
    link: "https://github.com/LuongNuong131/EchoMMO-Frontend",
    featured: true,
    highlights: ["Real-time multiplayer", "Microservices architecture", "Blockchain integration"]
  },
  {
    id: 2,
    name: "Hệ Thống Ánh Dương",
    category: "Management System",
    role: "Leader & Frontend",
    time: "01/2025 - Present",
    tech: ["Vue.js 3", "Pinia", "Axios", "Bootstrap"],
    shortDesc: "Hệ thống quản lý nội bộ, phân chia công việc và theo dõi tiến độ dự án.",
    fullDesc: "Đóng vai trò Leader, tôi chịu trách nhiệm thiết kế kiến trúc Frontend, review code và quản lý tiến độ của 5 thành viên. Hệ thống giúp tối ưu hóa quy trình làm việc giảm 30% thời gian họp hành. Tích hợp dashboard analytics, real-time notifications và automated reporting.",
    images: [
      "https://placehold.co/800x450/2d3748/cbd5e0?text=Project+Tracking",
      "https://placehold.co/800x450/2d3748/cbd5e0?text=Task+Management"
    ],
    link: "#",
    featured: false,
    highlights: ["Team management", "Real-time tracking", "Analytics dashboard"]
  },
  {
    id: 3,
    name: "Quản Lý Bida Pro",
    category: "Desktop App",
    role: "Full-Stack",
    time: "06/2024",
    tech: ["Java Swing", "JDBC", "MySQL"],
    shortDesc: "Phần mềm quản lý bàn, tính tiền giờ và kho hàng cho quán Bida.",
    fullDesc: "Giải quyết bài toán tính tiền giờ phức tạp (khung giờ vàng, phụ thu). Tích hợp báo cáo doanh thu ngày/tháng và quản lý kho đồ uống. Hệ thống tự động tính toán và xuất hóa đơn cho khách hàng.",
    images: [
      "https://placehold.co/800x450/4a5568/a0aec0?text=Table+Map",
      "https://placehold.co/800x450/4a5568/a0aec0?text=Billing+System"
    ],
    link: "#",
    featured: false,
    highlights: ["Automated billing", "Inventory tracking", "Revenue analytics"]
  },
  {
    id: 4,
    name: "LuNu House Manager",
    category: "Desktop App",
    role: "Leader",
    time: "04/2024",
    tech: ["C# WinForms", "SQL Server", "Entity Framework"],
    shortDesc: "Ứng dụng quản lý trọ, tính điện nước và xuất hóa đơn tự động.",
    fullDesc: "Phần mềm giúp chủ trọ quản lý 50+ phòng. Tính năng nổi bật: Tự động tính tiền điện nước theo chỉ số cũ/mới, xuất hóa đơn PDF và gửi mail cho người thuê. Tích hợp payment gateway và reminder system.",
    images: [
      "https://placehold.co/800x450/4a5568/a0aec0?text=Room+List",
      "https://placehold.co/800x450/4a5568/a0aec0?text=Invoice+Export"
    ],
    link: "#",
    featured: false,
    highlights: ["Automated invoicing", "Email notifications", "Payment tracking"]
  }
]);

const testimonials = ref([
  {
    name: "Nguyễn Văn A",
    role: "CEO, Tech Startup",
    content: "Lương là một developer xuất sắc. Anh ấy không chỉ code giỏi mà còn có tư duy kiến trúc hệ thống rất tốt. Dự án của chúng tôi hoàn thành đúng hạn và vượt mong đợi.",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5
  },
  {
    name: "Trần Thị B",
    role: "Project Manager",
    content: "Làm việc với Lương rất chuyên nghiệp. Anh ấy luôn cập nhật tiến độ, code clean và có khả năng giải quyết vấn đề nhanh chóng. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5
  }
]);

// --- COMPUTED ---
const filteredProjects = computed(() => projects.value);

// --- LOGIC ---
const selectedProject = ref(null);
const activeSection = ref('about');
let modalInstance = null;

const openModal = (project) => {
  selectedProject.value = project;
  nextTick(() => {
    const modalEl = document.getElementById('projectModal');
    if (modalEl) {
      modalInstance = new bootstrap.Modal(modalEl);
      modalInstance.show();
    }
  });
};

// Typing Effect
const typingText = ref("");
const fullText = "Full-Stack Developer | Tech Enthusiast | Problem Solver";
let i = 0;

const typeWriter = () => {
  if (i < fullText.length) {
    typingText.value += fullText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
};

// Scroll Animation
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.observe-me').forEach(el => observer.observe(el));
};

// Active nav on scroll
const handleScroll = () => {
  const sections = ['about', 'skills', 'experience', 'projects', 'testimonials'];
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const height = element.offsetHeight;
      if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
        activeSection.value = section;
      }
    }
  });
};

onMounted(() => {
  typeWriter();
  observeElements();
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="app-container">
    <!-- Animated Background -->
    <div class="bg-gradient"></div>
    <div class="bg-shape shape-1"></div>
    <div class="bg-shape shape-2"></div>
    <div class="bg-shape shape-3"></div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg fixed-top glass-nav">
      <div class="container">
        <a class="navbar-brand fw-bold" href="#">
          <span class="logo-bracket">&lt;</span>
          <span class="text-gradient">LuNu</span>
          <span class="logo-bracket">/&gt;</span>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i class="fa-solid fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center gap-3">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'skills' }" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'experience' }" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'projects' }" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'testimonials' }" href="#testimonials">Reviews</a>
            </li>
            <li class="nav-item">
              <a :href="'tel:' + personalInfo.phone" class="btn btn-glow">
                <i class="fa-solid fa-phone me-2"></i>Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header id="about" class="hero-section d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 order-2 order-lg-1">
            <div class="badge-custom mb-3 animate__animated animate__fadeInDown">
              <i class="fa-solid fa-rocket me-2"></i>Welcome to my Portfolio
            </div>
            <h1 class="display-2 fw-black text-white mb-3 animate__animated animate__fadeInLeft">
              Hi, I'm <br>
              <span class="text-gradient">{{ personalInfo.name }}</span>
            </h1>
            <h3 class="typing-wrapper mb-4 animate__animated animate__fadeInLeft animate__delay-1s">
              <span class="typing-text">{{ typingText }}</span>
              <span class="cursor">|</span>
            </h3>
            <p class="lead text-light opacity-75 mb-5 animate__animated animate__fadeInLeft animate__delay-2s" style="max-width: 600px;">
              {{ personalInfo.bio }}
            </p>

            <!-- Stats -->
            <div class="row g-3 mb-5 animate__animated animate__fadeInUp animate__delay-2s">
              <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
                <div class="stat-card text-center">
                  <i :class="stat.icon" class="stat-icon mb-2"></i>
                  <h3 class="stat-number mb-0">{{ stat.number }}</h3>
                  <p class="stat-label mb-0">{{ stat.label }}</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="d-flex gap-3 animate__animated animate__fadeInUp animate__delay-3s">
              <a :href="personalInfo.github" target="_blank" class="social-btn" title="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a :href="personalInfo.linkedin" target="_blank" class="social-btn" title="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a :href="'mailto:' + personalInfo.email" class="social-btn" title="Email">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="#projects" class="btn btn-primary ms-3">
                View My Work <i class="fa-solid fa-arrow-down ms-2"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-5 order-1 order-lg-2 text-center mb-5 mb-lg-0">
            <div class="avatar-wrapper animate__animated animate__fadeInRight">
              <div class="avatar-border"></div>
              <img :src="personalInfo.avatar" alt="Avatar" class="avatar-img">
              <div class="floating-badge badge-1">
                <i class="fa-solid fa-code"></i> Vue Expert
              </div>
              <div class="floating-badge badge-2">
                <i class="fa-solid fa-database"></i> Backend Pro
              </div>
              <div class="floating-badge badge-3">
                <i class="fa-solid fa-bolt"></i> Fast Learner
              </div>
              <div class="status-indicator">
                <span class="status-dot"></span> Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Skills Section -->
    <section id="skills" class="section py-5">
      <div class="container">
        <div class="section-header text-center mb-5 observe-me">
          <h2 class="section-title">
            <span class="title-decorator">//</span> Technical Skills
          </h2>
          <p class="section-subtitle">Technologies I work with</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4" v-for="(group, key) in skills" :key="key">
            <div class="glass-card skill-card h-100 p-4 observe-me">
              <div class="d-flex align-items-center mb-4">
                <div class="skill-category-icon me-3">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <h4 class="text-capitalize mb-0 text-white">{{ key }}</h4>
              </div>
              
              <div class="skills-list">
                <div v-for="item in group" :key="item.name" class="skill-item mb-4">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="d-flex align-items-center">
                      <i :class="item.icon" :style="{ color: item.color }" class="me-2"></i>
                      <span class="skill-name">{{ item.name }}</span>
                    </div>
                    <span class="skill-percentage">{{ item.level }}%</span>
                  </div>
                  <div class="skill-progress">
                    <div class="skill-progress-bar" :style="{ width: item.level + '%', background: item.color }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section id="experience" class="section py-5 bg-darker">
      <div class="container">
        <div class="section-header text-center mb-5 observe-me">
          <h2 class="section-title">
            <span class="title-decorator">//</span> Work Experience
          </h2>
          <p class="section-subtitle">My professional journey</p>
        </div>

        <div class="timeline">
          <div v-for="(exp, index) in experience" :key="index" class="timeline-item observe-me" :class="{ 'timeline-item-right': index % 2 === 1 }">
            <div class="timeline-content glass-card p-4">
              <span class="timeline-year">{{ exp.year }}</span>
              <h4 class="text-white mb-2">{{ exp.role }}</h4>
              <p class="text-primary mb-3">{{ exp.company }}</p>
              <p class="text-light opacity-75 mb-3">{{ exp.description }}</p>
              <ul class="achievement-list">
                <li v-for="achievement in exp.achievements" :key="achievement">
                  <i class="fa-solid fa-check-circle text-success me-2"></i>{{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section py-5">
      <div class="container">
        <div class="section-header text-center mb-5 observe-me">
          <h2 class="section-title">
            <span class="title-decorator">//</span> Featured Projects
          </h2>
          <p class="section-subtitle">Showcasing my best work</p>
        </div>

        <!-- Featured Project -->
        <div class="mb-5 observe-me" v-if="projects.find(p => p.featured)">
          <div class="featured-project glass-card overflow-hidden" @click="openModal(projects.find(p => p.featured))">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="featured-image">
                  <img :src="projects.find(p => p.featured).images[0]" alt="Featured">
                  <div class="image-overlay">
                    <i class="fa-solid fa-expand fa-2x"></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center">
                <div class="p-5">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <span class="badge bg-warning text-dark">⭐ Featured</span>
                    <span class="badge bg-info">{{ projects.find(p => p.featured).category }}</span>
                  </div>
                  <h3 class="text-white fw-bold mb-3">{{ projects.find(p => p.featured).name }}</h3>
                  <p class="text-light opacity-75 mb-4">{{ projects.find(p => p.featured).shortDesc }}</p>
                  
                  <div class="mb-4">
                    <h6 class="text-info mb-2">Key Features:</h6>
                    <ul class="feature-list">
                      <li v-for="highlight in projects.find(p => p.featured).highlights" :key="highlight">
                        {{ highlight }}
                      </li>
                    </ul>
                  </div>

                  <div class="tech-stack mb-4">
                    <span v-for="tech in projects.find(p => p.featured).tech" :key="tech" class="tech-badge-lg">
                      {{ tech }}
                    </span>
                  </div>

                  <button class="btn btn-primary btn-lg">
                    Explore Project <i class="fa-solid fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Projects Grid -->
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="project in projects.filter(p => !p.featured)" :key="project.id">
            <div class="glass-card project-card h-100 observe-me" @click="openModal(project)">
              <div class="project-image">
                <img :src="project.images[0]" alt="Project">
                <div class="project-overlay">
                  <i class="fa-solid fa-eye fa-2x"></i>
                </div>
                <span class="project-category">{{ project.category }}</span>
              </div>
              <div class="project-body p-4">
                <h5 class="text-white fw-bold mb-2">{{ project.name }}</h5>
                <p class="project-meta mb-3">
                  <i class="fa-solid fa-user-tie me-2"></i>{{ project.role }}
                  <span class="mx-2">|</span>
                  <i class="fa-solid fa-clock me-2"></i>{{ project.time }}
                </p>
                <p class="text-light opacity-75 mb-3 line-clamp-3">{{ project.shortDesc }}</p>
                <div class="tech-tags">
                  <span v-for="(tech, index) in project.tech.slice(0, 3)" :key="tech" class="tech-tag-sm">
                    {{ tech }}
                  </span>
                  <span v-if="project.tech.length > 3" class="tech-tag-sm">+{{ project.tech.length - 3 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="section py-5 bg-darker">
      <div class="container">
        <div class="section-header text-center mb-5 observe-me">
          <h2 class="section-title">
            <span class="title-decorator">//</span> Client Testimonials
          </h2>
          <p class="section-subtitle">What people say about my work</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="glass-card testimonial-card p-4 h-100 observe-me">
              <div class="stars mb-3">
                <i v-for="n in testimonial.rating" :key="n" class="fa-solid fa-star text-warning"></i>
              </div>
              <p class="testimonial-content mb-4">"{{ testimonial.content }}"</p>
              <div class="d-flex align-items-center">
                <img :src="testimonial.avatar" alt="Avatar" class="testimonial-avatar me-3">
                <div>
                  <h6 class="text-white mb-0">{{ testimonial.name }}</h6>
                  <p class="text-info mb-0 small">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="cta-section py-5">
      <div class="container">
        <div class="glass-card cta-card p-5 text-center observe-me">
          <h2 class="text-white mb-3">Ready to Start Your Project?</h2>
          <p class="text-light opacity-75 mb-4 mx-auto" style="max-width: 600px;">
            Let's collaborate and turn your ideas into reality. I'm available for freelance projects and full-time opportunities.
          </p>
          <div class="d-flex gap-3 justify-content-center flex-wrap">
            <a :href="'mailto:' + personalInfo.email" class="btn btn-primary btn-lg">
              <i class="fa-solid fa-envelope me-2"></i>Send Email
            </a>
            <a :href="'tel:' + personalInfo.phone" class="btn btn-outline-light btn-lg">
              <i class="fa-solid fa-phone me-2"></i>Call Me
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p class="mb-0 text-light opacity-50">
              &copy; 2026 {{ personalInfo.name }}. Built with <i class="fa-solid fa-heart text-danger"></i> and Vue 3
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="d-inline-flex gap-3">
              <a :href="personalInfo.github" target="_blank" class="footer-link">
                <i class="fa-brands fa-github"></i>
              </a>
              <a :href="personalInfo.linkedin" target="_blank" class="footer-link">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a :href="'mailto:' + personalInfo.email" class="footer-link">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Project Modal -->
    <div class="modal fade" id="projectModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content glass-modal" v-if="selectedProject">
          <div class="modal-header border-bottom border-secondary">
            <div>
              <h4 class="modal-title text-white fw-bold mb-1">{{ selectedProject.name }}</h4>
              <p class="mb-0 text-info">{{ selectedProject.category }} | {{ selectedProject.role }}</p>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          
          <div class="modal-body p-0">
            <div class="row g-0">
              <!-- Image Carousel -->
              <div class="col-lg-8 bg-dark">
                <div :id="'carousel-' + selectedProject.id" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button v-for="(img, index) in selectedProject.images" :key="index" 
                      type="button" 
                      :data-bs-target="'#carousel-' + selectedProject.id" 
                      :data-bs-slide-to="index" 
                      :class="{ active: index === 0 }">
                    </button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item" v-for="(img, index) in selectedProject.images" :key="index" :class="{ active: index === 0 }">
                      <img :src="img" class="d-block w-100 modal-project-image" alt="Project">
                    </div>
                  </div>
                  <button v-if="selectedProject.images.length > 1" class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + selectedProject.id" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </button>
                  <button v-if="selectedProject.images.length > 1" class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + selectedProject.id" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>

              <!-- Project Details -->
              <div class="col-lg-4 p-4 p-lg-5">
                <div class="mb-4">
                  <h5 class="text-primary mb-3"><i class="fa-solid fa-info-circle me-2"></i>Project Overview</h5>
                  <p class="text-light opacity-75">{{ selectedProject.fullDesc }}</p>
                </div>

                <div class="mb-4">
                  <h5 class="text-primary mb-3"><i class="fa-solid fa-star me-2"></i>Key Highlights</h5>
                  <ul class="highlights-list">
                    <li v-for="highlight in selectedProject.highlights" :key="highlight">
                      <i class="fa-solid fa-check-circle text-success me-2"></i>{{ highlight }}
                    </li>
                  </ul>
                </div>

                <div class="mb-4">
                  <h5 class="text-primary mb-3"><i class="fa-solid fa-tools me-2"></i>Technologies Used</h5>
                  <div class="d-flex flex-wrap gap-2">
                    <span v-for="tech in selectedProject.tech" :key="tech" class="badge bg-dark border border-info">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div class="mb-4">
                  <h5 class="text-primary mb-3"><i class="fa-solid fa-user-tie me-2"></i>My Role</h5>
                  <p class="text-light opacity-75">{{ selectedProject.role }}</p>
                </div>

                <div class="d-grid gap-2">
                  <a :href="selectedProject.link" target="_blank" class="btn btn-primary btn-lg">
                    <i class="fa-brands fa-github me-2"></i>View on GitHub
                  </a>
                  <button class="btn btn-outline-light" data-bs-dismiss="modal">
                    <i class="fa-solid fa-times me-2"></i>Close
                  </button>
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
/* ========== GLOBAL STYLES ========== */
:root {
  --primary: #00f2ff;
  --secondary: #7000ff;
  --dark-bg: #0a0e1a;
  --darker-bg: #060913;
  --card-bg: rgba(20, 28, 46, 0.6);
  --glass: rgba(255, 255, 255, 0.03);
  --border: rgba(255, 255, 255, 0.08);
  --text-primary: #ffffff;
  --text-secondary: #a0aec0;
  --success: #10b981;
  --warning: #fbbf24;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Outfit', sans-serif;
  background: var(--dark-bg);
  color: var(--text-primary);
  overflow-x: hidden;
  line-height: 1.7;
}

.app-container {
  position: relative;
  min-height: 100vh;
}

/* ========== BACKGROUND EFFECTS ========== */
.bg-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(112, 0, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 242, 255, 0.05) 0%, transparent 50%);
  z-index: -2;
}

.bg-shape {
  position: fixed;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  animation: float 20s infinite alternate ease-in-out;
  opacity: 0.15;
}

.shape-1 { 
  width: 600px; 
  height: 600px; 
  background: var(--secondary); 
  top: -200px; 
  left: -200px; 
}

.shape-2 { 
  width: 500px; 
  height: 500px; 
  background: var(--primary); 
  bottom: -150px; 
  right: -150px; 
  animation-delay: 5s; 
}

.shape-3 { 
  width: 400px; 
  height: 400px; 
  background: var(--warning); 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  animation-delay: 10s; 
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(50px, -30px) rotate(5deg); }
  66% { transform: translate(-30px, 50px) rotate(-5deg); }
}

/* ========== NAVIGATION ========== */
.glass-nav {
  background: rgba(10, 14, 26, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.navbar-brand {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: -1px;
}

.logo-bracket {
  color: var(--primary);
  font-weight: 700;
}

.nav-link {
  color: var(--text-secondary) !important;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary) !important;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

/* ========== BUTTONS ========== */
.btn-glow {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
}

.btn-glow:hover {
  background: var(--primary);
  color: #000;
  box-shadow: 0 0 30px rgba(0, 242, 255, 0.6);
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 242, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 242, 255, 0.5);
}

/* ========== HERO SECTION ========== */
.hero-section {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 60px;
}

.badge-custom {
  display: inline-block;
  background: rgba(0, 242, 255, 0.1);
  border: 1px solid rgba(0, 242, 255, 0.3);
  color: var(--primary);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
}

.display-2 {
  font-size: 4.5rem;
  line-height: 1.1;
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing-wrapper {
  color: var(--text-secondary);
  font-size: 1.8rem;
  font-weight: 500;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--primary);
  font-weight: 700;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* Avatar */
.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-border {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 40px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  filter: blur(15px);
  opacity: 0.6;
  z-index: -1;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

.avatar-img {
  width: 400px;
  height: 400px;
  border-radius: 35px;
  object-fit: cover;
  border: 3px solid var(--border);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
}

.floating-badge {
  position: absolute;
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  padding: 0.7rem 1.2rem;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.85rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  animation: float-badge 4s infinite ease-in-out;
}

.badge-1 { top: 20%; left: -50px; animation-delay: 0s; }
.badge-2 { top: 50%; right: -60px; animation-delay: 1.5s; }
.badge-3 { bottom: 15%; left: -40px; animation-delay: 3s; }

@keyframes float-badge {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.status-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: var(--success);
  border-radius: 50%;
  animation: glow 2s infinite;
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px var(--success); }
  50% { box-shadow: 0 0 20px var(--success); }
}

/* Stats */
.stat-card {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 15px;
  padding: 1.5rem 1rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.stat-icon {
  font-size: 2rem;
  color: var(--primary);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Social Buttons */
.social-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--border);
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-btn:hover {
  background: var(--primary);
  color: #000;
  transform: translateY(-5px) rotate(10deg);
  box-shadow: 0 10px 25px rgba(0, 242, 255, 0.4);
}

/* ========== SECTIONS ========== */
.section {
  position: relative;
  z-index: 1;
}

.bg-darker {
  background: var(--darker-bg);
}

.section-header {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 0.5rem;
}

.title-decorator {
  color: var(--primary);
  margin-right: 1rem;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

/* ========== GLASS CARDS ========== */
.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 20px;
  transition: all 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 242, 255, 0.4);
  box-shadow: 0 20px 40px rgba(0, 242, 255, 0.15);
}

/* ========== SKILLS SECTION ========== */
.skill-card {
  overflow: hidden;
}

.skill-category-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.skill-item {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.skill-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0 !important;
}

.skill-name {
  color: white;
  font-weight: 500;
}

.skill-percentage {
  color: var(--primary);
  font-weight: 700;
  font-size: 0.9rem;
}

.skill-progress {
  height: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress-bar {
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease;
  box-shadow: 0 0 15px currentColor;
}

/* ========== TIMELINE ========== */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 0 40px;
  margin-bottom: 50px;
}

.timeline-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.timeline-item:nth-child(even) {
  left: 50%;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  background: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 20px var(--primary);
}

.timeline-item:nth-child(odd)::before {
  right: -10px;
}

.timeline-item:nth-child(even)::before {
  left: -10px;
}

.timeline-content {
  position: relative;
}

.timeline-year {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.achievement-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievement-list li {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

/* ========== PROJECTS ========== */
.featured-project {
  cursor: pointer;
  overflow: hidden;
}

.featured-image {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-project:hover .featured-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-project:hover .image-overlay {
  opacity: 1;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 25px;
}

.feature-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-size: 1.2rem;
}

.tech-badge-lg {
  display: inline-block;
  background: rgba(0, 242, 255, 0.1);
  border: 1px solid rgba(0, 242, 255, 0.3);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0.25rem;
}

/* Project Cards */
.project-card {
  cursor: pointer;
  overflow: hidden;
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.15);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-category {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid var(--primary);
}

.project-meta {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.tech-tag-sm {
  display: inline-block;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  margin: 0.2rem;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ========== TESTIMONIALS ========== */
.testimonial-card {
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-content {
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.8;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--primary);
}

/* ========== CTA SECTION ========== */
.cta-section {
  padding: 80px 0;
}

.cta-card {
  background: linear-gradient(135deg, rgba(0, 242, 255, 0.1), rgba(112, 0, 255, 0.1));
  border: 2px solid var(--border);
}

/* ========== FOOTER ========== */
.footer {
  background: var(--darker-bg);
  border-top: 1px solid var(--border);
}

.footer-link {
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.footer-link:hover {
  color: var(--primary);
  transform: translateY(-3px);
}

/* ========== MODAL ========== */
.glass-modal {
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
}

.modal-project-image {
  height: 500px;
  object-fit: cover;
}

.highlights-list {
  list-style: none;
  padding: 0;
}

.highlights-list li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
}

/* ========== RESPONSIVE ========== */
@media (max-width: 992px) {
  .display-2 { font-size: 3rem; }
  .avatar-img { width: 300px; height: 300px; }
  .floating-badge { display: none; }
  
  .timeline::before { left: 30px; }
  .timeline-item { width: 100%; left: 0 !important; padding-left: 80px; text-align: left !important; }
  .timeline-item::before { left: 20px !important; }
  
  .featured-image { height: 300px; }
  .modal-project-image { height: 300px; }
}

@media (max-width: 768px) {
  .section-title { font-size: 2rem; }
  .display-2 { font-size: 2.2rem; }
  .typing-wrapper { font-size: 1.2rem; }
  .avatar-img { width: 250px; height: 250px; }
  .hero-section { padding-top: 100px; }
}

/* ========== ANIMATIONS ========== */
.observe-me {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.observe-me.animate__animated {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}

/* Selection */
::selection {
  background: var(--primary);
  color: #000;
}
</style>