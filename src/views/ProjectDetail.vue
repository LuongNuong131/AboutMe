<script setup>
import { useRoute, useRouter } from "vue-router";
import { projects } from "../data/projects";
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useI18n } from "vue-i18n";

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const router = useRouter();
const parallaxImg = ref(null);
const { locale } = useI18n();

const project = computed(() => projects.find((p) => p.id === route.params.id));

onMounted(() => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    if (parallaxImg.value) {
      gsap.to(parallaxImg.value, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxImg.value.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Hiệu ứng Cinematic Reveal khi Scroll
    gsap.utils.toArray(".reveal-section").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, 100);
});
</script>

<template>
  <div
    v-if="project"
    class="min-h-screen text-dark pb-32 bg-background relative overflow-hidden"
  >
    <div
      class="relative w-full h-[55vh] md:h-[70vh] overflow-hidden mb-16 shadow-sm"
    >
      <img
        ref="parallaxImg"
        :src="project.image"
        class="absolute inset-0 w-full h-[130%] object-cover object-center -top-[15%] filter brightness-[0.75]"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"
      ></div>

      <div class="absolute top-10 left-6 md:left-20 z-10">
        <button
          @click="router.push('/#projects')"
          class="cursor-interactive group text-sm font-mono text-dark hover:text-indigo-600 flex items-center gap-3 transition-colors bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm"
          data-cursor="BACK"
        >
          <span
            class="transform group-hover:-translate-x-1 transition-transform font-bold"
            >←</span
          >
          System Overview
        </button>
      </div>
    </div>

    <main
      class="px-6 md:px-20 max-w-5xl mx-auto relative z-10 -mt-32 md:-mt-48"
    >
      <header
        class="reveal-section mb-16 bg-white/90 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white"
      >
        <div class="flex items-center gap-4 mb-6">
          <span
            class="px-3 py-1 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-lg text-xs font-mono font-bold tracking-widest uppercase"
          >
            {{ project.timeline }}
          </span>
        </div>
        <h1
          class="text-5xl md:text-7xl font-bold text-dark mb-6 tracking-tighter"
        >
          {{ project.title }}
        </h1>
        <p
          class="text-2xl text-muted mb-10 tracking-tight font-medium max-w-3xl"
        >
          {{ project.tagline }}
        </p>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8"
        >
          <div class="md:col-span-1">
            <span
              class="text-muted block mb-2 text-xs font-mono uppercase tracking-widest font-bold"
              >// Vai trò</span
            >
            <span class="text-dark font-bold text-base leading-snug block">{{
              project.role[locale] || project.role
            }}</span>
          </div>
          <div class="md:col-span-2">
            <span
              class="text-muted block mb-3 text-xs font-mono uppercase tracking-widest font-bold"
              >// Repository Lõi</span
            >
            <div class="flex flex-wrap gap-2.5">
              <template v-for="link in project.links" :key="link.label">
                <a
                  v-if="link.url !== '#'"
                  :href="link.url"
                  target="_blank"
                  class="cursor-interactive inline-flex items-center text-sm font-mono font-semibold px-4 py-2.5 bg-dark text-white rounded-xl shadow-sm transition-transform hover:-translate-y-1"
                  data-cursor="OPEN"
                >
                  {{ link.label }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </header>

      <div class="space-y-24 leading-relaxed text-lg">
        <section class="reveal-section">
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-5 py-2.5 bg-white text-dark rounded-xl text-sm font-mono font-bold select-none border border-gray-200 shadow-sm"
            >
              {{ tech }}
            </span>
          </div>
        </section>

        <section class="reveal-section">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold font-mono text-sm"
            >
              02
            </div>
            <h2 class="text-3xl font-bold text-dark tracking-tight">
              Luồng Nghiệp Vụ Chủ Lực
            </h2>
          </div>
          <div class="pl-12 space-y-5">
            <div
              v-for="(logic, idx) in project.business_logic"
              :key="idx"
              class="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex items-start gap-4">
                <span class="text-blue-500 mt-1.5 flex-shrink-0 text-xs"
                  >●</span
                >
                <p class="text-dark font-medium leading-relaxed font-sans">
                  {{ logic }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="reveal-section">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold font-mono text-sm"
            >
              03
            </div>
            <h2 class="text-3xl font-bold text-dark tracking-tight">
              Kiến Trúc Hạ Tầng
            </h2>
          </div>
          <div class="pl-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <p
              class="text-dark p-8 bg-white border border-gray-200 rounded-3xl shadow-sm font-medium leading-loose font-sans"
            >
              {{ project.architecture }}
            </p>
            <div
              class="terminal-glow bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            >
              <div class="flex gap-2 mb-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div
                class="font-mono text-[10px] md:text-[11px] text-green-400 leading-relaxed opacity-90"
              >
                <p>> System Initializing...</p>
                <p>> Loading core modules: [OK]</p>
                <p>> Connecting to DB at port 3306... [CONNECTED]</p>
                <p class="text-blue-400">
                  > Executing architecture protocol...
                </p>
                <p class="mt-2">
                  {{ project.architecture.substring(0, 80) }}...
                </p>
                <p class="mt-2 text-yellow-400">
                  > Applying Pessimistic Locking... [LOCKED]
                </p>
                <p>
                  > Awaiting user requests<span class="cursor-blink">_</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
