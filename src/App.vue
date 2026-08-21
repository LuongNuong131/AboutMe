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
        "Portfolio của Trần Quang Lương — Software Engineer tập trung vào backend, automation và kiến trúc hệ thống.",
    },
    { property: "og:title", content: "Trần Quang Lương — Software Engineer" },
    {
      property: "og:description",
      content: "Designing dependable systems with intent.",
    },
  ],
});
</script>

<template>
  <div class="site-shell">
    <div ref="cursor" class="custom-cursor" aria-hidden="true">
      <span v-if="isHovering">{{ cursorText }}</span>
    </div>
    <div class="site-texture" aria-hidden="true"></div>
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>
