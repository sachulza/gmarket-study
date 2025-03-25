<template>
  <div class="col2-type-wrap">
    <div class="ui-best-title-wrap">
      <div class="ui-main-title">오늘 주문 내일 도착, 스마일배송</div>
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
    <ul class="box-lists-wrap">
      <li>
        <div class="box-header-wrap col-2">
          <div
            class="box-header-container except-first-child"
            :class="{
              active: isActiveCategory === 0,
            }"
            @mouseover="setActiveCategory(0)"
            @focus="setActiveCategory(0)"
            @click="setActiveCategory(0)"
            tabindex="0"
          >
            <a
              href="#"
              class="inner-box blue-wrap"
              :class="{ active: isActiveCategory === 0 }"
              >베스트</a
            >
          </div>
        </div>
        <div
          class="card-list-inner-wrap"
          :class="{ active: isActiveCategory === 0 }"
        >
          <ul class="card-box-wrap">
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3026275566/still/400?ver=1741910159"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">
                    크리넥스 크리넥스 3겹 내추럴 소프트 화장지 30m30롤
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">32,900</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3615088728/still/400?ver=1742351295"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">
                    차오차이 차오차이 130직화간짜장 180g
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">3,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3026275566/still/400?ver=1741910159"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">
                    크리넥스 크리넥스 3겹 내추럴 소프트 화장지 30m30롤
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">32,900</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3615088728/still/400?ver=1742351295"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">
                    차오차이 차오차이 130직화간짜장 180g
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">3,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3026275566/still/400?ver=1741910159"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">
                    크리넥스 크리넥스 3겹 내추럴 소프트 화장지 30m30롤
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">32,900</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3615088728/still/400?ver=1742351295"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">
                    차오차이 차오차이 130직화간짜장 180g
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">3,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a href="#" class="ui-more-shortcut-wrap">
            <div class="ui-shortcut">베스트 상품 더보기</div>
          </a>
        </div>
      </li>
      <li>
        <div class="box-header-wrap col-2">
          <div
            class="box-header-container"
            style="left: 50%"
            :class="{
              active: isActiveCategory === 1,
            }"
            @mouseover="setActiveCategory(1)"
            @focus="setActiveCategory(1)"
            @click="setActiveCategory(1)"
            tabindex="0"
          >
            <a
              href="#"
              class="inner-box blue-wrap"
              :class="{ active: isActiveCategory === 1 }"
              >무료배송</a
            >
          </div>
        </div>
        <div
          class="card-list-inner-wrap"
          :class="{ active: isActiveCategory === 1 }"
        >
          <ul class="card-box-wrap">
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/2522389738/still/400?ver=1742178857"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">고메 고메크리스피 너겟 450g</div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">9,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3125002708/still/400?ver=1741907393"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">오반장</div>
                  <div class="box-part-name">
                    냉동인도 브로큰 새우살 (550g/팩)
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">9,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/2522389738/still/400?ver=1742178857"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">2개 사면 할인</div>
                  <div class="box-part-name">고메 고메크리스피 너겟 450g</div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">9,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3125002708/still/400?ver=1741907393"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">오반장</div>
                  <div class="box-part-name">
                    냉동인도 브로큰 새우살 (550g/팩)
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">9,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/2523825659/still/400?ver=1742559025"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">전단상품</div>
                  <div class="box-part-name">
                    케이지프레시 양념 토시살 구이(800g)
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">18,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="ui-card-box-container">
                <div class="card-box-image">
                  <img
                    src="https://gdimg.gmarket.co.kr/3125002708/still/400?ver=1741907393"
                    alt=""
                  />
                </div>
                <div class="card-box-desc-wrap">
                  <div class="box-banner banner-blue">오반장</div>
                  <div class="box-part-name">
                    냉동인도 브로큰 새우살 (550g/팩)
                  </div>
                  <div class="box-part-price-wrap">
                    <span class="part-price">9,980</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <a href="#" class="ui-more-shortcut-wrap">
            <div class="ui-shortcut">무료배송 상품 더보기</div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ref } from "vue";

const isActiveCategory = ref(0);

const setActiveCategory = (index) => {
  isActiveCategory.value = index;
};
</script>

<style></style>
