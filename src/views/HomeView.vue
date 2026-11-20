<script setup>
import { computed, ref } from "vue";
import { ArrowUp, ArrowUpRight, Cable, Database, GitBranch, PanelsTopLeft } from "@lucide/vue";
import HeroSection from "../components/HeroSection.vue";
import FeaturedWork from "../components/FeaturedWork.vue";
import { projects, projectGroups } from "../data/projects";
import { person } from "../data/site";
import { localize, t } from "../i18n";
import "../styles/home.css";

const archive = projects.filter((project) => !project.featured);
const archiveGroups = Object.keys(projectGroups).filter((group) => archive.some((project) => project.group === group));
const activeGroup = ref("all");
const filtered = computed(() => activeGroup.value === "all"
  ? archive
  : archive.filter((project) => project.group === activeGroup.value));

const disciplines = [
  { name: { vi: "Giao diện ứng dụng", en: "Product interfaces" }, icon: PanelsTopLeft, tools: "Vue 3 · TypeScript · Pinia" },
  { name: { vi: "Backend & dữ liệu", en: "Backend & data" }, icon: Database, tools: "FastAPI · NestJS · Spring Boot · SQL" },
  { name: { vi: "Hệ thống realtime", en: "Real-time systems" }, icon: Cable, tools: "WebSocket · Docker" },
];
</script>

<template>
  <main id="main-content" tabindex="-1">
    <HeroSection />
    <FeaturedWork />

    <div class="paper">
      <section id="archive" class="archive wrap" aria-labelledby="archive-title" tabindex="-1">
        <div class="section-heading">
          <h2 id="archive-title">{{ t("Các dự án khác", "More projects") }}</h2>
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
              <span class="archive-arrow"><ArrowUpRight :size="18" aria-hidden="true" /></span>
            </RouterLink>
          </li>
        </ul>
      </section>

      <section id="about" class="about wrap" aria-labelledby="about-title" tabindex="-1">
        <div class="about-copy">
          <h2 id="about-title">{{ t("Về tôi", "About me") }}</h2>
          <p class="about-lead">{{ t(
            "Tôi thích những bài toán có cả nghiệp vụ, dữ liệu và con người.",
            "I like problems that bring together workflows, data and people.",
          ) }}</p>
          <p class="about-bio">{{ t(
            "Tôi học Phát triển phần mềm tại FPT Polytechnic. Khi làm một ứng dụng, tôi tìm hiểu quy trình trước, xác định dữ liệu cần lưu rồi kiểm tra thiết kế bằng các tình huống thực tế.",
            "I studied Software Development at FPT Polytechnic. When building an app, I start with the workflow, identify what needs to be stored and test the design against real scenarios.",
          ) }}</p>
        </div>
        <dl class="disciplines">
          <div v-for="discipline in disciplines" :key="discipline.tools">
            <dt>
              <span class="discipline-icon"><component :is="discipline.icon" :size="20" aria-hidden="true" /></span>
              {{ localize(discipline.name) }}
            </dt>
            <dd>{{ discipline.tools }}</dd>
          </div>
        </dl>
      </section>
    </div>

    <section id="contact" class="contact" aria-labelledby="contact-title" tabindex="-1">
      <div class="wrap">
        <div class="contact-main">
          <div>
            <h2 id="contact-title">{{ t("Cùng làm việc nhé.", "Let’s work together.") }}</h2>
            <p>{{ t("Bạn có dự án hoặc cơ hội phát triển phần mềm muốn trao đổi?", "Have a project or a software development opportunity in mind?") }}</p>
          </div>
          <a class="contact-email" :href="'mailto:' + person.email">
            <span>{{ person.email }}</span><span class="contact-email-icon"><ArrowUpRight :size="21" aria-hidden="true" /></span>
          </a>
        </div>
        <footer class="footer">
          <span>© {{ new Date().getFullYear() }} {{ person.name }}</span>
          <a :href="person.github" target="_blank" rel="noopener"><GitBranch :size="14" aria-hidden="true" /> GitHub</a>
          <RouterLink :to="{ name: 'home', hash: '#home' }">{{ t("Lên đầu trang", "Back to top") }} <ArrowUp :size="15" aria-hidden="true" /></RouterLink>
        </footer>
      </div>
    </section>
  </main>
</template>
