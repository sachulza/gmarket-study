<template>
  <div class="page-main-wrap">
    <VisualMain />
    <div class="main-banner-wrap">
      <div class="layout-inner">
        <a href="#">
          <img
            src="https://image.gmarket.co.kr/hanbando/202503/635330c7-3d95-46ee-8ac8-cd607f0e50e1.jpg"
            alt=""
        /></a>
      </div>
    </div>
    <BestMain />
    <div class="layout-inner">
      <div class="main-col2-type-wrap">
        <Col2Left />
        <Col2Right />
      </div>
    </div>
  </div>
</template>

<script setup>
import VisualMain from "@/components/mainPage/VisualMain.vue";
import BestMain from "@/components/mainPage/BestMain.vue";
import Col2Left from "@/components/mainPage/Col2Left.vue";
import Col2Right from "@/components/mainPage/Col2Right.vue";
</script>

<style></style>
