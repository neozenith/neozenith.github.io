<template>
 <div class='dashboard'>
   <h1>testing it worked</h1>
  <vega-lite :data="values" mark="bar" :encoding="encoding"/>
 </div>
</template>

<script>
import Vue from 'vue'
import VueVega from 'vue-vega'

Vue.use(VueVega)

export default{
  data () {
    return {
      values: [
        {a: 'A', b: 28}, {a: 'B', b: 55}, {a: 'C', b: 43},
        {a: 'D', b: 91}, {a: 'E', b: 81}, {a: 'F', b: 53},
        {a: 'G', b: 19}, {a: 'H', b: 87}, {a: 'I', b: 52}
      ],
      encoding: {
        x: {field: 'a', type: 'ordinal'},
        y: {field: 'b', type: 'quantitative'}
      }
    }
  }
}
</script>
