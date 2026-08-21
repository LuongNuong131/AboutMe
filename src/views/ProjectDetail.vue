<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Github, Layers3 } from "lucide-vue-next";
import { projects } from "../data/projects";

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const isVi = computed(() => locale.value === "vi");
const project = computed(() => projects.find((item) => item.id === route.params.id));
const projectIndex = computed(() => Math.max(1, projects.findIndex((item) => item.id === route.params.id) + 1));
const backLabel = computed(() => isVi.value ? "Quay lại work archive" : "Back to work archive");
const roleLabel = computed(() => isVi.value ? "Vai trò" : "Role");
const logicTitle = computed(() => isVi.value ? "Luồng nghiệp vụ chủ lực" : "Core business flows");
const architectureTitle = computed(() => isVi.value ? "Kiến trúc hạ tầng" : "System architecture");
const challengeTitle = computed(() => isVi.value ? "Bài toán đáng nhớ" : "The challenge");
const solutionTitle = computed(() => isVi.value ? "Cách tôi xử lý" : "The approach");
const goBack = () => router.push({ name: "home" });
</script>

<template>
  <main v-if="project" class="case-study-page">
    <header class="case-study-header">
      <button type="button" class="case-back" @click="goBack"><ArrowLeft :size="17" /><span>{{ backLabel }}</span></button>
      <span class="case-brand">LQ / CASE STUDY</span>
      <span class="case-count">0{{ projectIndex }} / 06</span>
    </header>

    <section class="case-hero">
      <img :src="project.image" :alt="project.title" class="case-hero-image" />
      <div class="case-hero-overlay"></div>
      <div class="case-hero-top"><span>{{ project.timeline }}</span><span>{{ project.tagline }}</span></div>
      <div class="case-hero-content"><span class="case-eyebrow">Selected work / {{ projectIndex.toString().padStart(2, '0') }}</span><h1>{{ project.title }}</h1><p>{{ project.tagline }}</p></div>
      <div class="case-hero-bottom"><span>Trần Quang Lương</span><span>Backend · Systems · Product</span></div>
    </section>

    <section class="case-intro case-gutter">
      <div class="case-section-label"><span>01</span><i></i><span>{{ isVi ? "Tổng quan" : "Overview" }}</span></div>
      <div class="case-intro-grid"><h2>{{ project.overview }}</h2><div class="case-intro-side"><div><span>{{ roleLabel }}</span><strong>{{ project.role[locale] || project.role.vi }}</strong></div><div><span>{{ isVi ? "Thời gian" : "Timeline" }}</span><strong>{{ project.timeline }}</strong></div><a v-if="project.links?.[0]?.url && project.links[0].url !== '#'" :href="project.links[0].url" target="_blank" rel="noreferrer">{{ project.links[0].label }} <ArrowUpRight :size="16" /></a></div></div>
    </section>

    <section class="case-dark-section case-gutter">
      <div class="case-section-label case-section-label--light"><span>02</span><i></i><span>{{ logicTitle }}</span></div>
      <div class="logic-grid"><article v-for="(item, index) in project.business_logic" :key="item" class="logic-item"><span>0{{ index + 1 }}</span><p>{{ item }}</p><Check :size="17" /></article></div>
    </section>

    <section class="case-architecture case-gutter">
      <div class="case-section-label"><span>03</span><i></i><span>{{ architectureTitle }}</span></div>
      <div class="architecture-grid"><div><h2>{{ project.architecture }}</h2><div class="tech-stack"><span v-for="tech in project.technologies" :key="tech">{{ tech }}</span></div></div><div class="architecture-art"><Layers3 :size="45" stroke-width="1" /><span>ARCH / {{ projectIndex.toString().padStart(2, '0') }}</span></div></div>
    </section>

    <section class="case-challenge case-gutter"><div class="challenge-card"><span>04 / {{ challengeTitle }}</span><h2>{{ project.challenges }}</h2></div><div class="solution-card"><span>05 / {{ solutionTitle }}</span><h2>{{ project.solutions }}</h2></div></section>

    <footer class="case-footer case-gutter"><button type="button" class="case-back" @click="goBack"><ArrowLeft :size="17" /><span>{{ backLabel }}</span></button><a v-if="project.links?.[0]?.url && project.links[0].url !== '#'" :href="project.links[0].url" target="_blank" rel="noreferrer">Open repository <Github :size="16" /></a><span>© 2026 / LQ</span></footer>
  </main>
  <main v-else class="case-not-found"><h1>Project not found.</h1><button type="button" @click="goBack">Back home <ExternalLink :size="16" /></button></main>
</template>
