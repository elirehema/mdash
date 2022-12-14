<template>
  <div class="container min-w-full">
    <div class="p-5 border-b">
      <p class="font-bold text-primary text-3xl">
        Settings
      </p>
      <p class="text-sm font-light">
        Specify the configurations between a platform and gateways
      </p>
    </div>
    <div class="lg:flex w-auto bg-[#FAFAFA] px-20 pt-4">
      <div v-if="settings" class="grid w-auto mt-4">
        <div class=" overflow-hidden   relative">
          <div class="grid grid-cols-2">
            <nuxt-link v-for="setting in settings" :key="setting.title" :to="setting.to">
              <div class="grid grid-cols-12 bg-white border-b mx-1 border-gray-400">
                <div class="col-span-12 md:col-span-2 grid justify-center content-center h-64  md:h-full">
                  <svg
                    class="fill-green-500"
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path :d="setting.d" />

                  </svg>
                </div>
                <div class="col-span-12 md:col-span-10 p-4 2xl:p-8 gap-2    flex flex-col text-gray-700">
                  <span class="font-bold text-sm 2xl:text-xl ">{{ setting.title }}</span>
                  <span class="font-light text-sm ">{{ setting.description }}</span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
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
          to: '/system/ami',
          d: 'M19.5 8C21.43 8 23 6.43 23 4.5C23 2.57 21.43 1 19.5 1C17.57 1 16 2.57 16 4.5C16 6.43 17.57 8 19.5 8M21 16V9.79C20.5 9.93 20 10 19.5 10C19.33 10 19.17 10 19 10V16C19 17.66 17.66 19 16 19H8C6.34 19 5 17.66 5 16V8C5 6.34 6.34 5 8 5H14C14 4.84 14 4.67 14 4.5C14 4 14.07 3.5 14.21 3H8C5.24 3 3 5.24 3 8V16C3 18.76 5.24 21 8 21H16C18.76 21 21 18.76 21 16Z'
        },
        {
          title: 'Tariffs',
          description: 'Define and Modify credit purchases tariff to be used for unit conversions. Only one tarrif will be active at time. If no active tarrifs the system will use tariff from payment informations',
          to: '/system/tariffs',
          d: 'M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z'
        },
        {
          title: 'System Users',
          description: 'Add, Delete and Modify other system members. The new added member will be able to add other new members after login ',
          to: '/system/users',
          d: 'M16.5 15.5C18.22 15.5 20.25 16.3 20.5 16.78V17.5H12.5V16.78C12.75 16.3 14.78 15.5 16.5 15.5M16.5 14C14.67 14 11 14.92 11 16.75V19H22V16.75C22 14.92 18.33 14 16.5 14M9 13C6.67 13 2 14.17 2 16.5V19H9V17.5H3.5V16.5C3.5 15.87 6.29 14.34 9.82 14.5A5.12 5.12 0 0 1 11.37 13.25A12.28 12.28 0 0 0 9 13M9 6.5A1.5 1.5 0 1 1 7.5 8A1.5 1.5 0 0 1 9 6.5M9 5A3 3 0 1 0 12 8A3 3 0 0 0 9 5M16.5 8.5A1 1 0 1 1 15.5 9.5A1 1 0 0 1 16.5 8.5M16.5 7A2.5 2.5 0 1 0 19 9.5A2.5 2.5 0 0 0 16.5 7Z"d="M16.5 15.5C18.22 15.5 20.25 16.3 20.5 16.78V17.5H12.5V16.78C12.75 16.3 14.78 15.5 16.5 15.5M16.5 14C14.67 14 11 14.92 11 16.75V19H22V16.75C22 14.92 18.33 14 16.5 14M9 13C6.67 13 2 14.17 2 16.5V19H9V17.5H3.5V16.5C3.5 15.87 6.29 14.34 9.82 14.5A5.12 5.12 0 0 1 11.37 13.25A12.28 12.28 0 0 0 9 13M9 6.5A1.5 1.5 0 1 1 7.5 8A1.5 1.5 0 0 1 9 6.5M9 5A3 3 0 1 0 12 8A3 3 0 0 0 9 5M16.5 8.5A1 1 0 1 1 15.5 9.5A1 1 0 0 1 16.5 8.5M16.5 7A2.5 2.5 0 1 0 19 9.5A2.5 2.5 0 0 0 16.5 7Z'
        },
        {
          title: 'Gateways',
          description: 'Add, Delete and Modify Gateways. The Gateways will be mapped with the reading received from meter devices. This configurations will be used for Gateways communications',
          to: '/system/gateways',
          d: 'M9 6V11H7V7H5V11H3V9H1V21H3V19H5V21H7V19H9V21H11V19H13V21H15V19H17V21H19V19H21V21H23V9H21V11H19V7H17V11H15V6H13V11H11V6H9M3 13H5V17H3V13M7 13H9V17H7V13M11 13H13V17H11V13M15 13H17V17H15V13M19 13H21V17H19V13Z'
        }
      ]
    }
  }

}
</script>
