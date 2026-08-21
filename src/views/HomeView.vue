<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ServerCog,
  Sparkles,
  X,
} from "lucide-vue-next";
import { projects } from "../data/projects";
import avatarImage from "../assets/AnhThe.webp";

const router = useRouter();
const { locale } = useI18n();
const mobileMenuOpen = ref(false);
const activeSection = ref("home");
let observer;

const isVi = computed(() => locale.value === "vi");

const copy = computed(() =>
  isVi.value
    ? {
        nav: [
          { id: "about", label: "Về tôi" },
          { id: "work", label: "Dự án" },
          { id: "approach", label: "Cách làm" },
        ],
        eyebrow: "Software Engineer · HCMC, Vietnam",
        title: "Xây hệ thống\nđáng tin cậy.",
        intro:
          "Tôi biến những bài toán phức tạp thành sản phẩm rõ ràng, nhanh và có thể mở rộng — từ core backend đến những trải nghiệm frontend sắc nét.",
        primary: "Xem dự án",
        secondary: "Kết nối với tôi",
        status: "Sẵn sàng cho cơ hội mới",
        portraitLabel: "CURRENTLY BUILDING",
        portraitValue: "Scalable digital products",
        aboutKicker: "01 / Profile",
        aboutTitle: "Tư duy hệ thống,\nđộ chi tiết của một builder.",
        aboutBody:
          "Tôi là Trần Quang Lương — Full-Stack Developer tập trung vào Backend Engineering, Database và Automation. Tôi thích hiểu bản chất của một bài toán, thiết kế cấu trúc đủ vững rồi mới đưa nó vào đời sống bằng code sạch và trải nghiệm có chủ đích.",
        aboutBody2:
          "Hiện tôi đang theo học Phát triển phần mềm tại FPT Polytechnic và xây dựng những sản phẩm có logic nghiệp vụ thực tế: CRM, nền tảng GameFi, hệ thống quản trị và các công cụ tự động hóa.",
        stats: [
          { value: "03+", label: "Năm học tập & thực chiến" },
          { value: "06", label: "Dự án end-to-end" },
          { value: "12+", label: "Công nghệ đã triển khai" },
        ],
        capabilitiesKicker: "02 / Capabilities",
        capabilitiesTitle: "Tôi làm tốt nhất\nở giao điểm của code và hệ thống.",
        capabilityLead:
          "Không chỉ viết tính năng. Tôi quan tâm tới cách chúng vận hành, phát triển và tạo ra giá trị lâu dài.",
        capabilities: [
          {
            icon: ServerCog,
            number: "01",
            title: "Backend Engineering",
            text: "Thiết kế API, xử lý nghiệp vụ, authentication và những core service chịu tải ổn định.",
            tags: ["Spring Boot", "FastAPI", "Node.js"],
          },
          {
            icon: Database,
            number: "02",
            title: "Data & Architecture",
            text: "Xây dựng database schema rõ ràng, tối ưu truy vấn và kiến trúc dễ bảo trì khi sản phẩm lớn lên.",
            tags: ["MySQL", "SQL Server", "Docker"],
          },
          {
            icon: Code2,
            number: "03",
            title: "Product-minded Frontend",
            text: "Đưa logic phức tạp thành giao diện dễ hiểu, mượt mà và có cảm giác được chăm chút.",
            tags: ["Vue 3", "TypeScript", "GSAP"],
          },
          {
            icon: Layers3,
            number: "04",
            title: "Automation & AI",
            text: "Tự động hóa quy trình lặp lại và kết nối AI vào đúng nơi nó tạo ra lợi thế vận hành.",
            tags: ["Python", "Playwright", "AI Copilot"],
          },
        ],
        workKicker: "03 / Selected work",
        workTitle: "Một vài thứ tôi\nđã đưa vào vận hành.",
        workIntro:
          "Mỗi dự án là một bài toán riêng về dữ liệu, quy trình và trải nghiệm. Đây là những case study tiêu biểu trong hành trình đó.",
        viewCase: "Xem case study",
        allProjects: "Xem toàn bộ dự án",
        approachKicker: "04 / Approach",
        approachTitle: "Làm việc rõ ràng.\nXây dựng có chủ đích.",
        approachBody:
          "Tôi tin một sản phẩm tốt bắt đầu từ việc đặt đúng câu hỏi. Quy trình của tôi đi từ việc làm rõ vấn đề, tạo cấu trúc kỹ thuật, xây nhanh một phiên bản có thể kiểm chứng, rồi lặp lại dựa trên dữ liệu thực tế.",
        process: [
          { step: "01", title: "Understand", text: "Hiểu người dùng, nghiệp vụ và ràng buộc trước khi chọn giải pháp." },
          { step: "02", title: "Structure", text: "Chia nhỏ hệ thống, xác định data flow và những điểm rủi ro." },
          { step: "03", title: "Build", text: "Ship một phiên bản chắc chắn, có thể đo lường và mở rộng." },
        ],
        contactKicker: "05 / Contact",
        contactTitle: "Có một bài toán\nđáng để cùng giải?",
        contactBody:
          "Nếu bạn đang xây một sản phẩm mới, cần một người vừa hiểu code vừa hiểu vận hành, hãy gửi tôi một tín hiệu.",
        contactCta: "Bắt đầu một cuộc trò chuyện",
        footer: "Built with Vue, curiosity & too much coffee.",
      }
    : {
        nav: [
          { id: "about", label: "About" },
          { id: "work", label: "Work" },
          { id: "approach", label: "Approach" },
        ],
        eyebrow: "Software Engineer · HCMC, Vietnam",
        title: "Building systems\npeople can trust.",
        intro:
          "I turn complex problems into clear, fast and scalable products — from core backend systems to sharp frontend experiences.",
        primary: "Explore work",
        secondary: "Let's connect",
        status: "Open to new opportunities",
        portraitLabel: "CURRENTLY BUILDING",
        portraitValue: "Scalable digital products",
        aboutKicker: "01 / Profile",
        aboutTitle: "Systems thinking,\nbuilder-level detail.",
        aboutBody:
          "I'm Trần Quang Lương — a Full-Stack Developer focused on Backend Engineering, databases and automation. I like understanding the core of a problem, designing a resilient structure, then bringing it to life through clean code and intentional experiences.",
        aboutBody2:
          "I'm currently studying Software Development at FPT Polytechnic while building products with real business logic: CRM platforms, GameFi systems, operations tools and automation workflows.",
        stats: [
          { value: "03+", label: "Years learning & shipping" },
          { value: "06", label: "End-to-end projects" },
          { value: "12+", label: "Technologies deployed" },
        ],
        capabilitiesKicker: "02 / Capabilities",
        capabilitiesTitle: "Where code meets\nsystems thinking.",
        capabilityLead:
          "I don't just ship features. I care about how they operate, evolve and create long-term value.",
        capabilities: [
          {
            icon: ServerCog,
            number: "01",
            title: "Backend Engineering",
            text: "APIs, business logic, authentication and core services built for dependable performance.",
            tags: ["Spring Boot", "FastAPI", "Node.js"],
          },
          {
            icon: Database,
            number: "02",
            title: "Data & Architecture",
            text: "Clear database schemas, tuned queries and architecture that stays maintainable as products grow.",
            tags: ["MySQL", "SQL Server", "Docker"],
          },
          {
            icon: Code2,
            number: "03",
            title: "Product-minded Frontend",
            text: "Turning complex logic into interfaces that feel understandable, fluid and considered.",
            tags: ["Vue 3", "TypeScript", "GSAP"],
          },
          {
            icon: Layers3,
            number: "04",
            title: "Automation & AI",
            text: "Automating repetitive workflows and placing AI where it creates real operational leverage.",
            tags: ["Python", "Playwright", "AI Copilot"],
          },
        ],
        workKicker: "03 / Selected work",
        workTitle: "A few things I've\nbrought to life.",
        workIntro:
          "Every project is a different problem in data, operations and experience. These are a few representative chapters.",
        viewCase: "View case study",
        allProjects: "View all projects",
        approachKicker: "04 / Approach",
        approachTitle: "Work clearly.\nBuild with intent.",
        approachBody:
          "A good product starts with the right questions. My process moves from clarifying the problem, shaping the technical structure, shipping something testable, then iterating from real feedback.",
        process: [
          { step: "01", title: "Understand", text: "Learn the users, domain and constraints before choosing a solution." },
          { step: "02", title: "Structure", text: "Break down the system, map data flows and surface the risky edges." },
          { step: "03", title: "Build", text: "Ship a solid version that can be measured, learned from and extended." },
        ],
        contactKicker: "05 / Contact",
        contactTitle: "Have a problem\nworth solving together?",
        contactBody:
          "If you're building something new or need someone who understands both code and operations, send a signal.",
        contactCta: "Start a conversation",
        footer: "Built with Vue, curiosity & too much coffee.",
      },
);

