<script setup>
import { RouterView } from "vue-router";
import { useHead } from "@unhead/vue";
import { useCursor } from "./composables/useCursor";

const { cursor, cursorText, isHovering } = useCursor();

useHead({
  title: "Trần Quang Lương — Full-Stack Developer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio của Trần Quang Lương — Full-Stack Developer tập trung vào backend systems, dữ liệu và sản phẩm có thể vận hành.",
    },
    { property: "og:title", content: "Trần Quang Lương — Full-Stack Developer" },
    {
      property: "og:description",
      content: "Backend · Systems · Product — xây dựng những hệ thống đáng tin cậy.",
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
