<template>
  <v-form class="form-box" @submit.prevent="formSubmit">
    <v-container color="primary" height="100%">
      <!--- <v-row class="mt-0">
        <v-col cols="12" sm="12" md="2">
          <img
            src="/water.png"
            alt="homepage"
            width="40px"
            class="ml-2 dark-logo"
          >
        </v-col>
      </v-row>-->
      <div class="d-flex align-center justify-center">
        <v-row class="mt-0" no-gutters>
          <v-col cols="12" md="5" class="ml-5  d-flex justify-center align-center ">
            <v-list color="transparent">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-sm-h4 font-weight-black text-md-h3 text-lg-h2 white--text text-sm-center text-md-left">
                    DUWASA metering
                  </v-list-item-title>
                  <v-list-item-subtitle class="mt-10 text-sm-h5 text-md-h4 text-lg-h4 white--text text-sm-center text-md-left">
                    <span>Allows customers to make informed decisions on water usage and costs</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="5" lg="4" class="mt-0 d-flex justify-center">
            <v-card class="pa-8">
              <v-card-title class="d-flex justify-center">
                <img
                  src="/water.png"
                  alt="homepage"
                  height="100px"
                  class="ml-2 dark-logo"
                >
              </v-card-title>
              <v-card-text>
                <v-row no-gutters class="mt-5">
                  <v-col cols="12" class=" mt-3">
                    <v-text-field
                      v-model="form.email"
                      color="black"
                      class=" px-3"
                      placeholder="email"
                      label="Email"
                      required
                    />
                  </v-col>
                  <v-col cols="12" class=" mt-3">
                    <v-text-field
                      v-model="form.password"
                      color="black"
                      class=" px-3"
                      placeholder="*********"
                      type="password"
                      label="Enter Password"
                      required
                    />
                  </v-col>
                  <v-col cols="12" class=" mt-5 d-flex justify-center">
                    <v-btn block type="submit" color="button" dark>
                      Continue
                      <v-icon right>
                        mdi-arrow-right-bold
                      </v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" />
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },

      title: 'Market Grid : Login'
    }
  },
  computed: {
    ...mapGetters(['processing'])

  },

  created () {
    // check if user logged in othewise send them packing

    if (this.isAuthenticated) {
      this.$router.replace('/')
    }
  },
  methods: {
    ...mapActions(['login']),

    formSubmit () {
      this.$store.dispatch('_authenticate', this.form)
    }
  }

}
</script>
