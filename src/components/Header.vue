<template>
  <header class="layout-header-wrap">
    <div class="layout-inner">
      <div class="header-upr-wrap">
        <div class="logo-container" :class="{ scrolled: isScrolled }">
          <button
            type="button"
            class="button-category-switch-header"
            @click="toggleCategory"
            :class="{ active: isCategoryOpen, scrolled: isScrolled }"
            ref="categoryButton"
          ></button>
          <a href="/Layout/PAGES/Main_page" class="logo-gmarket">
            <div class="logo-image"></div>
          </a>
          <div class="input-container">
            <input type="text" />
            <button class="btn-search-header">
              <img src="/src/assets/images/icon/header-search.png" alt="" />
            </button>
          </div>
        </div>
        <div class="mytools-wrap">
          <div class="ad-banner" :class="{ scrolled: isScrolled }">
            <a href="#">
              <img
                src="/src/assets/images/icon/header-ad-banner.jpg"
                alt=""
                style="height: 70px"
              />
            </a>
          </div>
          <ul class="mytools-container">
            <li class="mytools-login">
              <a href="#">
                <img
                  src="/src/assets/images/icon/image-header-mypage.svg"
                  alt=""
                />
              </a>
            </li>
            <li class="mytools-recent">
              <button type="button">
                <img
                  src="/src/assets/images/icon/image-header-recent.svg"
                  alt=""
                />
              </button>
            </li>
            <li class="mytools-cart">
              <a href="#">
                <img
                  src="/src/assets/images/icon/image-header-cart.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="layout-gnb-wrap">
      <div class="layout-full-width">
        <div class="layout-inner position-setup">
          <div class="gnb-wrap" :class="{ scrolled: isScrolled }">
            <span class="gnb-container">
              <button
                type="button"
                class="button-category-switch"
                @click="toggleCategory"
                :class="{ active: isCategoryOpen }"
                ref="categoryButton"
              >
                <span :class="{ scrolled: isScrolled }">전체 카테고리</span>
              </button>
            </span>
            <div class="divider-vertical"></div>
            <ul class="link-pages">
              <li>
                <a href="/Layout/PAGES/Best_page">베스트</a>
              </li>
              <li>
                <a href="#">슈퍼딜</a>
              </li>
              <li>
                <a href="#">쿠폰·출첵</a>
              </li>
              <li>
                <a href="#">이마트몰</a>
              </li>
              <li>
                <a href="#">스마일배송</a>
              </li>
              <li>
                <a href="#">유니버스 클럽</a>
              </li>
              <li class="new-item">
                <a href="#">사업자 클럽</a>
              </li>
            </ul>
            <ul class="user-menu-wrap ml-auto">
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
              <li>
                <button
                  href="#"
                  class="language-change"
                  @click="toggleLanguage"
                  :class="{ active: isLanguageOpen }"
                  ref="languageButton"
                >
                  Global
                </button>
                <ul
                  class="language-wrap"
                  :class="{ active: isLanguageOpen }"
                  ref="languageWrap"
                >
                  <li>
                    <button href="#">English</button>
                  </li>
                  <li>
                    <button href="#">中文</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="expand-gnb-wrap"
        :class="{ active: isCategoryOpen }"
        ref="categoryWrap"
      >
        <div class="layout-inner">
          <GnbOpen />
        </div>
      </div>
    </nav>
  </header>
  <div class="backdrop-pc" :class="{ active: isCategoryOpen }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { throttle } from "lodash";
import GnbOpen from "./GnbOpen.vue";

const isCategoryOpen = ref(false);
const isLanguageOpen = ref(false);

const isScrolled = ref(false);

const categoryWrap = ref(null);
const categoryButton = ref(null);
const languageWrap = ref(null);
const languageButton = ref(null);

const toggleCategory = (event) => {
  event.stopPropagation();
  isCategoryOpen.value = !isCategoryOpen.value;
};

const toggleLanguage = (event) => {
  event.stopPropagation();
  isLanguageOpen.value = !isLanguageOpen.value;
};

const handleClickOutside = (event) => {
  if (
    isCategoryOpen.value &&
    categoryWrap.value &&
    !categoryWrap.value.contains(event.target) &&
    categoryButton.value &&
    !categoryButton.value.contains(event.target)
  ) {
    isCategoryOpen.value = false;
  }

  if (
    isLanguageOpen.value &&
    languageWrap.value &&
    !languageWrap.value.contains(event.target) &&
    languageButton.value &&
    !languageButton.value.contains(event.target)
  ) {
    isLanguageOpen.value = false;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 150;

  // 스크롤이 발생하면 카테고리 메뉴 닫기
  if (isCategoryOpen.value) {
    isCategoryOpen.value = false;
  }
};

const throttledScroll = throttle(handleScroll, 200);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", throttledScroll);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", throttledScroll);
});
</script>

<style></style>
