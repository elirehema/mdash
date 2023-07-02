<template>
  <v-app class="app login">
    <v-app-bar :clipped-left="clipped" fixed app color="primary" flat>
      <nuxt-link to="/">
        <img height="45" class="ml-5" src="nexiot.png">
      </nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main class="primary" color="primary">
      <nuxt color="primary" />
    </v-main>
  </v-app>
</template>
<script>
export default {

  data () {
    return {
    }
  },
  head () {
    return {
      title: 'Home Page'
    }
  }
}
</script>
    <style scoped>
    #nuxt,
    #layout {
      background-color: brown;
    }
    </style>
