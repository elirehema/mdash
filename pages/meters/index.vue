<template>
  <div v-if="meters" class="container min-w-full">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Meters
        </p>
        <p class="text-sm font-light">
          List of all registered meters
        </p>
      </div>
      <div class="flex">
        <nuxt-link to="/meters/add">
          <button type="button" class="button">
            + New Meter
          </button>
        </nuxt-link>

        <export-button report="meters" />
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-900
        "
      >
        <tr>
          <th v-for="(field, i) in fields" :key="i" scope="col" class="py-3 ">
            {{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(c, i) in meters"
          :key="i"
          class="
            odd:bg-gray-50
            bg-white
            border-b
            hover:bg-gray-100
            dark:bg-gray-800 dark:border-gray-700
          "
          @click="viewMeter(c.id)"
        >
          <th
            scop="row"
            class="
              py-4

              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            {{ c.deviceId }}
          </th>

          <td class="py-4 ">
            {{ c.serialNumber }}
          </td>
          <td class="py-4 ">
            {{ c.batchNumber }}
          </td>
          <td class="py-4 ">
            {{ c.controlNumber }}
          </td>
          <td class="py-4 ">
            {{ c.bill.credits }}
          </td>
          <td class="py-4 ">
            {{ c.bill.offSet }}
          </td>
          <td class="py-4">
            <svg v-if="c.isValveClosed" class="fill-red-500 ml-5" style="width:24px; height:24px" viewBox="0 0 24 24">
              <path d="M20.84 22.73L16.29 18.18C15.2 19.3 13.69 20 12 20C8.69 20 6 17.31 6 14C6 12.67 6.67 11.03 7.55 9.44L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M18 14C18 10 12 3.25 12 3.25S10.84 4.55 9.55 6.35L17.95 14.75C18 14.5 18 14.25 18 14Z" />
            </svg>
            <svg v-else class="fill-plainblue ml-5" style="width:24px; height:24px" viewBox="0 0 24 24">
              <path d="M21.75 16.25L17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20H12.34C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z" />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script >
import { mapGetters } from 'vuex'
export default {
  
  data () {
    return {
      fields: ['Device ID', 'Serial No. ', 'Batch No.', 'Control No.', 'Units', 'Offset', 'Valve Status'],
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      meters: 'meters'
    })
  },
  created () {
    this.$store.dispatch('_fetchmeters')
  },
  methods: {
    viewMeter (it) {
      this.$router.push({ path: `meters/${it}` })
    }
  }
}
</script>
