<template>
    <div class="county-selector">
      <PulseLoader class="loader" color="#AAB0B3" :loading="loading" />
      <div id='observable-container'>
        <div class='map'></div>
      </div>
    </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { Inspector, Runtime, Library } from "@observablehq/runtime";
import { importModule } from "@/utils/importScript";

export default {
    name: "CountySelector",

    components : {
        PulseLoader,
    },

    data(){
      return {
          loading: true,
          nbRuntime: null,
          selectedCounty: null,
          chartWidth: 600,
          resizeTimer: null,
      }
    },

    methods: {
        setChartWidth() {
          // set the width of the chart element
          try{
            this.chartWidth = document.querySelector(`.county-selector`).clientWidth;
            console.log(this.chartWidth)
          }
          catch(e){
            console.warn(e)
          }
        },

        handleResize(e) {
          // wait for resize to end
          clearTimeout(this.resizeTimer);
          this.resizeTimer = setTimeout(() => {
            // get current width of chart vis, update notebook runtime
            this.setChartWidth();
            this.nbRuntime.redefine("width", this.chartWidth);
          }, 100);
        },
    },

    async mounted() {
        // 
        const notebookSlug = "d/2c3d3b4b0ec5f2a3"
        const notebook = await importModule(`https://api.observablehq.com/${notebookSlug}.js?v=3`)
        this.nbRuntime = new Runtime().module(notebook.default, name => {
            if (name === 'chart') {
                return Inspector.into("#observable-container .map")()
            };

            // monitor the the state of countySelector variable from notebook
            if (name === 'countyProps') {
                return {
                    fulfilled: value => {
                        console.log(value)
                        this.selectedCounty = value
                    }
                }
            }
        })
        this.loading = false;

        // set chartWidth at first render
        this.setChartWidth();
        this.nbRuntime.redefine("width", this.chartWidth);

        // setup resize listener
        window.addEventListener("resize", this.handleResize);
    },

    destroyed() {
      window.removeEventListener("resize", this.handleResize);
    },
}
</script>

<style lang="scss" scoped>


.county-selector {
  margin: 0px 25px 25px 0px;
}

#observable-container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

::v-deep #tooltip-container {
  width: 300px;
  height: auto;
  padding: 10px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;

  .tt-header {
    width: 100%;
  }

  .tt-location {
    width: 75%;
    float: left;
  }

  .tt-county {
    font-weight: 600;
    font-size: 21px;
    line-height: .95;
    margin-top: 0px;
    margin-bottom: 3px;
  }

  .tt-state {
    margin: 0px;
    font-weight: 400;
    font-size: 16px;
  }

  .perc-label-container {
    float: right;
    max-width: 20%;
    background-color: #000; 
    text-align: center;
    vertical-align: middle;
    padding: 4px 5px;
    border-radius: 5px;
    color: #fff;
  }
  
  .tt-text {
    line-height: 1.2em;
  }

  .tt-perc-label {
    position: relative;
    font-weight: 600;
    font-size: 20px;
    margin: 0px;
  }

  .tt-tick-labels {
    font-weight: 400;
    font-size: 15px;
  }

  mark {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-color: #fff;
    padding: 2px;
    font-weight: 900;
    border-radius: 5px;
    color: #000;
  }

  // svg circle {
  //   fill: #000 !important;
  // }

  .tt-link-container {
    padding: 10px 10px 10px;
    text-align: center;
  }

  .tt-link {
    text-transform: uppercase;
    letter-spacing: .5px;
    font-size: 15px;
    color: #ccc;
    line-height: 15px;
  }
}

@include tablet {
  #observable-container {
    position: relative;
    top: 0;
    transform: none;
  }
  .county-selector {
    margin: 0px;
  }
}



</style>