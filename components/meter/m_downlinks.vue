<template>
    <v-data-table
    v-if="commands"
    :headers="headers"
    :items="commands"
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
        <v-btn class="text-capitalize" color="blue" x-small text @click="$emit('update')">
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
    commands: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      fields: ['ID', 'MeterID', 'Command Type', 'Code', 'Message', 'Status', 'Created at', 'Updated at'],
      menu: false,
      pages: 1,
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
