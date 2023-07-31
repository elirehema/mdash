<template>
  <v-container fluid>
    <v-card>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="font-weight-bold">
        <v-icon left>mdi-cog</v-icon>
          System Settings  and configurations
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <div class="mt-5 py-8 mx-5 mx-md-0">
        <v-row
          no-gutters
          class="d-flex justify-space-around"
        >
          <v-col
            v-for="setting in settings"
            :key="setting"
            cols="12"
            sm="12"
            md="5"
            class="mb-6"
          >
            <v-card outlined flat :to="setting.to">
              <v-card-title class="text-h5">
                {{ setting.title }}
                <v-spacer />
                <v-icon color="blue lighten-2">
                  mdi-open-in-new
                </v-icon>
              </v-card-title>
              <v-divider />
              <v-card-subtitle v-text="setting.description" />
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>
<script >
export default {

  data () {
    return {
      menu: false,
      profile: null,
      settings: [
        {
          title: 'AMI system configurations ',
          description: 'Configure AMI authentication informations like Access Token, Username, Password and Base URL for the two system two eork together',
          to: '/system/ami'
        },
        {
          title: 'System Users',
          description: 'Add, Delete and Modify other system members. The new added member will be able to add other new members after login ',
          to: '/system/users'
        },
        {
          title: 'Tariffs',
          description: 'Define and Modify credit purchases tariff to be used for unit conversions. Only one tarrif will be active at time. If no active tarrifs the system will use tariff from payment informations',
          to: '/system/tariffs'
        },

        {
          title: 'Gateways',
          description: 'Add, Delete and Modify Gateways. The Gateways will be mapped with the reading received from meter devices. This configurations will be used for Gateways communications',
          to: '/system/gateways'
        }
      ]
    }
  }

}
</script>
