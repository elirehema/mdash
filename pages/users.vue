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
                mdi-account-plus
              </v-icon>
              New User
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
                      sm="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.firstname"
                        :rules="[rules.required]"
                        label="First Name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.lastname"
                        :rules="[rules.required]"
                        label="Last Name"
                      />
                    </v-col>
                    <v-col
                      v-if="editedIndex === -1"
                      cols="12"
                      sm="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.email"
                        :rules="[rules.required]"
                        label="Email"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.phone"
                        :rules="[rules.required]"
                        label="Phone Number"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.role"
                        :rules="[rules.required]"
                        label="Role"
                      />
                    </v-col>

                    <v-col
                      v-if="editedIndex === -1"
                      cols="12"
                      sm="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.password"
                        :rules="[rules.required]"
                        label="Password"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      :md="editedIndex === -1 ? '12':'8'"
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
    <template #item.name="{ item }">
      <span>{{ item.firstname }} {{ item.lastname }}</span>
    </template>
    <template #item.company="{ item }">
      <span>{{ item.company.name }}</span>
    </template>
    <template #item.actions="{ item }">
      <v-container class="ma-0 pa-0" @click.stop>
        <v-icon
          class="mr-2"
          color="info"
          @click="editItem(item)"
        >
          mdi-account-edit
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
      dialog: false,
      valid: true,
      editedIndex: -1,
      rules: {
        required: value => !!value || 'Field Required'
      },
      editedItem: {
        id: 0,
        password: '',
        phone: '',
        email: '',
        role: '',
        firstname: '',
        lastname: '',
        companyId: 0
      },
      defaultItem: {
        id: 0,
        password: '',
        phone: '',
        email: '',
        role: '',
        firstname: '',
        lastname: '',
        companyId: 0
      },
      headers: [

        { text: 'Name', value: 'name' },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Phone',
          value: 'phone'
        },
        {
          text: 'Organization',
          value: 'company'
        },
        { text: 'Is Active ?', value: 'status' },
        { text: 'Last Updated', value: 'updated' },
        { text: 'Action', value: 'actions' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      users: 'users',
      companies: 'companies'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'Add new user' : 'Edit user'
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
    this.$store.dispatch('_fetchusers')
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      setTimeout(() => {
        this.$store.dispatch('_fetchusers')
      }, 5000)
    },

    save () {
      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          this.$store.dispatch('_updateuser', { id: this.editedItem.id, payload: this.editedItem })
        } else {
          this.$store.dispatch('_registeruser', this.editedItem)
        }
        this.close()
      }
    }
  }

}
</script>
