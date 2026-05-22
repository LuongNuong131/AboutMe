<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import gsap from "gsap";
import avatarImg from "../assets/AnhThe.png";
import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const heroRef = ref(null);
const canvasRef = ref(null);
const splitChars = (text) => text.split("");

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { locale } = useI18n();
const toggleLang = () => {
  locale.value = locale.value === "vi" ? "en" : "vi";
};

// Particle canvas
let animFrame = null;
const initCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    o: Math.random() * 0.5 + 0.1,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${p.o})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    animFrame = requestAnimationFrame(draw);
  };
  draw();

  const handleResize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", handleResize);
};

onMounted(() => {
  initCanvas();

  const tl = gsap.timeline({ delay: 0.2 });

  tl.from(".topbar-item", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power4.out",
  })
    .from(
      ".eyebrow-el",
      { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4",
    )
    .from(
      ".char-s",
      {
        y: "130%",
        rotationZ: 6,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
      },
      "-=0.5",
    )
    .from(
      ".char-a",
      {
        y: "130%",
        rotationZ: -4,
        opacity: 0,
        duration: 1,
        stagger: 0.04,
        ease: "power4.out",
      },
      "-=0.7",
    )
    .from(
      ".hero-meta",
      { y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: "power3.out" },
      "-=0.6",
    )
    .from(
      ".hero-right",
      { x: 60, opacity: 0, duration: 1.1, ease: "power3.out" },
      "-=1",
    )
    .from(
      ".stat-item",
      { y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: "back.out(2)" },
      "-=0.5",
    )
    .from(
      ".scroll-hint",
      { y: 15, opacity: 0, duration: 0.7, ease: "power2.out" },
      "-=0.3",
    );

  // Hover on chars
  document.querySelectorAll(".char-s, .char-a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        y: -8,
        color: "#6366f1",
        duration: 0.2,
        ease: "power2.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        y: 0,
        color: "inherit",
        duration: 0.5,
        ease: "elastic.out(1,0.4)",
      });
    });
  });

  // Parallax on mouse
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    gsap.to(".headline-wrap", {
      x: x * 0.15,
      y: y * 0.15,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.to(".hero-right", {
      x: -x * 0.12,
      y: -y * 0.12,
      duration: 1.6,
      ease: "power2.out",
    });
    gsap.to(".orb-1", {
      x: x * 0.4,
      y: y * 0.4,
      duration: 2,
      ease: "power2.out",
    });
    gsap.to(".orb-2", {
      x: -x * 0.3,
      y: -y * 0.3,
      duration: 2.2,
      ease: "power2.out",
    });
  });
});

