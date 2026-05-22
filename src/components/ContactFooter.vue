<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import {
  Mail,
  Phone,
  Globe,
  MessageCircle,
  ExternalLink,
  X,
  Copy,
  Check,
} from "@lucide/vue";

const contacts = [
  {
    id: "gmail",
    label: "Gmail",
    value: "tranquangluong06@gmail.com",
    icon: Mail,
    color: "text-red-500",
    bgColor: "bg-red-50",
    link: "mailto:tranquangluong06@gmail.com",
    actionLabel: "Gửi Email",
    particleColors: ["#ef4444", "#f87171", "#fca5a5"],
  },
  {
    id: "phone",
    label: "Số điện thoại",
    value: "0907987126",
    icon: Phone,
    color: "text-green-500",
    bgColor: "bg-green-50",
    link: "tel:0907987126",
    actionLabel: "Gọi ngay",
    particleColors: ["#10b981", "#34d399", "#6ee7b7"],
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "Trần Quang Lương",
    icon: MessageCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    link: "https://www.facebook.com/LuongNuong131",
    actionLabel: "Kết bạn",
    particleColors: ["#2563eb", "#3b82f6", "#60a5fa"],
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/LuongNuong131",
    icon: Globe,
    color: "text-gray-900",
    bgColor: "bg-gray-100",
    link: "https://github.com/LuongNuong131",
    actionLabel: "Ghé thăm",
    particleColors: ["#111827", "#374151", "#6b7280"],
  },
];

const activeContact = ref(null);
const isModalOpen = ref(false);
const copiedId = ref(null);

const openModal = (contact) => {
  activeContact.value = contact;
  isModalOpen.value = true;
  setTimeout(() => {
    gsap.fromTo(
      ".modal-content",
      { scale: 0.8, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" },
    );
  }, 0);
};

const closeModal = () => {
  gsap.to(".modal-content", {
    scale: 0.8,
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      isModalOpen.value = false;
      activeContact.value = null;
    },
  });
};

// Hiệu ứng hạt nổ (Particle Explosion) theo màu của nền tảng
const explodeParticles = (e, colors) => {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.className =
      "absolute w-2.5 h-2.5 rounded-full pointer-events-none z-[10001]";
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(particle);

    gsap.set(particle, { x: e.clientX, y: e.clientY });
    gsap.to(particle, {
      x: e.clientX + (Math.random() - 0.5) * 180,
      y: e.clientY + (Math.random() - 0.5) * 180,
      scale: 0,
      opacity: 0,
      duration: 0.6 + Math.random() * 0.5,
      ease: "power3.out",
      onComplete: () => particle.remove(),
    });
  }
};

const copyToClipboard = (e, text, id, colors) => {
  navigator.clipboard.writeText(text);
  copiedId.value = id;
  explodeParticles(e, colors);
  setTimeout(() => {
    copiedId.value = null;
  }, 2500);
};

// Hiệu ứng Magnetic Hover 3D (Thẻ hút từ tính)
const handleMagneticMove = (e, cardId) => {
  if (window.innerWidth < 768) return;
  const el = document.getElementById(cardId);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  gsap.to(el, {
    x: x * 0.15,
    y: y * 0.15,
    rotateX: -y * 0.05,
    rotateY: x * 0.05,
    duration: 0.4,
    ease: "power2.out",
  });
};

const handleMagneticLeave = (cardId) => {
  const el = document.getElementById(cardId);
  if (!el) return;

  gsap.to(el, {
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    duration: 0.7,
    ease: "elastic.out(1, 0.4)",
  });
};

onMounted(() => {
  gsap.from(".footer-reveal", {
    scrollTrigger: { trigger: "#contact", start: "top 90%" },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
  });
});
</script>

