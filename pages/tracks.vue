<template>
  <div>
    <div v-if="tracks">
      <usage-track :tracks="tracks" :titled="true" :pages="pages" @paginate="paginate" />
    </div>
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
    this.paginate({ page: 0, itemsPerPage: Math.round(window.innerHeight / 64) })
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
    },
    async paginate (it) {
      await this.$api
        .$get('/tracks/paginate', { params: { page: it.page, size: it.itemsPerPage } })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.tracks = response.results
        })
        .catch((err) => {})
    }
  }

}
</script>
