<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Hero />
    <CountySelector />
    <Methods />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import CountySelector from "@/components/CountySelector.vue";
import Methods from "@/components/Methods.vue";

export default {
  name: "Home",
  components: {
    Hero,
    CountySelector,
    Methods
  }
};
</script>
