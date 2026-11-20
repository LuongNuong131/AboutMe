<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { ArrowDownToLine, Menu, X } from "@lucide/vue";
import { locale, t } from "../i18n";

const route = useRoute();
const menuOpen = ref(false);
const menuButton = ref();
const cvUrl = `${import.meta.env.BASE_URL}cv-tran-quang-luong.pdf`;
const sections = [
  { id: "work", vi: "Dự án", en: "Work" },
  { id: "about", vi: "Về tôi", en: "About" },
  { id: "contact", vi: "Liên hệ", en: "Contact" },
];

watch(() => route.fullPath, () => { menuOpen.value = false; });

function closeMenu() {
  if (!menuOpen.value) return;
  menuOpen.value = false;
  menuButton.value?.focus();
}
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="site-header-inner wrap">
      <RouterLink class="wordmark" :to="{ name: 'home' }" :aria-label="t('Trần Quang Lương, trang chủ', 'Trần Quang Lương, home')">
        <span class="wordmark-icon" aria-hidden="true">LQ</span>
        <span class="wordmark-name">Trần Quang Lương</span>
      </RouterLink>

      <button
        ref="menuButton"
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-nav"
        :aria-label="menuOpen ? t('Đóng menu', 'Close menu') : t('Mở menu', 'Open menu')"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="21" aria-hidden="true" />
        <Menu v-else :size="21" aria-hidden="true" />
      </button>

      <nav id="site-nav" :class="{ 'is-open': menuOpen }" :aria-label="t('Điều hướng chính', 'Main navigation')">
        <RouterLink
          v-for="section in sections"
          :key="section.id"
          :to="{ name: 'home', hash: '#' + section.id }"
          :aria-current="route.hash === '#' + section.id ? 'location' : undefined"
          @click="menuOpen = false"
        >{{ t(section.vi, section.en) }}</RouterLink>
      </nav>

      <div class="site-actions">
        <button
          class="language-button"
          type="button"
          :lang="locale === 'vi' ? 'en' : 'vi'"
          :aria-label="t('Switch to English', 'Chuyển sang tiếng Việt')"
          @click="locale = locale === 'vi' ? 'en' : 'vi'"
        >{{ t("EN", "VI") }}</button>
        <a class="cv-button" :href="cvUrl" download="Tran-Quang-Luong-CV.pdf">
          <span class="cv-label">{{ t("Tải CV", "Download CV") }}</span>
          <ArrowDownToLine :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>
  </header>
</template>
