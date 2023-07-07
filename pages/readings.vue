<template>
  <v-data-table
    v-if="readings"
    :headers="headers"
    :items="readings"
    :items-per-page="itemsPerPage"
    class="elevation-1"
    :page="page"
    :server-items-length="items"
    @click:row="handleRowClick"
    @update:options="paginate($event)"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          Meter Readings
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
      pages: 0,
      items: 0,
      itemsPerPage: 10,
      readings: null,
      headers: [
        {
          text: 'Device ID',
          sortable: false,
          value: 'devEUI'
        },
        { text: 'Battery(%)', value: 'BatteryPercentage' },
        { text: 'Type', value: 'type' },
        { text: 'Unit', value: 'Unit' },
        { text: 'Valve Status', value: 'status' },
        { text: 'Recorded At', value: 'createdAt' }
      ]
    }
  },
  created () {
    this.paginate({ page: 0, itemsPerPage: Math.round(window.innerHeight / 64) })
  },
  methods: {
    async paginate (it) {
      await this.$api
        .$get('/readings/paginate', { params: { page: it.page, size: it.itemsPerPage } })
        .then((response) => {
          this.page = response.currentPage
          this.readings = response.results
          this.items = response.totalRows
          this.pages = response.totalPages
          this.itemsPerPage = response.size
        })
        .catch((_error) => {
        })
    },
    handleRowClick (val) {}
  }

}
</script>
