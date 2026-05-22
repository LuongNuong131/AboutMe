<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import avatarImg from "../assets/AnhThe.png";

const heroRef = ref(null);

// Split text into spans for char animation
const splitChars = (text) => text.split("");

onMounted(() => {
  // ── 1. Entrance timeline ──────────────────────────────
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
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .from(
      ".char-s",
      {
        y: "120%",
        rotationZ: 6,
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
        rotationZ: -4,
        opacity: 0,
        duration: 0.9,
        stagger: 0.03,
        ease: "power4.out",
      },
      "-=0.65",
    )
    .from(
      ".hero-meta",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .from(
      ".hero-right",
      {
        x: 40,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
      },
      "-=0.9",
    )
    .from(
      ".scroll-hint",
      {
        y: 10,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3",
    );

  // ── 2. Magnetic hover on headline chars ───────────────
  document.querySelectorAll(".char-s, .char-a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        y: -8,
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

  // Outlined chars hover
  document.querySelectorAll(".char-a").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
        y: -8,
        WebkitTextStrokeColor: "#6366f1",
        duration: 0.25,
        ease: "power2.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        y: 0,
        WebkitTextStrokeColor: "#111827",
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });

  // ── 3. Subtle parallax on mouse move ─────────────────
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    gsap.to(".headline-wrap", {
      x: x * 0.3,
      y: y * 0.3,
      duration: 1.2,
      ease: "power2.out",
    });
    gsap.to(".hero-right", {
      x: -x * 0.2,
      y: -y * 0.2,
      duration: 1.4,
      ease: "power2.out",
    });
  });
});
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAFAFA]"
  >
    <!-- Noise overlay -->
    <div
      class="pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
      style="
        background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E&quot;);
        background-size: 200px;
      "
    ></div>

    <!-- Gradient blob BG -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        class="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full bg-indigo-100/60 blur-[120px]"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-violet-100/50 blur-[100px]"
      ></div>
    </div>

    <!-- ── TOP BAR ── -->
    <div
      class="absolute top-0 left-0 right-0 z-20 px-8 md:px-14 py-7 flex justify-between items-center border-b border-gray-100/80"
    >
      <span
        class="topbar-item font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-dark"
      >
        Trần Quang Lương
      </span>
      <div class="topbar-item hidden md:flex items-center gap-6">
        <span
          class="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
          >HCMC, Vietnam</span
        >
        <span
          class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
        ></span>
        <span
          class="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-500 font-bold"
          >Available</span
        >
      </div>
      <a
        href="#contact"
        class="topbar-item font-mono text-[11px] uppercase tracking-[0.2em] font-bold text-dark hover:text-indigo-600 transition-colors"
      >
        Contact ↗
      </a>
    </div>

    <!-- ── MAIN CONTENT ── -->
    <div
      class="relative z-10 px-8 md:px-14 flex flex-col md:flex-row md:items-center md:gap-8 pt-24 pb-16"
    >
      <!-- LEFT -->
      <div class="flex-1 min-w-0">
        <!-- Eyebrow -->
        <div class="eyebrow-el flex items-center gap-3 mb-7">
          <div class="flex gap-1">
            <div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-indigo-100"></div>
          </div>
          <span
            class="font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-500 font-bold"
          >
            Full-Stack Developer · System Engineer
          </span>
        </div>

        <!-- HEADLINE -->
        <div class="headline-wrap mb-10 select-none">
          <!-- SYSTEM — solid fill -->
          <div class="overflow-hidden flex">
            <span
              v-for="(char, i) in splitChars('SYSTEM')"
              :key="'s' + i"
              class="char-s inline-block font-display font-extrabold text-dark leading-[0.88] tracking-[-0.02em] cursor-default"
              style="font-size: clamp(3.2rem, 6vw, 7rem)"
              >{{ char }}</span
            >
          </div>

          <!-- ARCHITECT — outlined -->
          <div class="overflow-hidden flex flex-wrap">
            <span
              v-for="(char, i) in splitChars('ARCHITECT')"
              :key="'a' + i"
              class="char-a inline-block font-display font-extrabold leading-[0.88] tracking-[-0.02em] cursor-default"
              style="
                font-size: clamp(3.2rem, 6vw, 7rem);
                -webkit-text-stroke: 1.5px #111827;
                color: transparent;
              "
              >{{ char }}</span
            >
          </div>
        </div>

        <!-- Meta info row -->
        <div class="hero-meta flex items-start gap-5 mb-10">
          <div
            class="w-px h-16 bg-gradient-to-b from-indigo-300 to-transparent shrink-0 mt-1"
          ></div>
          <p
            class="text-[15px] text-muted font-medium font-sans leading-[1.7] max-w-[380px]"
          >
            Kỹ sư phần mềm chuyên tối ưu hóa Core Backend, Database, và kiến
            trúc hệ thống chịu tải cao.
          </p>
        </div>

        <!-- Tech tags -->
        <div class="hero-meta flex flex-wrap gap-2 mb-10">
          <span
            v-for="tag in [
              'Java Spring',
              'Vue 3',
              'FastAPI',
              'MySQL',
              'Docker',
            ]"
            :key="tag"
            class="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full font-mono text-[11px] font-bold text-dark tracking-wider hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 cursor-default shadow-sm"
            >{{ tag }}</span
          >
        </div>

        <!-- CTA -->
        <div class="hero-meta flex items-center gap-5 flex-wrap">
          <a
            href="#projects"
            class="group relative inline-flex items-center gap-3 px-7 py-3.5 bg-dark text-white text-[13px] font-bold rounded-full overflow-hidden transition-all duration-300 hover:pl-9 hover:pr-5 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-300/40"
          >
            <span>Khám Phá Projects</span>
            <span
              class="group-hover:translate-x-1 transition-transform inline-block"
              >→</span
            >
          </a>
          <a
            href="https://github.com/LuongNuong131"
            target="_blank"
            class="group flex items-center gap-2 text-[13px] font-mono font-bold text-dark hover:text-indigo-600 transition-colors uppercase tracking-widest"
          >
            <span
              class="w-4 h-px bg-current group-hover:w-6 transition-all duration-300"
            ></span>
            GitHub ↗
          </a>
        </div>
      </div>

      <!-- RIGHT: Avatar -->
      <div
        class="hero-right shrink-0 w-full md:w-[240px] lg:w-[280px] flex flex-col gap-4 mt-12 md:mt-0"
      >
        <!-- Number badge top -->
        <div class="flex justify-end">
          <div
            class="px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm flex items-center gap-2"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            <span
              class="font-mono text-[10px] uppercase tracking-wider text-muted font-bold"
              >Portfolio 2024</span
            >
          </div>
        </div>

        <!-- Avatar card -->
        <div
          class="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-dark/15 border border-white/60"
          style="aspect-ratio: 3/4"
        >
          <img
            :src="avatarImg"
            alt="LuNu"
            class="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent"
          ></div>

          <!-- Overlay info -->
          <div class="absolute bottom-5 left-5 right-5">
            <div class="flex items-center justify-between mb-2">
              <span
                class="font-mono text-[9px] uppercase tracking-widest text-white/50"
                >Dev Profile</span
              >
              <span
                class="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-full font-mono text-[9px] text-white/70 border border-white/10"
              >
                Open to work
              </span>
            </div>
            <p
              class="text-white font-bold text-base font-display tracking-tight leading-tight"
            >
              Trần Quang Lương
            </p>
            <p
              class="text-white/50 font-mono text-[10px] uppercase tracking-widest mt-0.5"
            >
              LuNu · HCMC, VN
            </p>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-2">
          <div
            v-for="stat in [
              { val: '4+', label: 'Projects', color: 'text-dark' },
              { val: '3.0', label: 'GPA', color: 'text-indigo-600' },
              { val: 'FS', label: 'Full-Stack', color: 'text-dark' },
            ]"
            :key="stat.label"
            class="group bg-white border border-gray-100 rounded-2xl p-3 text-center shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300"
          >
            <span
              :class="[
                'block font-display font-extrabold text-xl',
                stat.color,
                'group-hover:scale-110 transition-transform duration-300 inline-block',
              ]"
              >{{ stat.val }}</span
            >
            <span
              class="block font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5"
              >{{ stat.label }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- ── BOTTOM BAR ── -->
    <div
      class="scroll-hint absolute bottom-0 left-0 right-0 z-10 px-8 md:px-14 py-5 flex justify-between items-center border-t border-gray-100/80"
    >
      <div class="flex items-center gap-4">
        <div class="flex flex-col gap-1">
          <div
            class="w-4 h-px bg-gray-400 animate-[slideRight_1.5s_ease-in-out_infinite]"
          ></div>
          <div
            class="w-4 h-px bg-gray-300 animate-[slideRight_1.5s_ease-in-out_0.2s_infinite]"
          ></div>
        </div>
        <span
          class="font-mono text-[10px] uppercase tracking-[0.25em] text-muted"
          >Scroll to explore</span
        >
      </div>
      <span
        class="font-mono text-[10px] uppercase tracking-[0.2em] text-muted hidden md:block"
      >
        © 2024 — System Architect
      </span>
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
