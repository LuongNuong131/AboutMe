<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
// Lấy đúng ảnh cá nhân của bạn từ thư mục assets
import avatarImg from "../assets/AnhThe.png";

onMounted(() => {
  const tl = gsap.timeline();
  tl.from(".char-reveal", {
    y: "120%",
    rotationZ: 5,
    opacity: 0,
    duration: 1.2,
    stagger: 0.02,
    ease: "power4.out",
    delay: 0.2,
  }).from(
    ".fade-up",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    },
    "-=0.8",
  );
});

const splitText = (text) => text.split("");
</script>

<template>
  <section
    class="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[100vw] overflow-hidden relative"
  >
    <div
      class="absolute top-10 left-6 md:left-12 flex justify-between w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] fade-up"
    >
      <span
        class="font-mono text-xs md:text-sm uppercase tracking-widest font-bold text-dark"
        >Trần Quang Lương (LuNu)</span
      >
      <span
        class="font-mono text-xs md:text-sm uppercase tracking-widest text-muted"
        >Ho Chi Minh City, VN</span
      >
    </div>

    <div class="mt-20 md:mt-10 z-10 pointer-events-none">
      <h1
        class="text-[14vw] md:text-[11vw] font-display font-extrabold text-dark leading-[0.95] tracking-tight uppercase flex flex-wrap overflow-hidden pt-2 pb-2"
      >
        <span
          v-for="(char, i) in splitText('SYSTEM')"
          :key="i"
          class="char-reveal block"
          >{{ char }}</span
        >
      </h1>
      <h1
        class="text-[14vw] md:text-[11vw] font-display font-extrabold text-stroke leading-[0.95] tracking-tight uppercase flex flex-wrap overflow-hidden -ml-1 pt-2 pb-4"
      >
        <span
          v-for="(char, i) in splitText('ARCHITECT')"
          :key="i"
          class="char-reveal block"
          >{{ char }}</span
        >
      </h1>
    </div>

    <div
      class="flex flex-col md:flex-row justify-between items-end mt-12 md:mt-20 gap-8"
    >
      <div class="fade-up flex items-center gap-6 w-full md:w-1/3">
        <div
          class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-2xl shrink-0 border-2 border-white"
        >
          <img
            :src="avatarImg"
            alt="LuNu Portfolio"
            class="w-full h-full object-cover"
          />
        </div>
        <p
          class="text-sm md:text-base text-muted font-semibold font-sans leading-relaxed"
        >
          Kỹ sư phần mềm. Chuyên tối ưu hóa Core Backend, Database, và kiến trúc
          hệ thống chịu tải cao.
        </p>
      </div>

      <div
        class="fade-up w-full md:w-auto font-mono text-xs md:text-sm flex gap-6 uppercase tracking-widest font-bold"
      >
        <a
          href="#projects"
          class="relative group overflow-hidden pointer-events-auto"
        >
          <span
            class="block transition-transform duration-300 group-hover:-translate-y-full"
            >Khám Phá →</span
          >
          <span
            class="block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-indigo-600"
            >Khám Phá →</span
          >
        </a>
        <a
          href="https://github.com/LuongNuong131"
          target="_blank"
          class="relative group overflow-hidden pointer-events-auto"
        >
          <span
            class="block transition-transform duration-300 group-hover:-translate-y-full"
            >GitHub ↗</span
          >
          <span
            class="block absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full text-indigo-600"
            >GitHub ↗</span
          >
        </a>
      </div>
    </div>
  </section>
</template>
