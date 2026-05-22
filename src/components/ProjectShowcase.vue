<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { projects } from "../data/projects";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useI18n } from "vue-i18n";

const router = useRouter();
const floatImgWrapper = ref(null);
const floatImg = ref(null);
const activeProject = ref(null);
const { locale } = useI18n();

onMounted(() => {
  const xTo = gsap.quickTo(floatImgWrapper.value, "x", {
    duration: 0.6,
    ease: "power4.out",
  });
  const yTo = gsap.quickTo(floatImgWrapper.value, "y", {
    duration: 0.6,
    ease: "power4.out",
  });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  gsap.utils.toArray(".project-item").forEach((item) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: "top 85%" },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });
});

const handleMouseEnter = (project) => {
  if (window.innerWidth < 768) return;
  activeProject.value = project;

  // Kích hoạt class glitch và làm nổi ảnh
  floatImgWrapper.value.classList.add("float-img-active");
  gsap.to(floatImgWrapper.value, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.2)",
  });
};

const handleMouseLeaveList = () => {
  if (window.innerWidth < 768) return;

  floatImgWrapper.value.classList.remove("float-img-active");
  gsap.to(floatImgWrapper.value, {
    scale: 0.85,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
  });
};

const handleMouseMove = (e, targetId) => {
  const el = document.getElementById(targetId);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Cập nhật tọa độ cho Spotlight Effect
  el.style.setProperty("--x", `${x}px`);
  el.style.setProperty("--y", `${y}px`);

  // Xoay thẻ 3D Tilt Effect
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  gsap.to(el, {
    rotateX,
    rotateY,
    transformPerspective: 1000,
    duration: 0.4,
    ease: "power2.out",
  });
};

const handleMouseLeaveCard = (targetId) => {
  const el = document.getElementById(targetId);
  if (!el) return;
  gsap.to(el, {
    rotateX: 0,
    rotateY: 0,
    duration: 0.7,
    ease: "elastic.out(1, 0.4)",
  });
};
</script>

<template>
  <section
    id="projects"
    class="py-32 md:py-48 border-t border-gray-200 dark:border-slate-800 relative z-10"
  >
    <div
      class="px-8 md:px-14 max-w-7xl mx-auto mb-20 md:mb-32 flex justify-between items-end"
    >
      <h2
        class="text-4xl md:text-6xl font-display font-bold text-dark dark:text-white tracking-tight"
      >
        {{ $t("project.title") }}.
      </h2>
      <span
        class="font-mono text-xs uppercase tracking-[0.2em] text-muted hidden md:block"
      >
        {{ $t("project.subtitle") }}
      </span>
    </div>

    <ul
      class="hidden md:block w-full border-b border-gray-200 dark:border-slate-800 relative bg-background/30 dark:bg-slate-950/30 backdrop-blur-sm"
      @mouseleave="handleMouseLeaveList"
    >
      <li
        v-for="(project, index) in projects"
        :key="project.id"
        :id="'proj-card-' + index"
        class="project-item spotlight-card group border-t border-gray-200 dark:border-slate-800 px-8 md:px-14 py-12 flex justify-between items-center cursor-pointer transition-colors duration-500 hover:bg-white dark:hover:bg-slate-900"
        @mouseenter="handleMouseEnter(project)"
        @mousemove="(e) => handleMouseMove(e, 'proj-card-' + index)"
        @mouseleave="handleMouseLeaveCard('proj-card-' + index)"
        @click="router.push(`/project/${project.id}`)"
      >
        <div
          class="flex items-center gap-14 relative z-20 pointer-events-none max-w-7xl mx-auto w-full"
        >
          <span class="font-mono text-[13px] text-muted font-medium w-12">{{
            project.timeline.substring(0, 4)
          }}</span>

          <h3
            class="flex-1 relative text-5xl lg:text-7xl font-display font-bold tracking-tight uppercase group-hover:translate-x-8 transition-transform duration-500 text-transparent"
            style="-webkit-text-stroke: 1px currentColor"
          >
            <span
              class="absolute top-0 left-0 w-full flex text-dark dark:text-white"
              style="-webkit-text-stroke: 0px"
            >
              <span
                v-for="(char, i) in project.title.split('')"
                :key="i"
                class="char-hover-effect"
                :style="{ animationDelay: `${i * 0.05}s` }"
                v-html="char === ' ' ? '&nbsp;' : char"
              ></span>
            </span>
            {{ project.title }}
          </h3>

          <div
            class="text-right relative z-20 pointer-events-none group-hover:-translate-x-6 transition-transform duration-500 ease-out"
          >
            <span
              class="block font-mono text-[12px] tracking-[0.15em] uppercase font-bold text-indigo-600 dark:text-indigo-400 mb-3"
              >{{ project.role[locale] }}</span
            >
            <span class="block text-muted text-[13px] tracking-wide">{{
              project.technologies.slice(0, 3).join(" • ")
            }}</span>
          </div>
        </div>
      </li>
    </ul>

    <div
      ref="floatImgWrapper"
      class="fixed top-0 left-0 w-[400px] aspect-[4/3] pointer-events-none z-[100] opacity-0 scale-90 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(99,102,241,0.3)] hidden md:block border border-white/20 dark:border-white/10 bg-dark"
    >
      <div
        v-if="activeProject"
        class="w-full h-full glitch-image"
        :style="{ backgroundImage: `url(${activeProject.image})` }"
      ></div>
    </div>
  </section>
</template>
