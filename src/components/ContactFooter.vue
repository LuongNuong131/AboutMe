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
  },
  {
    id: "phone",
    label: "Số điện thoại",
    value: "0907987126", // Bạn có thể đổi số thật ở đây
    icon: Phone,
    color: "text-green-500",
    bgColor: "bg-green-50",
    link: "tel:0907987126",
    actionLabel: "Gọi ngay",
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
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "facebook.com/LuongNuong131", // Bạn có thể đổi link thật ở đây
    icon: MessageCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    link: "https://facebook.com/LuongNuong131",
    actionLabel: "Kết nối",
  },
];

const activeContact = ref(null);
const isModalOpen = ref(false);
const copiedId = ref(null);

const openModal = (contact) => {
  activeContact.value = contact;
  isModalOpen.value = true;

  // GSAP Animation cho Modal
  setTimeout(() => {
    gsap.fromTo(
      ".modal-content",
      { scale: 0.8, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" },
    );
    gsap.fromTo(
      ".modal-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
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
  gsap.to(".modal-overlay", { opacity: 0, duration: 0.3 });
};

const copyToClipboard = (text, id) => {
  navigator.clipboard.writeText(text);
  copiedId.value = id;
  setTimeout(() => {
    copiedId.value = null;
  }, 2000);
};

onMounted(() => {
  gsap.from(".footer-reveal", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 90%",
    },
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
    class="py-24 md:py-32 bg-white border-t border-gray-100 relative overflow-hidden"
  >
    <!-- Background Decoration -->
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"
    ></div>

    <div class="px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div class="mb-16 footer-reveal">
        <h2
          class="text-4xl md:text-6xl font-bold text-dark tracking-tighter mb-4"
        >
          Let's Connect.
        </h2>
        <p class="text-muted text-lg font-medium max-w-xl">
          Bạn có ý tưởng hay hoặc muốn hợp tác? Đừng ngần ngại liên hệ với tôi
          qua các kênh dưới đây.
        </p>
      </div>

      <!-- Contact Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 footer-reveal"
      >
        <div
          v-for="contact in contacts"
          :key="contact.id"
          @click="openModal(contact)"
          class="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-interactive"
        >
          <div
            :class="[
              contact.bgColor,
              contact.color,
              'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500',
            ]"
          >
            <component :is="contact.icon" :size="28" />
          </div>
          <h3 class="text-xl font-bold text-dark mb-2">{{ contact.label }}</h3>
          <div
            class="flex items-center gap-2 text-indigo-600 font-mono text-xs font-bold uppercase tracking-widest"
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
        class="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 footer-reveal"
      >
        <p class="text-muted text-sm font-medium">
          © 2024 Trần Quang Lương. Built with Vue.js & GSAP.
        </p>
        <div class="flex gap-8">
          <a
            href="#"
            class="text-sm font-bold text-dark hover:text-indigo-600 transition-colors"
            >Back to top ↑</a
          >
        </div>
      </div>
    </div>

    <!-- Modal Popup -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[10000] flex items-center justify-center px-6"
      >
        <!-- Overlay -->
        <div
          class="modal-overlay absolute inset-0 bg-dark/40 backdrop-blur-sm"
          @click="closeModal"
        ></div>

        <!-- Content -->
        <div
          class="modal-content relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-10"
        >
          <button
            @click="closeModal"
            class="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-muted hover:text-dark"
          >
            <X :size="24" />
          </button>

          <div
            v-if="activeContact"
            class="flex flex-col items-center text-center"
          >
            <div
              :class="[
                activeContact.bgColor,
                activeContact.color,
                'w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-inner',
              ]"
            >
              <component :is="activeContact.icon" :size="40" />
            </div>

            <h3
              class="text-sm font-mono font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2"
            >
              {{ activeContact.label }}
            </h3>

            <div class="relative group mb-10 w-full">
              <p
                class="text-2xl md:text-3xl font-bold text-dark break-all leading-tight"
              >
                {{ activeContact.value }}
              </p>
              <button
                @click="copyToClipboard(activeContact.value, activeContact.id)"
                class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl text-xs font-bold text-muted hover:text-dark transition-all"
              >
                <component
                  :is="copiedId === activeContact.id ? Check : Copy"
                  :size="14"
                />
                {{
                  copiedId === activeContact.id ? "Đã sao chép!" : "Sao chép"
                }}
              </button>
            </div>

            <a
              :href="activeContact.link"
              target="_blank"
              class="w-full py-5 bg-dark text-white rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-dark/10"
            >
              {{ activeContact.actionLabel }}
              <ExternalLink :size="20" />
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </footer>
</template>

<style scoped>
.modal-content {
  will-change: transform, opacity;
}
</style>
