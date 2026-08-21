<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Command,
  Database,
  Github,
  Globe2,
  Mail,
  Menu,
  MoveUpRight,
  Phone,
  Plus,
  Server,
  Sparkles,
  X,
} from "lucide-vue-next";
import avatarImage from "../assets/AnhThe.webp";
import { projects } from "../data/projects";

const router = useRouter();
const { locale } = useI18n();
const mobileMenuOpen = ref(false);
const activeProject = ref(null);
const activeProjectFilter = ref("all");
const previewX = ref(0);
const previewY = ref(0);
const activeSection = ref("home");
let observer;

const isVi = computed(() => locale.value === "vi");
const featuredProject = computed(() => projects.find((project) => project.featured) || projects[0]);
const otherProjects = computed(() => projects.filter((project) => project.id !== featuredProject.value.id));
const filteredProjects = computed(() => activeProjectFilter.value === "all" ? otherProjects.value : otherProjects.value.filter((project) => project.category === activeProjectFilter.value));
const filterOptions = computed(() => [
  { key: "all", label: isVi.value ? "Tất cả" : "All" },
  { key: "Product systems", label: isVi.value ? "Product" : "Product" },
  { key: "Complex systems", label: isVi.value ? "Systems" : "Systems" },
  { key: "Internal operations", label: isVi.value ? "Operations" : "Operations" },
  { key: "Academic / team project", label: isVi.value ? "Archive" : "Archive" },
]);
const projectSummary = (project) => isVi.value ? project.overview : project.overviewEn || project.overview;
const projectEvidence = (project) => isVi.value ? project.evidence : project.evidenceEn || project.evidence;
const projectCount = computed(() => String(projects.length).padStart(2, "0"));
const projectNumber = (project) => String(projects.findIndex((item) => item.id === project.id) + 1).padStart(2, "0");

