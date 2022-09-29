<template>
  <div class="grid grid-cols-12 bg-[#29465B] ">
    <div class="col-span-12 md:col-span-4 2xl:col-span-5 mt-0 grid md:justify-start md:content-start justify-center content-center ">
      <div>
        <svg
          class="fill-gray-100"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.47 2.22a.75.75 0 0 1 1.06 0c.403.403 1.999 2.127 3.499 4.362C17.509 8.785 19 11.635 19 14.25c0 2.524-.746 4.479-2.044 5.806C15.659 21.38 13.889 22 12 22c-1.89 0-3.659-.619-4.956-1.944C5.746 18.729 5 16.774 5 14.25c0-2.615 1.492-5.465 2.971-7.668 1.5-2.235 3.096-3.96 3.499-4.362Z" />
        </svg>
      </div>
    </div>

    <div class="col-span-12 md:col-span-4 2xl:col-span-2  px-5 grid place-items-center h-screen ">
      <div class="bg-gray-100 rounded-lg border grid place-items-center p-8 w-full">
        <h1 class="font-bold text-lg pb-6">
          Sign In Form
        </h1>
        <input v-model="request.email" class=" rounded-lg py-4 px-2 border border-1 border-green-200 hover:border-green-400 w-full " placeholder="Enter email">
        <input v-model="request.password" type="password" class=" rounded-lg py-4 px-2 border border-1 border-green-200 hover:border-green-400 w-full mt-8" placeholder="Password ***********">
        <button
          class="
            border-green-500
            md:border-2
            bg-primary hover:text-white
            mt-12
            btn text-center text-white
            transition
            ease-out
            w-full
            rounded-full
            duration-500
          "
          @click="authenticate"
        >
          Sign In
        </button>
      </div>
    </div>

    <div class="col-span-4 md:col-span-4 2xl:col-span-5 p-12  h-full  " />
  </div>
</template>
<script>
export default {
  layout: 'home',
  data () {
    return {
      request: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    authenticate () {
      this.$store.dispatch('_authenticate', this.request)
    }
  }
}
</script>>
