<template>
  <v-data-table
    :headers="headers"
    :items="companies"
    :items-per-page="5"
    class="elevation-1"
  >
    <template #top>
      <v-toolbar flat>
        <v-toolbar-title class="font-weight-bold">Companies</v-toolbar-title>
        <v-spacer />
        <v-btn
          color="primary"
          dark
          class="mb-2"
        ><v-icon left>mdi-plus</v-icon>
          New Company
        </v-btn>
        <export-button report="companies" />
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
  </v-data-table>
</template>
<script >
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      fields: ['ID', 'Name', 'ExternalID'],
      menu: false,
      companyname: '',
      save: false,
      input: false,
      isadmin: false,
      headers: [
        {
          text: 'Id',
          sortable: false,
          value: 'id'
        },
        { text: 'Calories', value: 'name' },
        { text: 'External ID', value: 'externalId' },
        { text: 'Tarrif Enabled', value: 'isTariffEnabled' },
        { text: 'Action', value: 'actions' }
      ],
      company: {
        name: null,
        externalId: null
      }
    }
  },
  computed: {
    ...mapGetters({
      companies: 'companies'
    })
  },
  watch: {
    companyname (val) {
      val.length > 2 ? this.save = true : this.save = false
    }
  },
  created () {
    const id = localStorage.getItem('userId')
    this.fetchuseraccount(id)
    this.$store.dispatch('_fetchcompanies')
  },
  methods: {
    savecompany () {
      this.$store.dispatch('_registercompany', this.company).then(() => {
        this.company = null
        this.save = false
        this.input = false
      })
    },
    editItem (val) {
        console.log(val)
    },
    async fetchuseraccount (accountId) {
      await this.$api
        .$get(`/users/${accountId}`)
        .then((response) => {
          this.isadmin = (response.role === 'ADMIN')
          this.meter.companyId = response.companyId
        })
        .catch((_error) => {
        })
    }
  }

}
</script>
