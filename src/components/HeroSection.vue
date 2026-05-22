<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import gsap from "gsap";
import avatarImg from "../assets/AnhThe.png";
import { useDark, useToggle } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const heroRef = ref(null);
const canvasRef = ref(null);
const roleTextRef = ref(null);
const splitChars = (text) => text.split("");

const isDark = useDark();
const toggleDark = useToggle(isDark);
const { locale, t } = useI18n();
const toggleLang = () => {
  locale.value = locale.value === "vi" ? "en" : "vi";
};

let animFrame = null;

// Thuật toán Neural Network Background
const initCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ hạt & Kết nối mạng lưới neural
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark.value
        ? "rgba(99,102,241,0.5)"
        : "rgba(99,102,241,0.3)";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dist = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = isDark.value
            ? `rgba(99,102,241,${0.2 - dist / 600})`
            : `rgba(99,102,241,${0.15 - dist / 800})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    animFrame = requestAnimationFrame(draw);
  };
  draw();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};

// Hiệu ứng giải mã chữ (Text Scrambling)
const scrambleText = (el, finalString) => {
  const chars = "!<>-_\\/[]{}—=+*^?#_";
  let iteration = 0;
  clearInterval(el.interval);

  el.interval = setInterval(() => {
    el.innerText = finalString
      .split("")
      .map((char, index) => {
        if (index < iteration) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iteration >= finalString.length) clearInterval(el.interval);
    iteration += 1 / 2; // Tốc độ giải mã
  }, 30);
};

onMounted(() => {
  initCanvas();

  // Kích hoạt giải mã Role Text
  setTimeout(() => {
    if (roleTextRef.value) scrambleText(roleTextRef.value, t("hero.role"));
  }, 1000);

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
    );

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
          class="font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-dark dark:text-slate-200 cursor-interactive"
          data-cursor="LUNU"
          >Trần Quang Lương</span
        >
      </div>

      <div class="topbar-item flex items-center gap-5">
        <button
          @click="toggleLang"
          class="cursor-interactive px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 font-mono text-[11px] font-bold hover:border-indigo-400 hover:text-indigo-600 transition-all bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm"
          data-cursor="TRANSLATE"
        >
          {{ locale === "vi" ? "EN" : "VI" }}
        </button>
        <button
          @click="toggleDark()"
          class="cursor-interactive w-9 h-9 rounded-lg border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:border-indigo-400 transition-all bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm text-base"
          data-cursor="THEME"
        >
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <a
          href="#contact"
          class="cursor-interactive hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-dark dark:bg-indigo-600 text-white font-mono text-[11px] uppercase tracking-widest font-bold hover:bg-indigo-600 transition-all shadow-lg"
          data-cursor="HIRE ME"
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
            </div>
            <span
              ref="roleTextRef"
              class="font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 font-bold min-w-[200px]"
            >
              LOADING_DATA...
            </span>
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
            class="cursor-interactive group relative inline-flex items-center gap-3 px-8 py-4 bg-dark dark:bg-indigo-600 text-white text-[13px] font-bold rounded-full transition-all hover:-translate-y-0.5"
            data-cursor="GO"
          >
            <span>{{ $t("hero.explore") }}</span>
            <span
              class="group-hover:translate-x-1.5 transition-transform inline-block"
              >→</span
            >
          </a>
        </div>
      </div>

      <div
        class="hero-right shrink-0 w-full md:w-[260px] lg:w-[300px] flex flex-col gap-4 mt-16 md:mt-0"
      >
        <div
          class="cursor-interactive relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)] border border-white/60 dark:border-slate-700/60"
          style="aspect-ratio: 3/4"
          data-cursor="LUNU"
        >
          <img
            :src="avatarImg"
            alt="LuNu"
            class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