const ui = computed(() => isVi.value ? {
  nav: [{ id: "about", label: "Về tôi" }, { id: "work", label: "Dự án" }, { id: "contact", label: "Liên hệ" }],
  availability: "Sẵn sàng cho dự án phù hợp",
  role: "Software Engineer / Full-Stack Developer",
  heroTitle: "Tôi xây những\nhệ thống đáng tin.",
  heroBody: "Từ một bài toán nghiệp vụ phức tạp đến một sản phẩm có thể vận hành — tôi biến ý tưởng thành cấu trúc rõ ràng, trải nghiệm sắc nét và code có lý do để tồn tại.",
  heroCta: "Xem công việc",
  heroNote: "Đang ở Hóc Môn, TP. Hồ Chí Minh",
  portraitLabel: "TRẦN QUANG LƯƠNG",
  portraitSub: "Backend · Systems · Product",
  introKicker: "Một chút về tôi",
  introTitle: "Không chỉ viết code.\nTôi xây nền tảng để mọi thứ chạy tốt hơn.",
  introBody: "Tôi là một Software Engineer trẻ, tập trung vào Backend Engineering, Database và Automation. Điều khiến tôi hứng thú không phải là một framework mới, mà là cách một hệ thống vận hành ổn định khi mọi thứ trở nên phức tạp.",
  introBody2: "Tôi thích những bài toán có chiều sâu: logic nghiệp vụ, trạng thái dữ liệu, hiệu năng và trải nghiệm người dùng. Mỗi dự án là một cơ hội để biến sự phức tạp thành một thứ rõ ràng hơn.",
  readMore: "Đọc câu chuyện",
  numbersKicker: "Một vài con số",
  numbers: [{ value: "03+", label: "Năm học tập & thực chiến" }, { value: "07", label: "Dự án end-to-end" }, { value: "12+", label: "Công nghệ đã triển khai" }, { value: "3.0", label: "GPA tại FPT Polytechnic" }],
  workKicker: "Selected work / 2024—26",
  workTitle: "Những thứ tôi\nđã đưa vào đời sống.",
  workBody: "Một shortlist được chọn theo độ sâu của bài toán: realtime game systems, travel operations, MMORPG economy và những workflow có dữ liệu thật.",
  featured: "Dự án nổi bật",
  viewCase: "Xem case study",
  archive: "Mở toàn bộ archive",
  capabilitiesKicker: "Tôi có thể giúp gì",
  capabilitiesTitle: "Từ cấu trúc\nđến trải nghiệm.",
  capabilitiesBody: "Tôi làm tốt nhất khi được tham gia từ sớm — nơi một ý tưởng còn đang tìm hình hài, nơi những quyết định kỹ thuật có ảnh hưởng thật đến sản phẩm.",
  capabilities: [
    { icon: Server, title: "Backend systems", text: "API, business logic, auth, real-time flows và những core service được thiết kế để không trở thành nút thắt." },
    { icon: Database, title: "Data architecture", text: "Schema, query, state và data flow rõ ràng để sản phẩm vừa nhanh hôm nay vừa dễ mở rộng ngày mai." },
    { icon: Code2, title: "Product interfaces", text: "Đưa logic phức tạp thành giao diện dễ hiểu, mượt mà và có cảm giác được chăm chút." },
  ],
  processKicker: "Cách tôi làm việc",
  processTitle: "Rõ ràng trước.\nNhanh sau.",
  processBody: "Tôi bắt đầu bằng việc hiểu đúng bài toán, không bắt đầu bằng việc chọn công nghệ. Sau đó tôi xây một cấu trúc đủ chắc, ship sớm và để thực tế trả lời phần còn lại.",
  process: [{ number: "01", title: "Understand", text: "Làm rõ người dùng, nghiệp vụ và điều gì thực sự cần được giải quyết." }, { number: "02", title: "Structure", text: "Chia nhỏ hệ thống, xác định data flow và những rủi ro cần xử lý trước." }, { number: "03", title: "Build", text: "Ship một phiên bản đáng tin, đo lường được và sẵn sàng để phát triển tiếp." }],
  contactKicker: "Mở một cuộc trò chuyện",
  contactTitle: "Có một bài toán\nđáng để cùng giải?",
  contactBody: "Nếu bạn đang xây một sản phẩm mới hoặc cần một người vừa hiểu code vừa hiểu vận hành, hãy gửi tôi một tín hiệu.",
  contactCta: "Gửi email cho tôi",
  footerLine: "Built with intent — Trần Quang Lương",
} : {
  nav: [{ id: "about", label: "About" }, { id: "work", label: "Work" }, { id: "contact", label: "Contact" }],
  availability: "Available for the right project",
  role: "Software Engineer / Full-Stack Developer",
  heroTitle: "I build systems\npeople can trust.",
  heroBody: "From a complex business problem to a product that can operate in the real world — I turn ideas into clear structure, sharp experiences and code with a reason to exist.",
  heroCta: "Explore work",
  heroNote: "Based in Ho Chi Minh City, Vietnam",
  portraitLabel: "TRẦN QUANG LƯƠNG",
  portraitSub: "Backend · Systems · Product",
  introKicker: "A little about me",
  introTitle: "Not just writing code.\nBuilding the ground beneath it.",
  introBody: "I'm a young Software Engineer focused on Backend Engineering, databases and automation. What keeps me interested isn't another framework — it's how a system keeps its shape when the world around it gets complex.",
  introBody2: "I enjoy problems with depth: business logic, data state, performance and user experience. Every project is a chance to turn something complicated into something clearer.",
  readMore: "Read the story",
  numbersKicker: "A few numbers",
  numbers: [{ value: "03+", label: "Years learning & shipping" }, { value: "07", label: "End-to-end projects" }, { value: "12+", label: "Technologies deployed" }, { value: "3.0", label: "GPA at FPT Polytechnic" }],
  workKicker: "Selected work / 2024—26",
  workTitle: "Things I've\nbrought to life.",
  workBody: "A shortlist selected for problem depth: realtime game systems, travel operations, MMORPG economy and data-heavy workflows.",
  featured: "Featured project",
  viewCase: "View case study",
  archive: "Open full archive",
  capabilitiesKicker: "What I can help with",
  capabilitiesTitle: "From structure\nto experience.",
  capabilitiesBody: "I do my best work when I join early — while an idea is still looking for its shape, and technical decisions can still change the product for the better.",
  capabilities: [
    { icon: Server, title: "Backend systems", text: "APIs, business logic, auth, real-time flows and core services designed not to become the bottleneck." },
    { icon: Database, title: "Data architecture", text: "Clear schemas, queries, state and data flows so a product is fast today and ready to grow tomorrow." },
    { icon: Code2, title: "Product interfaces", text: "Turning complex logic into interfaces that feel understandable, fluid and considered." },
  ],
  processKicker: "How I work",
  processTitle: "Clarity first.\nSpeed second.",
  processBody: "I start by understanding the problem, not by picking a technology. Then I shape a resilient structure, ship early and let reality answer the rest.",
  process: [{ number: "01", title: "Understand", text: "Clarify the users, the domain and what actually needs to be solved." }, { number: "02", title: "Structure", text: "Break down the system, map data flows and surface the risky edges." }, { number: "03", title: "Build", text: "Ship something dependable, measurable and ready to evolve." }],
  contactKicker: "Open a conversation",
  contactTitle: "Have a problem\nworth solving together?",
  contactBody: "If you're building something new or need someone who understands both code and operations, send a signal.",
  contactCta: "Send me an email",
  footerLine: "Built with intent — Trần Quang Lương",
});

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  mobileMenuOpen.value = false;
};

