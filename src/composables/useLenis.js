import { onMounted, onBeforeUnmount } from "vue";
import Lenis from "lenis";

export function useLenis() {
  let lenis = null;

  onMounted(() => {
    // Khởi tạo Lenis cho smooth scrolling
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Animation loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  });

  onBeforeUnmount(() => {
    if (lenis) {
      lenis.destroy();
    }
  });

  return { lenis };
}
