<template>
  <div class="info">
    <h3 class="subtitle">2020 PRESIDENTIAL ELECTION</h3>
    <h1 class="title">Turn up the Turnout</h1>
    <p>Nationwide, voter turnout for the 2016 presidential election was 55.5% <a href="https://en.wikipedia.org/wiki/Voter_turnout_in_the_United_States_presidential_elections">(wikipedia)</a>. That leaves over 110 million voting-age individuals who did not participate<sup>*</sup>.</p>
    <p>This map shows how voting turnout rates varied by county in 2016.</p>
    <p>Hover over the map to see how your county compares, and click on any state to learn more about how to register and vote in the upcoming election. 
    </p>
    <p>You have a vote. You have a voice. Turn it up.</p>
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
  padding: 12px 25px 0px 25px;
}

.subtitle {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1px;
}

.title {
    text-transform: uppercase;
    font-family: 'PT Serif';
    font-weight: 700;
    font-size: 36px;
    line-height: .95em;
    letter-spacing: 1px;
    margin: 20px 20px 30px 20px;
}

p {
  font-size: 18px;
  padding: 0px 0px;
  text-align: left;
  line-height: 1.25em;
  margin: 20px 0px 20px 0px;
}

sup { vertical-align: top; font-size: 1.0em; }

.attribution {
  color: #ccc;
  font-size: 12px;
  font-style: italic;
}

</style>
