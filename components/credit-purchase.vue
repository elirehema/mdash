<template>
  <v-data-table
    v-if="purchases"
    :headers="headers"
    :items="purchases"
    :items-per-page="itemsPerPage"
    class="elevation-0"
    :page="page"
    :footer-props="footerprops"
    :server-items-length="items"
    @update:options="$emit('paginate',$event)"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          Credit Purchases
        </v-toolbar-title>
        <v-spacer />

        <export-button report="crpurchases" />
      </v-toolbar>
    </template>
    <template #item.transactionDate="{ item }">
      <span>{{ item.transactionDate | simpledateformat }}</span>
    </template>
    <template #item.createdAt="{ item }">
      <span>{{ item.createdAt | simpledateformat }}</span>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script >
export default {
  props: {
    purchases: {
      type: Array,
      default: null
    },
    items: {
      type: Number,
      default: 0
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    pages: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Control Number',
          sortable: false,
          value: 'controlNumber'
        },
        { text: 'Amount', value: 'amount' },
        { text: 'Purchased Units', value: 'purchasedUnits' },
        { text: 'Effective Units', value: 'effectiveUnits' },
        { text: 'Offset', value: 'offsetUnits' },
        { text: 'Payment Ref', value: 'paymentReference' },
        { text: 'Tarrif', value: 'tarrifId' },
        { text: 'Transaction Date', value: 'transactionDate' },
        { text: 'Created At', value: 'createdAt' }
      ]
    }
  },
  methods: {
    handleRowClick (val) {
      this.$router.push(`/purchases/${val.id}`)
    }
  }

}
</script>
