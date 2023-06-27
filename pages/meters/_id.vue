<template>
  <div v-if="meter" class="container p-5 min-w-full">
    <div class="p-5 border-b flex justify-between flex-col lg:flex-row bg-gray-100">
      <div>
        <p class="font-bold text-primary  flex flex-row" />

        <div>
          <span class="font-bold text-primary text-3xl"> Meter ID: {{ meter.id }}</span>
        </div>
        <div>
          <span class="font-bold text-primary text-2xl"> Device ID: {{ meter.deviceId }}</span>
        </div>

        <p class="text-sm font-light">
          View meter statistical inforrmations
        </p>
        <div class="mt-5 flex">
          <button
            v-if="meter.isActive"
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex content-center justify-between"
            @click="trigermetermanually('off')"
          >
            <svg class="fill-white" style="width:24px; height:24px" viewBox="0 0 24 24" :class="loading ? 'motion-reduce:hidden animate-spin':''">
              <path v-if="loading" d="M13 2V4C17.39 4.54 20.5 8.53 19.96 12.92C19.5 16.56 16.64 19.43 13 19.88V21.88C18.5 21.28 22.45 16.34 21.85 10.85C21.33 6.19 17.66 2.5 13 2M11 2C9.04 2.18 7.19 2.95 5.67 4.2L7.1 5.74C8.22 4.84 9.57 4.26 11 4.06V2M4.26 5.67C3 7.19 2.24 9.04 2.05 11H4.05C4.24 9.58 4.8 8.23 5.69 7.1L4.26 5.67M2.06 13C2.26 14.96 3.03 16.81 4.27 18.33L5.69 16.9C4.81 15.77 4.24 14.42 4.06 13H2.06M7.06 18.37L5.67 19.74C7.18 21 9.04 21.79 11 22V20C9.58 19.82 8.23 19.25 7.1 18.37H7.06Z" />
              <path v-else d="M20.84 22.73L16.29 18.18C15.2 19.3 13.69 20 12 20C8.69 20 6 17.31 6 14C6 12.67 6.67 11.03 7.55 9.44L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18 14C18 10 12 3.25 12 3.25S10.84 4.55 9.55 6.35L17.95 14.75C18 14.5 18 14.25 18 14Z" />
            </svg>
            <span class="mt-1 ml-2 font-bold hidden md:block">
              Switch Off</span>
          </button>
          <button
            v-else
            type="button"
            class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex content-center justify-between"
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
            </svg>
            <span class="mt-1 ml-2 font-bold hidden md:block">
              Switch On</span>
          </button>
        </div>
      </div>
      <div>
        <div><span class="font-semibold text-primary text-sm"> Serial No: {{ meter.serialNumber }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Controll No: {{ meter.controlNumber }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Device ID: {{ meter.deviceId }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Current Units: {{ meter.bill.credits }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Batch No: {{ meter.batchNumber }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Offset: {{ meter.bill.offSet }}</span></div>
        <div @click="downlinks = !downlinks">
          <span class="font-bold text-blue-500 text-sm underline italic">{{ !downlinks? 'DownLinks':'UsageTrack' }}</span>
        </div>
      </div>
    </div>
    <div v-if="downlinks">
      <div class="p-5 border-b">
        <p class="text-sm font-bold">
          List of all meter downlink commands
        </p>
      </div>
      <downlink-commands :commands="meter.Downlinks" />
    </div>
    <div v-else>
      <div class="p-5 border-b">
        <p class="text-sm font-bold">
          List of all meter usage tracks
        </p>
      </div>
      <usage-tracks :tracks="meter.usageTracks" />
    </div>
  </div>
</template>
<script >
import MeterUsageTrackComponent from '~/components/usage-track.vue'
import MeterDownlinksCommandsComponent from '~/components/downlinks.vue'
export default {
  components: {
    'usage-tracks': MeterUsageTrackComponent,
    'downlink-commands': MeterDownlinksCommandsComponent
  },
  data () {
    return {
      fields: ['ID', 'MeterID', 'Previous Unit', 'Recorded Unit', 'Offset', 'Date:Time', 'Active ?'],
      meter: null,
      menu: false,
      downlinks: false,
      loading: false
    }
  },
  computed: {},
  created () {
    this.requestmeterinformation()
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
    }
  }
}
</script>
