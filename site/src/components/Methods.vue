<template>
    <div class="methods">

          <p>
            <sup>* </sup>Voter turnout within a region was defined as the total votes divided by the voting-age population (VAP). Using VAP as the denominator is less accurate than using voting-eligible population (VEP), however VEP data was not available at a county level. For more information on this distinction, please see <a href="http://www.electproject.org/2016g">US Elections Project</a>
          </p>

          <p>
            Designed and developed by <a href="https://www.jeffmacinnes.com">Jeff MacInnes</a> and <a href="https://www.linkedin.com/in/sergei-larionov-4a84183">Sergei Larionov</a>. County-level vote totals from <a href="http://www.townhall.com/election/2016/president">Townhall</a> (scraped using approach developed by <a href="https://github.com/tonmcg/US_County_Level_Election_Results_08-16">Tony McGovern</a>). Visualization created and embedded via <a href="https://observablehq.com/d/2c3d3b4b0ec5f2a3">ObservableHQ</a>.
          </p>

      </div>

    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

.methods {
    height: 100;
    padding: 0px 25px 10px 25px;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.4em;
};

sup { vertical-align: top; font-size: 1em; }

</style>
