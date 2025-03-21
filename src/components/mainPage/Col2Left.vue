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
            <div class="contents-wrap emart">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>이마트 노브랜드</span>
                  <span>간편하게 장보기</span>
                </div>
                <div class="desc-sub-txt">가성비 넘치는 인기상품&신상품</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202312/1329c66c-a74d-4b07-91f9-50dc4689ee75.png"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="simple-container">
            <div class="contents-wrap emart">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>클럽 고객은</span>
                  <span>매일 15% 할인</span>
                </div>
                <div class="desc-sub-txt">클럽 첫 구매 시 50%할인</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202306/b1f73d83-6816-4bba-84f4-b4806e52371c.png"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="simple-container">
            <div class="contents-wrap emart">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>이마트 장보기</span>
                  <span>지금 인기상품은?</span>
                </div>
                <div class="desc-sub-txt">베스트부터 행사상품까지 총집합</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202312/1329c66c-a74d-4b07-91f9-50dc4689ee75.png"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="simple-container">
            <div class="contents-wrap emart">
              <div class="content-logo"></div>
              <div class="desc-container">
                <div class="desc-main-txt">
                  <span>이마트 노브랜드</span>
                  <span>간편하게 장보기</span>
                </div>
                <div class="desc-sub-txt">가성비 넘치는 인기상품&신상품</div>
              </div>
            </div>
            <div class="image-wrap">
              <img
                src="https://image.gmarket.co.kr/hanbando/202312/6a93b9eb-e89f-4311-a7d3-145ae067d1e3.jpg"
                alt=""
              />
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <ul class="box-lists-wrap">
      <li>
        <div class="box-header-wrap col-3">
          <div class="box-header-container">
            <a href="#" class="inner-box">하나더</a>
          </div>
        </div>
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
                <div class="box-banner banner-green">2개 사면 할인</div>
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
                <div class="box-banner banner-green">2개 사면 할인</div>
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
                <div class="box-banner banner-green">2개 사면 할인</div>
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
                <div class="box-banner banner-green">2개 사면 할인</div>
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
                <div class="box-banner banner-green">2개 사면 할인</div>
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
                <div class="box-banner banner-green">2개 사면 할인</div>
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
        <a href="#" class="more-btn-wrap"></a>
      </li>
      <li>
        <div class="box-header-wrap col-3">
          <div class="box-header-container" style="left: 33.3%">
            <a href="#" class="inner-box">하나더</a>
          </div>
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
</script>

<style></style>
