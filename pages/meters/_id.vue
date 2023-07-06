<template>
  <v-card v-if="meter" elevation="1">
    <v-container fluid class="d-flex justify-space-between mb-6">
      <v-card min-width="20%" elevation="1" class="px-5 py-5">
        <div>
          <p class="font-bold text-primary  flex flex-row" />

          <div>
            <span class="font-weight-bold"> Meter ID: {{ meter.id }}</span>
          </div>
          <div>
            <span class="font-weight-bold"> Device ID: {{ meter.deviceId }}</span>
          </div>

          <p class="font-weight-thin span text-grey pt-2">
            View meter statistical inforrmations
          </p>
          <div class="mt-5">
            <v-btn
              v-if="meter.isActive"
              elevation="0"
              class="py-2"
              block
              color="error"
              @click="trigermetermanually('off')"
            >
              <v-icon left>
                mdi-water-check
              </v-icon> Switch Off
            </v-btn>
            <v-btn
              v-else
              block
              color="grey"
              dark
              @click="trigermetermanually('on')"
            >
              <svg
                class="fill-white"
                style="width:24px; height:24px"
                viewBox="0 0 24 24"
                :class="loading ? 'motion-reduce:hidden animate-spin':''"
              >
                <path v-if="loading" d="M13 2V4C17.39 4.54 20.5 8.53 19.96 12.92C19.5 16.56 16.64 19.43 13 19.88V21.88C18.5 21.28 22.45 16.34 21.85 10.85C21.33 6.19 17.66 2.5 13 2M11 2C9.04 2.18 7.19 2.95 5.67 4.2L7.1 5.74C8.22 4.84 9.57 4.26 11 4.06V2M4.26 5.67C3 7.19 2.24 9.04 2.05 11H4.05C4.24 9.58 4.8 8.23 5.69 7.1L4.26 5.67M2.06 13C2.26 14.96 3.03 16.81 4.27 18.33L5.69 16.9C4.81 15.77 4.24 14.42 4.06 13H2.06M7.06 18.37L5.67 19.74C7.18 21 9.04 21.79 11 22V20C9.58 19.82 8.23 19.25 7.1 18.37H7.06Z" />
                <path v-else d="M21.75 16.25L17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20H12.34C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z" />
              </svg>Switch On
            </v-btn>
          </div>
        </div>
      </v-card>
      <v-card min-width="20%" elevation="1" outlined class="px-8 py-4">
        <div>
          <div class="d-flex justify-space-between">
            <span> Serial No: </span>
            <span>{{ meter.serialNumber }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span> Controll No: </span>
            <span>{{ meter.controlNumber }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span> Device ID: </span>
            <span>{{ meter.deviceId }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span> Current Units: </span>
            <span>{{ meter.bill.credits }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span> Batch No: </span>
            <span>{{ meter.batchNumber }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span> Offset: </span>
            <span>{{ meter.bill.offSet }}</span>
          </div>
        </div>
      </v-card>
    </v-container>

    <meter-downlink-commands v-if="shodownlinks" :pages="pages" :downlinks="downlinks" @paginate="paginatedownlinks" @update="shodownlinks = !shodownlinks" />
    <meter-usage-tracks v-else :tracks="tracks" :pages="pages" @paginate="paginate" @update="shodownlinks = !shodownlinks" />
  </v-card>
</template>
<script >
import MeterUsageTrackComponent from '~/components/meter/m_usage_tracks.vue'
import MeterDownlinksCommandsComponent from '~/components/meter/m_downlinks.vue'
export default {
  components: {
    'meter-usage-tracks': MeterUsageTrackComponent,
    'meter-downlink-commands': MeterDownlinksCommandsComponent
  },
  data () {
    return {
      meter: null,
      menu: false,
      tracks: null,
      downlinks: null,
      pages: 1,
      shodownlinks: false,
      loading: false
    }
  },
  computed: {},
  created () {
    this.requestmeterinformation()
    this.paginate({ page: 0, itemsPerPage: Math.round(window.innerHeight / 64) })
    this.paginatedownlinks({ page: 0, itemsPerPage: Math.round(window.innerHeight / 64) })
  },
  methods: {
    async requestmeterinformation () {
      await this.$api
        .$get(`/meters/${this.$route.params.id}`)
        .then((response) => {
          this.meter = response
        })
        .catch(() => {})
    },
    async trigermetermanually (action) {
      this.loading = true
      await this.$api.$post(`/meters/${this.$route.params.id}/${action}`)
        .then(() => {
          this.requestmeterinformation()
          this.loading = false
        })
        .catch(() => {})
    },
    async paginate (it) {
      await this.$api
        .$get(`/meters/${this.$route.params.id}/tracks`, { params: { page: it.page, size: it.itemsPerPage } })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.tracks = response.results
        })
        .catch((err) => {})
    },
    async paginatedownlinks (it) {
      await this.$api
        .$get(`/meters/${this.$route.params.id}/downlinks`, { params: { page: it.page, size: it.itemsPerPage } })
        .then((response) => {
          this.pages = response.totalRows
          this.page = response.currentPage
          this.downlinks = response.results
        })
        .catch((err) => {})
    }
  }
}
</script>
