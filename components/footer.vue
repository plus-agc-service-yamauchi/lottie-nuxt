<template>
  <div id="footer">
    <footer class="p-footer -bg-primary" id="operation">
      <div class="l-container l-spacer">
        <div class="flex" data-align="justify">
          <div class="flex__item" data-grid="sp12 lapAuto" data-align="bottom">
            <p class="p-logo -secondary">青森県五所川原市</p>
            <div class="flex" data-gutter="normal">
              <div class="flex__item" sp12 tab12 lapAuto>主催：五所川原市立佞武多運営委員会</div>
              <div class="flex__item" sp12 tab12 lapAuto>お問合せ：五所川原商工会議所（0173-35-2121）</div>
              <div class="flex__item" sp12 tab12 lapAuto>（一社）五所川原市観光協会（0173-38-1515）</div>
            </div>
          </div>
          <div class="flex__item" data-grid="sp12 lapAuto" data-align="bottom">
            <p class="p-copyright"><small lang="en"><nuxt-link to="/privacy">プライバシーポリシー</nuxt-link></small></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>

<style>
</style>
