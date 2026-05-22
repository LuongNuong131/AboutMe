<script setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sử dụng Template Ref để cô lập phạm vi DOM cho GSAP
const aboutRef = ref(null);
let ctx;

const stats = [
  { value: "3+", label: "Năm học tập" },
  { value: "6", label: "Dự án thực chiến" },
  { value: "12+", label: "Công nghệ" },
  { value: "3.0", label: "GPA" },
];

const advancedTools = [
  "Java Spring Boot",
  "Vue.js 3",
  "Python Automation",
  "Selenium / Playwright",
  "MySQL / SQL Server",
  "Pine Script",
  "FastAPI",
  "WebSockets / STOMP",
  "Docker Compose",
  "Git / CI/CD",
];

onMounted(() => {
  nextTick(() => {
    // Độ trễ 1000ms để đảm bảo Page Transition và các phần tử ở trên (Hero section)
    // đã hoàn tất việc render, tránh lệch trục tọa độ Y khi tính toán vị trí cuộn
    setTimeout(() => {
      ctx = gsap.context(() => {
        // 1. Diễn hoạt cho Tiêu đề
        gsap.fromTo(
          ".about-heading",
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".about-heading",
              start: "top 85%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
        );

        // 2. Diễn hoạt cho khối Thống kê (Stats)
        gsap.fromTo(
          ".stat-block",
          { y: 40, opacity: 0, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: ".stats-row",
              start: "top 90%",
              toggleActions: "play none none none",
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "back.out(1.4)",
          },
        );

        // 3. Diễn hoạt cho Khối tư duy hệ thống (About Cards)
        // Chuyển hoàn toàn sang từ fromTo để ép trình duyệt render chính xác opacity: 1
        gsap.fromTo(
          ".about-card",
          { y: 45, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ".about-grid",
              start: "top bottom-=50px", // Trigger an toàn ngay khi chạm cạnh dưới màn hình
              toggleActions: "play none none none",
              invalidateOnRefresh: true, // Tự động tính toán lại nếu resize hoặc cập nhật layout
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
          },
        );

        // 4. Vòng chạy chữ Marquee liên tục không đổi
        gsap.to(".marquee-track", {
          xPercent: -50,
          ease: "none",
          duration: 25,
          repeat: -1,
        });
      }, aboutRef.value); // Khoanh vùng chỉ kích hoạt GSAP trong phạm vi component này

      // Buộc ScrollTrigger đo đạc lại toàn bộ vị trí các điểm neo trên trang
      ScrollTrigger.refresh();
    }, 1000);
  });
});

// Dọn dẹp sạch sẽ tài nguyên khi chuyển trang, tránh rò rỉ bộ nhớ
onUnmounted(() => {
  if (ctx) ctx.revert();
});
</script>

