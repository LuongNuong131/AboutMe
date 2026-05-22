import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@unhead/vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import Lenis from "lenis";
import { i18n } from "./i18n";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Đăng ký ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Cài đặt Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const app = createApp(App);

// Custom Directive: v-magnetic (Tạo hiệu ứng hút chuột cho nút bấm)
app.directive("magnetic", {
  mounted(el) {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.4,
        ease: "power2.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
    });
  },
});

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(createHead());
app.mount("#app");
