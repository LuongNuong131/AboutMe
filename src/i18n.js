import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      contact: "Contact",
      available: "Available",
      scroll: "Scroll to explore",
    },
    hero: {
      role: "Full-Stack Developer · System Engineer",
      desc: "Software Engineer specializing in optimizing Core Backend, Database, and high-load system architectures.",
      explore: "Explore Projects",
      profile: "Dev Profile",
      opentowork: "Open to work",
    },
    project: {
      title: "Case Studies",
      subtitle: "Real Projects",
    },
  },
  vi: {
    nav: {
      contact: "Liên hệ",
      available: "Sẵn sàng",
      scroll: "Cuộn để khám phá",
    },
    hero: {
      role: "Full-Stack Developer · Kỹ Sư Hệ Thống",
      desc: "Kỹ sư phần mềm chuyên tối ưu hóa Core Backend, Database, và kiến trúc hệ thống chịu tải cao.",
      explore: "Khám Phá Dự Án",
      profile: "Hồ Sơ Năng Lực",
      opentowork: "Sẵn sàng làm việc",
    },
    project: {
      title: "Dự Án Nổi Bật",
      subtitle: "Thực Chiến",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "vi",
  fallbackLocale: "en",
  messages,
});
