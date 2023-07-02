<template>
  <v-data-table
    v-if="payments"
    :headers="headers"
    :items="payments"
    :items-per-page="15"
    class="elevation-1"
    :server-items-length="pages"
    @update:items-per-page="$emit('paginate',$event)"
    @update:options="$emit('paginate',$event)"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          Payments
        </v-toolbar-title>
        <v-spacer />

        <v-btn
          color="primary"
          dark
          class="mb-2 ml-2"
        >
          <v-icon left>
            mdi-download
          </v-icon>
          Export CVS
        </v-btn>
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-icon
        v-if="item.valveStatus === '00'"
        small
        color="blue"
      >
        mdi-water-check
      </v-icon>
      <v-icon
        v-else
        small
        color="red"
      >
        mdi-water-check
      </v-icon>
    </template>
    <template #item.recordedtime="{ item }">
      <span>{{ item.createdAt | dateformat }}</span>
    </template>
    <template #item.transactionDate="{item}">
      <span>{{ item.transactionDate | dateformat }}</span>
    </template>
    <template v-if="payments.length > 14" #footer.prepend>
      <v-btn
        v-if="!titled"
        class="text-capitalize"
        color="blue"
        x-small
        text
        to="/tracks"
      >
        Load more ...
      </v-btn>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script>
export default {
  data () {
    return {
      fields: ['ID', 'Amount', 'Unit', 'Tariff', 'Control No', 'Referecence', 'Transaction Date', 'Recorderd Date', 'Updated Date'],
      menu: false,

      pages: 0,
      payments: null,
      headers: [
        {
          text: 'Id',
          sortable: false,
          value: 'id'
        },
        { text: 'Amount', value: 'amount' },
        { text: 'Unit', value: 'unit' },
        { text: 'Tariff', value: 'tarrifId' },
        { text: 'Control No', value: 'controlNumber' },
        { text: 'Referecence', value: 'paymentReference' },
        { text: 'Transaction Date', value: 'transactionDate' },
        { text: 'Recorded At', value: 'recordedtime' }
      ]
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
