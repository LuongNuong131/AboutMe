<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { toolsStack } from "../data/tools";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3+", label: "Năm học tập" },
  { value: "4", label: "Dự án thực chiến" },
  { value: "8+", label: "Công nghệ" },
  { value: "3.0", label: "GPA" },
];

onMounted(() => {
  gsap.from(".about-heading", {
    scrollTrigger: { trigger: "#about", start: "top 75%" },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  gsap.from(".about-card", {
    scrollTrigger: { trigger: ".about-grid", start: "top 80%" },
    y: 60,
    opacity: 0,
    duration: 0.9,
    stagger: 0.15,
    ease: "power3.out",
  });

  gsap.from(".stat-block", {
    scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
    y: 40,
    opacity: 0,
    scale: 0.9,
    duration: 0.7,
    stagger: 0.1,
    ease: "back.out(1.7)",
  });

  gsap.from(".tool-tag", {
    scrollTrigger: { trigger: ".tools-grid", start: "top 85%" },
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.06,
    ease: "power2.out",
  });

  // Marquee
  gsap.to(".marquee-track", {
    xPercent: -50,
    ease: "none",
    duration: 22,
    repeat: -1,
  });
});
</script>

<template>
  <section id="about" class="pt-32 md:pt-48 relative z-10 overflow-hidden">
    <!-- Section heading -->
    <div class="px-8 md:px-14 mb-20 about-heading">
      <div class="flex items-end justify-between">
        <h2
          class="text-[12vw] md:text-[8vw] font-display font-extrabold text-dark dark:text-white leading-[0.88] tracking-tight uppercase"
        >
          Tư Duy<br />Hệ Thống.
        </h2>
        <div class="hidden md:block text-right mb-2">
          <div
            class="font-mono text-xs text-muted uppercase tracking-widest mb-1"
          >
            // About me
          </div>
          <div class="text-sm font-medium text-dark dark:text-slate-300">
            HCMC, Vietnam
          </div>
        </div>
      </div>
    </div>

    <!-- Stats row -->
    <div class="px-8 md:px-14 mb-16 stats-row">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="stat in stats"
          :key="stat.value"
          class="stat-block group p-6 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-400"
        >
          <div
            class="text-4xl md:text-5xl font-display font-extrabold text-dark dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            {{ stat.value }}
          </div>
          <div
            class="text-xs font-mono text-muted uppercase tracking-widest mt-2"
          >
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

    <!-- Main grid -->
    <div
      class="about-grid px-8 md:px-14 mb-0 grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      <!-- Profile card -->
      <div
        class="about-card col-span-1 md:col-span-4 p-8 rounded-3xl border border-gray-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 relative overflow-hidden"
      >
        <!-- Decorative gradient top-right -->
        <div
          class="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-[0.06]"
          style="background: radial-gradient(circle, #6366f1, transparent)"
        ></div>

        <span
          class="block font-mono text-[10px] uppercase tracking-widest text-indigo-500 mb-8"
        >
          // Hồ Sơ Engineer
        </span>
        <ul class="space-y-5 text-sm font-sans">
          <li
            class="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-slate-800"
          >
            <span class="text-muted font-medium">Tên</span>
            <span class="font-bold text-dark dark:text-white text-right"
              >Trần Quang Lương</span
            >
          </li>
          <li
            class="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-slate-800"
          >
            <span class="text-muted font-medium">Chuyên môn</span>
            <span class="font-bold text-dark dark:text-white text-right"
              >Full-Stack Dev</span
            >
          </li>
          <li
            class="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-slate-800"
          >
            <span class="text-muted font-medium">GPA</span>
            <span class="font-bold text-indigo-600 dark:text-indigo-400"
              >3.0 / 4.0</span
            >
          </li>
          <li class="flex justify-between items-center">
            <span class="text-muted font-medium">Status</span>
            <span
              class="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400"
            >
              <span
                class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              ></span>
              Open to work
            </span>
          </li>
        </ul>
      </div>

      <!-- Philosophy card -->
      <div
        class="about-card col-span-1 md:col-span-5 p-8 rounded-3xl border border-indigo-200/60 dark:border-indigo-800/40 bg-gradient-to-br from-indigo-50/80 to-white dark:from-indigo-900/20 dark:to-slate-900/70 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col justify-center relative overflow-hidden"
      >
        <div
          class="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-[0.08]"
          style="background: radial-gradient(circle, #6366f1, transparent)"
        ></div>

        <span
          class="block font-mono text-[10px] uppercase tracking-widest text-indigo-500 mb-6"
        >
          // Philosophy
        </span>
        <h3
          class="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-dark dark:text-white mb-6 leading-tight uppercase"
        >
          Kiến trúc vững chắc,<br />
          <span class="text-indigo-600 dark:text-indigo-400"
            >tương lai mở rộng.</span
          >
        </h3>
        <p
          class="text-base text-muted dark:text-slate-400 font-medium leading-loose relative z-10"
        >
          Hệ thống không chỉ là tập hợp các dòng Code, mà là sự phối hợp chặt
          chẽ giữa logic và hạ tầng. Tôi tập trung vào tối ưu Database, thiết kế
          API chuẩn, và xây dựng Backend đáp ứng nhu cầu thực tế.
        </p>
      </div>

      <!-- Tools card -->
      <div
        class="about-card col-span-1 md:col-span-3 p-8 rounded-3xl border border-gray-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 relative overflow-hidden"
      >
        <span
          class="block font-mono text-[10px] uppercase tracking-widest text-indigo-500 mb-6"
        >
          // Tech Stack
        </span>
        <div class="tools-grid flex flex-wrap gap-2">
          <span
            v-for="tool in toolsStack"
            :key="tool.name"
            class="tool-tag px-3 py-1.5 border border-gray-200 dark:border-slate-700 bg-gray-50/80 dark:bg-slate-800/60 rounded-xl text-xs font-semibold font-mono text-dark dark:text-slate-300 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-default"
          >
            {{ tool.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Marquee banner -->
    <div
      class="overflow-hidden whitespace-nowrap py-7 md:py-10 mt-16 bg-dark dark:bg-indigo-950 text-white select-none relative"
      style="
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      "
    >
      <!-- Gradient fade edges -->
      <div
        class="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style="background: linear-gradient(to right, #0f172a, transparent)"
      ></div>
      <div
        class="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style="background: linear-gradient(to left, #0f172a, transparent)"
      ></div>

      <div
        class="marquee-track flex text-[5.5vw] md:text-[3.5vw] font-display font-extrabold uppercase tracking-widest"
      >
        <span class="opacity-90">&nbsp;OPTIMIZED BACKEND&nbsp;</span>
        <span class="text-indigo-400">✦</span>
        <span class="opacity-90">&nbsp;HIGH LOAD ARCHITECTURE&nbsp;</span>
        <span class="text-indigo-400">✦</span>
        <span class="opacity-90">&nbsp;DATABASE DESIGN&nbsp;</span>
        <span class="text-indigo-400">✦</span>
        <span class="opacity-90">&nbsp;SCALABLE SYSTEMS&nbsp;</span>
        <span class="text-indigo-400">✦</span>
        <span class="opacity-90">&nbsp;OPTIMIZED BACKEND&nbsp;</span>
        <span class="text-indigo-400">✦</span>
        <span class="opacity-90">&nbsp;HIGH LOAD ARCHITECTURE&nbsp;</span>
        <span class="text-indigo-400">✦</span>
        <span class="opacity-90">&nbsp;DATABASE DESIGN&nbsp;</span>
        <span class="text-indigo-400">✦</span>
        <span class="opacity-90">&nbsp;SCALABLE SYSTEMS&nbsp;</span>
        <span class="text-indigo-400">✦</span>
      </div>
    </div>
  </section>
</template>
