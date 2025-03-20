<template>
  <div class="main-visual-wrap">
    <div class="layout-inner">
      <div class="main-swiper-wrap">
        <swiper
          class="main-visual-swiper"
          :modules="[Navigation, Pagination, Autoplay]"
          :slides-per-view="'auto'"
          :space-between="0"
          :navigation="true"
          :loop="true"
          :centeredSlides="true"
          :loopAdditionalSlides="3"
          :pagination="{
            clickable: true,
            type: 'fraction', // 숫자 페이지네이션
          }"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
        >
          <swiper-slide>
            <img
              src="https://ad-img.gmarket.com/ADS/Contents_/2025_03_13_03_57_22/704c0397222d4d12.JPG"
              alt=""
            />
          </swiper-slide>
          <swiper-slide
            ><img
              src="https://ad-img.gmarket.com/ADS/Contents_/2025_03_18_05_11_09/404f51081f9c4ebf.JPG"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://ad-img.gmarket.com/ADS/Contents_/2025_03_17_04_52_18/6da1252206b0434f.JPG"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://ad-img.gmarket.com/ADS/Contents_/2025_03_13_10_11_00/c171c2579fd741e2.JPG"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://ad-img.gmarket.com/ADS/Contents_/2025_03_17_05_25_30/ee70ebe1eea44431.JPG"
              alt=""
          /></swiper-slide>
          <swiper-slide
            ><img
              src="https://ad-img.gmarket.com/ADS/Contents_/2025_03_13_10_12_42/85f5dbe678524e58.JPG"
              alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="layout-inner">
      <GnbOpenMain />
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<style></style>
