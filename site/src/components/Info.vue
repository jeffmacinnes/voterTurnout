<template>
  <div class="info">
    <h3 class="subtitle">2020 PRESIDENTIAL ELECTION</h3>
    <h1 class="title">Turn up the Turnout</h1>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
    <p>The map on the right shows county-level voter turnout rates for the 2016 presidential election. Darker colors represent greater turnout, while lighter colors represent less turnout. 
    </p>

    <!-- AI2HTML  -->
    <div id="g-test-box" class="ai2html">

      <!-- Artboard: Artboard_1 -->
      <div id="g-test-Artboard_1" class="g-artboard" style="max-width: 300px;max-height: 100px" data-aspect-ratio="3" data-min-width="0">
    <div style="padding: 0 0 33.3333% 0;"></div>
        <img id="g-test-Artboard_1-img" class="g-aiImg" alt="" src="@/assets/test-Artboard_1.png"/>
        <div id="g-ai0-1" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:54.0972%;margin-top:-8.1px;left:76.8278%;width:91px;">
          <p class="g-pstyle0">Lorem ipsum</p>
        </div>
        <div id="g-ai0-2" class="g-Layer_1 g-aiAbs g-aiPointText" style="top:57.0972%;margin-top:-8.1px;left:3.953%;width:91px;">
          <p class="g-pstyle0">Lorem ipsum</p>
        </div>
      </div>

    </div>
    <!-- END AI2HTML -->

    <p>
      See how your county compares with the rest and make a plan to vote if you haven't yet. Turn up the turnout!
    </p>
    
    <p>
      Designed and developed by <a href="https://www.jeffmacinnes.com">Jeff MacInnes</a> and <a href="https://www.sergeilarionov.com">Sergei Larionov</a>. Built using <a href="https://www.observablehq.com">ObservableHQ</a>. Data from ... 
    </p>
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
  border-right: 1px 1;
  text-align: center;
}

.subtitle {
    text-transform: uppercase;
    font-size: 18px;
}

.title {
    text-transform: uppercase;
    font-size: 32px;
}

p {
  padding: 0px 15px;
  text-align: left;
}

#g-test-box ,
	#g-test-box .g-artboard {
		margin:0 auto;
	}
	#g-test-box p {
		margin:0;
	}
	#g-test-box .g-aiAbs {
		position:absolute;
	}
	#g-test-box .g-aiImg {
		position:absolute;
		top:0;
		display:block;
		width:100% !important;
	}
	#g-test-box .g-aiSymbol {
		position: absolute;
		box-sizing: border-box;
	}
	#g-test-box .g-aiPointText p { white-space: nowrap; }
	#g-test-Artboard_1 {
		position:relative;
		overflow:hidden;
	}
	#g-test-Artboard_1 p {
		font-family:arial,helvetica,sans-serif;
		line-height:14px;
		height:auto;
		filter:alpha(opacity=100);
		-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
		opacity:1;
		letter-spacing:0em;
		font-size:12px;
		text-align:left;
		color:rgb(0,0,0);
		text-transform:none;
		padding-bottom:0;
		padding-top:0;
		mix-blend-mode:normal;
		font-style:normal;
		position:static;
	}
	#g-test-Artboard_1 .g-pstyle0 {
		height:14px;
	}




</style>
