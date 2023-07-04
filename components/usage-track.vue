<template>
  <v-data-table
  
    v-if="tracks"
    :headers="headers"
    :items="tracks"
    :items-per-page="15"
    class="elevation-1"
    :server-items-length="pages"
    @update:items-per-page="$emit('paginate',$event)"
    @update:options="$emit('paginate',$event)"
  >
    <template v-if="titled" #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          Meter Usage tracks
        </v-toolbar-title>
        <v-spacer />
        <v-btn class="text-capitalize" color="blue" x-small text to="/readings">
          Meter Readings
        </v-btn>
        <export-button report="tracks" />
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
    <template v-if="tracks.length > 14" #footer.prepend>
      <v-btn v-if="!titled" class="text-capitalize" color="blue" x-small text to="/tracks">
        Load more ...
      </v-btn>
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
    },
    titled: {
      type: Boolean,
      default: false
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
        { text: 'Credits', value: 'meter.serialNumber' },
        { text: 'Recorded Unit', value: 'recordedUnit' },
        { text: 'Offset Unit', value: 'offSet' },
        { text: 'Valve Status', value: 'status' },
        { text: 'Recorded At', value: 'recordedtime' }
      ]
    }
  }

}
</script>
