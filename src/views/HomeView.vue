<script setup>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectShowcase from "../components/ProjectShowcase.vue";
import ContactFooter from "../components/ContactFooter.vue";
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  // Hiệu ứng hover link bằng GSAP cho các link có class magnetic-link
  const links = document.querySelectorAll(".magnetic-link");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const cursor = document.querySelector(".hidden.md\\:flex");
      if (cursor) {
        gsap.to(cursor, {
          scale: 3,
          duration: 0.3,
          ease: "back.out(2)",
        });
      }
    });
    link.addEventListener("mouseleave", () => {
      const cursor = document.querySelector(".hidden.md\\:flex");
      if (cursor) {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  });
});
</script>

<template>
  <main class="bg-background">
    <HeroSection />
    <AboutSection />
    <ProjectShowcase />
    <ContactFooter />
  </main>
</template>
