<template>
  <v-data-table
    v-if="tracks"
    :headers="headers"
    :items="tracks"
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
          List of Meter Usage tracks
        </v-toolbar-title>
        <v-spacer />
        <v-btn class="text-capitalize" dark color="primary" small @click="$emit('update')">
        <v-icon left x-small>mdi-eye</v-icon>
          View Meter Downlinks
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
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script >
export default {
  props: {
    tracks: {
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
          text: 'MeterId',
          sortable: false,
          value: 'meterId'
        },
        { text: 'Credits', value: 'credits' },
        { text: 'Recorded Unit', value: 'recordedUnit' },
        { text: 'Offset Unit', value: 'offSet' },
        { text: 'Valve Status', value: 'status' },
        { text: 'Recorded At', value: 'recordedtime' }
      ]
    }
  }

}
</script>
