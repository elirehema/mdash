<template>
  <v-data-table
    v-if="companies"
    :headers="headers"
    :items="companies"
    :items-per-page="5"
    class="elevation-1"
  >
    <template #top>
      <v-toolbar flat>
        <v-toolbar-title class="font-weight-bold">
          Companies
        </v-toolbar-title>
        <v-spacer />
        <v-dialog
          v-model="dialog"
          max-width="60%"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>
                mdi-plus
              </v-icon>
              New Company
            </v-btn>
          </template>
          <v-card>
            <v-app-bar color="primary" dark flat>
              <span class="text-h5 font-weight-bold">{{ formTitle }}</span>
            </v-app-bar>

            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        filled
                        :rules="[rules.required]"
                        label="Company Name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.externalId"
                        :rules="[rules.required]"
                        label="External ID"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary darken-1"
                small
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="warning darken-1"
                small
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <export-button report="companies" />
      </v-toolbar>
    </template>
    <template #item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script >
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      valid: true,
      editedIndex: -1,
      input: false,
      isadmin: false,
      dialog: false,
      rules: {
        required: value => !!value || 'Field Required'
      },
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
      editedItem: {
        id: 0,
        name: '',
        externalId: ''
      },
      defaultItem: {
        id: 0,
        name: '',
        externalId: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      companies: 'companies'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'Create new company' : 'Edit company'
    }
  },
  watch: {
    companyname (val) {
      val.length > 2 ? this.save = true : this.save = false
    },
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    const id = localStorage.getItem('userId')
    this.fetchuseraccount(id)
    this.$store.dispatch('_fetchcompanies')
  },
  methods: {
    savecompany () {
      this.$store.dispatch('_registercompany', this.editedItem).then(() => {
        this.editedItem = this.defaultItem
        this.save = false
        this.input = false
      })
    },
    editItem (item) {
      this.editedIndex = this.companies.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      setTimeout(()=>{
        this.$store.dispatch('_fetchcompanies')
      }, 5000)
    },

    save () {
      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          this.$store.dispatch('_updatecompany', { id: this.editedItem.id, payload: this.editedItem })
        } else {
          this.$store.dispatch('_registercompany', this.editedItem)
        }
        this.close()
      }
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
