<script setup>
import { nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
import { locale, t } from "./i18n";
import { projects } from "./data/projects";
import { homeDescription, homeTitle, person, projectTitle } from "./data/site";

const route = useRoute();

watch(() => [route.name, route.fullPath], async (_, [previousRoute]) => {
  if (!previousRoute) return;
  await nextTick();
  const target = route.hash && document.getElementById(route.hash.slice(1));
  (target || document.getElementById("main-content"))?.focus({ preventScroll: true });
});

watch(() => [route.name, route.params.id, locale.value], () => {
  const project = projects.find(({ id }) => id === route.params.id);
  let description = t(homeDescription, "Portfolio of Trần Quang Lương, Full-Stack Developer in Ho Chi Minh City. Explore AF_Booking, FCDBB, LuNu Music and more.");
  if (project) {
    document.title = projectTitle(project);
    description = project.summary[locale.value];
  } else if (route.name && route.name !== "home") {
    document.title = `${t("Không tìm thấy trang", "Page not found")} | ${person.name}`;
  } else {
    document.title = homeTitle;
  }
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
}, { immediate: true });
</script>

<template>
  <a class="skip-link" href="#main-content">{{ t("Đến nội dung", "Skip to content") }}</a>
  <SiteHeader />
  <RouterView />
</template>
