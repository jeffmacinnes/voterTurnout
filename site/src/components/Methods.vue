<template>
    <div class="methods">
      <div class='col-container'>
        <div class='col'>
          <p>
            <sup>*</sup>Voter turnout within a region was defined as the total votes divided by the voting-age population (VAP). Using VAP as the denominator is less accurate than using voting-eligible population (VEP), however VEP data was not available at a county level. For more information on this distinction, please see <a href="http://www.electproject.org/2016g">US Elections Project</a>
          </p>

        </div>

        <div class='col'>
          <p>
            Designed and developed by <a href="https://www.jeffmacinnes.com">Jeff MacInnes</a> and <a href="https://www.sergeilarionov.com">Sergei Larionov</a>. County-level vote totals from <a href="http://www.townhall.com/election/2016/president">Townhall</a> (scraped using approach developed by <a href="https://github.com/tonmcg/US_County_Level_Election_Results_08-16">Tony McGovern</a>). Visualization created and embedded via <a href="https://observablehq.com/d/2c3d3b4b0ec5f2a3">ObservableHQ</a>.
          </p>
        </div>



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
    padding: 20px;
    background-color: #fff;
    color: #bbb;
    font-size: 14px;
};

a {
  font-weight: bold;
}

.col-container {
  margin: auto;
  width: 60vw;
  display: flex;

  .col {
    padding: 10px;

    flex: 50%;
  }
}

sup { vertical-align: top; font-size: 0.6em; }


</style>