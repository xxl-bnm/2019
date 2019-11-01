<template>
  <div id="app">
	 <router-view v-if="isRouterAlive"></router-view>
  <!--<router-view/>-->  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data () {
      return {
        isRouterAlive: true
      }
    },
    provide(){ //提供
      return {
        reload: this.reload
      }
    },
    methods: {
        reload(){
            this.isRouterAlive = false
            this.$nextTick( function () {
            this.isRouterAlive = true
          })
        }
    }

}
</script>

<style>
</style>
