<template>
  <div v-if="payments" class="container min-w-full">
    <div class="p-5 border-b flex justify-between ">
      <div>
        <p class="font-bold text-primary text-3xl">
          Payments
        </p>
        <p class="text-sm font-light">
          List of all payments
        </p>
      </div>
      <nuxt-link to="/payments/notifications">
        <a class="underline italic text-blue-500">View all payments notifications</a>
      </nuxt-link>
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
          v-for="(t, i) in payments"
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
            {{ t.amount }}
          </td>
          <td class="py-4 px-6">
            {{ t.unit }}
          </td>
          <td class="py-4 px-6">
            {{ t.tarrifId }}
          </td>
          <td class="py-4 px-6">
            {{ t.controlNumber }}
          </td>
          <td class="py-4 px-6">
            {{ t.paymentReference }}
          </td>
          <td class="py-4 px-6">
            {{ t.transactionDate | dateformat }}
          </td>
          <td class="py-4 px-6">
            {{ t.createdAt | dateformat }}
          </td>
          <td class="py-4 px-6">
            {{ t.updatedAt | dateformat }}
          </td>
        </tr>
      </tbody>
    </table>
    <pagination-component :page="page" :pages="pages" @update="updatepage($event)" />
  </div>
</template>
<script >
import PaginationComponent from '@/components/pagination-component.vue'
export default {
  components: {
    'pagination-component': PaginationComponent
  },
  data () {
    return {
      fields: ['ID', 'Amount', 'Unit', 'Tariff', 'Control No', 'Referecence', 'Transaction Date', 'Recorderd Date', 'Updated Date'],
      menu: false,
      page: 1,
      pages: 0,
      payments: null
    }
  },
  created () {
    this.fetchpagenatedpayments()
  },
  methods: {

    updatepage (it) {
      this.payments = null
      this.page = it
      this.fetchpagenatedpayments(it)
    },
    async fetchpagenatedpayments () {
      await this.$api
        .$get('/payments/paginate', { params: { page: this.page, size: Math.round(window.innerHeight / 64) } })
        .then((response) => {
          this.payments = response.results
          this.pages = response.totalPages
        })
        .catch((_error) => {
        })
    }
  }
}
</script>
