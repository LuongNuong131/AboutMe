<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { toolsStack } from "../data/tools";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from(".editorial-reveal", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
  });

  gsap.to(".marquee-content", {
    xPercent: -50,
    ease: "none",
    duration: 25,
    repeat: -1,
  });
});
</script>

<template>
  <section id="about" class="pt-32 md:pt-48 bg-background relative z-10">
    <div class="px-6 md:px-12 mb-16 md:mb-24 editorial-reveal">
      <h2
        class="text-[10vw] md:text-[7vw] font-display font-extrabold text-dark leading-[0.9] tracking-tight uppercase"
      >
        Tư Duy <br />Hệ Thống.
      </h2>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-12 border-y border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 editorial-reveal bg-white"
    >
      <div class="col-span-1 md:col-span-3 p-6 md:p-12">
        <span
          class="block font-mono text-xs uppercase tracking-widest text-muted mb-8"
          >// Hồ sơ Engineer</span
        >
        <ul class="space-y-6 text-sm font-sans font-semibold text-dark">
          <li class="flex justify-between border-b border-gray-100 pb-2">
            <span class="text-muted">Tên</span> <span>Trần Quang Lương</span>
          </li>
          <li class="flex justify-between border-b border-gray-100 pb-2">
            <span class="text-muted">Chuyên môn</span>
            <span class="text-right">Full-Stack Developer</span>
          </li>
          <li class="flex justify-between border-b border-gray-100 pb-2">
            <span class="text-muted">GPA Học vấn</span>
            <span class="text-right">GPA: 3.0</span>
          </li>
        </ul>
      </div>

      <div
        class="col-span-1 md:col-span-5 p-6 md:p-12 flex flex-col justify-center"
      >
        <h3
          class="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-dark mb-6 leading-tight uppercase"
        >
          Kiến trúc vững chắc, <br /><span class="text-indigo-600"
            >tương lai mở rộng.</span
          >
        </h3>
        <p
          class="text-base text-muted font-sans font-medium leading-loose max-w-2xl"
        >
          Hệ thống không chỉ là tập hợp các dòng Code, mà là sự phối hợp chặt
          chẽ giữa logic và hạ tầng. Tôi tập trung vào việc tối ưu hóa hiệu năng
          Database, thiết kế API chuẩn, và xây dựng các core backend đáp ứng nhu
          cầu thực tế.
        </p>
      </div>

      <div class="col-span-1 md:col-span-4 p-6 md:p-12">
        <span
          class="block font-mono text-xs uppercase tracking-widest text-muted mb-8"
          >// Lõi Công Nghệ // Tools</span
        >
        <div class="flex flex-wrap gap-x-3 gap-y-3.5">
          <span
            v-for="tool in toolsStack"
            :key="tool.name"
            class="px-4 py-2 border border-gray-200 bg-gray-50/50 rounded-full text-sm font-semibold font-sans text-dark shadow-sm hover:border-indigo-200 hover:bg-white hover:text-indigo-600 transition-all duration-300"
          >
            {{ tool.name }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="overflow-hidden whitespace-nowrap py-6 md:py-10 border-b border-dark bg-dark text-white select-none editorial-reveal relative"
    >
      <div
        class="marquee-content flex text-[6vw] md:text-[4vw] font-display font-extrabold uppercase tracking-widest"
      >
        <span
          >&nbsp;OPTIMIZED BACKEND — HIGH LOAD ARCHITECTURE — DATABASE DESIGN —
          SCALABLE SYSTEMS — OPTIMIZED BACKEND —&nbsp;</span
        >
        <span
          >&nbsp;OPTIMIZED BACKEND — HIGH LOAD ARCHITECTURE — DATABASE DESIGN —
          SCALABLE SYSTEMS — OPTIMIZED BACKEND —&nbsp;</span
        >
      </div>
    </div>
  </section>
</template>
