<template>
  <v-data-table
    v-if="notifications"
    :headers="headers"
    :items="notifications"
    :items-per-page="15"
    class="elevation-1"
    :footer-props="footerprops"
    :server-items-length="pages"
    @update:items-per-page="updateitems"
    @update:options="paginate"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          Payment Notifications
        </v-toolbar-title>
        <v-spacer />

        <export-button report="purchases" />
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-icon
        v-if="item.isValveClosed"
        small
        color="red"
      >
        mdi-water-off
      </v-icon>
      <v-icon
        v-else
        small
        color="blue"
      >
        mdi-water-check
      </v-icon>
    </template>
    <template #item.actions="{ item }">
      <v-container class="ma-0 pa-0" @click.stop>
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
      </v-container>
    </template>
    <template #item.createdAt="{ item }">
      <span>{{ item.createdAt | dateformat }}</span>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script >
export default {
  data () {
    return {
      page: 1,
      pages: 100,
      readings: null,
      headers: [
        {
          text: 'Reference',
          sortable: false,
          value: 'paymentReference'
        },
        { text: 'Amount', value: 'amount' },
        { text: 'Unit', value: 'unit' },
        { text: 'Tarrif', value: 'tariffId' },
        { text: 'Valve Status', value: 'status' },
        { text: 'Recorded At', value: 'createdAt' }
      ],
      fields: ['ID', 'Referecence', 'Amount', 'Unit', 'Tariff', 'Control No', 'Transaction Date', 'Recorderd Date', 'Updated Date'],
      menu: false,
      notifications: null
    }
  },
  created () {
    this.paginate({ page: 0, itemsPerPage: Math.round(window.innerHeight / 64) })
  },
  methods: {
    async paginate (it) {
      await this.$api
        .$get('/payments/notifications/paginate', { params: { page: it.page, size: it.itemsPerPage } })
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
