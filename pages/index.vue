<!-- Please remove this file from your project -->
<template>
  <div class="text-gray-600 font-body ">
    <div class="p-6">
      <div class="flex justify-center md:justify-between border-b border-gray-200">
        <div>
          <header>
            <h2 class="text-gray-700 text-3xl font-semibold ">
              Dashboard
            </h2>
            <h3 class="text-sm font-thin">
              For NexIoT Admin
            </h3>
          </header>
        </div>
      </div>
      <div v-if="totals">
        <div class="mt-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          <nuxt-link to="/meters">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg  relative">
              <div class="grid grid-cols-12">
                <div class="col-span-4 grid justify-center content-center">
                  <svg
                    class="fill-green-500 "
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m10.05 15.42 6.256-8.475a.694.694 0 0 1 1.235.57l-.03.098-3.87 9.799a2.07 2.07 0 1 1-3.737-1.765l.069-.116.076-.11 6.257-8.476-6.257 8.476Zm8.56-8.006a10.66 10.66 0 0 1 2.022 2.172c.524.749 1.03 1.656 1.32 2.398a.75.75 0 1 1-1.397.547 8.238 8.238 0 0 0-.378-.812l-2.05 1.183a.75.75 0 0 1-.834-1.242l.085-.057 2.018-1.166-.23-.314a9.156 9.156 0 0 0-1.058-1.16l.38-.964c.038-.096.067-.194.087-.292l.024-.147.01-.146Zm-2.63-1.561a1.715 1.715 0 0 0-.406.328l-.114.14-.54.733a9.205 9.205 0 0 0-2.17-.47v2.672a.75.75 0 0 1-1.493.102l-.007-.102v-2.69A9.108 9.108 0 0 0 6.658 8.2c-.816.572-1.528 1.322-2.119 2.205l2.082 1.202a.75.75 0 0 1-.658 1.344l-.092-.045-2.074-1.197c-.128.266-.246.54-.356.821a.75.75 0 0 1-1.398-.543c.807-2.075 2.08-3.843 3.754-5.016a10.642 10.642 0 0 1 10.183-1.117Z" />
                  </svg>
                </div>
                <div class="col-span-8 p-4 2xl:p-8   bg-primary flex flex-col">
                  <span class="font-bold text-sm 2xl:text-xl text-white"> Meters</span>
                  <span class="font-bold text-lg 2xl:text-2xl text-white">{{ totals.meters }}</span>
                </div>
              </div>
            </div>
          </nuxt-link><nuxt-link to="/users">
            <div class=" rounded-lg overflow-hidden shadow-md hover:shadow-lg  relative">
              <div class="grid grid-cols-12 bg-white">
                <div class="col-span-4 grid justify-center content-center">
                  <svg
                    class="fill-green-500 "
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75h5.502Zm0 1.5H9.252a.25.25 0 0 0-.25.25v4.749a3.001 3.001 0 0 0 6.002 0V11.75a.25.25 0 0 0-.25-.25ZM3.75 10h3.381a2.738 2.738 0 0 0-.618 1.5H3.75a.25.25 0 0 0-.25.25v3.249a2.501 2.501 0 0 0 3.082 2.433c.085.504.24.985.453 1.432A4.001 4.001 0 0 1 2 14.999V11.75c0-.966.784-1.75 1.75-1.75Zm13.125 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.214-.448.369-.929.455-1.433A2.5 2.5 0 0 0 20.5 15v-3.25a.25.25 0 0 0-.25-.25h-2.757a2.738 2.738 0 0 0-.618-1.5ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6.5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-13 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                  </svg>
                </div>
                <div class="col-span-8 p-4 2xl:p-8   bg-primary flex flex-col">
                  <span class="font-bold text-sm 2xl:text-xl text-white">Users</span>
                  <span class="font-bold text-lg 2xl:text-2xl text-white">{{ totals.users }}</span>
                </div>
              </div>
            </div>
          </nuxt-link><nuxt-link to="/companies">
            <div class=" rounded-lg overflow-hidden shadow-md hover:shadow-lg  relative">
              <div class="grid grid-cols-12 bg-white">
                <div class="col-span-4 grid justify-center content-center">
                  <svg
                    class="fill-green-500 "
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 3a.75.75 0 0 1 .743.648l.007.102v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75A.75.75 0 0 1 12 3ZM8.255 6a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75Zm7.49 0a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102l-.007-.102V6.75a.75.75 0 0 1 .75-.75ZM4.751 9a.75.75 0 0 1 .743.648l.007.102v4.5a.75.75 0 0 1-1.493.102l-.007-.102v-4.5a.75.75 0 0 1 .75-.75Zm14.501 0a.75.75 0 0 1 .744.648l.006.102v4.499a.75.75 0 0 1-1.493.101l-.007-.101V9.75a.75.75 0 0 1 .75-.75Z" />
                  </svg>
                </div>
                <div class="col-span-8 p-4 2xl:p-8   bg-primary flex flex-col">
                  <span class="font-bold text-sm 2xl:text-xl text-white">Companies</span>
                  <span class="font-bold text-lg 2xl:text-2xl text-white">{{ totals.companies }}</span>
                </div>
              </div>
            </div>
          </nuxt-link><nuxt-link to="/purchases">
            <div class=" rounded-lg overflow-hidden shadow-md hover:shadow-lg  relative">
              <div class="grid grid-cols-12 bg-white">
                <div class="col-span-4 grid justify-center content-center">
                  <svg
                    class="fill-green-500 "
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.749 2h4.554l.1.014.099.028.06.026c.08.034.153.085.219.15l.04.044.044.057.054.09.039.09.019.064.014.064.009.095v4.532a.75.75 0 0 1-1.493.102l-.007-.102V4.559l-6.44 6.44a.75.75 0 0 1-.976.073L13 11 9.97 8.09l-5.69 5.689a.75.75 0 0 1-1.133-.977l.073-.084 6.22-6.22a.75.75 0 0 1 .976-.072l.084.072 3.03 2.91L19.438 3.5h-2.69a.75.75 0 0 1-.742-.648l-.007-.102a.75.75 0 0 1 .648-.743L16.75 2ZM3.75 17a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Zm5.75-3.25a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM13.75 15a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75Zm5.75-4.25a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0v-10.5Z" />
                  </svg>
                </div>
                <div class="col-span-8 p-4 2xl:p-8  bg-primary flex flex-col">
                  <span class="font-bold text-sm 2xl:text-xl text-white">CR Purchases</span>
                  <span class="font-bold text-lg 2xl:text-2xl text-white">{{ totals.purchases }}</span>
                </div>
              </div>
            </div>
          </nuxt-link><nuxt-link to="/tracks">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg  relative">
              <div class="grid grid-cols-12">
                <div class="col-span-4 grid justify-center content-center">
                  <svg
                    class="fill-green-500 "
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.22 17.219a.75.75 0 0 0-.073.976l.073.084 2.367 2.37a.77.77 0 0 0 .664.351.786.786 0 0 0 .611-.276l.053-.075 2.367-2.37.073-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073a.75.75 0 0 0-.883-.007l-.094.08L17 18.44V3.656l-.007-.089c-.05-.32-.363-.567-.743-.567s-.694.247-.743.567l-.007.09V18.44l-1.22-1.221-.084-.073a.75.75 0 0 0-.976.073Zm-6.97 2.789A2.25 2.25 0 0 1 4 17.758v-11.5a2.25 2.25 0 0 1 2.25-2.25h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h4a.75.75 0 0 1 0 1.5h-4Z" />
                  </svg>
                </div>
                <div class="col-span-8 p-4 2xl:p-8  bg-primary flex flex-col">
                  <span class="font-bold text-sm 2xl:text-xl text-white">Usage Tracks</span>
                  <span class="font-bold text-lg 2xl:text-2xl text-white">{{ totals.usageTracks }}</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div>
        <h4 v-if="false" class="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Customers
        </h4>
        <div v-if="false" class="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <!--Card goes here-->
          <div class="card hover:shadow-lg">
            <img
              class="w-full h-32 sm:h-48 object-cover"
              src="http://static.everypixel.com/ep-pixabay/1616/2887/1524/15716/16162887152415716012-wolf.jpg"
              alt="Rando Image"
            >
            <div class="m-4">
              <span class="font-bold">{{ foodname }}</span>
              <span class="block text-gray-500 text-sm">
                Recipies by Marios</span>
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span> 25 mins </span>
            </div>
          </div>

          <div
            v-for="(customer, i) in customers"
            :key="i"
            class="card hover:shadow-lg"
          >
            <img
              class="w-full h-32 sm:h-48 object-cover"
              src="https://wallpaperaccess.com/full/2882814.jpg"
              alt="Rando Image"
            >
            <div class="m-4">
              <span class="font-bold">Yummy food wallpaper</span>
              <span class="block text-gray-500 text-sm">
                Recipies by {{ customer.fullname }}</span>
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span> 25 mins </span>
            </div>
          </div>

          <div class="card hover:shadow-lg">
            <img
              class="w-full h-32 sm:h-48 object-cover"
              src="https://wallpaperaccess.com/full/767033.jpg"
              alt="Rando Image"
            >
            <div class="m-4">
              <span class="font-bold">Top Delicious Foods</span>
              <span class="block text-gray-500 text-sm">
                Recipies by Mario</span>
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span> 25 mins </span>
            </div>
          </div>
        </div>
        <div v-if="tracks">
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">
            Recent usage tracks
          </h4>
          <div class="mt-8">
            <usage-track :tracks="tracks" />
          </div>
          <div v-if="tracks.length > 24" class="flex justify-center mt-4">
            <nuxt-link to="/tracks">
              <span
                class="
              mt-16 bg-transparent
              transform
              hover:scale-125
              hover:text-lg italic
              transition font-bold
              ease-out text-blue-600
              duration-300
            "
              >
                Load more ...
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { mapGetters } from 'vuex'
import MeterUsageTrackComponent from '~/components/usage-track.vue'
export default {
  name: 'NuxtTutorial',
  components: {
    'usage-track': MeterUsageTrackComponent
  },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      totals: 'totals',
      tracks: 'recenttracks'
    })
  },
  mounted () {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.fetchdashboardinfos()
      }, 270000)
    })
  },
  created () {
    this.fetchdashboardinfos()
  },
  methods: {
    fetchdashboardinfos () {
      this.$store.dispatch('_fetchrecentusagetracks')
      this.$store.dispatch('_fetchstatistics')
    }
  }

}
</script>
