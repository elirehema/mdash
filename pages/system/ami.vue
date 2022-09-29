<template>
  <div class="container min-w-full">
    <div v-if="settings" class="flex justify-between p-5 border-b bg-yellow-50">
      <div class="p-5 ">
        <p class="font-bold text-primary text-3xl">
          AMI configurations
        </p>
        <p class="text-sm font-light">
          Specify the configurations between a platform and gateways
        </p>
      </div>

      <div class="grid grid-cols-2 text-gray-500 text-xs bg-white rounded-lg shadow-md p-4 ">
        <div>
          <span class="font-semibold text-primary text-xs"> Base URL: </span>
        </div>
        <div>
          <span>{{ settings.baseURL }}</span>
        </div>

        <div><span class="font-semibold text-primary text-sm"> Username:</span></div>
        <div>
          <span> {{ settings.username }}</span>
        </div>
        <div><span class="font-semibold text-primary text-sm"> Password:</span></div>
        <div>
          <span> {{ settings.password }}</span>
        </div>
        <div><span class="font-semibold text-primary text-sm"> Created:</span></div>
        <div>
          <span> {{ settings.createdAt | dateformat }}</span>
        </div>
        <div><span class="font-semibold text-primary text-sm"> Updated:</span></div>
        <div>
          <span> {{ settings.updatedAt | dateformat }}</span>
        </div>
      </div>
      <div>
        <svg
          class="fill-green-500"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="edit = !edit"
        >
          <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />

        </svg>
      </div>
    </div>
    <div v-if="edit" class="flex justify-center px-16">
      <div class="form p-16 w-9/12 border-2 border-dashed border-primary mt-16 ">
        <form ref="form" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 border-b-2 pb-10">
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Access Token</span>
            <input
              v-model="ami.token"
              type="text"
              placeholder="E.g eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....."
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Base URL</span>
            <input
              v-model="ami.baseURL"
              type="text"
              value="settings.baseURL"
              placeholder="E.g https://boveamiapi.azurewebsites.net/api"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Username </span>
            <input
              v-model="ami.username"
              type="text"
              placeholder="E.g johndoe"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Password</span>
            <input
              v-model="ami.password"
              type="text"
              placeholder="E.g password"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
        </form>
        <div class="flex justify-end mt-6   pt-3 text-white font-bold">
          <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-8 rounded-full" @click="save">
            Update configurations
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { mapGetters } from 'vuex'
export default {

  data () {
    return {
      edit: false
    }
  },
  computed: {
    ...mapGetters({
      settings: 'settings'
    }),
    ami () {
      return this.settings == null
        ? {}
        : {
            username: this.settings.username,
            password: this.settings.password,
            baseURL: this.settings.baseURL,
            token: this.settings.token
          }
    }
  },
  created () {
    this.$store.dispatch('_fetchsettings')
  },
  methods: {
    save () {
      this.$store.dispatch('_updatesettings', this.ami).then(() => {
        this.$router.push({ path: '/system' })
      })
    }

  }

}
</script>
