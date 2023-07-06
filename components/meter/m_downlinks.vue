<template>
    <v-data-table
    v-if="downlinks"
    :headers="headers"
    :items="downlinks"
    :items-per-page="15"
    class="elevation-0"
    :server-items-length="pages"
    @update:items-per-page="$emit('paginate',$event)"
    @update:options="$emit('paginate',$event)"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          List of all meter downlink commands
        </v-toolbar-title>
        <v-spacer />
        <v-btn class="text-capitalize" color="primary" small @click="$emit('update')">
          <v-icon left x-small>mdi-eye</v-icon>
          View Usage Tracks
        </v-btn>
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-icon
        v-if="item.success"
        small
        color="blue"
      >
        mdi-check
      </v-icon>
      <v-icon
        v-else
        small
        color="red"
      >
        mdi-close
      </v-icon>
    </template>
    <template #item.recordedAt="{ item }">
      <span>{{ item.createdAt | dateformat }}</span>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
</template>
<script >
export default {
  props: {
    downlinks: {
      type: Array,
      default: null
    },
    pages: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {

      headers: [
        {
          text: 'Id',
          sortable: false,
          value: 'id'
        },
        { text: 'MeterID', value: 'meterId' },
        { text: 'Command Type', value: 'type' },
        { text: 'Code', value: 'code' },
        { text: 'Message', value: 'message' },
        { text: 'Status', value: 'status' },
        { text: 'Created at', value: 'createdAt'},
      ]
    }
  }

}
</script>