<template>
  <section
    id="about"
    ref="aboutRef"
    class="pt-24 md:pt-32 relative z-10 overflow-hidden bg-background dark:bg-slate-950 transition-colors duration-700"
  >
    <div
      class="absolute inset-0 z-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
      style="
        background-image:
          linear-gradient(rgba(99, 102, 241, 1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 1) 1px, transparent 1px);
        background-size: 40px 40px;
      "
    ></div>

    <div
      class="absolute top-0 left-14 bottom-0 w-px bg-gray-200/50 dark:bg-slate-800/40 pointer-events-none hidden md:block"
    ></div>
    <div
      class="absolute top-0 right-14 bottom-0 w-px bg-gray-200/50 dark:bg-slate-800/40 pointer-events-none hidden md:block"
    ></div>

    <div class="px-8 md:px-14 mb-12 about-heading relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="relative">
          <div
            class="font-mono text-[9px] text-indigo-500 uppercase tracking-[0.25em] mb-3 flex items-center gap-2 select-none"
          >
            <span
              class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"
            ></span>
            <span>[SYS_SECTOR_02_ACTIVE] // COORD_13.01</span>
          </div>
          <h2
            class="text-[9vw] md:text-[5.5vw] font-heading font-extrabold text-dark dark:text-white leading-[1.05] tracking-tighter uppercase"
          >
            Tư Duy<br />Hệ Thống.
          </h2>
        </div>

        <div class="text-left md:text-right font-mono select-none opacity-80">
          <div
            class="text-[10px] text-muted dark:text-slate-400 uppercase tracking-widest mb-1"
          >
            // SYSTEM DATA LOG
          </div>
          <div class="text-xs font-bold text-dark dark:text-indigo-400">
            LOC: HCMC_VN // LATENCY: 0ms
          </div>
          <div
            class="mt-2 text-gray-300 dark:text-slate-700 font-barcode text-xl tracking-normal hidden md:block"
          >
            ||||| | |||| || ||| ||| | ||
          </div>
        </div>
      </div>
    </div>

    <div class="px-8 md:px-14 mb-12 stats-row relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="stat-block group p-6 rounded-2xl border border-gray-100 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-[0_15px_30px_-10px_rgba(99,102,241,0.1)] transition-all duration-300"
        >
          <div
            class="text-3xl md:text-4xl font-display font-bold text-dark dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
          >
            {{ stat.value }}
          </div>
          <div
            class="text-[10px] font-mono text-muted dark:text-slate-400 uppercase tracking-widest mt-1.5"
          >
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="about-grid px-8 md:px-14 grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10"
    >
      <div
        class="about-card col-span-1 md:col-span-4 p-7 rounded-3xl border border-gray-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-[0.05]"
          style="background: radial-gradient(circle, #6366f1, transparent)"
        ></div>
        <span
          class="block font-mono text-[9px] uppercase tracking-widest text-indigo-500 mb-6 font-bold"
        >
          // BẢNG THÔNG TIN CÁ NHÂN
        </span>
        <ul class="space-y-3.5 text-xs font-sans">
          <li
            class="flex justify-between items-center pb-2.5 border-b border-gray-100 dark:border-slate-800/60"
          >
            <span class="text-muted dark:text-slate-400 font-medium"
              >Kỹ sư</span
            >
            <span class="font-bold text-dark dark:text-white"
              >Trần Quang Lương</span
            >
          </li>
          <li
            class="flex justify-between items-center pb-2.5 border-b border-gray-100 dark:border-slate-800/60"
          >
            <span class="text-muted dark:text-slate-400 font-medium"
              >Ngày sinh</span
            >
            <span class="font-bold text-dark dark:text-white font-mono"
              >13.01.2005</span
            >
          </li>
          <li
            class="flex justify-between items-center pb-2.5 border-b border-gray-100 dark:border-slate-800/60"
          >
            <span class="text-muted dark:text-slate-400 font-medium"
              >Khu vực hoạt động</span
            >
            <span class="font-bold text-dark dark:text-white"
              >Hóc Môn / Quận 12, HCM</span
            >
          </li>
          <li
            class="flex flex-col pb-2.5 border-b border-gray-100 dark:border-slate-800/60 gap-1.5"
          >
            <span class="text-muted dark:text-slate-400 font-medium"
              >Sở thích chuyên môn</span
            >
            <span
              class="font-bold text-indigo-600 dark:text-indigo-400 text-[11px] leading-relaxed"
            >
              Python Automation / GameFi MMORPG / SMC Crypto Trading / G-Funk
              Rap
            </span>
          </li>
          <li class="flex justify-between items-center pt-1">
            <span class="text-muted dark:text-slate-400 font-medium"
              >Trạng thái cổng mạng</span
            >
            <span
              class="flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 font-mono text-[11px]"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
              ></span>
              OPEN_TO_WORK
            </span>
          </li>
        </ul>
      </div>

      <div
        class="about-card col-span-1 md:col-span-5 p-7 rounded-3xl border border-indigo-100 dark:border-indigo-950 bg-gradient-to-br from-indigo-50/40 to-white dark:from-indigo-950/10 dark:to-slate-900/50 backdrop-blur-md hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-center relative overflow-hidden"
      >
        <div
          class="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-[0.05]"
          style="background: radial-gradient(circle, #6366f1, transparent)"
        ></div>
        <span
          class="block font-mono text-[9px] uppercase tracking-widest text-indigo-500 mb-4 font-bold"
        >
          // ĐỊNH HƯỚNG PHÁT TRIỂN
        </span>
        <h3
          class="text-xl md:text-2xl font-display font-bold tracking-tight text-dark dark:text-white mb-4 leading-tight uppercase"
        >
          Kiến trúc vững chắc,<br />
          <span class="text-indigo-600 dark:text-indigo-400"
            >Hệ thống tối ưu toàn diện.</span
          >
        </h3>
        <p
          class="text-xs md:text-sm text-muted dark:text-slate-400 font-medium leading-relaxed font-sans"
        >
          Là sinh viên chuyên ngành Phát triển phần mềm tại FPT Polytechnic, tôi
          tập trung chuyên sâu vào giải pháp Core Backend, xử lý giải thuật
          logic GameFi và khai thác tự động hóa (Python Automation). Định hướng
          thiết lập các kiến trúc hạ tầng phần mềm phân tán, có tính chịu tải
          cao và tối ưu hóa tài nguyên vận hành toàn trình.
        </p>
      </div>

      <div
        class="about-card col-span-1 md:col-span-3 p-7 rounded-3xl border border-gray-100 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md transition-all duration-300 relative overflow-hidden"
      >
        <span
          class="block font-mono text-[9px] uppercase tracking-widest text-indigo-500 mb-5 font-bold"
        >
          // VŨ KHÍ KHAI THÁC
        </span>
        <div class="tools-grid flex flex-wrap gap-2">
          <span
            v-for="(tool, i) in advancedTools"
            :key="tool"
            class="tool-tag floating-tag neon-hover px-2.5 py-1.5 border border-gray-200/60 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/40 rounded-xl text-[10px] font-bold font-mono text-dark dark:text-slate-300 transition-all duration-300 cursor-none relative overflow-hidden select-none"
            :style="{ animationDelay: `${i * 0.15}s` }"
          >
            {{ tool }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="overflow-hidden whitespace-nowrap py-5 md:py-7 mt-16 bg-dark dark:bg-indigo-950 text-white select-none relative z-10 border-t border-b border-white/5"
      style="will-change: transform"
    >
      <div
        class="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent opacity-20"
      ></div>
      <div
        class="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent opacity-20"
      ></div>
      <div
        class="marquee-track flex text-[4.5vw] md:text-[2.8vw] font-display font-extrabold uppercase tracking-widest"
      >
        <span>&nbsp;OPTIMIZED BACKEND ARCHITECTURE&nbsp;✦&nbsp;</span>
        <span>&nbsp;PYTHON AUTOMATION EXPERT&nbsp;✦&nbsp;</span>
        <span>&nbsp;HIGH LOAD SYSTEM DESIGN&nbsp;✦&nbsp;</span>
        <span>&nbsp;FULL-STACK DEPLOYMENT&nbsp;✦&nbsp;</span>
        <span>&nbsp;OPTIMIZED BACKEND ARCHITECTURE&nbsp;✦&nbsp;</span>
        <span>&nbsp;PYTHON AUTOMATION EXPERT&nbsp;✦&nbsp;</span>
        <span>&nbsp;HIGH LOAD SYSTEM DESIGN&nbsp;✦&nbsp;</span>
        <span>&nbsp;FULL-STACK DEPLOYMENT&nbsp;✦&nbsp;</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Barcode+128&display=swap");
.font-barcode {
  font-family: "Libre Barcode 128", sans-serif;
}
</style>
