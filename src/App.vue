<script setup>
import { RouterView } from "vue-router";
// Đã tháo gỡ hoàn toàn GSAP Custom Cursor để mang lại độ mượt 100% gốc
</script>

<template>
  <div
    class="relative min-h-screen text-dark font-sans selection:bg-dark selection:text-white z-0 bg-background overflow-hidden"
  >
    <div
      class="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-darken"
      style="
        background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E&quot;);
      "
    ></div>

    <div class="fixed inset-0 z-[-1] bg-background pointer-events-none">
      <div
        class="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-indigo-100/50 blur-[100px] mix-blend-multiply animate-blob"
      ></div>
      <div
        class="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-purple-100/50 blur-[100px] mix-blend-multiply animate-blob"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="relative z-10">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style>
/* Trả lại chuột mặc định mượt mà 100% cho mọi thành phần */
body,
a,
button {
  cursor: auto !important;
}

/* Hiệu ứng chuyển trang Cinematic */
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}
::-webkit-scrollbar {
  display: none;
}
</style>
