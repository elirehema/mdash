<template>
  <div v-if="gateways" class="container min-w-full">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Gateways
        </p>
        <p class="text-sm font-light">
          List of all company gateways
        </p>
      </div>
      <div>
        <nuxt-link to="/system/gateways/add">
          <button type="button" class="bg-primary font-bold text-white p-2 px-3 rounded-lg border border-primary">
            + New gateway
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
          <th
            v-for="(field, i) in fields"
            :key="i"
            scope="col"
            class="py-3 px-6"
          >
            {{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(c, i) in gateways"
          :key="i"
          class="
                odd:bg-gray-50
                bg-white
                border-b
                hover:bg-gray-100
                dark:bg-gray-800 dark:border-gray-700
              "
        >
          <th
            scop="row"
            class="
                  py-4
                  px-6
                  font-medium
                  text-gray-900
                  whitespace-nowrap
                  dark:text-white
                "
          >
            {{ c.gwid }}
          </th>
          <td class="py-4 px-6">
            {{ c.rssi }}
          </td>
          <td class="py-4 px-6">
            {{ c.snr }}
          </td>
          <td class="py-4 px-6">
            {{ c.createdAt | dateformat }}
          </td>
          <td class="py-4 px-6">
            {{ c.updatedAt | dateformat }}
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
      fields: ['Gateway Unique Identifier', 'Signal Strength', 'Signal to noise ratio', 'Created On', 'Updated On'],
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      gateways: 'gateways'
    })
  },
  created () {
    this.$store.dispatch('_fetchgateways')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }

}
</script>
