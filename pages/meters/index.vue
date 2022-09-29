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
      <div>
        <nuxt-link to="/meters/add">
          <button type="button" class="bg-primary font-bold text-white p-2 px-3 rounded-lg border border-primary">
            + New Meter
          </button>
        </nuxt-link>
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
          <th scope="col" class="py-3 ">
            <span class="sr-only">Edit</span>
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
            {{ c.Bill.credits }}
          </td>
          <td class="py-4 ">
            {{ c.Bill.offSet }}
          </td>
          <td class="py-4 ">
            <svg v-if="!c.isValveClosed" class="fill-blue-500 ml-5" style="width:32px; height:32px" viewBox="0 0 24 24">
              <path d="M4 22H2V2H4M22 2H20V22H22M11 4V9.18A3 3 0 0 0 11 14.82V20H13V14.82A3 3 0 0 0 13 9.18V4Z" />
            </svg>
            <svg v-else class="fill-red-500 ml-5" style="width:32px; height:32px" viewBox="0 0 24 24">
              <path d="M22 2V22H20V13H14.82A3 3 0 0 1 9.18 13H4V22H2V2H4V11H9.18A3 3 0 0 1 14.82 11H20V2Z" />
            </svg>
          </td>
          <td class="py-4  text-right">
            <a
              href="#"
              class="
                font-medium
                text-blue-600
                dark:text-blue-500
                hover:underline
              "
            >Edit</a>
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
