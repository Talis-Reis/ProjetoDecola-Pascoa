<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar.vue'

export default {
  name: 'App',
  components: {
    AppTopBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center
}
</style>
