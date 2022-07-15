<template>
  <section class="container">
    <div>
      <!--h1 class="title">
        <a href="https://qiita.com/godan09/items/73015d0b8ef3a4dd8dba" target="_blank">Tutorial</a>
      </h1-->
      <lottie :options="defaultOptions" v-on:animCreated="handleAnimation"/>
    </div>
  </section>
</template>

<script>
import Lottie from "~/components/Lottie.vue";
import * as animationData from "~/assets/header.json";

export default {
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
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>

<style>
body {
  background-color: #002c3e;
}
a {
  position: absolute;
  color: #FFF;
  top: 40px;
  right: 40px;
}
</style>