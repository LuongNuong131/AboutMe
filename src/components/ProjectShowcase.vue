<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { projects } from "../data/projects";
import gsap from "gsap";

const router = useRouter();
const floatImg = ref(null);
const activeProject = ref(null);

onMounted(() => {
  // GSAP quickTo cho ảnh trôi
  const xTo = gsap.quickTo(floatImg.value, "x", {
    duration: 0.6,
    ease: "power4.out",
  });
  const yTo = gsap.quickTo(floatImg.value, "y", {
    duration: 0.6,
    ease: "power4.out",
  });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
});

const handleMouseEnter = (project) => {
  if (window.innerWidth < 768) return;
  activeProject.value = project;
  gsap.to(floatImg.value, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "back.out(1.2)",
  });
};

const handleMouseLeave = () => {
  if (window.innerWidth < 768) return;
  gsap.to(floatImg.value, {
    scale: 0.8,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
  });
};
</script>

<template>
  <section
    id="projects"
    class="py-24 md:py-40 border-t border-gray-200 relative z-10"
  >
    <div class="px-6 md:px-12 mb-16 md:mb-24 flex justify-between items-end">
      <h2 class="text-3xl md:text-5xl font-bold text-dark tracking-tighter">
        Case Studies.
      </h2>
      <span
        class="font-mono text-xs uppercase tracking-widest text-muted hidden md:block"
        >(04) Thực Chiến</span
      >
    </div>

    <div class="md:hidden px-6 flex flex-col gap-12">
      <div
        v-for="project in projects"
        :key="'mob-' + project.id"
        @click="router.push(`/project/${project.id}`)"
        class="block cursor-pointer"
      >
        <div
          class="w-full aspect-video rounded-xl overflow-hidden mb-4 shadow-sm"
        >
          <img :src="project.image" class="w-full h-full object-cover" />
        </div>
        <h3 class="text-3xl font-bold text-dark tracking-tighter mb-2">
          {{ project.title }}
        </h3>
        <p class="text-sm text-muted font-mono">{{ project.role }}</p>
      </div>
    </div>

    <ul
      class="hidden md:block w-full border-b border-gray-200 relative bg-background/50 backdrop-blur-sm"
      @mouseleave="handleMouseLeave"
    >
      <li
        v-for="project in projects"
        :key="project.id"
        @mouseenter="handleMouseEnter(project)"
        @click="router.push(`/project/${project.id}`)"
        class="group border-t border-gray-200 px-12 py-10 flex justify-between items-center cursor-pointer transition-colors duration-500 hover:bg-white"
      >
        <div class="flex items-center gap-12 relative z-20">
          <span class="font-mono text-sm text-muted font-bold">{{
            project.timeline.substring(0, 4)
          }}</span>

          <h3
            class="relative text-6xl lg:text-[6rem] font-bold tracking-tighter uppercase transition-transform duration-500 ease-out group-hover:translate-x-6 text-transparent"
            style="-webkit-text-stroke: 1px #111827"
          >
            {{ project.title }}
            <span
              class="absolute top-0 left-0 w-0 overflow-hidden text-indigo-600 group-hover:w-full transition-all duration-700 ease-out whitespace-nowrap"
              style="-webkit-text-stroke: 0px"
            >
              {{ project.title }}
            </span>
          </h3>
        </div>
        <div
          class="text-right relative z-20 group-hover:-translate-x-4 transition-transform duration-500 ease-out"
        >
          <span
            class="block font-mono text-sm tracking-widest uppercase font-bold text-indigo-600 mb-2"
            >{{ project.role }}</span
          >
          <span class="block text-muted text-sm">{{
            project.technologies.slice(0, 3).join(" • ")
          }}</span>
        </div>
      </li>
    </ul>

    <div
      ref="floatImg"
      class="fixed top-0 left-0 w-[450px] aspect-[16/10] pointer-events-none z-[100] opacity-0 scale-75 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl hidden md:block border border-white"
    >
      <div class="absolute inset-0 bg-dark/10 z-10"></div>
      <img
        v-if="activeProject"
        :src="activeProject.image"
        class="w-full h-full object-cover scale-105"
      />
    </div>
  </section>
</template>
