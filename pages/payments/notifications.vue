<template>
  <div v-if="notifications" class="container min-w-full">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Payment Notifications
        </p>
        <p class="text-sm font-light">
          List of recent notifications
        </p>
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
              text-md text-gray-700
              uppercase
              bg-gray-400
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
          v-for="(t, i) in notifications"
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
            {{ t.id }}
          </th>
          <td class="py-4 px-6">
            {{ t.paymentReference }}
          </td>
          <td class="py-4 px-6">
            {{ t.amount }}
          </td>
          <td class="py-4 px-6">
            {{ t.unit }}
          </td>
          <td class="py-4 px-6">
            {{ t.tariffId }}
          </td>
          <td class="py-4 px-6">
            {{ t.controlNumber }}
          </td>

          <td class="py-4 px-6">
            {{ t.transactionDate | dateformat }}
          </td>
          <td class="py-4 px-6">
            {{ t.createdAt | dateformat }}
          </td>
          <td class="py-4 px-6 ">
            {{ t.updatedAt | dateformat }}
          </td>
        </tr>
      </tbody>
    </table>
    <pagination-component :page="page" :pages="pages" @update="updatepage($event)" />
  </div>
</template>
<script >
export default {
  data () {
    return {
      fields: ['ID', 'Referecence', 'Amount', 'Unit', 'Tariff', 'Control No', 'Transaction Date', 'Recorderd Date', 'Updated Date'],
      menu: false,
      page: 1,
      pages: 0,
      notifications: null
    }
  },
  created () {
    this.fetchpagenatednotifications()
  },
  methods: {

    updatepage (it) {
      this.notifications = null
      this.page = it
      this.fetchpagenatednotifications(it)
    },
    async fetchpagenatednotifications () {
      await this.$api
        .$get('/payments/notifications/paginate', { params: { page: this.page, size: Math.round(window.innerHeight / 64) } })
        .then((response) => {
          this.notifications = response.results
          this.pages = response.totalPages
        })
        .catch((_error) => {
        })
    }
  }
}
</script>