const featuredProjects = computed(() => projects.slice(0, 4));
const englishProjectSummaries = {
  travelos: "An intelligent internal CRM for travel businesses, automating itinerary design, booking operations and AI-assisted tour content.",
  echommo: "A browser-based MMORPG platform with a GameFi economy, real-time admin operations and a secure player marketplace.",
  fcdbb: "A football club operating platform for player records, match schedules, performance-led team splitting and financial tracking.",
  anhduong: "A fundraising platform designed around transparent donation flows, clear campaign storytelling and a frictionless contributor journey.",
};
const projectOverview = (project) => (isVi.value ? project.overview : englishProjectSummaries[project.id] || project.overview);

const contactLinks = computed(() => [
  { label: "Email", value: "tranquangluong06@gmail.com", href: "mailto:tranquangluong06@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/LuongNuong131", href: "https://github.com/LuongNuong131", icon: Github },
  { label: "Facebook", value: "facebook.com/LuongNuong131", href: "https://www.facebook.com/LuongNuong131", icon: Globe2 },
  { label: "Phone", value: "0907 987 126", href: "tel:0907987126", icon: Phone },
]);

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  mobileMenuOpen.value = false;
};

const toggleLocale = () => {
  locale.value = locale.value === "vi" ? "en" : "vi";
};

