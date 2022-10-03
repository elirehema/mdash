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
      </div>
      <div>
        <div><span class="font-semibold text-primary text-sm"> Serial No: {{ meter.serialNumber }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Controll No: {{ meter.controlNumber }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Device ID: {{ meter.deviceId }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Current Units: {{ meter.Bill.credits }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Batch No: {{ meter.batchNumber }}</span></div>
        <div><span class="font-semibold text-primary text-sm"> Offset: {{ meter.Bill.offSet }}</span></div>
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
      <usage-tracks :tracks="meter.UsageTracks" />
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
      downlinks: false
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
    }
  }
}
</script>
