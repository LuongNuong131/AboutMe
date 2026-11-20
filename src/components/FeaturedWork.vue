<script>
let lastFeaturedId;
</script>

<script setup>
import { ref } from "vue";
import { ArrowDownRight, ArrowUpRight, AudioLines, BriefcaseBusiness, Goal } from "@lucide/vue";
import ProjectCover from "./ProjectCover.vue";
import { projects, projectGroups } from "../data/projects";
import { publicAsset } from "../data/site";
import { localize, t } from "../i18n";

const treatments = {
  "af-booking": { icon: BriefcaseBusiness, detail: "af-booking-add" },
  fcdbb: { icon: Goal, background: "football-pitch", detail: "fcdbb-mobile" },
  "lunu-music": { icon: AudioLines, background: "vinyl-grooves" },
};

const featured = projects.filter((project) => project.featured).map((project) => {
  const treatment = treatments[project.id];
  return {
    ...project,
    icon: treatment?.icon,
    backdrop: treatment?.background,
    detail: project.gallery?.find((image) => image.file === treatment?.detail),
  };
});
const selectedId = ref(lastFeaturedId ?? featured[0].id);

function select(index) {
  selectedId.value = featured[index].id;
  lastFeaturedId = selectedId.value;
}

function handleTabKey(event, index) {
  let nextIndex;
  switch (event.key) {
    case "ArrowLeft":
      nextIndex = (index - 1 + featured.length) % featured.length;
      break;
    case "ArrowRight":
      nextIndex = (index + 1) % featured.length;
      break;
    case "Home":
      nextIndex = 0;
      break;
    case "End":
      nextIndex = featured.length - 1;
      break;
    default:
      return;
  }
  event.preventDefault();
  select(nextIndex);
  document.getElementById(`showcase-tab-${selectedId.value}`)?.focus();
}
</script>

<template>
  <section id="work" class="work wrap" aria-labelledby="work-title" tabindex="-1">
    <div class="section-heading">
      <h2 id="work-title">{{ t("Dự án tiêu biểu", "Selected work") }}</h2>
      <RouterLink class="section-jump" :to="{ name: 'home', hash: '#archive' }">
        {{ t("Xem thêm dự án", "More projects") }} <ArrowDownRight :size="18" aria-hidden="true" />
      </RouterLink>
    </div>

    <div class="showcase">
      <div class="showcase-tabs" role="tablist" aria-labelledby="work-title">
        <button
          v-for="(project, index) in featured"
          :id="'showcase-tab-' + project.id"
          :key="project.id"
          type="button"
          role="tab"
          class="showcase-tab"
          :data-project="project.id"
          :aria-controls="'showcase-panel-' + project.id"
          :aria-selected="selectedId === project.id"
          :tabindex="selectedId === project.id ? 0 : -1"
          @click="select(index)"
          @keydown="handleTabKey($event, index)"
        >
          <component :is="project.icon" :size="18" aria-hidden="true" />
          {{ project.title }}
        </button>
      </div>

      <section
        v-for="project in featured"
        v-show="selectedId === project.id"
        :id="'showcase-panel-' + project.id"
        :key="project.id"
        role="tabpanel"
        class="showcase-panel"
        :data-project="project.id"
        :aria-labelledby="'showcase-tab-' + project.id"
        tabindex="0"
      >
        <div class="showcase-info">
          <p class="project-group">{{ localize(projectGroups[project.group]) }}</p>
          <h3>{{ localize(project.name) }}</h3>
          <p class="showcase-summary">{{ localize(project.summary) }}</p>
          <ul class="tech-list" :aria-label="t('Công nghệ', 'Technologies')">
            <li v-for="technology in project.technologies.slice(0, 3)" :key="technology">{{ technology }}</li>
          </ul>
          <RouterLink
            class="button showcase-link"
            :to="{ name: 'project-detail', params: { id: project.id } }"
            :aria-label="t('Xem dự án ', 'View project ') + project.title"
          >
            {{ t("Xem dự án", "View project") }} <ArrowUpRight :size="17" aria-hidden="true" />
          </RouterLink>
        </div>

        <div class="showcase-visual">
          <img
            v-if="project.backdrop"
            class="showcase-backdrop"
            :src="publicAsset('art/' + project.backdrop + '.webp')"
            width="1060"
            height="707"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <ProjectCover :project="project" sizes="(max-width: 760px) 82vw, (max-width: 1480px) 48vw, 700px" />
          <div v-if="project.detail" class="showcase-detail">
            <img
              :src="publicAsset('projects/' + project.detail.file + '.webp')"
              :alt="localize(project.detail.alt)"
              :width="project.detail.width"
              :height="project.detail.height"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
