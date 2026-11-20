<script setup>
import { localize } from "../i18n";
import { publicAsset } from "../data/site";

defineProps({
  project: { type: Object, required: true },
  sizes: { type: String, required: true },
  lazy: { type: Boolean, default: true },
});
</script>

<template>
  <div class="project-cover" :class="'project-cover--' + project.id">
    <img
      :src="publicAsset('projects/' + project.id + '.webp')"
      :srcset="publicAsset('projects/' + project.id + '-small.webp') + ' 760w, ' + publicAsset('projects/' + project.id + '.webp') + ' 1440w'"
      :sizes="sizes"
      :width="project.cover.width"
      :height="project.cover.height"
      :alt="localize(project.cover.alt)"
      :loading="lazy ? 'lazy' : 'eager'"
      :fetchpriority="lazy ? 'auto' : 'high'"
      decoding="async"
    />
  </div>
</template>
