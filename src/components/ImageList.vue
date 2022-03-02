<script lang="ts">
import Vue from 'vue'
import { defineComponent } from 'vue'
export default defineComponent({
    data() { 
        return {
            list: [{id: 1, name: 1}, {id: 2,name: 2 }]
        }
    }
        
})

</script>

<template>
  <div>
      <ul>
          <li v-for="item in list" :key="item.id">
              {{item.name}}
          </li>
      </ul>
  </div>
</template>
