<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import avatarImg from "../assets/AnhThe.png";
import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const heroRef = ref(null);
const splitChars = (text) => text.split("");

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { locale } = useI18n();
const toggleLang = () => {
  locale.value = locale.value === "vi" ? "en" : "vi";
};

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.1 });

  tl.from(".topbar-item", {
    y: -16,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power3.out",
  })
    .from(
      ".eyebrow-el",
      { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" },
      "-=0.3",
    )
    .from(
      ".char-s",
      {
        y: "120%",
        rotationZ: 4,
        opacity: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: "power4.out",
      },
      "-=0.4",
    )
    .from(
      ".char-a",
      {
        y: "120%",
        rotationZ: -2,
        opacity: 0,
        duration: 0.9,
        stagger: 0.03,
        ease: "power4.out",
      },
      "-=0.65",
    )
    .from(
      ".hero-meta",
      { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.5",
    )
    .from(
      ".hero-right",
      { x: 40, opacity: 0, duration: 1.0, ease: "power3.out" },
      "-=0.9",
    )
    .from(
      ".scroll-hint",
      { y: 10, opacity: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3",
    );

  document.querySelectorAll(".char-s, .char-a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        y: -6,
        color: "#6366f1",
        duration: 0.25,
        ease: "power2.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        y: 0,
        color: "inherit",
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    gsap.to(".headline-wrap", {
      x: x * 0.2,
      y: y * 0.2,
      duration: 1.2,
      ease: "power2.out",
    });
    gsap.to(".hero-right", {
      x: -x * 0.15,
      y: -y * 0.15,
      duration: 1.4,
      ease: "power2.out",
    });
  });
});
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent"
  >
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        class="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-indigo-100/60 dark:bg-indigo-900/10 blur-[120px]"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-violet-100/50 dark:bg-violet-900/10 blur-[100px]"
      ></div>
    </div>

    <div
      class="absolute top-0 left-0 right-0 z-20 px-8 md:px-14 py-7 flex justify-between items-center border-b border-gray-200/60 dark:border-slate-800/60"
    >
      <span
        class="topbar-item font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-dark dark:text-slate-200"
        >Trần Quang Lương</span
      >

      <div class="topbar-item flex items-center gap-6">
        <div
          class="hidden md:flex items-center gap-6 mr-4 border-r border-gray-300 dark:border-slate-700 pr-6"
        >
          <span
            class="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
            >HCMC, VN</span
          >
          <span
            class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
          ></span>
          <span
            class="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-500 font-bold"
            >{{ $t("nav.available") }}</span
          >
        </div>

        <button
          @click="toggleLang"
          class="font-mono text-[11px] font-bold tracking-widest hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          {{ locale === "vi" ? "EN" : "VI" }}
        </button>
        <button
          @click="toggleDark()"
          class="text-lg hover:scale-110 transition-transform"
        >
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <a
          href="#contact"
          class="hidden md:block font-mono text-[11px] uppercase tracking-[0.2em] font-bold ml-4 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >{{ $t("nav.contact") }} ↗</a
        >
      </div>
    </div>

    <div
      class="relative z-10 px-8 md:px-14 flex flex-col md:flex-row md:items-center md:gap-12 pt-24 pb-16 max-w-7xl mx-auto w-full"
    >
      <div class="flex-1 min-w-0">
        <div class="eyebrow-el flex items-center gap-3 mb-8">
          <div class="flex gap-1">
            <div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
            <div
              class="w-1.5 h-1.5 rounded-full bg-indigo-300 dark:bg-indigo-700"
            ></div>
            <div
              class="w-1.5 h-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900"
            ></div>
          </div>
          <span
            class="font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400 font-bold"
            >{{ $t("hero.role") }}</span
          >
        </div>

        <div class="headline-wrap mb-12 select-none">
          <div class="overflow-hidden flex">
            <span
              v-for="(char, i) in splitChars('SYSTEM')"
              :key="'s' + i"
              class="char-s inline-block font-display font-extrabold text-dark dark:text-white leading-[1.05] tracking-tight cursor-default"
              style="font-size: clamp(3.2rem, 6vw, 6.5rem)"
              >{{ char }}</span
            >
          </div>
          <div class="overflow-hidden flex flex-wrap mt-1">
            <span
              v-for="(char, i) in splitChars('ARCHITECT')"
              :key="'a' + i"
              class="char-a inline-block font-display font-extrabold leading-[1.05] tracking-tight cursor-default"
              style="
                font-size: clamp(3.2rem, 6vw, 6.5rem);
                -webkit-text-stroke: 1.5px currentColor;
                color: transparent;
              "
              >{{ char }}</span
            >
          </div>
        </div>

        <div class="hero-meta flex items-start gap-6 mb-12">
          <div
            class="w-px h-16 bg-gradient-to-b from-indigo-300 dark:from-indigo-600 to-transparent shrink-0 mt-1.5"
          ></div>
          <p
            class="text-[16px] text-muted dark:text-slate-400 font-medium font-sans leading-relaxed max-w-[420px]"
          >
            {{ $t("hero.desc") }}
          </p>
        </div>

        <div class="hero-meta flex items-center gap-6 flex-wrap">
          <a
            href="#projects"
            v-magnetic
            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-dark dark:bg-indigo-600 text-white text-[13px] font-bold rounded-full transition-all duration-300 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <span>{{ $t("hero.explore") }}</span>
            <span
              class="group-hover:translate-x-1 transition-transform inline-block"
              >→</span
            >
          </a>
        </div>
      </div>

      <div
        class="hero-right shrink-0 w-full md:w-[260px] lg:w-[300px] flex flex-col gap-4 mt-16 md:mt-0"
      >
        <div
          class="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 dark:border-slate-700/60"
          style="aspect-ratio: 3/4"
        >
          <img
            :src="avatarImg"
            alt="LuNu"
            class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"
          ></div>
          <div class="absolute bottom-6 left-6 right-6">
            <div class="flex items-center justify-between mb-3">
              <span
                class="font-mono text-[10px] uppercase tracking-widest text-white/60"
                >{{ $t("hero.profile") }}</span
              >
              <span
                class="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-full font-mono text-[9px] text-white/90 border border-white/20"
                >{{ $t("hero.opentowork") }}</span
              >
            </div>
            <p
              class="text-white font-bold text-lg font-display tracking-tight leading-tight"
            >
              Trần Quang Lương
            </p>
            <p
              class="text-white/60 font-mono text-[11px] uppercase tracking-widest mt-1"
            >
              LuNu · HCMC, VN
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="scroll-hint absolute bottom-0 left-0 right-0 z-10 px-8 md:px-14 py-6 flex justify-between items-center border-t border-gray-200/60 dark:border-slate-800/60"
    >
      <div class="flex items-center gap-4">
        <div class="flex flex-col gap-1.5">
          <div
            class="w-5 h-px bg-muted/60 animate-[slideRight_1.5s_ease-in-out_infinite]"
          ></div>
          <div
            class="w-3 h-px bg-muted/40 animate-[slideRight_1.5s_ease-in-out_0.2s_infinite]"
          ></div>
        </div>
        <span
          class="font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
          >{{ $t("nav.scroll") }}</span
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideRight {
  0%,
  100% {
    transform: scaleX(1);
    opacity: 0.5;
  }
  50% {
    transform: scaleX(1.5);
    opacity: 1;
  }
}
.char-s,
.char-a {
  will-change: transform, color;
  transition: none;
}
</style>
