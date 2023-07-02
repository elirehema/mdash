<!-- Please remove this file from your project -->
<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app color="primary" flat>
      <nuxt-link to="/">
        <img height="45" class="ml-5" src="nexiot.png">
      </nuxt-link>
      <v-spacer />
      <v-btn
        v-for="button in buttons"
        :key="button.to"
        class="mx-1"
        fab
        x-small
        :to="button.to"
        color="default"
      >
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-icon
              color="primary"
              v-bind="attrs"
              v-on="on"
            >
              mdi-{{ button.icon }}
            </v-icon>
          </template>
          <span>{{ button.tooltip }}</span>
        </v-tooltip>
      </v-btn>
      <v-btn
        class="mx-4"
        fab
        x-small
        elevation="0"
        color="warning  darken-1"
        @click="$store.dispatch('_logoutsession')"
      >
        <v-icon color="white">
          mdi-logout-variant
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="ma-2" height="100%" fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <!--<footer-component />-->
    </v-footer>
  </v-app>
</template>

<script >
import { mapGetters } from 'vuex'
export default {
  name: 'NuxtTutorial',
  data () {
    return {
      foodname: '5 Bean Chilli Stews',
      menu: false,
      clipped: false,
      drawer: false,
      fixed: false,
      messages: 8,
      adv: 7,
      notifications: 1,
      buttons: [
        {
          to: '/',
          icon: 'home-variant-outline',
          tooltip: 'Go back to home'
        },
        {
          to: '/meters',
          icon: 'gauge',
          tooltip: 'Meters'
        },
        {
          to: '/users',
          icon: 'account-group-outline',
          tooltip: 'Users'
        },
        {
          to: '/companies',
          icon: 'domain',
          tooltip: 'Companies'
        },
        {
          to: '/purchases',
          icon: 'finance',
          tooltip: 'Credit Purchases'
        },
        {
          to: '/system',
          icon: 'cog-outline',
          tooltip: 'System Settings'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      companies: 'companies',
      isadmin: 'isadmin',
      cid: 'companyId'
    })
  },
  created () {
    this.$store.dispatch('_fetchuseraccount')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }
}
</script>
