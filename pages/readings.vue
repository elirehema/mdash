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
  </div>
</template>
<script >
import { mapGetters } from 'vuex'
import MeterReadingsComponent from '~/components/meter-readings.vue'
export default {
  components: {
    'meter-readings': MeterReadingsComponent
  },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      readings: 'readings'
    })
  },
  created () {
    this.$store.dispatch('_fetchreadings')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }

}
</script>
