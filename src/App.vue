<script setup>
import { RouterView } from "vue-router";
import { useHead } from "@unhead/vue";
import { useCursor } from "./composables/useCursor";

const { cursor, cursorText, isHovering } = useCursor();

useHead({
  title: "Trần Quang Lương — Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio của Trần Quang Lương — Software Engineer tập trung vào backend, automation và kiến trúc hệ thống có thể mở rộng.",
    },
    { property: "og:title", content: "Trần Quang Lương — Software Engineer" },
    {
      property: "og:description",
      content: "Building dependable systems with clarity, speed and intent.",
    },
    { property: "og:image", content: "/favicon.svg" },
  ],
});
</script>

<template>
  <div class="site-shell">
    <div
      ref="cursor"
      class="custom-cursor"
      aria-hidden="true"
    >
      <span v-if="isHovering">{{ cursorText }}</span>
    </div>

    <div class="grain-overlay" aria-hidden="true"></div>
    <div class="ambient-orb ambient-orb--one" aria-hidden="true"></div>
    <div class="ambient-orb ambient-orb--two" aria-hidden="true"></div>

    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