const openProject = (project) => {
  router.push({ name: "project-detail", params: { id: project.id } });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) activeSection.value = visible[0].target.id;
    },
    { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.35, 0.7] },
  );
  ["home", "about", "work", "approach", "contact"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <main class="portfolio-page">
    <header class="site-header">
      <a class="brand" href="#home" data-cursor="HOME" @click.prevent="scrollTo('home')">
        <span class="brand-mark">TL</span>
        <span class="brand-name">TRẦN QUANG LƯƠNG</span>
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a
          v-for="item in copy.nav"
          :key="item.id"
          :class="['nav-link', { 'is-active': activeSection === item.id }]"
          :href="`#${item.id}`"
          @click.prevent="scrollTo(item.id)"
        >{{ item.label }}</a>
      </nav>

      <div class="header-actions">
        <button class="language-switch" type="button" @click="toggleLocale" :aria-label="isVi ? 'Switch to English' : 'Chuyển sang tiếng Việt'">
          <span :class="{ active: isVi }">VI</span>
          <span class="language-slash">/</span>
          <span :class="{ active: !isVi }">EN</span>
        </button>
        <a class="header-contact" href="#contact" @click.prevent="scrollTo('contact')">
          <span>{{ isVi ? "Liên hệ" : "Contact" }}</span>
          <ArrowUpRight :size="15" />
        </a>
        <button class="menu-toggle" type="button" @click="mobileMenuOpen = !mobileMenuOpen" :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'">
          <X v-if="mobileMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </header>

    <div v-if="mobileMenuOpen" class="mobile-menu">
      <a v-for="item in copy.nav" :key="item.id" :href="`#${item.id}`" @click.prevent="scrollTo(item.id)">
        <span>{{ item.label }}</span><ArrowUpRight :size="18" />
      </a>
      <a href="#contact" @click.prevent="scrollTo('contact')"><span>{{ isVi ? "Liên hệ" : "Contact" }}</span><ArrowUpRight :size="18" /></a>
    </div>

    <section id="home" class="hero-section section-wrap">
      <div class="hero-copy">
        <div class="eyebrow reveal-up"><span class="eyebrow-dot"></span>{{ copy.eyebrow }}</div>
        <h1 class="hero-title reveal-up delay-1" v-html="copy.title.replace(/\n/g, '<br />')"></h1>
        <p class="hero-intro reveal-up delay-2">{{ copy.intro }}</p>
        <div class="hero-actions reveal-up delay-3">
          <a class="button button-primary" href="#work" @click.prevent="scrollTo('work')">
            <span>{{ copy.primary }}</span><ArrowDownRight :size="18" />
          </a>
          <a class="text-link" href="#contact" @click.prevent="scrollTo('contact')">
            <span>{{ copy.secondary }}</span><ArrowUpRight :size="16" />
          </a>
        </div>
      </div>

      <div class="hero-portrait-wrap reveal-up delay-2">
        <div class="portrait-orbit portrait-orbit--one"></div>
        <div class="portrait-orbit portrait-orbit--two"></div>
        <div class="portrait-frame">
          <div class="portrait-topline"><span>13.01 / 2005</span><span>HCMC / VN</span></div>
          <div class="portrait-image"><img :src="avatarImage" alt="Trần Quang Lương" /></div>
          <div class="portrait-overlay"></div>
          <div class="portrait-caption"><span>{{ copy.portraitLabel }}</span><strong>{{ copy.portraitValue }}</strong></div>
        </div>
        <div class="status-card"><span class="status-pulse"></span><span>{{ copy.status }}</span></div>
        <div class="hero-index">01 <span>—</span> 05</div>
      </div>

      <div class="hero-bottomline">
        <div class="hero-note"><Sparkles :size="15" /><span>{{ isVi ? "Thiết kế với sự tò mò và chủ đích." : "Designed with curiosity and intent." }}</span></div>
        <a class="scroll-cue" href="#about" @click.prevent="scrollTo('about')"><span>{{ isVi ? "Cuộn để khám phá" : "Scroll to explore" }}</span><ArrowDownRight :size="17" /></a>
      </div>
    </section>

    <section id="about" class="about-section section-wrap">
      <div class="section-heading-row">
        <div class="section-kicker">{{ copy.aboutKicker }}</div>
        <div class="section-rule"></div>
        <div class="section-count">01 — 05</div>
      </div>
      <div class="about-grid">
        <div class="about-title-col"><h2 class="section-title" v-html="copy.aboutTitle.replace(/\n/g, '<br />')"></h2></div>
        <div class="about-text-col">
          <p class="lead-paragraph">{{ copy.aboutBody }}</p>
          <p>{{ copy.aboutBody2 }}</p>
          <div class="about-location"><MapPin :size="16" /><span>Hóc Môn / Quận 12, HCMC</span><span class="location-dot"></span><span>GMT+7</span></div>
        </div>
      </div>
      <div class="stats-grid">
        <div v-for="stat in copy.stats" :key="stat.value" class="stat-item"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
        <div class="stat-item stat-highlight"><strong>GPA</strong><span>3.0 / FPT Polytechnic</span></div>
      </div>
    </section>

    <section id="capabilities" class="capabilities-section section-wrap section-dark">
      <div class="section-heading-row section-heading-row--dark">
        <div class="section-kicker">{{ copy.capabilitiesKicker }}</div><div class="section-rule"></div><div class="section-count">02 — 05</div>
      </div>
      <div class="capabilities-intro"><h2 class="section-title" v-html="copy.capabilitiesTitle.replace(/\n/g, '<br />')"></h2><p>{{ copy.capabilityLead }}</p></div>
      <div class="capabilities-grid">
        <article v-for="capability in copy.capabilities" :key="capability.number" class="capability-card">
          <div class="capability-top"><span class="capability-number">{{ capability.number }}</span><component :is="capability.icon" :size="22" stroke-width="1.5" /></div>
          <h3>{{ capability.title }}</h3><p>{{ capability.text }}</p>
          <div class="tag-row"><span v-for="tag in capability.tags" :key="tag">{{ tag }}</span></div>
        </article>
      </div>
    </section>

    <section id="work" class="work-section section-wrap">
      <div class="section-heading-row"><div class="section-kicker">{{ copy.workKicker }}</div><div class="section-rule"></div><div class="section-count">03 — 05</div></div>
      <div class="work-heading"><h2 class="section-title" v-html="copy.workTitle.replace(/\n/g, '<br />')"></h2><p>{{ copy.workIntro }}</p></div>
      <div class="project-grid">
        <article v-for="(project, index) in featuredProjects" :key="project.id" :class="['project-card', { 'project-card--wide': index === 0 || index === 3 }]" @click="openProject(project)">
          <div class="project-image-wrap"><img :src="project.image" :alt="project.title" class="project-image" loading="lazy" /><div class="project-image-shade"></div><span class="project-index">0{{ index + 1 }}</span><span class="project-arrow"><ArrowUpRight :size="20" /></span></div>
          <div class="project-meta"><div><span class="project-type">{{ project.tagline }}</span><h3>{{ project.title }}</h3></div><span class="project-year">{{ project.timeline }}</span></div>
          <p class="project-summary">{{ projectOverview(project) }}</p>
          <div class="tag-row tag-row--dark"><span v-for="tech in project.technologies.slice(0, 4)" :key="tech">{{ tech }}</span></div>
          <button class="case-link" type="button" @click.stop="openProject(project)">{{ copy.viewCase }} <ArrowRight :size="16" /></button>
        </article>
      </div>
      <div class="work-footer"><span>{{ isVi ? "Còn nhiều hơn trong kho lưu trữ." : "There is more in the archive." }}</span><a href="https://github.com/LuongNuong131" target="_blank" rel="noreferrer">{{ copy.allProjects }} <ExternalLink :size="15" /></a></div>
    </section>

    <section id="approach" class="approach-section section-wrap">
      <div class="section-heading-row"><div class="section-kicker">{{ copy.approachKicker }}</div><div class="section-rule"></div><div class="section-count">04 — 05</div></div>
      <div class="approach-grid"><div><h2 class="section-title" v-html="copy.approachTitle.replace(/\n/g, '<br />')"></h2></div><div><p class="lead-paragraph">{{ copy.approachBody }}</p><div class="process-list"><div v-for="item in copy.process" :key="item.step" class="process-item"><span class="process-step">{{ item.step }}</span><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div><Check :size="17" /></div></div></div></div>
      <div class="marquee" aria-label="Areas of expertise"><div class="marquee-track"><span>BACKEND ENGINEERING</span><i>✦</i><span>DATA ARCHITECTURE</span><i>✦</i><span>AUTOMATION</span><i>✦</i><span>PRODUCT THINKING</span><i>✦</i><span>BACKEND ENGINEERING</span><i>✦</i><span>DATA ARCHITECTURE</span><i>✦</i></div></div>
    </section>

    <section id="contact" class="contact-section section-wrap section-dark">
      <div class="section-heading-row section-heading-row--dark"><div class="section-kicker">{{ copy.contactKicker }}</div><div class="section-rule"></div><div class="section-count">05 — 05</div></div>
      <div class="contact-grid"><div><h2 class="contact-title" v-html="copy.contactTitle.replace(/\n/g, '<br />')"></h2><p class="contact-body">{{ copy.contactBody }}</p><a class="button button-accent" href="mailto:tranquangluong06@gmail.com"><span>{{ copy.contactCta }}</span><Send :size="17" /></a></div><div class="contact-links"><a v-for="contact in contactLinks" :key="contact.label" :href="contact.href" :target="contact.href.startsWith('http') ? '_blank' : undefined" rel="noreferrer" class="contact-link"><div class="contact-link-icon"><component :is="contact.icon" :size="18" /></div><div><span>{{ contact.label }}</span><strong>{{ contact.value }}</strong></div><ArrowUpRight :size="18" /></a></div></div>
      <footer class="site-footer"><span>© 2026 Trần Quang Lương</span><span>{{ copy.footer }}</span><a href="#home" @click.prevent="scrollTo('home')">Back to top ↑</a></footer>
    </section>
  </main>
</template>
