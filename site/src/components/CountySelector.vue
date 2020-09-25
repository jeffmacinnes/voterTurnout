<template>
    <div class="county-selector">
        <h1>THIS IS THE COUNTY SELECTOR</h1>
        <PulseLoader class="loader" color="#AAB0B3" :loading="loading" />
        <div id='observable-container'>
            <div class='map'></div>
        </div>

    </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { Inspector, Runtime } from "@observablehq/runtime";
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
            selectedCounty: null
        }
    },

    async mounted() {
        // 
        const notebookSlug = "d/2c3d3b4b0ec5f2a3"
        const notebook = await importModule(`https://api.observablehq.com/${notebookSlug}.js?v=3`)
        this.nbRuntime = new Runtime().module(notebook.default, name => {
            if (name === 'viewof countySelector') {
                return Inspector.into("#observable-container .map")()
            };

            // monitor the the state of countySelector variable from notebook
            if (name === 'countyProps') {
                return {
                    fulfilled: value => {
                        console.log('here', value)
                        this.selectedCounty = value
                    }
                }
            }

            // make it responsive to width!
        })
        
        this.loading = false;
    }



}
</script>

<style lang="scss" scoped>

.county-selector {
  width: 100vw;
  height: auto;
  background-color: #fff;
};

</style>