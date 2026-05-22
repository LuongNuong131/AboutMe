import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

export function useCursor() {
  const cursor = ref(null);
  const cursorText = ref("");
  const isHovering = ref(false);

  onMounted(() => {
    if (!cursor.value) return;

    // Lerp bám chuột mượt mà
    const xTo = gsap.quickTo(cursor.value, "x", {
      duration: 0.2,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursor.value, "y", {
      duration: 0.2,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, .cursor-interactive");
      if (target) {
        isHovering.value = true;
        // Lấy text hiển thị từ data-cursor hoặc mặc định
        const text = target.getAttribute("data-cursor") || "VIEW";
        cursorText.value = text;

        // Phình to con trỏ, đổi nền đen/trắng theo mix-blend
        gsap.to(cursor.value, {
          width: "5rem",
          height: "5rem",
          duration: 0.4,
          ease: "back.out(1.5)",
          backgroundColor: "#ffffff",
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, .cursor-interactive");
      if (target) {
        isHovering.value = false;
        cursorText.value = "";

        // Thu nhỏ lại
        gsap.to(cursor.value, {
          width: "1rem",
          height: "1rem",
          duration: 0.3,
          ease: "power2.out",
          backgroundColor: "#ffffff",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    onUnmounted(() => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    });
  });

  return { cursor, cursorText, isHovering };
}
