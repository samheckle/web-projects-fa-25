<script setup>
// this is javascript code
// imports tell the library to pull something specific to vue
import {onMounted} from 'vue'
import MyButton from './MyButton.vue'

// https://vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks
// onMounted is similar to window.onload
onMounted( ()=>{
  console.log('the component has mounted, or added to the DOM')
} )
</script>

<template>
  <!-- this is html code -->
  <MyButton />
</template>

<style scoped>
/* this is css code */
button{
  border: 3px solid cyan;
}

</style>
