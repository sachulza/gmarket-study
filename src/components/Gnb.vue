<template>
  <nav class="layout-gnb-wrap">
    <div class="layout-full-width">
      <div class="layout-inner">
        <div class="gnb-wrap">
          <div class="gnb-container">
            <button
              type="button"
              class="button-category-switch"
              @click="toggleCategory"
              :class="{ active: isCategoryOpen }"
              ref="categoryButton"
            >
              전체 카테고리
            </button>
          </div>
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
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">中文</a>
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
        <div class="categoty-wrap">
          <ul class="category-list-main">
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 0 }"
              @mouseover="setActiveCategory(0)"
              @focus="setActiveCategory(0)"
              @click="setActiveCategory(0)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1">브랜드패션</a>
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 0 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">브랜드의류</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 여성의류</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 남성의류</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 캐주얼의류</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">브랜드잡화</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 잡화</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 쥬얼리/시계</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 수입명품</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">스포츠브랜드</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 아웃도어</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">브랜드 스포츠패션</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-01.jpg" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">브랜드패션 쿠폰북</div>
                      <div class="ad-desc">매주 업데이트 되는 쿠폰북</div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">신세계백화점</a>
                    </li>
                    <li>
                      <a href="#">롯데백화점</a>
                    </li>
                    <li>
                      <a href="#">현대백화점</a>
                    </li>
                    <li>
                      <a href="#">갤러리아백화점</a>
                    </li>
                    <li>
                      <a href="#">스타필드</a>
                    </li>
                    <li>
                      <a href="#">대구백화점</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 1 }"
              @mouseover="setActiveCategory(1)"
              @focus="setActiveCategory(1)"
              @click="setActiveCategory(1)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1"
                >패션의류 · 잡화 · 뷰티</a
              >
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 1 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">패션의류</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#"> 여성의류</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#"> 남성의류</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#"> 언더웨어</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">유아동의류</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">잡화</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">신발</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">가방/잡화</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">유아동 신발/잡화</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">쥬얼리/시계</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">수입명품</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">뷰티</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">화장품/향수</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">바디/헤어</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-02.jpg" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">커버 명가 클리오 CLIO</div>
                      <div class="ad-desc">
                        킬커버 베이스부터 꿀광 글램틴트까지
                      </div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">해외직구</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 2 }"
              @mouseover="setActiveCategory(2)"
              @focus="setActiveCategory(2)"
              @click="setActiveCategory(2)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1">유아동</a>
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 2 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">유아동</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">출산/육아</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">장난감/완구</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">유아동 의류</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">유아동 신발/잡화</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title"></div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title"></div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>

                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-03.jpg" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">나를 위한 질주 레고 F1자동차</div>
                      <div class="ad-desc">신제품을 지금 바로 만나보세요!</div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">이마트몰</a>
                    </li>
                    <li>
                      <a href="#">스마일배송</a>
                    </li>
                    <li>
                      <a href="#">당일배송</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 3 }"
              @mouseover="setActiveCategory(3)"
              @focus="setActiveCategory(3)"
              @click="setActiveCategory(3)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1">식품 · 생필품</a>
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 3 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">식품</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">신선식품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">가공식품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">건강식품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">커피/음료</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">생필품</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">생필품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">바디/헤어</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title"></div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>

                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-04.png" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">언제나 맛있는 신세계푸드🍕</div>
                      <div class="ad-desc">10% 중복쿠폰으로 한 번 더 할인!</div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">이마트몰</a>
                    </li>
                    <li>
                      <a href="#">스마일배송</a>
                    </li>
                    <li>
                      <a href="#">당일배송</a>
                    </li>
                    <li>
                      <a href="#">인기 가공식품</a>
                    </li>
                    <li>
                      <a href="#">소상공인동행마켓</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 4 }"
              @mouseover="setActiveCategory(4)"
              @focus="setActiveCategory(4)"
              @click="setActiveCategory(4)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1"
                >홈데코 · 문구 · 취미 · 반려</a
              >
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 4 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">홈데코</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">가구/DIY</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">침구/커튼</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">조명/인테리어</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">생활용품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">주방용품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">꽃/이벤트용품</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">문구</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">문구/사무용품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">사무기기</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">취미/반려</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">악기/취미</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">반려동물용품</a>
                      </li>
                    </ul>
                  </div>

                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-04.png" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">언제나 맛있는 신세계푸드🍕</div>
                      <div class="ad-desc">10% 중복쿠폰으로 한 번 더 할인!</div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">사업자 클럽</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 5 }"
              @mouseover="setActiveCategory(5)"
              @focus="setActiveCategory(5)"
              @click="setActiveCategory(5)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1"
                >컴퓨터 · 디지털 · 가전</a
              >
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 5 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">컴퓨터</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">노트북/데스크탑</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">모니터/프린터</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">PC주변기기</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">저장장치</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">디지털</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">모바일/태블릿</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">카메라</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">게임</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">음향기기</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">가전</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">영상가전</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">주방가전</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">계절가전</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">생활/미용가전</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">음향가전</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">건강가전</a>
                      </li>
                    </ul>
                  </div>

                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-05.jpg" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">XBOX 무선 컨트롤러 할인</div>
                      <div class="ad-desc">
                        구매하여 마인크래프트 모험을 시작하세요!
                      </div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">AI 노트북</a>
                    </li>
                    <li>
                      <a href="#">사업자 클럽</a>
                    </li>
                    <li>
                      <a href="#">렌탈</a>
                    </li>
                    <li>
                      <a href="#">중고시장</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 6 }"
              @mouseover="setActiveCategory(6)"
              @focus="setActiveCategory(6)"
              @click="setActiveCategory(6)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1"
                >스포츠 · 건강 · 렌탈</a
              >
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 6 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">스포츠</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">스포츠의류/운동화</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">휘트니스/수영</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">구기/라켓</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">골프</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">자전거/보드/기타레저</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">캠핑/낚시</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">등산/아웃도어</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">건강</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">건강/의료용품</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">건강식품</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">렌탈</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">렌탈 서비스</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">상조</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">인터넷 가입</a>
                      </li>
                    </ul>
                  </div>

                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-06.jpg" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">G마켓, 렌탈을 다담다</div>
                      <div class="ad-desc">스마일캐시/사은품 최대 혜택!</div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">렌탈</a>
                    </li>
                    <li>
                      <a href="#">상조</a>
                    </li>
                    <li>
                      <a href="#">인터넷 가입</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 7 }"
              @mouseover="setActiveCategory(7)"
              @focus="setActiveCategory(7)"
              @click="setActiveCategory(7)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1">자동차 · 공구</a>
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 7 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">자동차</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">자동차용품</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">공구</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">공구/안전/산업용품</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title"></div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>

                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-07.jpg" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">나를 위한 질주 레고 F1자동차</div>
                      <div class="ad-desc">신제품을 지금 바로 만나보세요!</div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">사업자클럽</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              class="category-container"
              :class="{ active: isActiveCategory === 8 }"
              @mouseover="setActiveCategory(8)"
              @focus="setActiveCategory(8)"
              @click="setActiveCategory(8)"
              tabindex="0"
            >
              <a href="#" class="depth-1-box" tabindex="-1"
                >여행 · 도서 · e쿠폰</a
              >
              <div
                class="depth-2-wrap"
                :class="{ active: isActiveCategory === 8 }"
              >
                <div class="depth-2-column-wrap">
                  <div class="depth-2-column">
                    <div class="depth-2-title">여행</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">항공권</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">호텔</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">투어/티켓</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">렌터카</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">해외패키지</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">국내패키지</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">테마여행</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">도서</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">국내도서</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">외국도서</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">유아동</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">학습/교육</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">음반(K-POP)</a>
                      </li>
                    </ul>
                  </div>
                  <div class="depth-2-column">
                    <div class="depth-2-title">e쿠폰</div>
                    <ul class="depth-2-list-wrap">
                      <li class="depth-2-list-container">
                        <a href="#">e쿠폰</a>
                      </li>
                      <li class="depth-2-list-container">
                        <a href="#">상품권</a>
                      </li>
                    </ul>
                  </div>

                  <div class="depth-2-column ad-box">
                    <img src="/src/assets/images/banner/ad-box-08.jpg" alt="" />
                    <div class="ad-text-wrap">
                      <div class="ad-tit">숙박세일 페스타 최대 8만원할인</div>
                      <div class="ad-desc">
                        2025 대한민국 봄맞이 주말 객실 확보
                      </div>
                    </div>
                  </div>
                </div>
                <div class="depth-2-bottom-link">
                  <div class="shortcut-tit">바로가기</div>
                  <ul>
                    <li>
                      <a href="#">여행 홈</a>
                    </li>
                    <li>
                      <a href="#">숙박세일 페스타</a>
                    </li>
                    <li>
                      <a href="#">여행 라이브</a>
                    </li>
                    <li>
                      <a href="#">책 쇼핑</a>
                    </li>
                    <li>
                      <a href="#">책 스마일배송</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="backdrop-pc" :class="{ active: isCategoryOpen }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isCategoryOpen = ref(false);
const isLanguageOpen = ref(false);
const isActiveCategory = ref(null); // 현재 활성화된 카테고리 인덱스를 추적

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

const setActiveCategory = (index) => {
  isActiveCategory.value = index; // 카테고리 활성화
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

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style></style>
