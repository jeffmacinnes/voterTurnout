<template>
  <div class="info">
    <h3 class="subtitle">2020 PRESIDENTIAL ELECTION</h3>
    <h1 class="title">Turn up the Turnout</h1>
    <p>Nationwide, <mark>55.5%</mark> of the voting-age population turned out for the 2016 presidential election <a href="http://www.electproject.org/2016g">(US Elections Project)</a><sup>*</sup>. That leaves over 110 million individuals who did not participate.</p>
    <p>This map shows how voting turnout rates varied by county in 2016.</p>
    <p>Hover over the map to see how your county compares, and click on any state to learn more about how to register and vote in the upcoming election. 
    </p>

    <p>You have a vote. You have a voice. Turn it up.</p>

    <div id="legend-container">
      <img id="legend" src="@/assets/legend.png">
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.info {
  background-color: #fff;
  text-align: center;
  font-family: 'Work Sans', sans-serif;
  padding: 20px 35px;
}

.subtitle {
    text-transform: uppercase;
    font-size: 17px;
}

.title {
    text-transform: uppercase;
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 32px;
    line-height: 1.05em;
}

p {
  padding: 0px 0px;
  text-align: left;
}

sup { vertical-align: top; font-size: 0.6em; }

mark {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background-color: #FEEDA2;
  padding: 2px;
  font-weight: 600;
}

.attribution {
  color: #ccc;
  font-size: 12px;
  font-style: italic;
}

#legend {
  width: 95%;
  max-width: 320px;
};




</style>
