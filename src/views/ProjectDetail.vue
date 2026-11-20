<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, CodeXml } from "@lucide/vue";
import ProjectCover from "../components/ProjectCover.vue";
import { projects, projectGroups } from "../data/projects";
import { publicAsset } from "../data/site";
import { localize, t } from "../i18n";

const route = useRoute();
const projectIndex = computed(() => projects.findIndex(({ id }) => id === route.params.id));
const project = computed(() => projects[projectIndex.value]);
const nextProject = computed(() => projects[(projectIndex.value + 1) % projects.length]);

const caseSections = [
  { key: "challenge", vi: "Bài toán", en: "The challenge" },
  { key: "approach", vi: "Cách triển khai", en: "The approach" },
  { key: "architecture", vi: "Kiến trúc", en: "Architecture" },
];
</script>

<template>
  <main v-if="project" id="main-content" class="case-page wrap" tabindex="-1">
    <RouterLink class="back-link" :to="{ name: 'home', hash: '#work' }">
      <ArrowLeft :size="17" aria-hidden="true" /> {{ t("Tất cả dự án", "All projects") }}
    </RouterLink>

    <header class="case-heading">
      <div>
        <p class="project-group">{{ localize(projectGroups[project.group]) }}</p>
        <h1>{{ project.title }}</h1>
        <p class="case-name">{{ localize(project.name) }}</p>
      </div>
      <p class="case-summary">{{ localize(project.summary) }}</p>
    </header>

    <div class="case-meta">
      <ul class="tech-list" :aria-label="t('Công nghệ', 'Technologies')">
        <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
      </ul>
      <div v-if="project.live || project.source || project.links" class="case-links">
        <a v-if="project.live" :href="project.live" target="_blank" rel="noopener">
          {{ project.access === "private" ? t("Trang đăng nhập", "Sign-in page") : t("Mở website", "Visit website") }}
          <ArrowUpRight :size="16" aria-hidden="true" />
        </a>
        <a v-if="project.source" :href="project.source" target="_blank" rel="noopener">
          <CodeXml :size="16" aria-hidden="true" /> {{ t("Mã nguồn", "Source code") }}
        </a>
        <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener">
          {{ localize(link.label) }} <ArrowUpRight :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>

    <ProjectCover v-if="project.cover" :project="project" sizes="(max-width: 1370px) 90vw, 1160px" :lazy="false" />

    <div class="case-story">
      <section v-if="project.role" class="case-story-row">
        <h2>{{ t("Vai trò", "Role") }}</h2>
        <p>{{ localize(project.role) }}</p>
      </section>
      <section v-for="section in caseSections" :key="section.key" class="case-story-row">
        <h2>{{ t(section.vi, section.en) }}</h2>
        <p>{{ localize(project[section.key]) }}</p>
      </section>
    </div>

    <figure v-for="image in project.gallery" :key="image.file" class="case-gallery" :class="{ 'case-gallery-mobile': image.width < image.height }">
      <img
        :src="publicAsset('projects/' + image.file + '.webp')"
        :width="image.width"
        :height="image.height"
        :alt="localize(image.alt)"
        loading="lazy"
        decoding="async"
      />
      <figcaption>{{ localize(image.alt) }}</figcaption>
    </figure>

    <RouterLink class="next-project" :to="{ name: 'project-detail', params: { id: nextProject.id } }">
      <span><span>{{ t("Dự án kế tiếp", "Next project") }}</span><strong>{{ nextProject.title }}</strong></span>
      <ArrowRight :size="32" aria-hidden="true" />
    </RouterLink>
  </main>

  <main v-else id="main-content" class="case-page not-found wrap" tabindex="-1">
    <p class="project-group">404</p>
    <h1>{{ t("Không tìm thấy trang", "Page not found") }}</h1>
    <p>{{ t("Bạn có thể quay lại danh sách để chọn một dự án khác.", "Return to the portfolio to explore the other projects.") }}</p>
    <RouterLink class="button button-primary" :to="{ name: 'home', hash: '#work' }">
      <ArrowLeft :size="17" aria-hidden="true" /> {{ t("Xem các dự án", "Explore projects") }}
    </RouterLink>
  </main>
</template>
