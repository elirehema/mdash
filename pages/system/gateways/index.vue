<template>
  <v-data-table
    v-if="gateways"
    :headers="headers"
    :items="gateways"
    :items-per-page="15"
    class="elevation-1"
    :server-items-length="pages"
    @click:row="handleRowClick"
    @update:items-per-page="$emit('paginate',$event)"
    @update:options="$emit('paginate',$event)"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          Gateways
        </v-toolbar-title>
        <v-spacer />
        <export-button report="gateways" />
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-icon
        v-if="item.active"
        small
        color="green"
      >
        mdi-check
      </v-icon>
      <v-icon
        v-else
        small
        color="blue"
      >
        mdi-close
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
    <template #item.updatedAt="{ item }">
      <span>{{ item.updatedAt | dateformat }}</span>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script >
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      fields: ['Gateway Name', 'Gateway Type', 'Gateway ID', 'Active', 'Created On', 'Updated On'],
      headers: [
        { text: 'GWID', value: 'gwid' },
        {
          text: 'Gateway Name',
          sortable: false,
          value: 'gatewayName'
        },
        { text: 'Type', value: 'gatewayType' },
        { text: 'Acive', value: 'status' },
        { text: 'Last Update', value: 'updatedAt' }
      ]
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
