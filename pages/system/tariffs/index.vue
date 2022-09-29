<template>
  <div v-if="tariffs" class="container min-w-full">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Tariffs
        </p>
        <p class="text-sm font-light">
          List of all company tariffs
        </p>
      </div>
      <div>
        <nuxt-link to="/system/tariffs/add">
          <button type="button" class="bg-primary font-bold text-white p-2 px-3 rounded-lg border border-primary">
            + New Tariff
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
          v-for="(c, i) in tariffs"
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
            {{ c.id }}
          </th>
          <td class="py-4 px-6">
            {{ c.name }}
          </td>
          <td class="py-4 px-6">
            {{ c.unitPrice }}
          </td>
          <td class="py-4 px-6">
            {{ c.isActive }}
          </td>
          <td class="py-4 px-6">
            {{ c.createdAt | dateformat }}
          </td>
          <td class="py-4 px-6">
            {{ c.updatedAt | dateformat }}
          </td>
          <td class="py-4 px-6 text-center">
            <span v-if="c.isActive" class="flex ml-2 h-5 w-5">
              <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-yellow-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-5 w-5 bg-yellow-500" />
            </span>

            <svg v-else @click="$store.dispatch('_activatetariff', c.id)" class="fill-red-400" style="width:24px;height:24px" viewBox="0 0 24 24">
              <path d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z" />
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
      fields: ['ID', 'Name', 'Unit Price', 'Is Active ?', 'Created On', 'Updated On'],
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      tariffs: 'tariffs'
    })
  },
  created () {
    this.$store.dispatch('_fetchtariffs')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }

}
</script>
