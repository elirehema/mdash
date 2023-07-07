<template>
  <v-data-table
    v-if="meters"
    :headers="headers"
    :items="meters"
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
          Meters
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
              New Meter
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
                        v-model="editedItem.batchNumber"
                        filled
                        :rules="[rules.required]"
                        label="Batch Number"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.manufacturer"
                        :rules="[rules.required]"
                        label="Device Manufacture"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.serialNumber"
                        filled
                        :rules="[rules.required]"
                        label="Device Serial Number"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.deviceId"
                        :rules="[rules.required]"
                        label="Device ID"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.controlNumber"
                        :rules="[rules.required]"
                        label="Control Number"
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
        <export-button report="meters" />
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-icon
        v-if="item.isValveClosed"
        small
        color="red"
      >
        mdi-water-off
      </v-icon>
      <v-icon
        v-else
        small
        color="blue"
      >
        mdi-water-check
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
    <template #item.updated="{ item }">
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
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      valid: true,
      pages: 1,
      rules: {
        required: value => !!value || 'Field Required'
      },
      editedItem: {
        id: 0,
        batchNumber: '',
        manufacturer: '',
        serialNumber: '',
        deviceId: '',
        controlNumber: '',
        companyId: 0,
        initialCredits: 0.0,
        initialOffsets: 0.0
      },
      defaultItem: {
        id: 0,
        batchNumber: '',
        manufacturer: '',
        serialNumber: '',
        deviceId: '',
        controlNumber: '',
        companyId: 0,
        initialCredits: 0.0,
        initialOffsets: 0.0
      },
      headers: [

        { text: 'Device ID', value: 'deviceId' },
        {
          text: 'Credits',
          value: 'bill.credits'
        },
        {
          text: 'Off-Set',
          value: 'bill.offSet'
        },
        { text: 'Control No.', value: 'controlNumber' },
        { text: 'Manufacturer', value: 'manufacturer' },
        { text: 'Status', value: 'status' },
        { text: 'Last Updated', value: 'updated' },
        { text: 'Action', value: 'actions' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      meters: 'meters',
      companies: 'companies'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'Create new meter' : 'Edit meter'
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
    this.$store.dispatch('_fetchmeters')
  },
  methods: {
    handleRowClick (it) {
      this.$router.push({ path: `meters/${it.id}` })
    },
    editItem (item) {
      this.editedIndex = this.meters.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      setTimeout(this.$store.dispatch('_fetchmeters'), 5000)
    },

    save () {
      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          this.$store.dispatch('_updatemeter', { id: this.editedItem.id, payload: this.editedItem })
        } else {
          this.$store.dispatch('_addnewmeter', this.editedItem)
        }
        this.close()
      }
    }
  }
}
</script>
