<template>
  <div class="col2-type-wrap">
    <div class="ui-best-title-wrap">
      <div class="ui-main-title">지금부터의 신선마켓, 이마트몰</div>
      <a href="#" class="ui-shortcut">바로가기</a>
    </div>
    <div class="layout-swiper-simple-visual">
      <swiper
        class="simple-visual-swiper"
        :modules="[Navigation]"
        :slides-per-view="'1'"
        :space-between="0"
        :navigation="true"
        :loop="true"
        :centeredSlides="true"
      >
        <swiper-slide>
          <a class="simple-container">
            <div class="contents-wrap smile">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>알뜰하게 쇼핑하기</span>
                  <span>최대 40% 할인</span>
                </div>
                <div class="desc-sub-txt">스타배송 단독 진행📣</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202409/2fc21e42-9048-4437-ae4f-23a1455ee196.png"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="simple-container">
            <div class="contents-wrap smile">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>LG생활건강</span>
                  <span>생활용품 베스트!</span>
                </div>
                <div class="desc-sub-txt">베스트 라인업 특집 G-Live!</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202503/c06f9fe6-b7b8-4b83-a262-8438f4508c3f.png"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="simple-container">
            <div class="contents-wrap smile">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>환절기 피부케어는</span>
                  <span>한율 어린쑥크림</span>
                </div>
                <div class="desc-sub-txt">15% 중복쿠폰증정</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202503/14442de8-f784-4740-a373-9bb914ef0d67.png"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="simple-container">
            <div class="contents-wrap smile">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>새콤달콤 크라운</span>
                  <span>핫한 신상품</span>
                </div>
                <div class="desc-sub-txt">스타배송으로 만나보세요</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202503/65da7bd3-aa39-4626-8084-550b9191f850.png"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<style></style>