onBeforeUnmount(() => {
  if (animFrame) cancelAnimationFrame(animFrame);
});
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex flex-col justify-center overflow-hidden"
  >
    <canvas
      ref="canvasRef"
      class="absolute inset-0 z-0 pointer-events-none opacity-60"
    ></canvas>

    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        class="orb-1 absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[130px]"
        style="
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.18) 0%,
            transparent 70%
          );
        "
      ></div>
      <div
        class="orb-2 absolute bottom-[-15%] right-[-8%] w-[45vw] h-[45vw] rounded-full blur-[110px]"
        style="
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.14) 0%,
            transparent 70%
          );
        "
      ></div>
      <div
        class="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-40"
        style="
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.1) 0%,
            transparent 70%
          );
        "
      ></div>
    </div>

    <div
      class="absolute inset-0 z-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
      style="
        background-image:
          linear-gradient(rgba(99, 102, 241, 1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 1) 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>

    <div
      class="absolute top-0 left-0 right-0 z-20 px-8 md:px-14 py-6 flex justify-between items-center"
    >
      <div class="topbar-item flex items-center gap-3">
        <div
          class="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center"
        >
          <span class="text-white font-bold text-xs font-mono">TL</span>
        </div>
        <span
          class="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-dark dark:text-slate-200"
          >Trần Quang Lương</span
        >
      </div>

      <div class="topbar-item flex items-center gap-5">
        <div class="hidden md:flex items-center gap-5 mr-3">
          <div
            class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50/80 dark:bg-emerald-900/20 backdrop-blur-sm"
          >
            <span
              class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
            ></span>
            <span
              class="font-mono text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold"
              >{{ $t("nav.available") }}</span
            >
          </div>
          <span
            class="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
            >HCMC, VN</span
          >
        </div>

        <button
          @click="toggleLang"
          class="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 font-mono text-[11px] font-bold tracking-widest hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm"
        >
          {{ locale === "vi" ? "EN" : "VI" }}
        </button>
        <button
          @click="toggleDark()"
          class="w-9 h-9 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:border-indigo-400 transition-all bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-base"
        >
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <a
          href="#contact"
          class="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-dark dark:bg-indigo-600 text-white font-mono text-[11px] uppercase tracking-widest font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all shadow-lg shadow-dark/10"
          >{{ $t("nav.contact") }} ↗</a
        >
      </div>
    </div>

    <div
      class="relative z-10 px-8 md:px-14 flex flex-col md:flex-row md:items-center md:gap-16 pt-28 pb-24 max-w-7xl mx-auto w-full"
    >
      <div class="flex-1 min-w-0">
        <div class="eyebrow-el flex items-center gap-3 mb-10">
          <div
            class="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50/80 dark:bg-indigo-900/20 backdrop-blur-sm"
          >
            <div class="flex gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span
                class="w-1.5 h-1.5 rounded-full bg-indigo-300 dark:bg-indigo-700"
              ></span>
              <span
                class="w-1.5 h-1.5 rounded-full bg-indigo-200 dark:bg-indigo-900"
              ></span>
            </div>
            <span
              class="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-bold"
              >{{ $t("hero.role") }}</span
            >
          </div>
        </div>

        <div class="headline-wrap mb-14 select-none">
          <div class="overflow-hidden flex">
            <span
              v-for="(char, i) in splitChars('SYSTEM')"
              :key="'s' + i"
              class="char-s inline-block font-display font-extrabold text-dark dark:text-white leading-[0.95] tracking-[-0.02em] cursor-default"
              style="font-size: clamp(3.5rem, 7.5vw, 8rem)"
              >{{ char }}</span
            >
          </div>
          <div class="overflow-hidden flex mt-2">
            <span
              v-for="(char, i) in splitChars('ARCHITECT')"
              :key="'a' + i"
              class="char-a inline-block font-display font-extrabold leading-[0.95] tracking-[-0.02em] cursor-default text-dark dark:text-white"
              style="font-size: clamp(3.5rem, 7.5vw, 8rem)"
              >{{ char }}</span
            >
          </div>
        </div>

        <div class="hero-meta flex items-start gap-5 mb-12">
          <div
            class="w-px h-16 shrink-0 mt-1"
            style="background: linear-gradient(to bottom, #6366f1, transparent)"
          ></div>
          <p
            class="text-[17px] text-muted dark:text-slate-400 font-medium font-sans leading-relaxed max-w-[400px]"
          >
            {{ $t("hero.desc") }}
          </p>
        </div>

        <div class="hero-meta flex items-center gap-4 flex-wrap mb-14">
          <a
            href="#projects"
            v-magnetic
            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-dark dark:bg-indigo-600 text-white text-[13px] font-bold rounded-full transition-all duration-300 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            <span>{{ $t("hero.explore") }}</span>
            <span
              class="group-hover:translate-x-1.5 transition-transform inline-block"
              >→</span
            >
          </a>
          <a
            href="#about"
            class="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 dark:border-slate-700 text-dark dark:text-white text-[13px] font-bold rounded-full hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm"
          >
            About me ↓
          </a>
        </div>

        <div class="flex items-center gap-8 flex-wrap">
          <div class="stat-item text-center">
            <div
              class="text-3xl font-display font-extrabold text-dark dark:text-white tracking-tight"
            >
              3+
            </div>
            <div
              class="text-xs font-mono text-muted uppercase tracking-widest mt-1"
            >
              Projects
            </div>
          </div>
          <div class="w-px h-10 bg-gray-200 dark:bg-slate-700 stat-item"></div>
          <div class="stat-item text-center">
            <div
              class="text-3xl font-display font-extrabold text-dark dark:text-white tracking-tight"
            >
              8+
            </div>
            <div
              class="text-xs font-mono text-muted uppercase tracking-widest mt-1"
            >
              Tech Stack
            </div>
          </div>
          <div class="w-px h-10 bg-gray-200 dark:bg-slate-700 stat-item"></div>
          <div class="stat-item text-center">
            <div
              class="text-3xl font-display font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight"
            >
              3.0
            </div>
            <div
              class="text-xs font-mono text-muted uppercase tracking-widest mt-1"
            >
              GPA
            </div>
          </div>
        </div>
      </div>

      <div
        class="hero-right shrink-0 w-full md:w-[260px] lg:w-[300px] flex flex-col gap-4 mt-16 md:mt-0"
      >
        <div
          class="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)] border border-white/60 dark:border-slate-700/60"
          style="aspect-ratio: 3/4"
        >
          <img
            :src="avatarImg"
            alt="LuNu"
            class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-108"
            style="transform-origin: center top"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"
          ></div>

          <div
            class="absolute inset-0 rounded-[2.5rem] pointer-events-none"
            style="box-shadow: inset 0 0 40px rgba(99, 102, 241, 0.15)"
          ></div>

          <div class="absolute bottom-6 left-6 right-6">
            <div class="flex items-center justify-between mb-3">
              <span
                class="font-mono text-[10px] uppercase tracking-widest text-white/50"
                >{{ $t("hero.profile") }}</span
              >
              <span
                class="px-2.5 py-1 rounded-full font-mono text-[9px] text-emerald-300 border border-emerald-500/30 bg-emerald-900/30 backdrop-blur-sm animate-pulse"
                >{{ $t("hero.opentowork") }}</span
              >
            </div>
            <p
              class="text-white font-bold text-lg font-display tracking-tight leading-tight"
            >
              Trần Quang Lương
            </p>
            <p
              class="text-white/50 font-mono text-[11px] uppercase tracking-widest mt-1"
            >
              LuNu · HCMC, VN
            </p>
          </div>
        </div>

        <div class="flex gap-2 flex-wrap justify-center">
          <span
            v-for="tech in ['Vue 3', 'FastAPI', 'Spring Boot', 'MySQL']"
            :key="tech"
            class="px-3 py-1.5 rounded-full text-xs font-mono font-bold border border-indigo-200 dark:border-indigo-800 bg-indigo-50/80 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 backdrop-blur-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
            >{{ tech }}</span
          >
        </div>
      </div>
    </div>

    <div
      class="scroll-hint absolute bottom-0 left-0 right-0 z-10 px-8 md:px-14 py-5 flex justify-between items-center border-t border-gray-200/40 dark:border-slate-800/60 backdrop-blur-sm bg-white/20 dark:bg-slate-950/20"
    >
      <div class="flex items-center gap-4">
        <div class="flex gap-1.5 items-center">
          <div
            class="w-6 h-px bg-muted/50 animate-[expandWidth_1.5s_ease-in-out_infinite]"
          ></div>
          <div
            class="w-3 h-px bg-muted/30 animate-[expandWidth_1.5s_0.3s_ease-in-out_infinite]"
          ></div>
        </div>
        <span
          class="font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
          >{{ $t("nav.scroll") }}</span
        >
      </div>
      <span class="font-mono text-[10px] text-muted/60 hidden md:block"
        >Portfolio v2025</span
      >
    </div>
  </section>
</template>

<style scoped>
@keyframes expandWidth {
  0%,
  100% {
    transform: scaleX(1);
    opacity: 0.5;
  }
  50% {
    transform: scaleX(1.8);
    opacity: 1;
  }
}
.char-s,
.char-a {
  will-change: transform, color;
  display: inline-block;
}
</style>
