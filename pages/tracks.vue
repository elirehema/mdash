<template>
  <div class="container min-w-full">
    <div class="p-5 border-b flex justify-between ">
      <div>
        <p class="font-bold text-primary text-3xl">
          Meter Usage Tracks
        </p>
        <p class="text-sm font-light">
          List of all meter usage tracks
        </p>
      </div>
      <nuxt-link to="/readings">
        <a class="underline italic text-blue-500">Meter readings</a>
      </nuxt-link>
    </div>
    <usage-track :tracks="tracks" />
  </div>
</template>
<script >
import { mapGetters } from 'vuex'
import MeterUsageTrackComponent from '~/components/usage-track.vue'
export default {
  name: 'NuxtTutorial',
  components: {
    'usage-track': MeterUsageTrackComponent
  },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      tracks: 'tracks'
    })
  },
  created () {
    this.$store.dispatch('_fetchusagetracks')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }

}
</script>
