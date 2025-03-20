<template>
  <div class="layout-contents-wrap">
    <!-- Header -->
    <Header />
    <!-- //Header -->

    <!-- GNB  임시 삭제-->
    <!-- <Gnb /> -->
    <!-- //GNB -->

    <!-- Contents -->
    <div class="layout-contents full">
      <div class="layout-page-wrap">
        <keep-alive>
          <component :is="loader"></component>
        </keep-alive>
      </div>
    </div>
    <!-- //Contents -->

    <!-- Footer -->
    <Footer />
    <!-- //Footer -->
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const loader = computed(() =>
  defineAsyncComponent(() =>
    import(`./${route.params.folder}/${route.params.file}.vue`)
  )
);
</script>
