import { ref, watch } from "vue";

const preferenceKey = "portfolio-language";

function readLocale() {
  try {
    return localStorage.getItem(preferenceKey) === "en" ? "en" : "vi";
  } catch {
    return "vi";
  }
}

export const locale = ref(readLocale());
export const t = (vi, en) => locale.value === "vi" ? vi : en;
export const localize = (content) => content[locale.value];

watch(locale, (value) => {
  document.documentElement.lang = value;
  try {
    localStorage.setItem(preferenceKey, value);
  } catch {
    // Language switching still works without browser storage.
  }
}, { immediate: true });
