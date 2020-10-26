<template>
  <div id="root">
    <div id="main-container">
      <div class="info-container">
        <Info />
        <Methods />
      </div>
      <CountySelector class="map-container"/>
      <div id="legend-container">
        <img id="legend" src="@/assets/legend.png">
      </div>
      <div class='clear'></div>
      <Methods />
    </div>
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

html, body {
  height: 100%;
}

#main-container {
  height: 100%;
  min-height: 100%;
}

.info-container{
  width: 30%;
  height: 100%;
  position: absolute;
  left: 0;
  overflow: scroll;
  border-right: 1px solid #eee;
}

.methods {
  box-sizing: border-box;
}


/*Shows methods in Info, hides from Main*/

#main-container .methods {
  display: none;
}
.info-container .methods {
  display: block !important;
}

.map-container{
  width: 69%;
  height: 100%;
  position: absolute;
  right: 0;
}

#legend {
  position: absolute;
  right: 30px;
  bottom: 20px;
  width: 320px;
  height:99px
};

@include tablet {

  .info-container {
    position: relative;
    width: 60vw;
    margin: auto;
    padding-bottom: 0px;
    border-right: none;
  }

  .map-container{
    position: relative;
    width: 95vw;
    margin-top: 0px;

  }
  #legend {
    right: 0px;
    bottom: 0px;
    position: relative;
    display: inline-block;
  };
  #legend-container {
      width: 60vw;
      margin: auto;
      text-align: center;
    };

  /*Shows methods in Main, hides from Info*/

  #main-container .methods {
    display: block;
    width: 60vw;
    margin: auto;
    padding: 20px 25px 25px 25px;
  }
  .info-container .methods {
    display: none !important;
  }

}
@include mobile {

  .info-container {
    position: relative;
    width: 100vw;
    margin: auto;
    padding-bottom: 0px;
    border-right: none;
  }

  .map-container{
    position: relative;
    width: 90vw;
    margin-top: 0px;
    display: inline-block;
  }

  #legend {
    right: 0px;
    bottom: 0px;
    position: relative;
 
  };
  #legend-container {
    width: 100vw;
    margin: auto;
    text-align: center;
  };

  /*Shows methods in Main, hides from Info*/

  #main-container .methods {
    display: block;
    width: 100vw;
    margin: auto;
    padding: 20px 25px 25px 25px;
  }
  .info-container .methods {
    display: none !important;
  }

  .clear {
    clear: both;
  }

}

</style>
