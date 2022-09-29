<template>
  <div class="container min-w-full bg-[#FAFAFA]">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Add new tariff
        </p>
        <p class="text-sm font-light">
          Register new tariff
        </p>
      </div>
    </div>
    <div class="flex justify-center px-16">
      <div class="form p-16 w-9/12 border-2 border-dashed border-primary mt-16 ">
        <form ref="form" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 border-b-2 pb-10">
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Tariff Name</span>
            <input
              v-model="tariff.name"
              type="text"
              placeholder="E.g TR-10"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Unit Price</span>
            <input
              v-model="tariff.unitPrice"
              type="text"
              placeholder="E.g 200"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700 ">Company</span>

            <div class="flex justify-center mt-2">
              <div class=" w-full">
                <select
                  v-model="tariff.companyId"
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
        <div class="flex justify-end mt-6 gap-3  pt-3 text-white font-bold">
          <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-3 px-8 rounded-full" @click="$router.push('/system/tariffs')">
            CANCEL
          </button>
          <button class="transition ease-in-out delay-150 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 gap-2 py-3 px-8 rounded-full flex justify-between items-center" @click="save">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" />
</svg> SAVE TARRIF
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
      tariff: {
        name: '',
        unitPrice: 0,
        companyId: 0
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
    this.tariff.companyId = parseInt(this.cid)
  },
  methods: {
    async save () {
      await this.$api.$post('/tariffs', this.tariff)
        .then((_response) => {
          this.$router.push('/system/tariffs')
        })
        .catch((_error) => {
        })
    }
  }
}
</script>
