<template>
  <div class="container min-w-full">
    <div class="p-5 border-b">
      <p class="font-bold text-primary text-3xl">
        Meter Readings
      </p>
      <p class="text-sm font-light">
        List of all meter  readings
      </p>
    </div>

    <meter-readings :readings="readings" />
    <pagination-component :page="page" :pages="pages" @update="updatepage($event)" />
  </div>
</template>
<script >
import MeterReadingsComponent from '~/components/meter-readings.vue'
export default {
  components: {
    'meter-readings': MeterReadingsComponent
  },
  data () {
    return {
      page: 1,
      pages: 0,
      readings: null
    }
  },
  created () {
    this.fetchpagenatedusagereadings()
  },
  methods: {
    updatepage (page) {
      this.readings = null
      this.page = page
      this.fetchpagenatedusagereadings()
    },
    async fetchpagenatedusagereadings () {
      await this.$api
        .$get('/readings/paginate', { params: { page: this.page, size: Math.round(window.innerHeight / 64) } })
        .then((response) => {
          this.readings = response.results
          this.pages = response.totalPages
        })
        .catch((_error) => {
        })
    }
  }

}
</script>
