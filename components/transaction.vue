<template>
   <v-data-table
    v-if="transactions"
    :headers="headers"
    :items="transactions"
    :items-per-page="15"
    class="elevation-0"
    :server-items-length="pages"
  >
    <template  #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          List of all credit purchase transactions
        </v-toolbar-title>
        <v-spacer />
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
    <template #item.createdAt="{ item }">
      <span>{{ item.createdAt | simpledateformat }}</span>
    </template>
    <template #item.transactionDate="{ item }">
      <span>{{ item.transactionDate | simpledateformat }}</span>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
  
</template>
<script >
export default {
  props: {
    transactions: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      pages: 1,
      headers: [
        {
          text: 'TrxID',
          sortable: false,
          value: 'id'
        },
        { text: 'Amount', value: 'amount' },
        { text: 'Unit', value: 'unit' },
        { text: 'Type', value: 'type' },
        { text: 'Transaction Date', value: 'transactionDate' },
        { text: 'Recorded At', value: 'createdAt' }
      ]
    }
  }

}
</script>
