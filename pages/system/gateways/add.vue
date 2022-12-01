<template>
  <div class="container min-w-full bg-[#FAFAFA]">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Add new Gateway
        </p>
        <p class="text-sm font-light">
          Register new gateway
        </p>
      </div>
    </div>
    <div class="flex justify-center px-16">
      <div class="form p-16 w-9/12 border-2 border-dashed border-primary mt-16 ">
        <form ref="form" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 border-b-2 pb-10">
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Gateway Unique Identifier</span>
            <input
              v-model="gateway.gwid"
              type="text"
              placeholder="E.g 3a420623-2caa-41cb-8bba-d1b84c80bfdf"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Gateway Name</span>
            <input
              v-model="gateway.gatewayName"
              type="text"
              placeholder="E.g Nexis GW0001"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Gateway Type</span>
            <input
              v-model="gateway.gatewayType"
              type="text"
              placeholder="E.g RHF-2S-208"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Communication ID</span>
            <input
              v-model="gateway.communicationId"
              type="text"
              placeholder="E.g 6b47e5c7-470b-447e-aef2-1d1dde6b4a13"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Longitude</span>
            <input
              v-model="gateway.longitude"
              type="text"
              placeholder="E.g 6b47e5c7-470b-447e-aef2-1d1dde6b4a13"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Latitude</span>
            <input
              v-model="gateway.latitude"
              type="text"
              placeholder="E.g 6b47e5c7-470b-447e-aef2-1d1dde6b4a13"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700 ">Company ID</span>

            <div class="flex justify-center mt-2">
              <div class=" w-full">
                <select
                  v-model="gateway.companyId"
                  :disabled="!isadmin"
                  class=" form-select appearance-none disabled:opacity-75
            block
            w-full
            px-3
            py-3
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Select company"
                >
                  <option selected>Select company</option>
                  <option v-for="c in companies" :key="c.id" :value="c.id">{{ c.name }}</option>
                </select>
              </div>
            </div>
          </label>
        </form>
        <div class="flex justify-end mt-6   pt-3 text-white font-bold">
          <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-8 rounded-full" @click="save">
            Add gateway
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
      form: true,
      delayInMilliseconds: 5000,
      gateway: {
        gatewayName: '',
        gatewayType: '',
        longitude: 0.0,
        latitude: 0.0,
        gwid: '',
        companyId: 0,
        communicationId: 0,
        active: true
      }
    }
  },
  computed: {
    ...mapGetters({
      companies: 'companies',
      isadmin: 'isadmin',
      cid: 'companyId'
    })
  },
  created () {
    this.$store.dispatch('_fetchuseraccount')
    this.$store.dispatch('_fetchcompanies')
  },
  mounted () {
    this.gateway.companyId = parseInt(this.cid)
  },
  methods: {
    async save () {
      await this.$api.$post('/gateways', this.gateway)
        .then((_response) => {
          this.$router.push('/system/gateways')
        })
        .catch((_error) => {
        })
    }
  }
}
</script>
