<template>
  <div class="main-homeshopping-wrap">
    <div class="layout-inner" style="width: 1232px">
      <div class="ui-best-title-wrap" style="padding: 0 16px">
        <div class="title-container">
          <a href="/Layout/PAGES/Best_page">
            <div class="ui-main-title">홈쇼핑 모아보기</div>
          </a>
        </div>
        <div class="best-shortcut-container">
          <a href="/Layout/PAGES/Best_page">
            <div class="ui-shortcut">전체보기</div>
          </a>
        </div>
      </div>
      <div class="best-contents-wrap">
        <swiper
          class="best-contents-swiper"
          :modules="[Navigation]"
          :slides-per-view="'3'"
          :slides-per-group="'3'"
          :space-between="0"
          :navigation="true"
          :loop="true"
        >
          <swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <span
                  style="
                    background-image: url(//gdimg.gmarket.co.kr/4349741512/still/600?ver=1742801711);
                  "
                ></span>
              </div>
              <div class="product-desc">
                <div class="text-container">
                  <div class="part-name">
                    (현대홈쇼핑)제주감귤농협 제철 햇 한라봉 3.5kg(12∼18과) /
                    1과당 200∼300g
                  </div>
                  <div class="part-price-wrap">
                    <span class="part-price">28,900</span>
                    <span class="price-unit">원</span>
                  </div>
                </div>
                <a href="#" class="link-wrap">
                  <img
                    src="https://pics.gmarket.co.kr/pc/single/kr/homemain/logo__hsp-hhome01.svg"
                    alt=""
                  />
                  <span>현대홈쇼핑</span>
                </a>
              </div>
            </a></swiper-slide
          >
          <swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          >
          <swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          >
          <swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          ><swiper-slide
            ><a class="shopping-container" href="#">
              <div class="img-swiper-box">
                <img
                  src="https://gdimg.gmarket.co.kr/3389833189/still/400/"
                  alt=""
                />
              </div>
              <div class="product-desc">
                <div class="part-name">
                  (5종/9900원/무료배송) ~21일 한정특가 푸마 럭키박스 랜덤드로즈
                  5종 패키지
                </div>
                <div class="part-price-wrap">
                  <span class="part-price">13,550</span>
                  <span class="price-unit">원</span>
                </div>
              </div>
            </a></swiper-slide
          >
        </swiper>
      </div>
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
