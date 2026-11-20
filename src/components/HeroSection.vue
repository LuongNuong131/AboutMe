<script setup>
import { ArrowDown, ArrowUpRight, GitBranch, MapPin } from "@lucide/vue";
import portrait from "../assets/AnhThe.webp";
import { person, publicAsset } from "../data/site";
import { t } from "../i18n";

const pointerLight = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");

function moveLight(event) {
  if (!pointerLight.matches || event.pointerType !== "mouse") return;
  const section = event.currentTarget;
  const { left, top } = section.getBoundingClientRect();
  section.style.setProperty("--light-x", `${event.clientX - left}px`);
  section.style.setProperty("--light-y", `${event.clientY - top}px`);
}
</script>

<template>
  <section id="home" class="hero" aria-labelledby="hero-title" tabindex="-1" @pointermove="moveLight">
    <picture class="hero-art" aria-hidden="true">
      <source media="(max-width: 760px)" :srcset="publicAsset('art/optical-module-small.webp')" />
      <img :src="publicAsset('art/optical-module.webp')" width="1536" height="1024" alt="" decoding="async" />
    </picture>

    <div class="hero-inner wrap">
      <div class="hero-copy">
        <p class="hero-role"><span aria-hidden="true"></span>Full-Stack Developer</p>
        <h1 id="hero-title">Trần Quang<br />Lương<span aria-hidden="true">.</span></h1>
        <p class="hero-description">{{ t(
          "Tôi xây dựng sản phẩm web từ giao diện đến backend, với trọng tâm là dữ liệu và quy trình vận hành.",
          "I build web products from interface to backend, with a focus on data and operational workflows.",
        ) }}</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary" :to="{ name: 'home', hash: '#work' }">
            {{ t("Khám phá dự án", "Explore my work") }} <ArrowDown :size="17" aria-hidden="true" />
          </RouterLink>
          <a class="button button-quiet" :href="person.github" target="_blank" rel="noopener">
            <GitBranch :size="16" aria-hidden="true" /> GitHub <ArrowUpRight :size="15" aria-hidden="true" />
          </a>
        </div>
      </div>

      <figure class="portrait">
        <div class="portrait-media">
          <img
            :src="portrait"
            :alt="t('Chân dung Trần Quang Lương', 'Portrait of Trần Quang Lương')"
            width="1100"
            height="1473"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <figcaption>
          <MapPin :size="15" aria-hidden="true" />
          {{ t("TP. Hồ Chí Minh, Việt Nam", "Ho Chi Minh City, Vietnam") }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
