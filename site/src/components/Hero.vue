<template>
  <div class="hero">
    <h1>THIS IS THE HERO</h1>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hero {
  width: 100vw;
  height: 500px;
  background-color: #d5d5d5;
}

h3 {
  margin: 40px 0 0;
}

</style>
