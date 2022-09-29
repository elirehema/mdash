<template>
  <div v-if="customers" class="container p-5 min-w-full">
    <div class="overflow-x-auto relative shadow-xs">
      <div class="flex justify-between items-center py-4 bg-white dark:bg-gray-800 mx-5">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
          >
            <span class="sr-only">Action button</span>
            Action
            <svg
              class="ml-2 w-3 h-3"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
            id="dropdownAction"
            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Reward</a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Promote</a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Activate
                  account</a>
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Delete
                User</a>
            </div>
          </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            id="table-search-users"
            type="text"
            class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          >
        </div>
        <div class="flex items-center p-6 space-x-2 rounded-b ">
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="(editUserModal = !editUserModal) && (edit=false) && (customer = {})"
          >
            Add customer
          </button>
        </div>
      </div>

      <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Customers
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Browse a list of NexIoT customers this customers designed to help you work
            work and play, stay organized, get answers,
            keep in touch, grow your business, and more.
          </p>
        </caption>
        <thead
          class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-900
        "
        >
          <tr>
            <th v-for="(field, i) in fields" :key="i" scope="col" class="py-3 px-6">
              {{ field }}
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(c, i) in customers"
            :key="i"
            class="
            odd:bg-gray-50
            bg-white
            border-b
            hover:bg-gray-100
            dark:bg-gray-800 dark:border-gray-700
          "
          >
            <th
              scop="row"
              class="
              py-3
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
            >
              {{ c.fullname }}
            </th>
            <td class="py-1 px-6">
              {{ c.phone }}
            </td>
            <td class="py-1 px-6">
              {{ c.email }}
            </td>
            <td class="py-1 px-6">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2" /> Active
              </div>
            </td>
            <td class="py-1 px-6">
              <svg
                width="24"
                height="24"
                fill="none"
                class="border rounded-lg p-1 bg-gray-500"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                @click="editcustomer(c)"
              >
                <path
                  d="M13.94 5 19 10.06 9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5Zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0Z"
                  fill="#ffffff"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Edit user modal -->
      <div
        v-if="editUserModal"
        tabindex="-1"
        aria-hidden="true"
        class="inset-0 bg-gray-500 bg-opacity-75 flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative w-full max-w-2xl h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow-2xl dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                {{ formTitle }}
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="editUserModal"
                @click="editUserModal = !editUserModal"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                    Name</label>
                  <input
                    id="first-name"
                    v-model="customer.firstname"
                    type="text"
                    name="first-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie"
                    required=""
                  >
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                    Name</label>
                  <input
                    id="last-name"
                    v-model="customer.lastname"
                    type="text"
                    name="last-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Green"
                    required=""
                  >
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    id="email"
                    v-model="customer.email"
                    type="email"
                    name="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@company.com"
                    required=""
                  >
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                    Number</label>
                  <input
                    id="phone-number"
                    v-model="customer.phone"
                    type="number"
                    name="phone-number"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. +(12)3456 789"
                    required=""
                  >
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="department"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Localction</label>
                  <input
                    id="department"
                    v-model="customer.location"
                    type="text"
                    name="department"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Development"
                    required=""
                  >
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <div>
                    <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                      Location</label>
                    <button
                      id="menu-button"
                      type="button"
                      class="inline-flex w-full justify-start rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                      aria-expanded="true"
                      aria-haspopup="true"
                      @click="locationmenu = !locationmenu"
                    >
                      Select District
                      <!-- Heroicon name: mini/chevron-down -->
                      <svg
                        class="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    v-if="locationmenu"
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div v-for="district in districts" class="py-1" role="none" @click="(customer.districtId = district.id) && ( locationmenu = false)">
                      <a
                        id="menu-item-1"
                        href="#"
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                      >{{ district.name }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="save()"
              >
                {{ saveButton }}
              </button>
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
      fields: ['Name', 'Phone', 'Email', 'Status'],
      menu: false,
      edit: false,
      locationmenu: false,
      customer: {
        firstname: '',
        lastname: '',
        phone: '',
        location: ''
      },
      defaultCustomer: {
        firstname: '',
        lastname: '',
        phone: '',
        location: ''
      },
      editedIndex: -1,
      editUserModal: false
    }
  },
  watch: {
    editUserModal (val) {
      val || this.close()
    }
  },
  created () {
    this.$store.dispatch('_fetchcustomers')
    this.$store.dispatch('_fetchdistricts')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    },
    editcustomer (value) {
      this.edit = true
      this.editedIndex = this.customers.indexOf(value)
      this.editUserModal = !this.editUserModal
      this.customer.id = value.id
      this.customer.fullname = value.fullname
      this.customer.firstname = value.firstname
      this.customer.lastname = value.lastname
      this.customer.phone = value.phone
      this.customer.email = value.email
      this.customer.location = value.location
    },

    save () {
      if (this.editedIndex < 0) {
        this.$store.dispatch('_addcustomer', this.customer)
      } else {
        this.$store.dispatch('_updatecustomer', this.customer)
      }
      this.close()
    },
    close () {
      this.editUserModal = false
      this.$nextTick(() => {
        this.customer = Object.assign({}, this.defaultCustomer)
        this.$store.dispatch('_fetchcustomers')
        this.editedIndex = -1
      })
    }
  },
  computed: {
    ...mapGetters({
      customers: 'customers',
      districts: 'districts'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'Add new customer' : `Update ${this.customer.fullname}`
    },
    saveButton () {
      return this.editedIndex === -1 ? 'Save' : 'Update'
    }

  }
}
</script>
