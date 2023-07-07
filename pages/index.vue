<!-- Please remove this file from your project -->
<template>
  <div class="text-gray-600 font-body ">
    <div class="p-6">
      <div class="flex justify-center md:justify-between border-b border-gray-200">
        <div>
          <header>
            <h2 class="text-gray-700 ml-2 font-semibold ">
              Summaries
            </h2>
          </header>
        </div>
      </div>
      <div v-if="totals">
        <v-row no-gutters>
          <summary-card v-for="(item,i) in totals" :key="i" :item="item" />
        </v-row>
      </div>
      <div>
        <div v-if="tracks">
          <h4 class="font-bold mt-12 border-b border-gray-200">
            Recent usage tracks
          </h4>
          <div class="mt-8">
            <usage-track :tracks="tracks" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { mapGetters } from 'vuex'
import MeterUsageTrackComponent from '~/components/usage-track.vue'
import SummaryCard from '~/components/summary.vue'
export default {
  name: 'NuxtTutorial',
  components: {
    'usage-track': MeterUsageTrackComponent,
    'summary-card': SummaryCard
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      totals: 'totals',
      tracks: 'recenttracks',
      units: 'units'
    })
  },
  mounted () {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.fetchdashboardinfos()
      }, 270000)
    })
  },
  created () {
    this.fetchdashboardinfos()
  },
  methods: {
    fetchdashboardinfos () {
      this.$store.dispatch('_fetchrecentusagetracks')
      this.$store.dispatch('_fetchstatistics')
      this.$store.dispatch('_fetchstatisticalunits')
    }
  }

}
</script>
