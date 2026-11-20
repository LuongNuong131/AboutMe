<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, CodeXml } from "@lucide/vue";
import ProjectCover from "../components/ProjectCover.vue";
import { projects, projectGroups } from "../data/projects";
import { publicAsset } from "../data/site";
import { localize, t } from "../i18n";
import "../styles/case.css";

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
  <main v-if="project" id="main-content" class="case-page" :data-project="project.id" tabindex="-1">
    <div class="case-splash">
      <div class="wrap">
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
            <a v-if="project.live" class="button case-live" :href="project.live" target="_blank" rel="noopener">
              {{ project.access === "private" ? t("Trang đăng nhập", "Sign-in page") : t("Mở website", "Visit website") }}
              <ArrowUpRight :size="16" aria-hidden="true" />
            </a>
            <a v-if="project.source" class="button button-quiet" :href="project.source" target="_blank" rel="noopener">
              <CodeXml :size="16" aria-hidden="true" /> {{ t("Mã nguồn", "Source code") }}
            </a>
            <a v-for="link in project.links" :key="link.url" class="button button-quiet" :href="link.url" target="_blank" rel="noopener">
              {{ localize(link.label) }} <ArrowUpRight :size="16" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div v-if="project.cover" class="case-preview">
          <ProjectCover :project="project" sizes="(max-width: 1450px) 84vw, 1150px" :lazy="false" />
        </div>
      </div>
    </div>

    <div class="case-body paper">
      <div class="case-body-grid wrap">
        <aside class="case-aside" :aria-label="t('Tóm tắt dự án', 'Project overview')">
          <dl v-if="project.role" class="case-role">
            <dt>{{ t("Vai trò", "Role") }}</dt>
            <dd>{{ localize(project.role) }}</dd>
          </dl>
          <nav class="case-nav" :aria-label="t('Nội dung dự án', 'Case study contents')">
            <RouterLink
              v-for="section in caseSections"
              :key="section.key"
              :to="{ name: 'project-detail', params: { id: project.id }, hash: '#' + section.key }"
              :aria-current="route.hash === '#' + section.key ? 'location' : undefined"
            >
              {{ localize(section) }} <ArrowDownRight :size="15" aria-hidden="true" />
            </RouterLink>
          </nav>
        </aside>
        <div class="case-story">
          <section v-for="section in caseSections" :id="section.key" :key="section.key" tabindex="-1" class="case-story-row">
            <h2>{{ localize(section) }}</h2>
            <p>{{ localize(project[section.key]) }}</p>
          </section>

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
        </div>
      </div>
    </div>

    <div class="next-project-surface">
      <RouterLink class="next-project wrap" :to="{ name: 'project-detail', params: { id: nextProject.id } }">
        <span><span>{{ t("Dự án kế tiếp", "Next project") }}</span><strong>{{ nextProject.title }}</strong></span>
        <span class="next-project-arrow"><ArrowRight :size="26" aria-hidden="true" /></span>
      </RouterLink>
    </div>
  </main>

  <main v-else id="main-content" class="not-found wrap" tabindex="-1">
    <p class="project-group">404</p>
    <h1>{{ t("Không tìm thấy trang", "Page not found") }}</h1>
    <p>{{ t("Bạn có thể quay lại danh sách để chọn một dự án khác.", "Return to the portfolio to explore the other projects.") }}</p>
    <RouterLink class="button button-primary" :to="{ name: 'home', hash: '#work' }">
      <ArrowLeft :size="17" aria-hidden="true" /> {{ t("Xem các dự án", "Explore projects") }}
    </RouterLink>
  </main>
</template>
