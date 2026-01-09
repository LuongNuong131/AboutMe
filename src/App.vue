<script setup>
import { ref } from 'vue';

// Dữ liệu CV - Edit trực tiếp tại đây
const personalInfo = ref({
  name: "Trần Quang Lương", // [cite: 1]
  role: "Full-Stack Developer Intern", // [cite: 2]
  dob: "13/02/2005", // [cite: 9]
  email: "tranquangluong06@gmail.com", // [cite: 10]
  phone: "0907 987 126", // [cite: 11]
  address: "Hóc Môn, TP. Hồ Chí Minh", // [cite: 13]
  github: "github.com/LuongNuong131", // Lấy từ context của ông
  avatar: "https://placehold.co/400x400/1e1e2f/FFF?text=LuNu" // Ảnh demo
});

const careerGoals = ref([
  { time: "Ngắn hạn (3-6 tháng)", title: "Internship", desc: "Áp dụng Vue.js, Node.js, MySQL vào thực tế. Hoàn thành 2-3 dự án, rèn luyện Git & CI/CD." }, // [cite: 3]
  { time: "Trung hạn (1-2 năm)", title: "Full-Stack Dev", desc: "Thành thạo NestJS, GraphQL, Docker. Nâng cao tư duy thiết kế hệ thống." }, // [cite: 4]
  { time: "Dài hạn (5 năm)", title: "Tech Lead / Architect", desc: "Đóng góp mã nguồn mở, kết nối cộng đồng dev và định hướng kiến trúc dự án." } // [cite: 5]
]);

const skills = ref({
  frontend: ["Vue.js", "Bootstrap 5", "HTML5/CSS3", "JavaScript (ES6+)"], // [cite: 20]
  backend: ["Node.js", "Express", "Java (Spring Boot)", "RESTful API"], // [cite: 21]
  database: ["MySQL", "SQL Server"], // [cite: 22]
  tools: ["Git/GitHub", "IntelliJ IDEA", "Postman", "Docker"]
});

const projects = ref([
  {
    name: "EchoMMO (GameFi Project)",
    role: "Full-Stack Developer",
    time: "Development",
    tech: ["Vue.js", "Spring Boot (Java 17)", "MySQL", "WebSocket"],
    desc: "Dự án game nhập vai trực tuyến (MMO) tích hợp yếu tố tài chính. Xây dựng hệ thống backend xử lý giao dịch thời gian thực và frontend tương tác cao.",
    featured: true
  },
  {
    name: "Dự án Ánh Dương",
    role: "Leader, Frontend Dev", // [cite: 27]
    time: "1/2025 - Nay", // [cite: 28]
    tech: ["Vue.js", "Management"],
    desc: "Quản lý lộ trình dự án, phân chia công việc team. Trực tiếp code module Frontend và viết báo cáo tiến độ." // [cite: 29]
  },
  {
    name: "Phần mềm Quản lý Bida",
    role: "Leader, Dev", // [cite: 30]
    time: "6/2024 - 7/2024", // [cite: 31]
    tech: ["Java", "SQL Server"],
    desc: "Xây dựng tool quản lý bàn, giờ chơi. Chịu trách nhiệm kiểm thử (Testing) và điều phối team." // [cite: 32]
  },
  {
    name: "Phần mềm Quản lý Nhà Trọ",
    role: "Leader, Dev", // [cite: 33]
    time: "4/2024 - 5/2024", // [cite: 34]
    tech: ["C++", "SQL Server"],
    desc: "Hệ thống quản lý phòng trọ, điện nước. Phân tích nghiệp vụ và thiết kế cơ sở dữ liệu." // [cite: 35]
  }
]);

const education = ref([
  { school: "FPT Polytechnic", major: "Phát triển phần mềm", time: "09/2023 - Nay" }, // [cite: 24, 25]
  { school: "Chứng chỉ Tiếng Anh", major: "PET (2018) & KET (2016)", time: "Cambridge" } // [cite: 41, 42]
]);
</script>

