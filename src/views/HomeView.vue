<script setup>
import { computed, ref } from "vue";
import { ArrowDown, ArrowUp, ArrowUpRight, GitBranch, MapPin } from "@lucide/vue";
import ProjectCover from "../components/ProjectCover.vue";
import portrait from "../assets/AnhThe.webp";
import { projects, projectGroups } from "../data/projects";
import { person } from "../data/site";
import { localize, t } from "../i18n";

const featured = projects.filter((project) => project.featured);
const archive = projects.filter((project) => !project.featured);
const archiveGroups = Object.keys(projectGroups).filter((group) => archive.some((project) => project.group === group));
const activeGroup = ref("all");
const filtered = computed(() => activeGroup.value === "all"
  ? archive
  : archive.filter((project) => project.group === activeGroup.value));

const disciplines = [
  { name: { vi: "Giao diện ứng dụng", en: "Product interfaces" }, tools: "Vue 3 · TypeScript · Pinia" },
  { name: { vi: "Backend & dữ liệu", en: "Backend & data" }, tools: "FastAPI · NestJS · Spring Boot · SQL" },
  { name: { vi: "Hệ thống realtime", en: "Real-time systems" }, tools: "WebSocket · Docker" },
];
</script>

<template>
  <main id="main-content" tabindex="-1">
    <section id="home" class="hero wrap" aria-labelledby="hero-title" tabindex="-1">
      <div class="hero-copy">
        <div class="hero-role"><span aria-hidden="true"></span>Full-Stack Developer</div>
        <h1 id="hero-title">Trần Quang<br /><span>Lương<span class="name-period" aria-hidden="true">.</span></span></h1>
        <p class="hero-description">{{ t(
          "Tôi xây dựng ứng dụng web, từ giao diện người dùng đến hệ thống dữ liệu phía sau.",
          "I build web applications, from the interface people use to the systems that power it.",
        ) }}</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="{ name: 'home', hash: '#work' }">
            {{ t("Khám phá dự án", "Explore my work") }} <ArrowDown :size="17" aria-hidden="true" />
          </RouterLink>
          <a class="text-link" :href="person.github" target="_blank" rel="noopener">
            <GitBranch :size="16" aria-hidden="true" /> GitHub <ArrowUpRight :size="14" aria-hidden="true" />
          </a>
        </div>
      </div>

      <figure class="portrait">
        <div class="portrait-media">
          <img :src="portrait" :alt="t('Chân dung Trần Quang Lương', 'Portrait of Trần Quang Lương')" width="1100" height="1473" fetchpriority="high" />
        </div>
        <figcaption>
          <MapPin :size="15" aria-hidden="true" />
          {{ t("TP. Hồ Chí Minh, Việt Nam", "Ho Chi Minh City, Vietnam") }}
        </figcaption>
      </figure>
    </section>

    <section id="work" class="work wrap" aria-labelledby="work-title" tabindex="-1">
      <div class="section-heading">
        <h2 id="work-title">{{ t("Dự án tiêu biểu", "Selected work") }}</h2>
        <p>{{ t("Từ vận hành booking đến quản lý đội bóng và thư viện nhạc cá nhân.", "From booking operations to football club management and a personal music library.") }}</p>
      </div>

      <div class="featured-grid">
        <article
          v-for="(project, index) in featured"
          :key="project.id"
          class="featured-project"
          :class="{ 'featured-project-lead': index === 0 }"
        >
          <ProjectCover :project="project" :sizes="index === 0
            ? '(max-width: 560px) 90vw, (max-width: 860px) 84vw, (max-width: 1370px) 59vw, 810px'
            : '(max-width: 560px) 90vw, (max-width: 860px) 84vw, (max-width: 1370px) 43vw, 610px'" />
          <div class="featured-content">
            <p class="project-group">{{ localize(projectGroups[project.group]) }}</p>
            <h3>{{ project.title }}</h3>
            <p class="featured-summary">{{ localize(project.summary) }}</p>
            <ul class="tech-list" :aria-label="t('Công nghệ', 'Technologies')">
              <li v-for="technology in project.technologies.slice(0, 3)" :key="technology">{{ technology }}</li>
            </ul>
            <RouterLink
              class="project-link"
              :to="{ name: 'project-detail', params: { id: project.id } }"
              :aria-label="t('Xem dự án ', 'View project ') + project.title"
            >
              {{ t("Xem dự án", "View project") }} <span><ArrowUpRight :size="19" aria-hidden="true" /></span>
            </RouterLink>
          </div>
        </article>
      </div>

      <div class="archive">
        <div class="archive-heading">
          <h3>{{ t("Các dự án khác", "More projects") }}</h3>
          <div class="filters" role="group" :aria-label="t('Lọc dự án', 'Filter projects')">
            <button type="button" :aria-pressed="activeGroup === 'all'" @click="activeGroup = 'all'">{{ t("Tất cả", "All") }}</button>
            <button
              v-for="group in archiveGroups"
              :key="group"
              type="button"
              :aria-pressed="activeGroup === group"
              @click="activeGroup = group"
            >{{ localize(projectGroups[group]) }}</button>
          </div>
        </div>
        <p class="sr-only" role="status">{{ filtered.length }} {{ t("dự án", "projects found") }}</p>
        <ul class="archive-list">
          <li v-for="project in filtered" :key="project.id">
            <RouterLink :to="{ name: 'project-detail', params: { id: project.id } }" class="archive-link">
              <span class="archive-title">{{ project.title }}</span>
              <span class="archive-name">{{ localize(project.name) }}</span>
              <span class="archive-stack">{{ project.technologies.slice(0, 2).join(' / ') }}</span>
              <ArrowUpRight :size="20" aria-hidden="true" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

    <section id="about" class="about wrap" aria-labelledby="about-title" tabindex="-1">
      <h2 id="about-title">{{ t("Về tôi", "About me") }}</h2>
      <div class="about-content">
        <p class="about-lead">{{ t(
          "Tôi thích những bài toán có cả nghiệp vụ, dữ liệu và con người.",
          "I like problems that bring together workflows, data and people.",
        ) }}</p>
        <p>{{ t(
          "Tôi học Phát triển phần mềm tại FPT Polytechnic. Khi xây một ứng dụng, tôi bắt đầu từ quy trình làm việc, xác định dữ liệu cần lưu và dùng các tình huống thực tế để kiểm tra lại thiết kế.",
          "I studied Software Development at FPT Polytechnic. When building an app, I start with the workflow, identify what needs to be stored and test the design against real scenarios.",
        ) }}</p>
        <dl class="disciplines">
          <div v-for="discipline in disciplines" :key="discipline.tools">
            <dt>{{ localize(discipline.name) }}</dt>
            <dd>{{ discipline.tools }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section id="contact" class="contact" aria-labelledby="contact-title" tabindex="-1">
      <div class="contact-inner wrap">
        <div class="contact-main">
          <div>
            <h2 id="contact-title">{{ t("Cùng làm việc nhé.", "Let’s work together.") }}</h2>
            <p>{{ t("Bạn có dự án hoặc cơ hội phát triển phần mềm muốn trao đổi?", "Have a project or a software development opportunity in mind?") }}</p>
          </div>
          <a class="button contact-button" :href="'mailto:' + person.email">
            {{ t("Gửi email", "Send an email") }} <ArrowUpRight :size="18" aria-hidden="true" />
          </a>
        </div>
        <footer class="footer">
          <span>© {{ new Date().getFullYear() }} {{ person.name }}</span>
          <a :href="person.github" target="_blank" rel="noopener">GitHub <ArrowUpRight :size="15" aria-hidden="true" /></a>
          <RouterLink :to="{ name: 'home', hash: '#home' }">{{ t("Lên đầu trang", "Back to top") }} <ArrowUp :size="15" aria-hidden="true" /></RouterLink>
        </footer>
      </div>
    </section>
  </main>
</template>
