<template>
  <div id="index">
    <div id="lottie">
      <div class="load">
        <div class="logo">
          <div class="-lottieWrapper">
            <lottie :options="defaultOptions" v-on:animCreated="handleAnimation" />
          </div>
        </div>
      </div>
    </div>
    <!-- main -->
    <div class="p-hero bg-gradient">
      <div class="parallax hero" id="parallax-02">
        <div class="flex">
          <div class="flex__item" data-grid="sp12 lap12" data-align="middle">
            <div class="p-hero__body">
              <p class="p-hero__title hero-title l-spacer -center"><img class="wow animate__animated animate__fadeIn"
                  src="@/assets/img/logo.png" data-wow-delay="4s" alt=""></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="l-spacer -bgLightGrey -bgImage box-shadow" id="about">
      <div class="l-spacer -primary text-white text-shadowBlur">
        <div class="l-container"><img class="wow animate__animated animate__fadeInRight animate-right"
            src="@/assets/img/animate_1.png" alt="">
          <h2 class="c-heading -primary -center roll font-hero m-0" lang="en" data-type="standUpIn"
            data-duration="fast">
            <span>3</span><span>年</span><span>ぶ</span><span>り</span><span>に</span><span>開</span><span>催</span><span>決</span><span>定</span><span>!</span>
          </h2>
          <div class="l-spacer">
            <p class="c-detail -center"><span class="u-wbr">令和4年8月4日（木）〜8月8日（月）<br>午後7時〜</span></p>
          </div>
          <div class="l-spacer -top">
            <div class="l-container">
              <p class="c-detail -center font-2rem-half"><span class="u-wr">開催まであと...</span></p>
              <div class="flex__item l-spacer -mtLarge" data-grid="sp12" data-align="center middle">
                <div class="tick" data-did-init="handleTickInit">
                  <div data-repeat="true" data-layout="horizontal fit" data-transform="preset(d, h, m, s) -&gt; delay">
                    <div class="tick-group">
                      <div data-key="value" data-repeat="true" data-transform="pad(00) -&gt; split -&gt; delay"><span
                          data-view="flip"></span></div>
                      <span class="tick-label" data-key="label" data-view="text"></span>
                    </div>
                  </div>
                  <div class="countDown-day">
                    <p>日</p>
                  </div>
                </div>
                <div class="tick-onended-message" style="display:none">
                  <p>開催中！</p>
                </div>
              </div>
            </div>
          </div>
          <div class="l-spacer -mtLarge -top">
            <p class="p-hero__text -center">
              本イベントは、青森県祭り・観光イベント新型コロナウイルス感染症対策ガイドラインを遵守して開催いたします。</p>
            <p class="p-hero__text -center"><a class="c-button -primary"
                href="https://www.pref.aomori.lg.jp/soshiki/kkokusai/kanko/files/maturi11.pdf"
                target="_blank">ガイドラインはこちら</a></p>
          </div>
          <img class="wow animate__animated animate__fadeInLeft animate-left" src="@/assets/img/animate_2.png" alt="">
        </div>
      </div>
    </section>
    <section class="l-spacer" id="news">
      <div class="parallax bg-01" id="parallax-01">
        <div class="mask"><img class="wow animate__animated animate__fadeInRight parallax-animate-right"
            src="@/assets/img/yattemare.svg" alt="">
          <div class="flex">
            <div class="flex__item l-spacer -center" data-grid="sp12">
              <h3 class="c-heading -primary -center roll" lang="en" data-type="standUpIn" data-duration="fast">
                <span>お知らせ</span>
              </h3>
              <div class="news-wrapper">
                <div class="news-item">
                  <div class="date">2022.05.24</div>
                  <div class="desc">シャトルバスはございません。自家用車でお越しの場合は、近隣の駐車場をご利用ください。</div>
                </div>
                <div class="news-item">
                  <div class="date">2022.05.24</div>
                  <div class="desc">新型コロナ感染症防止の観点から有料観覧席の用意はございません。</div>
                </div>
                <div class="news-item">
                  <div class="date">2022.05.24</div>
                  <div class="desc">今年度の立佞武多運行コースはショートコースを予定しております。コース詳細については後日お知らせいたします。</div>
                </div>
                <div class="news-item">
                  <div class="date">2022.05.30</div>
                  <div class="desc"><a href="http://www.machinaka-go.co.jp/business2.html"
                      target="_blank">（株）まちなか五所川原&nbsp;有料観覧席販売情報</a></div>
                </div>
              </div>
            </div>
            <div class="flex__item l-spacer -center" data-grid="sp12" data-align="center middle">
              <h4 class="c-detail -center roll" lang="en" data-type="standUpIn" data-duration="fast">
                <span>情報は随時更新予定&#33;</span>
              </h4>
            </div>
          </div>
          <img class="wow animate__animated animate__fadeInLeft parallax-animate-left"
            src="@/assets/img/yattemare_2.svg" alt="">
        </div>
      </div>
    </section>
    <section id="departure">
      <div class="p-hero">
        <div class="flex" data-dir="reverse">
          <div class="flex__item bg-pattern" data-grid="sp12 lap6" data-align="middle">
            <div class="p-hero__body">
              <p class="p-hero__title"><strong class="p-hero__strong"><span class="u-wbr p-hero__node roll d-block"
                    lang="en" data-type="standUpIn" data-duration="fast"><span>題</span><span>名</span><span>
                      <ruby>
                        <rb>「暫」</rb>
                        <rp>（</rp>
                        <rt>しばらく</rt>
                        <rp>）</rp>
                      </ruby></span></span><span
                    class="u-wbr p-hero__node font-2rem-half roll d-block l-spacer -mtSmall" lang="en"
                    data-type="standUpIn"
                    data-duration="fast"><small><span>制</span><span>作</span><span>者</span><span>：</span><span>
                        <ruby>
                          <rb>鶴</rb>
                          <rp>（</rp>
                          <rt>つる</rt>
                          <rp>）</rp>
                        </ruby>
                        <ruby>
                          <rb>谷</rb>
                          <rp>（</rp>
                          <rt>や</rt>
                          <rp>）</rp>
                        </ruby>
                        <ruby>
                          <rb>昭</rb>
                          <rp>（</rp>
                          <rt>あき</rt>
                          <rp>）</rp>
                        </ruby>
                        <ruby>
                          <rb>法</rb>
                          <rp>（</rp>
                          <rt>のり</rt>
                          <rp>）</rp>
                        </ruby></span></small></span></strong></p>
              <div class="l-spacer -mtSmall -top">
                <p class="p-hero__text"><span class="u-wbr">歌舞伎十八番の一つに数えられる演目
                    <ruby>
                      <rb>「暫」</rb>
                      <rp>（</rp>
                      <rt>しばらく</rt>
                      <rp>）</rp>
                    </ruby>。横暴な
                    <ruby>
                      <rb>公卿</rb>
                      <rp>（</rp>
                      <rt>くげ</rt>
                      <rp>）</rp>
                    </ruby>の
                    <ruby>
                      <rb>清原武衛</rb>
                      <rp>（</rp>
                      <rt>きよはらのたけひら</rt>
                      <rp>）</rp>
                    </ruby>が、自らに反対する善良な
                    <ruby>
                      <rb>加茂次郎義綱</rb>
                      <rp>（</rp>
                      <rt>かもじろうよしつな</rt>
                      <rp>）</rp>
                    </ruby>らを捕え、処刑しようとしたその時、
                    <ruby>
                      <rb>鎌倉権五郎景政</rb>
                      <rp>（</rp>
                      <rt>かまくらごんごろうかげまさ</rt>
                      <rp>）</rp>
                    </ruby>が、「しばらく～」の一声で現れ、超人的な活躍で助け出し、
                    <ruby>
                      <rb>公卿</rb>
                      <rp>（</rp>
                      <rt>くげ</rt>
                      <rp>）</rp>
                    </ruby>とその家来たちの悪事を暴き
                    <ruby>
                      <rb>大見得</rb>
                      <rp>（</rp>
                      <rt>おおみえ</rt>
                      <rp>）</rp>
                    </ruby>を切る場面。</span><span class="u-wbr">江戸時代の初代市川團十郎以来、代々演じられてきた
                    <ruby>
                      <rb>「荒事」</rb>
                      <rp>（</rp>
                      <rt>あらごと</rt>
                      <rp>）</rp>を表現した。<br>
                    </ruby>東京オリンピック・パラリンピック開催の活況の中、世界に向け、五所川原立佞武多、そして日本の伝統文化をアピールする。</span></p>
              </div>
            </div>
          </div>
          <div class="flex__item" data-grid="sp12 lap6">
            <figure class="p-hero__figure">
              <ul class="flex">
                <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"><img
                        class="p-hero__image" src="@/assets/img/shibaraku-left.webp"
                        srcset="@/assets/img/shibaraku-left.webp, @/assets/img/shibaraku-left@2x.webp 2x" alt=""
                        decoding="async"></span></span></li>
                <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"><img
                        class="p-hero__image" src="@/assets/img/shibaraku-center.webp"
                        srcset="@/assets/img/shibaraku-center.webp, @/assets/img/shibaraku-center@2x.webp 2x" alt=""
                        decoding="async"></span></span></li>
                <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"><img
                        class="p-hero__image" src="@/assets/img/shibaraku-right.webp"
                        srcset="@/assets/img/shibaraku-right.webp, @/assets/img/shibaraku-right@2x.webp 2x" alt=""
                        decoding="async"></span></span></li>
              </ul>
            </figure>
          </div>
        </div>
      </div>
      <div class="p-hero">
        <div class="flex">
          <div class="flex__item bg-pattern" data-grid="sp12 lap6" data-align="middle">
            <div class="p-hero__body">
              <p class="p-hero__title"><strong class="p-hero__strong"><span class="u-wbr p-hero__node roll d-block"
                    lang="en" data-type="standUpIn" data-duration="fast"><span>題</span><span>名</span><span>
                      <ruby>
                        <rb>「金太郎」</rb>
                        <rp>（</rp>
                        <rt>きんたろう</rt>
                        <rp>）</rp>
                      </ruby></span></span><span
                    class="u-wbr p-hero__node font-2rem-half roll d-block l-spacer -mtSmall" lang="en"
                    data-type="standUpIn"
                    data-duration="fast"><small><span>制</span><span>作</span><span>者</span><span>：</span><span>
                        <ruby>
                          <rb>鶴</rb>
                          <rp>（</rp>
                          <rt>つる</rt>
                          <rp>）</rp>
                        </ruby>
                        <ruby>
                          <rb>谷</rb>
                          <rp>（</rp>
                          <rt>や</rt>
                          <rp>）</rp>
                        </ruby>
                        <ruby>
                          <rb>昭</rb>
                          <rp>（</rp>
                          <rt>あき</rt>
                          <rp>）</rp>
                        </ruby>
                        <ruby>
                          <rb>法</rb>
                          <rp>（</rp>
                          <rt>のり</rt>
                          <rp>）</rp>
                        </ruby></span></small></span></strong></p>
              <div class="l-spacer -mtSmall -top">
                <p class="p-hero__text"><span
                    class="u-wbr">おとぎ話で有名な金太郎は、五月人形としても人気で、気持ちの優しい、健やかな子どもに成長してほしいという願いが込められています。また、
                    <ruby>
                      <rb>鯉</rb>
                      <rp>（</rp>
                      <rt>こい</rt>
                      <rp>）</rp>
                    </ruby>の滝登りには「勢いが良いことの例え」や
                    <ruby>
                      <rb>「立身出世」</rb>
                      <rp>（</rp>
                      <rt>りっしんしゅっせ</rt>
                      <rp>）</rp>
                    </ruby>の意味があります。</span><span class="u-wbr">今年の祭りには、ぜひ、多くの子どもたちに参加してもらい、祭りの楽しさを体験してほしいと思います。</span>
                </p>
              </div>
            </div>
          </div>
          <div class="flex__item" data-grid="sp12 lap6">
            <figure class="p-hero__figure">
              <ul class="flex">
                <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"><img
                        class="p-hero__image" src="@/assets/img/kintaro-left.webp"
                        srcset="@/assets/img/kintaro-left.webp, @/assets/img/kintaro-left@2x.webp 2x" alt=""
                        decoding="async"></span></span></li>
                <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"><img
                        class="p-hero__image" src="@/assets/img/kintaro-center.webp"
                        srcset="@/assets/img/kintaro-center.webp, @/assets/img/kintaro-center@2x.webp 2x" alt=""
                        decoding="async"></span></span></li>
                <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"><img
                        class="p-hero__image" src="@/assets/img/kintaro-right.webp"
                        srcset="@/assets/img/kintaro-right.webp, @/assets/img/kintaro-right@2x.webp 2x" alt=""
                        decoding="async"></span></span></li>
              </ul>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="l-spacer -primary -bgWhite" id="gallery">
      <div class="l-container">
        <div class="l-spacer -primary -top">
          <div class="flex" data-gutter="normal" data-dir="reverse">
            <div class="flex__item p-sticky" data-grid="sp12 lap4">
              <div class="l-spacer -area p-sticky__item">
                <h3 class="c-heading -secondary" lang="en">2021.10.9</h3>
                <p>フォトギャラリー「五所川原立佞武多秋の陣」</p>
              </div>
            </div>
            <div class="flex__item" data-grid="sp12 lap8">
              <ul class="flex" data-gutter="normal">
                <li class="flex__item roll" data-grid="sp6" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa01@2x.webp"
                      srcset="@/assets/img/img-tachineputa01@2x.webp, @/assets/img/img-tachineputa01@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp6" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa02@2x.webp"
                      srcset="@/assets/img/img-tachineputa02@2x.webp, @/assets/img/img-tachineputa02@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa03@2x.webp"
                      srcset="@/assets/img/img-tachineputa03@2x.webp, @/assets/img/img-tachineputa03@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa04@2x.webp"
                      srcset="@/assets/img/img-tachineputa04@2x.webp, @/assets/img/img-tachineputa04@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa05@2x.webp"
                      srcset="@/assets/img/img-tachineputa05@2x.webp, @/assets/img/img-tachineputa05@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa06@2x.webp"
                      srcset="@/assets/img/img-tachineputa06@2x.webp, @/assets/img/img-tachineputa06@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp12 tab8" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa07@2x.webp"
                      srcset="@/assets/img/img-tachineputa07@2x.webp, @/assets/img/img-tachineputa07@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp6 tab4" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa08@2x.webp"
                      srcset="@/assets/img/img-tachineputa08@2x.webp, @/assets/img/img-tachineputa08@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp6 tab4" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa09@2x.webp"
                      srcset="@/assets/img/img-tachineputa09@2x.webp, @/assets/img/img-tachineputa09@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp12 tab8" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa10@2x.webp"
                      srcset="@/assets/img/img-tachineputa10@2x.webp, @/assets/img/img-tachineputa10@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp4" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa11@2x.webp"
                      srcset="@/assets/img/img-tachineputa11@2x.webp, @/assets/img/img-tachineputa11@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp4" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa12@2x.webp"
                      srcset="@/assets/img/img-tachineputa12@2x.webp, @/assets/img/img-tachineputa12@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
                <li class="flex__item roll" data-grid="sp4" data-type="slideUpIn">
                  <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                      src="@/assets/img/img-tachineputa13@2x.webp"
                      srcset="@/assets/img/img-tachineputa13@2x.webp, @/assets/img/img-tachineputa13@2x.webp 2x" alt=""
                      decoding="async"></figure>
                </li>
              </ul>
            </div>
            <div class="l-spacer -primary -top">
              <div class="flex" data-gutter="normal">
                <div class="flex__item p-sticky" data-grid="sp12 lap4">
                  <div class="l-spacer -area p-sticky__item">
                    <h3 class="c-heading -secondary" lang="en">2019.08.04</h3>
                    <p>フォトギャラリー「五所川原立佞武多2019」</p>
                  </div>
                </div>
                <div class="flex__item" data-grid="sp12 lap8">
                  <ul class="flex" data-gutter="normal">
                    <li class="flex__item roll" data-grid="sp6" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa14@2x.webp"
                          srcset="@/assets/img/img-tachineputa14@2x.webp, @/assets/img/img-tachineputa14@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp6" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa15@2x.webp"
                          srcset="@/assets/img/img-tachineputa15@2x.webp, @/assets/img/img-tachineputa15@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa16@2x.webp"
                          srcset="@/assets/img/img-tachineputa16@2x.webp, @/assets/img/img-tachineputa16@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa17@2x.webp"
                          srcset="@/assets/img/img-tachineputa17@2x.webp, @/assets/img/img-tachineputa17@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa18@2x.webp"
                          srcset="@/assets/img/img-tachineputa18@2x.webp, @/assets/img/img-tachineputa18@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp6 tab3" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa19@2x.webp"
                          srcset="@/assets/img/img-tachineputa19@2x.webp, @/assets/img/img-tachineputa19@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp12 tab8" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa20@2x.webp"
                          srcset="@/assets/img/img-tachineputa20@2x.webp, @/assets/img/img-tachineputa20@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp6 tab4" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa21@2x.webp"
                          srcset="@/assets/img/img-tachineputa21@2x.webp, @/assets/img/img-tachineputa21@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp6 tab4" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa22@2x.webp"
                          srcset="@/assets/img/img-tachineputa22@2x.webp, @/assets/img/img-tachineputa22@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp12 tab8" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa23@2x.webp"
                          srcset="@/assets/img/img-tachineputa23@2x.webp, @/assets/img/img-tachineputa23@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp4" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa24@2x.webp"
                          srcset="@/assets/img/img-tachineputa24@2x.webp, @/assets/img/img-tachineputa24@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp4" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa25@2x.webp"
                          srcset="@/assets/img/img-tachineputa25@2x.webp, @/assets/img/img-tachineputa25@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                    <li class="flex__item roll" data-grid="sp4" data-type="slideUpIn">
                      <figure class="c-card p-gallery"><img class="c-card__image p-gallery__image"
                          src="@/assets/img/img-tachineputa26@2x.webp"
                          srcset="@/assets/img/img-tachineputa26@2x.webp, @/assets/img/img-tachineputa26@2x.webp 2x"
                          alt="" decoding="async"></figure>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="-primary -bg-primary bg-gradient p-relative" id="live"><img class="animate-right top-0 w-20"
        src="@/assets/img/cloud-right.png" alt="">
      <div class="l-container l-spacer -primary">
        <h2 class="c-heading -secondary -center roll text-white" lang="en" data-type="standUpIn" data-duration="fast">
          <span>2021年&nbsp;立佞武多&nbsp;秋の陣</span>
        </h2>
        <div class="l-spacer -top">
          <div class="youtube-wrapper z-index-top">
            <iframe src="https://www.youtube.com/embed/AdJvjxapgTc" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </div>
      </div>
      <img class="animate-left bottom-0 w-20" src="@/assets/img/cloud-left.png" alt="">
    </section>
  </div>
</template>

<script>
import Lottie from "~/components/Lottie.vue";
import * as animationData from "~/assets/json/animation.json";

export default {
  name: 'IndexPage',
  head() {
    return {
      title: '立佞武多公式サイト',
      meta: [
        { hid: 'og:description', property: 'og:description', content: 'ディスクリプション' },
        { hid: 'og:url', property: 'og:url', content: 'ページのURL' },
        { hid: 'og:image', property: 'og:image', content: '画像のURL' },
      ],
      script: [
        {
          src: 'https://code.jquery.com/jquery-3.6.0.min.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
          async: true,
          defer: true,
          body: true
        },
        {
          src: 'js/roll.js', async: true, defer: true, body: true
        },
        {
          src: 'js/fonts.js', async: true, defer: true, body: true
        },
        {
          src: 'js/main.js', async: true, defer: true, body: true
        },
        {
          src: 'js/flip.min.js', async: true, defer: true, body: true
        },
      ]
    }
  },
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  },
};
</script>

<style>
</style>
