<template>
  <div class="container min-w-full bg-[#FAFAFA]">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Add new user
        </p>
        <p class="text-sm font-light">
          Register new user
        </p>
      </div>
    </div>
    <div class="flex justify-center px-16">
      <div class="form p-16 w-9/12 border-2 border-dashed border-primary ">
        <form ref="form" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 border-b-2 pb-10">
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Username</span>
            <input
              v-model="user.username"
              type="text"
              placeholder="E.g johnhode"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Email Address</span>
            <input
              v-model="user.email"
              type="text"
              placeholder="E.g john@doe.com"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">First Namer</span>
            <input
              v-model="user.firstname"
              type="text"
              placeholder="E.g John"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Last Name</span>
            <input
              v-model="user.lastname"
              type="text"
              placeholder="E.g  Doe"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>
          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Phone Number</span>
            <input
              v-model="user.phone"
              type="text"
              placeholder="E.g +255716000000"
              class="mt-1 block w-full px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600
                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            >
          </label>

          <label class="block">
            <span class="block text-lg font-semibold text-slate-700">Password</span>
            <input
              v-model="user.password"
              type="text"
              placeholder="E.g ***************"
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
                  v-model="user.companyId"
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
            Add User
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
      user: {
        username: '',
        email: '',
        phone: '',
        firstname: '',
        lastname: '',
        password: '',
        role: 'MOD',
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
    this.user.companyId = parseInt(this.cid)
  },
  methods: {
    async save () {
      await this.$api.$post('/users/register', this.user)
        .then((_response) => {
          this.$router.push('/users')
        })
        .catch((_error) => {
        })
    }
  }
}
</script>
