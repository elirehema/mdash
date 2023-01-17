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
      <div>
      <nuxt-link to="/readings">
        <a class="underline italic text-blue-500">Meter readings</a>
      </nuxt-link>
      <export-button report="tracks" />
      </div>
    </div>
    <usage-track :tracks="tracks" />
    <pagination-component :page="page" :pages="pages" @update="updatepage($event)" />
  </div>
</template>
<script >
import MeterUsageTrackComponent from '~/components/usage-track.vue'
export default {
  name: 'NuxtTutorial',
  components: {
    'usage-track': MeterUsageTrackComponent
  },
  data () {
    return {
      page: 1,
      pages: 0,
      tracks: null
    }
  },
  created () {
    this.fetchpagenatedusagetracks()
  },
  methods: {
    updatepage (page) {
      this.tracks = null
      this.page = page
      this.fetchpagenatedusagetracks()
    },
    async fetchpagenatedusagetracks () {
      await this.$api
        .$get('/tracks/paginate', { params: { page: this.page, size: Math.round(window.innerHeight / 64) } })
        .then((response) => {
          this.tracks = response.results
          this.pages = response.totalPages
        })
        .catch((_error) => {
        })
    }
  }

}
</script>
