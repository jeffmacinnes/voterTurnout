<template>
  <div id="root">
    <div id="main-container">
      <Info class="info-container"/>
      <CountySelector class="map-container"/>
    </div>
    <Methods />
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info.vue";
import CountySelector from "@/components/CountySelector.vue";
import Methods from "@/components/Methods.vue";

export default {
  name: "Home",
  components: {
    Info,
    CountySelector,
    Methods
  }
};
</script>


<style lang="scss" scoped>
#main-container {
  display: flex;
  align-content: stretch;
}

.info-container{
  width: 27%;
  // flex: 0 0 350px;
}

.map-container{
  // padding:20px;
  width: 70%;
  align-self: center;
  box-sizing: border-box;
  background-color: #fff;
}

@include tablet {
  #main-container {
    flex-direction: column;
  }

  .info-container {
    width: 60vw;
    margin: auto;
    padding-bottom: 0px;
  }

  .map-container{
    width: 90vw;
    margin: 20px;
    margin-top: 0px;
  }

}



</style>
