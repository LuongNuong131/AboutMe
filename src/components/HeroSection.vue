<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import avatarImg from "../assets/AnhThe.png";

onMounted(() => {
  const tl = gsap.timeline();

  // Animate the top bar
  tl.from(".hero-topbar", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  })
    // Animate eyebrow label
    .from(
      ".hero-eyebrow",
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    )
    // Animate each headline word
    .from(
      ".word-reveal",
      {
        y: "110%",
        rotationZ: 3,
        opacity: 0,
        duration: 1.0,
        stagger: 0.08,
        ease: "power4.out",
      },
      "-=0.4",
    )
    // Animate subtext + CTA
    .from(
      ".fade-up",
      {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.5",
    )
    // Animate the right column
    .from(
      ".hero-right",
      {
        x: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.8",
    );
});
</script>

<template>
  <section
    class="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[100vw] overflow-hidden relative"
  >
    <!-- Top bar -->
    <div
      class="hero-topbar absolute top-8 left-6 md:left-12 right-6 md:right-12 flex justify-between items-center"
    >
      <span
        class="font-mono text-xs uppercase tracking-widest font-bold text-dark"
      >
        Trần Quang Lương
      </span>
      <span class="font-mono text-xs uppercase tracking-widest text-muted">
        Ho Chi Minh City, VN
      </span>
    </div>

    <!-- Main content grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center mt-16"
    >
      <!-- LEFT: Headline -->
      <div class="md:col-span-7 lg:col-span-8">
        <!-- Eyebrow -->
        <div class="hero-eyebrow flex items-center gap-3 mb-8">
          <div class="w-8 h-px bg-indigo-400"></div>
          <span
            class="font-mono text-xs uppercase tracking-[0.25em] text-indigo-500 font-bold"
          >
            Full-Stack Developer
          </span>
        </div>

        <!-- Headline: SYSTEM -->
        <div class="overflow-hidden mb-1">
          <h1
            class="word-reveal block font-display font-extrabold text-dark leading-[0.9] tracking-tight uppercase"
            style="font-size: clamp(3.5rem, 9vw, 8.5rem)"
          >
            SYSTEM
          </h1>
        </div>

        <!-- Headline: ARCHITECT (outlined) -->
        <div class="overflow-hidden mb-8">
          <h1
            class="word-reveal block font-display font-extrabold leading-[0.9] tracking-tight uppercase text-stroke"
            style="font-size: clamp(3.5rem, 9vw, 8.5rem)"
          >
            ARCHITECT
          </h1>
        </div>

        <!-- Sub-description -->
        <p
          class="fade-up text-base md:text-lg text-muted font-medium font-sans leading-relaxed max-w-md"
        >
          Kỹ sư phần mềm chuyên tối ưu hóa Core Backend, Database, và kiến trúc
          hệ thống chịu tải cao.
        </p>

        <!-- CTA row -->
        <div class="fade-up flex items-center gap-6 mt-10">
          <a
            href="#projects"
            class="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-dark text-white text-sm font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-200"
          >
            Khám Phá Projects
            <span class="group-hover:translate-x-1 transition-transform"
              >→</span
            >
          </a>
          <a
            href="https://github.com/LuongNuong131"
            target="_blank"
            class="text-sm font-mono font-bold text-dark hover:text-indigo-600 transition-colors uppercase tracking-widest"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <!-- RIGHT: Avatar + stats card -->
      <div class="hero-right md:col-span-5 lg:col-span-4 flex flex-col gap-6">
        <!-- Avatar card -->
        <div
          class="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl shadow-dark/10 border border-white/80"
        >
          <img
            :src="avatarImg"
            alt="LuNu"
            class="w-full h-full object-cover object-top scale-105"
          />
          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"
          ></div>
          <!-- Name badge -->
          <div class="absolute bottom-5 left-5 right-5">
            <p class="text-white font-bold text-lg font-display tracking-tight">
              Trần Quang Lương
            </p>
            <p
              class="text-white/70 font-mono text-xs uppercase tracking-widest mt-1"
            >
              LuNu • HCMC, VN
            </p>
          </div>
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-3 gap-3">
          <div
            class="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <span class="block font-display font-extrabold text-2xl text-dark"
              >4+</span
            >
            <span
              class="block font-mono text-[10px] uppercase tracking-wider text-muted mt-1"
              >Projects</span
            >
          </div>
          <div
            class="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <span
              class="block font-display font-extrabold text-2xl text-indigo-600"
              >3.0</span
            >
            <span
              class="block font-mono text-[10px] uppercase tracking-wider text-muted mt-1"
              >GPA</span
            >
          </div>
          <div
            class="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <span class="block font-display font-extrabold text-2xl text-dark"
              >FS</span
            >
            <span
              class="block font-mono text-[10px] uppercase tracking-wider text-muted mt-1"
              >Full-Stack</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom scroll hint -->
    <div
      class="fade-up absolute bottom-8 left-6 md:left-12 flex items-center gap-3"
    >
      <div class="w-px h-10 bg-gray-300 animate-pulse"></div>
      <span class="font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
        >Scroll to explore</span
      >
    </div>
  </section>
</template>
