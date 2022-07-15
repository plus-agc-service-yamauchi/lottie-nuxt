<template>
  <div id="header">
    <header class="l-header p-header">
      <div class="l-container">
        <div class="flex" data-align="justify">
          <div class="flex__item" data-align="middle">
            <h1 class="p-header__title l-spacer -center">
              <nuxt-link class="p-logo font-1rem" to="/">GOSHOGAWARA<br>TACHINEPUTA</nuxt-link>
            </h1>
          </div>
          <div class="flex__item">
            <nav class="p-header__nav">
              <button class="js-drawer p-hamburger" type="button" aria-expanded="false" aria-controls="globalNav"><span
                  class="p-hamburger__line"><span class="u-visuallyHidden">メニューを開閉</span></span></button>
              <div class="p-drawer">
                <h2 class="u-visuallyHidden">サイト内メニュー</h2>
                <div class="p-globalNav" id="globalNav">
                  <ul class="flex" data-gutter="normal" data-align="middle">
                    <li class="flex__item" data-grid="sp12 lapAuto">
                      <router-link to="/#about">開催概要</router-link>
                    </li>
                    <li class="flex__item" data-grid="sp12 lapAuto">
                      <router-link to="/#news">お知らせ</router-link>
                    </li>
                    <li class="flex__item" data-grid="sp12 lapAuto">
                      <router-link to="/#departure">出陣立佞武多</router-link>
                    </li>
                    <li class="flex__item" data-grid="sp12 lapAuto">
                      <router-link to="/#gallery">フォトギャラリー</router-link>
                    </li>
                    <li class="flex__item" data-grid="sp12 lapAuto">
                      <router-link to="/#live">ライブ動画</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage'
}
</script>
