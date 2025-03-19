<template>
  <div class="page-best-wrap">
    <div class="layout-inner">
      <div class="gmarket-best-wrap">
        <div class="title-wrap">
          <h2 class="best-title">
            G마켓 베스트
            <div class="tooltip-wrap" :class="{ active: isTooltipActive }">
              <div class="title-wrap">
                <div class="tooltip-title">베스트 선정 기준</div>
                <button
                  type="button"
                  class="btn-close-tooltip"
                  @click="closeTooltip"
                ></button>
              </div>
              <ul class="tooltip-desc">
                <li>
                  G마켓 베스트 랭킹은 상품의 판매수량, 매출을 기반으로, 각각의
                  가중치 및 카테고리 가격대 가중치를 반영하여 선정됩니다.
                </li>
                <li>
                  베스트 랭킹은 최근 2시간 판매 데이터로 집계되며, 실시간
                  업데이트 됩니다.
                </li>
                <li>
                  베스트 상품과 연관 있는 개인화 추천 광고 모듈이 노출될 수
                  있습니다.
                </li>
              </ul>
            </div>
          </h2>
          <button class="btn-tooltip" @click="toggleTooltip"></button>
        </div>
        <div class="best-category-wrap">
          <swiper
            class="category-wrap"
            :slides-per-view="12"
            :space-between="0"
          >
            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/icon__category-total.jpg"
                  alt=""
                />
                <div class="item-name">전체</div>
              </a>
            </swiper-slide>
            <swiper-slide class="category-list active">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-01-fresh.png"
                  alt=""
                />
                <div class="item-name">신선식품</div>
              </a>
            </swiper-slide>
            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-02-pros.png"
                  alt=""
                />
                <div class="item-name">가공식품</div>
              </a>
            </swiper-slide>
            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-03-necessary.png"
                  alt=""
                />
                <div class="item-name">생필품</div>
              </a>
            </swiper-slide>
            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-04-kitchen.png"
                  alt=""
                />
                <div class="item-name">생활/주방</div>
              </a></swiper-slide
            >
            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-05-pashion.jpg"
                  alt=""
                />
                <div class="item-name">패션/잡화</div>
              </a></swiper-slide
            >

            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-06-beauty.png"
                  alt=""
                />
                <div class="item-name">뷰티</div>
              </a></swiper-slide
            >

            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-07-digital.png"
                  alt=""
                />
                <div class="item-name">디지털/가전</div>
              </a></swiper-slide
            >

            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-08-home.jpg"
                  alt=""
                />
                <div class="item-name">가구/홈</div>
              </a></swiper-slide
            >

            <swiper-slide class="category-list">
              <swiper-slide>
                <a href="#" class="item-box">
                  <img
                    src="/src/assets/images/best-category/best-09-sports.png"
                    alt=""
                  />
                  <div class="item-name">스포츠/건강</div>
                </a></swiper-slide
              >
            </swiper-slide>
            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-10-hobby.png"
                  alt=""
                />
                <div class="item-name">취미/문구/펫</div>
              </a></swiper-slide
            >
            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-11-book.png"
                  alt=""
                />
                <div class="item-name">도서/음반</div>
              </a></swiper-slide
            >

            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-12-ecoupon.png"
                  alt=""
                />
                <div class="item-name">e쿠폰</div>
              </a></swiper-slide
            >

            <swiper-slide class="category-list">
              <a href="#" class="item-box">
                <img
                  src="/src/assets/images/best-category/best-13-travel.png"
                  alt=""
                />
                <div class="item-name">여행</div>
              </a></swiper-slide
            >
          </swiper>
        </div>
      </div>
    </div>
    <div class="category-depth2-wrap">
      <div class="layout-inner">
        <ul class="depth2-contents-wrap">
          <li class="active"><a href="#">전체</a></li>
          <li class=""><a href="#">과일/야채</a></li>
          <li class=""><a href="#">쌀/잡곡/견과류</a></li>
          <li class=""><a href="#">축산</a></li>
          <li class=""><a href="#">수산</a></li>
          <li class=""><a href="#">김치/반찬</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="page-best-item-wrap">
    <div class="layout-inner" style="max-width: 1132px">
      <ol class="best-item-grid">
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
        <li class="item-list">
          <a href="#" class="item-container">
            <img
              src="/src/assets/images/best-category/best-item-01.jpg"
              alt=""
            />
            <div class="item-desc-wrap">
              <div class="item-name">
                (신선집중) 슬라이스 쪽갈비 400gX4팩 미국산
              </div>
              <div class="item-price-wrap">
                <div class="price-coupon">
                  <span class="text-coupon">쿠폰적용가</span>
                  <span class="price-original">28,200</span>
                  <span class="price-unit">원</span>
                </div>
                <div class="price-final">
                  <span class="dc-rate">44%</span>
                  <span class="price-sell">15,750</span>
                  <span class="price-unit">원</span>
                  <div class="delivery-tag"></div>
                </div>
              </div>
              <div class="item-tag"></div>
            </div>
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isTooltipActive = ref(false);

const toggleTooltip = () => {
  isTooltipActive.value = !isTooltipActive.value;
};

const closeTooltip = () => {
  isTooltipActive.value = false;
};

// swiper
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
</script>

<style></style>