<template>
  <div class="cv-container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold text-info" href="#">
          <i class="fa-solid fa-code me-2"></i>LuNu<span class="text-white">Portfolio</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#about">Giới thiệu</a></li>
            <li class="nav-item"><a class="nav-link" href="#skills">Kỹ năng</a></li>
            <li class="nav-item"><a class="nav-link" href="#projects">Dự án</a></li>
            <li class="nav-item"><a class="nav-link btn btn-info text-dark ms-2 fw-bold" href="tel:0907987126">Liên hệ ngay</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="hero-section d-flex align-items-center text-center text-white" id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <img :src="personalInfo.avatar" alt="Avatar" class="rounded-circle border border-4 border-info mb-4 shadow-lg avatar-img">
            <h1 class="display-4 fw-bold mb-2">{{ personalInfo.name }}</h1>
            <h3 class="text-info mb-4">{{ personalInfo.role }}</h3>
            <p class="lead text-light opacity-75 mb-4">
              Sinh viên Software Engineering tại FPT Polytechnic. Đam mê xây dựng các ứng dụng Web Full-Stack và Game Development.
            </p>
            <div class="d-flex justify-content-center gap-3">
              <a :href="'mailto:' + personalInfo.email" class="btn btn-outline-light"><i class="fa-solid fa-envelope me-2"></i>Email</a>
              <a href="#" class="btn btn-outline-light"><i class="fa-brands fa-github me-2"></i>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-5"><i class="fa-solid fa-bullseye text-info me-2"></i>Mục Tiêu Nghề Nghiệp</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(goal, index) in careerGoals" :key="index">
            <div class="card h-100 border-0 shadow-sm hover-card">
              <div class="card-body text-center">
                <div class="badge bg-info p-2 mb-3 rounded-pill">{{ goal.time }}</div>
                <h5 class="card-title fw-bold">{{ goal.title }}</h5>
                <p class="card-text text-muted small">{{ goal.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-5" id="skills">
      <div class="container">
        <h2 class="section-title text-center mb-5"><i class="fa-solid fa-layer-group text-info me-2"></i>Kỹ Năng Chuyên Môn</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="skill-box p-4 border rounded bg-white shadow-sm h-100">
              <h4 class="text-primary mb-3"><i class="fa-brands fa-vuejs me-2"></i>Frontend</h4>
              <ul class="list-unstyled">
                <li v-for="skill in skills.frontend" :key="skill" class="mb-2 border-bottom pb-2">
                  <i class="fa-solid fa-check text-success me-2"></i>{{ skill }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="skill-box p-4 border rounded bg-white shadow-sm h-100">
              <h4 class="text-success mb-3"><i class="fa-brands fa-node me-2"></i>Backend</h4>
              <ul class="list-unstyled">
                <li v-for="skill in skills.backend" :key="skill" class="mb-2 border-bottom pb-2">
                  <i class="fa-solid fa-check text-success me-2"></i>{{ skill }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="skill-box p-4 border rounded bg-white shadow-sm h-100">
              <h4 class="text-warning mb-3"><i class="fa-solid fa-database me-2"></i>DB & Tools</h4>
              <ul class="list-unstyled">
                <li v-for="skill in skills.database" :key="skill" class="mb-2 border-bottom pb-2">
                  <i class="fa-solid fa-check text-success me-2"></i>{{ skill }}
                </li>
                 <li v-for="skill in skills.tools" :key="skill" class="mb-2 border-bottom pb-2">
                  <i class="fa-solid fa-check text-success me-2"></i>{{ skill }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section py-5 bg-light" id="projects">
      <div class="container">
        <h2 class="section-title text-center mb-5"><i class="fa-solid fa-laptop-code text-info me-2"></i>Dự Án Nổi Bật</h2>
        <div class="row g-4">
          <div class="col-lg-6" v-for="(project, index) in projects" :key="index">
            <div class="card project-card h-100 border-0 shadow" :class="{ 'featured-project': project.featured }">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title fw-bold mb-0">
                    <span v-if="project.featured">⭐ </span>{{ project.name }}
                  </h5>
                  <span class="badge bg-secondary">{{ project.time }}</span>
                </div>
                <h6 class="text-info small mb-3">{{ project.role }}</h6>
                <p class="card-text text-secondary">{{ project.desc }}</p>
                <div class="mt-3">
                  <span v-for="tech in project.tech" :key="tech" class="badge bg-light text-dark border me-1">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-dark text-white py-5 mt-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-4">
            <h5 class="text-info mb-3">Học Vấn & Chứng Chỉ</h5>
            <ul class="list-unstyled opacity-75">
              <li v-for="edu in education" :key="edu.school" class="mb-2">
                <strong>{{ edu.school }}:</strong> {{ edu.major }} ({{ edu.time }})
              </li>
            </ul>
          </div>
          <div class="col-md-6 mb-4 text-md-end">
            <h5 class="text-info mb-3">Liên Hệ</h5>
            <p class="mb-1"><i class="fa-solid fa-location-dot me-2"></i>{{ personalInfo.address }}</p>
            <p class="mb-1"><i class="fa-solid fa-phone me-2"></i>{{ personalInfo.phone }}</p>
            <p class="mb-0"><i class="fa-solid fa-envelope me-2"></i>{{ personalInfo.email }}</p>
          </div>
        </div>
        <hr class="border-secondary">
        <div class="text-center opacity-50 small">
          &copy; 2026 {{ personalInfo.name }}. Designed by LuNu AI.
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* CSS Reset & Custom Styles */
body {
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fa;
}

.hero-section {
  background: linear-gradient(135deg, #1e1e2f 0%, #2a2a40 100%);
  padding-top: 100px;
  padding-bottom: 80px;
}

.avatar-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s;
}

.avatar-img:hover {
  transform: scale(1.05);
}

.section-title {
  font-weight: 700;
  color: #333;
  position: relative;
  display: inline-block;
}

.hover-card {
  transition: transform 0.2s ease-in-out;
}
.hover-card:hover {
  transform: translateY(-5px);
}

.project-card {
  transition: all 0.3s;
  overflow: hidden;
}
.project-card:hover {
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

/* Highlight Featured Project (EchoMMO) */
.featured-project {
  border-left: 5px solid #0dcaf0 !important;
  background: linear-gradient(to right, #ffffff, #f0fbff);
}
</style>