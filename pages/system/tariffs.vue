<template>
  <v-data-table
    v-if="tariffs"
    :headers="headers"
    :items="tariffs"
    :items-per-page="15"
    class="elevation-1"
    :server-items-length="pages"
    @update:items-per-page="$emit('paginate',$event)"
    @update:options="$emit('paginate',$event)"
  >
    <template #top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
          Tariffs
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
              New Tariff
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
                        v-model="editedItem.name"
                        filled
                        :rules="[rules.required]"
                        label="Tariff Name"
                      />
                    </v-col>
              
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.unitPrice"
                        filled
                        :rules="[rules.required]"
                        label="Unit Price"
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
        <export-button report="tariffs" />
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-icon
        v-if="item.isActive"
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
    <template #item.action="{ item }">
      <v-btn v-if="!item.isActive" icon @click="$store.dispatch('_activatetariff', item.id)">
        <v-icon>mdi-power</v-icon>
      </v-btn>
      <v-btn v-else icon @click="$store.dispatch('_deactivatetariff', item.id)">
        <v-icon>mdi-knob</v-icon>
      </v-btn>
    </template>
    <template #item.updatedAt="{ item }">
      <span>{{ item.updatedAt | dateformat }}</span>
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
  </v-data-table>
  <skeleton-table-loader v-else />
</template>
<script >
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      dialog: false,
      editedIndex: -1,
      valid: true,
      pages: 1,
      rules: {
        required: value => !!value || 'Field Required'
      },
      editedItem: {
        name: '',
        companyId: 0,
        unitPrice: 0.0
      },
      defaultItem: {
        name: '',
        companyId: 0,
        unitPrice: 0.0
      },
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Unit Price', value: 'unitPrice' },

        { text: 'Is Active ?', value: 'status' },
        { text: 'Updated At', value: 'updatedAt' },
        { text: 'Enable/Disable', value: 'action' },
        { text: 'Actions', value: 'actions' },
      ]

    }
  },
  computed: {
    ...mapGetters({
      tariffs: 'tariffs',
      companies: 'companies'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'Create new tariff' : 'Edit tariff'
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
    this.$store.dispatch('_fetchtariffs')
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.tariffs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      setTimeout(this.$store.dispatch('_fetchtariffs'), 5000)
    },

    save () {
      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          this.$store.dispatch('_updatetariff', { id: this.editedItem.id, payload: this.editedItem })
        } else {
          this.$store.dispatch('_addnewtariff', this.editedItem)
        }
        this.close()
      }
    }
  }

}
</script>
