<template>
  <div class="container min-w-full">
    <div class="p-5 border-b">
      <p class="font-bold text-primary text-3xl">
        Profile
      </p>
      <p class="text-sm font-light">
        My profile account information
      </p>
    </div>
    <div class="lg:flex w-auto">
      <div v-if="profile" class="grid w-auto mt-4">
        <div class=" rounded-lg overflow-hidden shadow-md hover:shadow-lg  relative">
          <div class="grid grid-cols-12 bg-white">
            <div class="col-span-12 md:col-span-5 grid justify-center content-center h-64  md:h-full">
              <svg
                class="fill-green-500"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25V13h-.258a3.74 3.74 0 0 0-1.242-2.545V7.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 7.25v9.5c0 .966.784 1.75 1.75 1.75H12v.5c0 .34.04.674.118 1H5.25A3.25 3.25 0 0 1 2 16.75v-9.5ZM21.5 17a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4-3.14 0-5-2.029-5-4v-.5a1.5 1.5 0 0 1 1.5-1.5h7ZM18 10.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"
                />
              </svg>
            </div>
            <div class="col-span-12 md:col-span-7 p-4 2xl:p-8 gap-4   bg-gray-100 flex flex-col text-primary">
              <span class="font-bold text-sm 2xl:text-xl ">Name: {{ profile.firstname }}  {{ profile.lastname }}</span>
              <span class="font-bold text-sm 2xl:text-xl ">User Email: {{ profile.email }}</span>
              <span class="font-bold text-sm 2xl:text-xl ">Phone: {{ profile.phone }}</span>

              <span class="font-bold text-lg 2xl:text-2xl ">Office Name: {{ profile.companyName }}</span>
              <span class="font-bold text-lg 2xl:text-2xl ">Roles: {{ profile.role }}</span>
            </div>
          </div>
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
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      profile: 'account'
    })
  },
  created () {
    this.$store.dispatch('_fetchuseraccount')
  },
  methods: {

  }

}
</script>