<template>
  <footer
    id="contact"
    class="py-24 md:py-32 bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 relative overflow-hidden transition-colors duration-700"
  >
    <div
      class="absolute top-0 right-0 w-80 h-80 bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 pointer-events-none"
    ></div>

    <div class="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div class="mb-16 footer-reveal">
        <!-- HUD Terminal Mockup -->
        <div
          class="font-mono text-[10px] md:text-xs text-indigo-500 mb-6 flex flex-col gap-1 tracking-widest opacity-80 select-none"
        >
          <span class="text-green-500"
            >> [SYS_INIT] NETWORK_PORT: 8080 ... [OK]</span
          >
          <span class="animate-pulse"
            >> STATUS: AWAITING_CONNECTION...<span
              class="inline-block w-1.5 h-3 bg-indigo-500 ml-1 translate-y-0.5"
            ></span
          ></span>
          <span class="text-emerald-500">> PING: 12ms</span>
        </div>

        <h2
          class="text-4xl md:text-6xl font-display font-bold text-dark dark:text-white tracking-tighter mb-4 uppercase"
        >
          Let's Connect.
        </h2>
        <p
          class="text-muted dark:text-slate-400 text-lg font-medium max-w-xl leading-relaxed"
        >
          Bạn có ý tưởng hay hoặc muốn hợp tác? Hệ thống luôn mở cổng chờ tín
          hiệu từ bạn qua các kênh dưới đây.
        </p>
      </div>

      <!-- Lưới 4 cột hiển thị hoàn hảo cân đối -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 footer-reveal perspective-1000"
      >
        <div
          v-for="contact in contacts"
          :key="contact.id"
          :id="'contact-card-' + contact.id"
          @click="openModal(contact)"
          @mousemove="
            (e) => handleMagneticMove(e, 'contact-card-' + contact.id)
          "
          @mouseleave="handleMagneticLeave('contact-card-' + contact.id)"
          class="cursor-interactive group p-8 bg-gray-50 dark:bg-slate-900/50 rounded-3xl border border-gray-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-white dark:hover:bg-slate-800 hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.2)] transition-colors duration-300 transform-style-3d will-change-transform"
          data-cursor="CLICK"
        >
          <div
            :class="[
              contact.bgColor,
              contact.color,
              'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500',
            ]"
          >
            <component :is="contact.icon" :size="28" />
          </div>
          <h3 class="text-xl font-bold text-dark dark:text-white mb-2">
            {{ contact.label }}
          </h3>
          <div
            class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest"
          >
            <span>View Info</span>
            <ExternalLink
              :size="14"
              class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div
        class="mt-24 pt-12 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 footer-reveal"
      >
        <p class="text-muted dark:text-slate-400 text-sm font-medium">
          © 2026 Trần Quang Lương. Built with Vue.js & GSAP.
        </p>
        <div class="flex gap-8">
          <a
            href="#"
            class="cursor-interactive text-sm font-bold text-dark dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            data-cursor="TOP"
            >Back to top ↑</a
          >
        </div>
      </div>
    </div>

    <!-- Modal Popup -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[10000] flex items-center justify-center px-6 perspective-1000"
      >
        <div
          class="modal-overlay absolute inset-0 bg-dark/60 dark:bg-black/80 backdrop-blur-md"
          @click="closeModal"
        ></div>
        <div
          class="modal-content relative w-full max-w-md bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-10 transform-style-3d"
        >
          <button
            @click="closeModal"
            class="cursor-interactive absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full transition-colors text-muted dark:text-slate-300 hover:text-dark dark:hover:text-white"
          >
            <X :size="20" />
          </button>

          <div
            v-if="activeContact"
            class="flex flex-col items-center text-center mt-2"
          >
            <div
              :class="[
                activeContact.bgColor,
                activeContact.color,
                'w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-inner',
              ]"
            >
              <component :is="activeContact.icon" :size="40" />
            </div>

            <p
              class="text-2xl font-bold text-dark dark:text-white break-all leading-tight mb-2"
            >
              {{ activeContact.value }}
            </p>
            <p
              class="text-sm font-mono text-muted dark:text-slate-400 mb-8 uppercase tracking-widest"
            >
              // {{ activeContact.label }} //
            </p>

            <button
              @click="
                (e) =>
                  copyToClipboard(
                    e,
                    activeContact.value,
                    activeContact.id,
                    activeContact.particleColors,
                  )
              "
              class="cursor-interactive mb-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-900/30 border border-gray-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 rounded-xl text-sm font-bold text-dark dark:text-white transition-all shadow-sm active:scale-95"
              data-cursor="COPY"
            >
              <component
                :is="copiedId === activeContact.id ? Check : Copy"
                :size="18"
                :class="
                  copiedId === activeContact.id
                    ? 'text-green-500'
                    : 'text-indigo-500'
                "
              />
              {{
                copiedId === activeContact.id
                  ? "System.clipboard = Copied!"
                  : "Copy to Clipboard"
              }}
            </button>

            <a
              :href="activeContact.link"
              target="_blank"
              class="cursor-interactive w-full py-4 bg-dark dark:bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-indigo-500/30"
              data-cursor="GO"
            >
              {{ activeContact.actionLabel }} <ExternalLink :size="20" />
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </footer>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
</style>
