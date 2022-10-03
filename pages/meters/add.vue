<template>
  <div class="container min-w-full">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Add new Meter
        </p>
        <p class="text-sm font-light">
          Register new meter
        </p>
      </div>
    </div>
    <div class="flex justify-center p-16">
      <form id="app" ref="form" class="card p-16 w-9/12">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 border-b-2 pb-10"
        >
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Batch Number</span>
            <input
              v-model="meter.batchNumber"
              type="text"
              required
              placeholder="E.g XJ326721ML0ZQ"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Device Manufacture</span>
            <input
              v-model="meter.manufacturer"
              type="text"
              required
              placeholder="E.g Philips"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Serial Number</span>
            <input
              v-model="meter.serialNumber"
              type="text"
              required
              placeholder="E.g HDJ213UH99kJV9002"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Device ID</span>
            <input
              v-model="meter.deviceId"
              type="text"
              required
              placeholder="E.g 322131222"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Control Number</span>
            <input
              v-model="meter.controlNumber"
              type="text"
              required
              placeholder="E.g 2131232343242"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Company</span>

            <div class="flex justify-center mt-2">
              <div class="w-full">
                <select
                  v-model="meter.companyId"
                  :disabled="!isadmin"
                  required
                  class="form-select appearance-none disabled:opacity-75 block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Select company"
                >
                  <option selected>Select company</option>
                  <option v-for="c in companies" :key="c.id" :value="c.id">
                    {{ c.name }}
                  </option>
                </select>
              </div>
            </div>
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Initial Credits</span>
            <input
              v-model="meter.initialCredits"
              type="number"
              required
              placeholder="E.g 0.93"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Initial Offsets</span>
            <input
              v-model="meter.initialOffsets"
              type="number"
              required
              placeholder="E.g 2"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
        </div>
        <div class="flex justify-end mt-6 pt-3 text-white font-bold">
          <button
            type="submit"
            class="transition ease-in-out delay-150 bg-plainblue hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-8 rounded-full"
            @click="save"
          >
            Save Meter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: true,
      delayInMilliseconds: 5000,
      meter: {
        batchNumber: '',
        manufacturer: '',
        serialNumber: '',
        deviceId: '',
        controlNumber: '',
        companyId: 0,
        initialCredits: 0.0,
        initialOffsets: 0.0
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
    this.meter.companyId = parseInt(this.cid)
  },
  methods: {
    async save () {
      await this.$api
        .$post('/meters', this.meter)
        .then((_response) => {
          this.$router.push('/meters')
        })
        .catch((_error) => {})
    }
  }
}
</script>
