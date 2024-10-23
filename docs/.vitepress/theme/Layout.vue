<script setup lang="ts">
  import DefaultTheme from 'vitepress/theme';
  import { useData, inBrowser } from 'vitepress';
  import { watchEffect } from 'vue';

  const { lang } = useData();
  watchEffect(() => {
    if (inBrowser) {
      const tenYearLater = new Date();
      tenYearLater.setFullYear(tenYearLater.getFullYear() + 10);

      document.cookie = `docs_suzu_lang=${encodeURIComponent(lang.value)}; 
                         expires=${tenYearLater.toUTCString()}; 
                         path=/; 
                         SameSite=Lax`;
    }
  });
</script>

<template>
  <DefaultTheme.Layout />
</template>
