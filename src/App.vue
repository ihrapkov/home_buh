<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmtyLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {MainLayout, EmptyLayout}
}
</script>

<style>
@import '../node_modules/materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
