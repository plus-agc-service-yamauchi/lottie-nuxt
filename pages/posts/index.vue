<template>

  <div id="blog">
    <!-- main -->
    <div class="p-hero">
      <div class="flex">
        <div class="flex__item bg-pattern" data-grid="sp12 lap6 background-pc" data-align="middle">
          <div class="p-hero__body">
            <p class="p-hero__title"><strong class="p-hero__strong"><span
                  class="u-wbr p-hero__node font-6rem"><span>お知らせ</span></span></strong></p>
            <div class="l-spacer -mtMedium -top">
              <p class="p-hero__text">
                <span class="u-wbr">随時更新中！
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex__item" data-grid="sp12 lap6">
          <figure class="p-hero__figure">
            <ul class="flex">
              <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"
                    data-id="1"><img class="p-hero__image" src="@/static/img/img-privacy-hero-left.jpg"
                      srcset="@/static/img/img-privacy-hero-left.jpg, @/static/img/img-privacy-hero-left@2x.jpg 2x"
                      alt="" decoding="async"></span></span></li>
              <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"
                    data-id="2"><img class="p-hero__image" src="@/static/img/img-privacy-hero-center.jpg"
                      srcset="@/static/img/img-privacy-hero-center.jpg, @/static/img/img-privacy-hero-center@2x.jpg 2x"
                      alt="" decoding="async"></span></span></li>
              <li class="flex__item" data-grid="sp4"><span class="p-hero__imageWrap"><span class="p-hero__color"
                    data-id="3"><img class="p-hero__image" src="@/static/img/img-privacy-hero-right.jpg"
                      srcset="@/static/img/img-privacy-hero-right.jpg, @/static/img/img-privacy-hero-right@2x.jpg 2x"
                      alt="" decoding="async"></span></span></li>
            </ul>
          </figure>
        </div>
      </div>
    </div>
    <section class="l-spacer -primary -bgLightGrey bg-privacy" id="about">
      <div class="l-spacer -primary -bottom">
        <div class="l-container -narrow">
          <div class="l-spacer -mtMedium -top">
            <posts :posts="posts"></posts>
          </div>
        </div>
      </div>
    </section>
    <section class="-primary -bg-primary bg-gradient p-relative" id="live"><img class="animate-right top-0 w-20"
        src="@/static/img/cloud-right.png" alt="">
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
      <img class="animate-left bottom-0 w-20" src="@/static/img/cloud-left.png" alt="">
    </section>
  </div>

</template>

<script>
import Posts from "@/components/Posts";
import postsHelper from "@/mixins/postsHelper";

export default {
  name: 'BlogPage',
    meta: [
        { hid: 'og:description', property: 'og:description', content: 'ディスクリプション' },
        { hid: 'og:url', property: 'og:url', content: 'ページのURL' },
        { hid: 'og:image', property: 'og:image', content: '画像のURL' },
      ],
  components: {
    Posts
  },
  async asyncData() {
    return postsHelper.methods.getPosts();
  }
};
</script>

<style lang="scss">
</style>
