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
              New Gateway
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
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.gatewayName"

                        :rules="[rules.required]"
                        label="Gateway Name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.gwid"
                        :rules="[rules.required]"
                        label="Gateway ID"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.gatewayType"

                        :rules="[rules.required]"
                        label="Gateway Type"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.longitude"
                        :rules="[rules.required]"
                        label="Longitude"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.latitude"
                        :rules="[rules.required]"
                        label="Latitude"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-autocomplete
                        v-model="editedItem.companyId"
                        :items="companies"
                        :item-text="'name'"
                        :item-value="'id'"
                        label="Select Company"
                        :rules="[rules.required]"
                        name="editedItem.companyId"
                        persistent-hint
                        single-line
                        @focus="$store.dispatch('_fetchcompanies')"
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
      valid: true,
      dialog: false,
      rules: {
        required: value => !!value || 'Field Required'
      },
      editedItem: {
        gwid: '',
        gatewayType: '',
        longitude: '',
        latitude: '',
        gatewayName: '',
        companyId: 0
      },
      defaultItem: {
        gwid: '',
        gatewayType: '',
        longitude: '',
        latitude: '',
        gatewayName: '',
        companyId: 0
      },
      headers: [
        { text: 'GWID', value: 'gwid' },
        {
          text: 'Gateway Name',
          sortable: false,
          value: 'gatewayName'
        },
        { text: 'Type', value: 'gatewayType' },
        { text: 'Acive', value: 'status' },
        { text: 'Last Update', value: 'updatedAt' },
        { text: 'Action', value: 'actions' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      gateways: 'gateways',
      companies: 'companies'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'Add gateway' : 'Edit gateway'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },
  created () {
    this.$store.dispatch('_fetchgateways')
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.gateways.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      setTimeout(this.$store.dispatch('_fetchgateways'), 5000)
    },

    save () {
      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          this.$store.dispatch('_updategateway', { id: this.editedItem.id, payload: this.editedItem })
        } else {
          this.$store.dispatch('_addnewgateway', this.editedItem)
        }
        this.close()
      }
    }
  }

}
</script>
