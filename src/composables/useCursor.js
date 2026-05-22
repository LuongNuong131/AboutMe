import { ref, onMounted } from "vue";
import gsap from "gsap";

export function useCursor() {
  const cursor = ref(null);
  const cursorText = ref(null);
  const isHovering = ref(false);

  onMounted(() => {
    if (!cursor.value) return;

    // Sử dụng lerp (linear interpolation) để tạo hiệu ứng mượt mà
    const xTo = gsap.quickTo(cursor.value, "x", {
      duration: 0.6,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(cursor.value, "y", {
      duration: 0.6,
      ease: "power2.out",
    });

    // Xử lý di chuyển chuột
    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Xử lý hover vào các phần tử interactive
    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Kiểm tra nếu là link, button, hoặc có class "cursor-interactive"
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-interactive") ||
        target.closest("a") ||
        target.closest("button")
      ) {
        isHovering.value = true;
        gsap.to(cursor.value, {
          width: "3rem",
          height: "3rem",
          duration: 0.3,
          ease: "back.out(2)",
        });
        gsap.to(cursorText.value, {
          opacity: 1,
          duration: 0.2,
        });
      }
    };

    // Xử lý rời khỏi các phần tử interactive
    const handleMouseLeave = () => {
      isHovering.value = false;
      gsap.to(cursor.value, {
        width: "1.25rem",
        height: "1.25rem",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(cursorText.value, {
        opacity: 0,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  });

  return {
    cursor,
    cursorText,
    isHovering,
  };
}
