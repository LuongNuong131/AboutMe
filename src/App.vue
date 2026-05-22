<script setup>
import { RouterView } from "vue-router";
import { useHead } from "@unhead/vue";
import { useCursor } from "./composables/useCursor";

const { cursor, cursorText, isHovering } = useCursor();

useHead({
  title: "Trần Quang Lương - Kỹ Sư Hệ Thống",
  meta: [
    {
      name: "description",
      content:
        "Portfolio của LuNu - Kỹ sư phần mềm chuyên hệ thống Backend và Frontend.",
    },
    { property: "og:image", content: "/favicon.svg" },
  ],
});
</script>

<template>
  <div
    class="relative min-h-screen text-dark font-sans selection:bg-indigo-500 selection:text-white z-0 bg-background dark:bg-slate-950 dark:text-slate-100 transition-colors duration-700 overflow-hidden"
  >
    <div
      ref="cursor"
      class="hidden md:flex fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] items-center justify-center -translate-x-1/2 -translate-y-1/2 bg-white mix-blend-difference"
      style="will-change: transform, width, height"
    >
      <span
        v-if="isHovering"
        class="text-[10px] font-bold text-dark font-mono uppercase tracking-[0.2em] pointer-events-none"
      >
        {{ cursorText }}
      </span>
    </div>

    <div
      class="fixed inset-0 z-[100] pointer-events-none opacity-[0.02] dark:opacity-[0.04] mix-blend-darken dark:mix-blend-lighten"
      style="
        background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E&quot;);
      "
    ></div>

    <div class="relative z-10">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>