const toggleLocale = () => { locale.value = locale.value === "vi" ? "en" : "vi"; };
const openProject = (project) => router.push({ name: "project-detail", params: { id: project.id } });
const showPreview = (project, event) => { activeProject.value = project; previewX.value = event.clientX; previewY.value = event.clientY; };
const movePreview = (event) => { previewX.value = event.clientX; previewY.value = event.clientY; };
const hidePreview = () => { activeProject.value = null; };

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) activeSection.value = visible[0].target.id;
  }, { rootMargin: "-20% 0px -65% 0px", threshold: [0.12, 0.4, 0.7] });
  ["home", "about", "work", "contact"].forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <main class="luxury-page">
    <header class="luxury-header">
      <a href="#home" class="luxury-brand" data-cursor="HOME" @click.prevent="scrollTo('home')">
        <span class="brand-symbol">LQ</span><span class="brand-wordmark">TRẦN QUANG LƯƠNG</span>
      </a>
      <nav class="luxury-nav" aria-label="Main navigation">
        <a v-for="item in ui.nav" :key="item.id" :href="`#${item.id}`" :class="{ active: activeSection === item.id }" @click.prevent="scrollTo(item.id)">{{ item.label }}</a>
      </nav>
      <div class="luxury-header-right">
        <button class="locale-button" type="button" @click="toggleLocale" :aria-label="isVi ? 'Switch to English' : 'Chuyển sang tiếng Việt'"><span :class="{ active: isVi }">VI</span><i>/</i><span :class="{ active: !isVi }">EN</span></button>
        <a class="header-mail" href="mailto:tranquangluong06@gmail.com">Let's talk <ArrowUpRight :size="15" /></a>
        <button class="luxury-menu-button" type="button" @click="mobileMenuOpen = !mobileMenuOpen" :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"><X v-if="mobileMenuOpen" :size="19" /><Menu v-else :size="19" /></button>
      </div>
    </header>

    <div v-if="mobileMenuOpen" class="luxury-mobile-menu">
      <a v-for="item in ui.nav" :key="item.id" :href="`#${item.id}`" @click.prevent="scrollTo(item.id)"><span>{{ item.label }}</span><ArrowUpRight :size="19" /></a>
      <a href="mailto:tranquangluong06@gmail.com"><span>Let's talk</span><Mail :size="18" /></a>
    </div>

    <section id="home" class="luxury-hero page-gutter">
      <div class="hero-side-label"><span>01</span><span class="side-line"></span><span>INTRO</span></div>
      <div class="hero-main">
        <div class="hero-eyebrow"><span class="red-dot"></span>{{ ui.role }}</div>
        <h1 class="luxury-hero-title" v-html="ui.heroTitle.replace(/\n/g, '<br />')"></h1>
        <div class="hero-bottom">
          <p>{{ ui.heroBody }}</p>
          <a class="round-cta" href="#work" @click.prevent="scrollTo('work')"><span>{{ ui.heroCta }}</span><ArrowDown :size="18" /></a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-visual-blue"></div>
        <div class="hero-image-wrap"><img :src="avatarImage" :alt="ui.portraitLabel" /></div>
        <div class="hero-portrait-caption"><span>{{ ui.portraitLabel }}</span><strong>{{ ui.portraitSub }}</strong></div>
        <div class="hero-year">MMV / 2026</div>
        <div class="hero-availability"><span class="availability-dot"></span>{{ ui.availability }}</div>
      </div>
      <div class="hero-footer-line"><span>{{ ui.heroNote }}</span><span>↓ SCROLL TO EXPLORE</span></div>
    </section>

    <section id="about" class="editorial-section about-editorial page-gutter">
      <div class="editorial-label"><span>{{ ui.introKicker }}</span><span class="editorial-label-line"></span><span>02</span></div>
      <div class="about-editorial-grid">
        <div class="about-editorial-title"><h2 v-html="ui.introTitle.replace(/\n/g, '<br />')"></h2><div class="signature-mark">LQ<span>✳</span></div></div>
        <div class="about-editorial-copy"><p class="copy-lead">{{ ui.introBody }}</p><p>{{ ui.introBody2 }}</p><a class="underlined-link" href="#contact" @click.prevent="scrollTo('contact')">{{ ui.readMore }} <ArrowUpRight :size="15" /></a></div>
      </div>
      <div class="numbers-block"><div class="numbers-heading">{{ ui.numbersKicker }}</div><div class="numbers-list"><div v-for="number in ui.numbers" :key="number.value" class="number-item"><strong>{{ number.value }}</strong><span>{{ number.label }}</span></div></div></div>
    </section>

    <section id="work" class="editorial-section work-editorial page-gutter">
      <div class="editorial-label"><span>{{ ui.workKicker }}</span><span class="editorial-label-line"></span><span>03</span></div>
      <div class="work-heading"><h2 v-html="ui.workTitle.replace(/\n/g, '<br />')"></h2><p>{{ ui.workBody }}</p></div>
      <article class="featured-work" @click="openProject(featuredProject)">
        <div class="featured-image"><img :src="featuredProject.image" :alt="featuredProject.title" loading="lazy" /><div class="featured-image-overlay"></div><span class="featured-image-number">01 / {{ projectCount }}</span><span class="featured-open"><MoveUpRight :size="22" /></span></div>
        <div class="featured-content"><div class="featured-kicker"><span>{{ ui.featured }}</span><span>{{ featuredProject.timeline }}</span></div><h3>{{ featuredProject.title }}</h3><p>{{ projectSummary(featuredProject) }}</p><div class="featured-facts"><span>{{ featuredProject.category }}</span><span>{{ featuredProject.status }}</span></div><p class="featured-evidence">{{ projectEvidence(featuredProject) }}</p><div class="project-tags"><span v-for="tech in featuredProject.technologies.slice(0, 5)" :key="tech">{{ tech }}</span></div><button type="button" class="case-study-link" @click.stop="openProject(featuredProject)">{{ ui.viewCase }} <ArrowUpRight :size="16" /></button></div>
      </article>
      <div class="archive-heading"><span>02—{{ projectCount }}</span><span>{{ isVi ? "Các dự án khác" : "More work" }}</span><span class="archive-line"></span></div>
      <div class="archive-tools"><span>{{ isVi ? "Lọc theo loại project" : "Filter by project type" }}</span><div class="project-filter"><button v-for="filter in filterOptions" :key="filter.key" type="button" :class="{ active: activeProjectFilter === filter.key }" @click="activeProjectFilter = filter.key">{{ filter.label }}</button></div></div>
      <div class="project-archive">
        <article v-for="(project, index) in filteredProjects" :key="project.id" class="archive-row" @mouseenter="showPreview(project, $event)" @mousemove="movePreview" @mouseleave="hidePreview" @click="openProject(project)"><span class="archive-index">{{ projectNumber(project) }}</span><div class="archive-name"><h3>{{ project.title }}</h3><span>{{ project.category }} · {{ project.status }}</span></div><span class="archive-year">{{ project.timeline }}</span><span class="archive-arrow"><ArrowUpRight :size="18" /></span></article>
      </div>
      <div v-if="activeProject" class="work-preview" :style="{ left: `${previewX + 22}px`, top: `${previewY - 140}px` }"><img :src="activeProject.image" :alt="activeProject.title" /><span>{{ activeProject.title }}</span></div>
      <a class="archive-link" href="https://github.com/LuongNuong131" target="_blank" rel="noreferrer">{{ ui.archive }} <ArrowUpRight :size="16" /></a>
    </section>

    <section class="capabilities-editorial page-gutter">
      <div class="editorial-label editorial-label--light"><span>{{ ui.capabilitiesKicker }}</span><span class="editorial-label-line"></span><span>04</span></div>
      <div class="capabilities-heading"><h2 v-html="ui.capabilitiesTitle.replace(/\n/g, '<br />')"></h2><p>{{ ui.capabilitiesBody }}</p></div>
      <div class="capabilities-row"><article v-for="(capability, index) in ui.capabilities" :key="capability.title" class="capability-item"><div class="capability-icon"><component :is="capability.icon" :size="21" stroke-width="1.4" /></div><span class="capability-number">0{{ index + 1 }}</span><h3>{{ capability.title }}</h3><p>{{ capability.text }}</p><div class="capability-plus"><Plus :size="17" /></div></article></div>
    </section>

    <section class="process-editorial page-gutter">
      <div class="editorial-label"><span>{{ ui.processKicker }}</span><span class="editorial-label-line"></span><span>05</span></div>
      <div class="process-heading"><h2 v-html="ui.processTitle.replace(/\n/g, '<br />')"></h2><p>{{ ui.processBody }}</p></div>
      <div class="process-grid"><article v-for="item in ui.process" :key="item.number" class="process-card"><span>{{ item.number }}</span><h3>{{ item.title }}</h3><p>{{ item.text }}</p><Check :size="17" /></article></div>
    </section>

    <section id="contact" class="contact-editorial page-gutter">
      <div class="contact-stamp">LET'S<br />MAKE<br /><span>IT REAL</span></div>
      <div class="editorial-label editorial-label--light"><span>{{ ui.contactKicker }}</span><span class="editorial-label-line"></span><span>06</span></div>
      <div class="contact-content"><h2 v-html="ui.contactTitle.replace(/\n/g, '<br />')"></h2><p>{{ ui.contactBody }}</p><a class="contact-cta" href="mailto:tranquangluong06@gmail.com"><span>{{ ui.contactCta }}</span><ArrowUpRight :size="20" /></a></div>
      <div class="contact-footer"><div class="contact-footer-left"><a href="mailto:tranquangluong06@gmail.com"><Mail :size="15" /> tranquangluong06@gmail.com</a><a href="https://github.com/LuongNuong131" target="_blank" rel="noreferrer"><Github :size="15" /> github.com/LuongNuong131</a></div><span>{{ ui.footerLine }}</span><a href="#home" @click.prevent="scrollTo('home')">BACK TO TOP ↑</a></div>
    </section>
  </main>
</template>
