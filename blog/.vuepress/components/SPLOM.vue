<template>
  <div id="vis"></div>
</template>
 
<script src="https://cdn.jsdelivr.net/npm/vega@3"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-lite@2"></script>
<script src="https://cdn.jsdelivr.net/npm/vega-embed@3"></script>
<script type="text/javascript">
    var vgSpec = "data/spec.vl.json";
    var options = {
      "renderer":"svg",
      "actions":false
    };
    
    vegaEmbed("#vis", vgSpec, options).then(function(result){
      console.debug('success');
    }).catch(console.warn);
</script>
