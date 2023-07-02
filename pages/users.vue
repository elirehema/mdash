<template>
  <v-data-table
    v-if="users"
    :headers="headers"
    :items="users"
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
          Users
        </v-toolbar-title>
        <v-spacer />

        <export-button report="users" />
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-icon
        v-if="item.isActive"
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
          color="info"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
      </v-container>
    </template>
    <template #item.updated="{ item }">
      <span>{{ item.updatedAt | simpledateformat }}</span>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script >
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      headers: [

        { text: 'Name', value: 'firstname' },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Phone',
          value: 'phone'
        },
        { text: 'Is Active ?', value: 'status' },
        { text: 'Last Updated', value: 'updated' },
        { text: 'Action', value: 'actions' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      users: 'users'
    })
  },
  created () {
    this.$store.dispatch('_fetchusers')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }

}
</script>
