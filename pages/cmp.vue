<template>
  <div v-if="companies" class="container min-w-full">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Companies
        </p>
        <p class="text-sm font-light">
          List of all registered companies
        </p>
      </div>
      <div v-if="isadmin" class="flex justify-end ">
        <form>
          <div class="inline-flex justify-between gap-4 py-4">
            <input v-if="save" v-model="company.name" placeholder="Company Name" class=" rounded-lg  border border-indigo-400 min-w-64 placeholder:text-gray-400 p-2" required>

            <input v-if="save" v-model="company.externalId" placeholder="External ID" class=" rounded-lg  border border-indigo-400 min-w-64 placeholder:text-gray-400 p-2" required>

            <div>
              <button v-if="save" type="submit" class="bg-primary font-bold text-white p-2 px-3 rounded-lg border border-primary" @click="savecompany">
                Save Company
              </button>
              
              <button v-else type="button" class="button" @click="save = !save">
                + New Company
              </button>
              <export-button report="companies" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-900
        "
      >
        <tr>
          <th
            v-for="(field, i) in fields"
            :key="i"
            scope="col"
            class="py-3 px-6"
          >
            {{ field }}
          </th>
          <th scope="col" class="py-3 px-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(c, i) in companies"
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
              py-4
              px-6
              font-medium
              text-gray-900
              whitespace-nowrap
              dark:text-white
            "
          >
            {{ c.id }}
          </th>
          <td class="py-4 px-6">
            {{ c.name }}
          </td>
          <td class="py-4 px-6">
            {{ c.externalId }}
          </td>
          <td class="py-4 px-6 text-right">
            <a
              href="#"
              class="
                font-medium
                text-blue-600
                dark:text-blue-500
                hover:underline
              "
            >Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script >
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      fields: ['ID', 'Name', 'ExternalID'],
      menu: false,
      companyname: '',
      save: false,
      input: false,
      isadmin: false,
      company: {
        name: null,
        externalId: null
      }
    }
  },
  computed: {
    ...mapGetters({
      companies: 'companies'
    })
  },
  watch: {
    companyname (val) {
      val.length > 2 ? this.save = true : this.save = false
    }
  },
  created () {
    const id = localStorage.getItem('userId')
    this.fetchuseraccount(id)
    this.$store.dispatch('_fetchcompanies')
  },
  methods: {
    savecompany () {
      this.$store.dispatch('_registercompany', this.company).then(() => {
        this.company = null
        this.save = false
        this.input = false
      })
    },
    async fetchuseraccount (accountId) {
      await this.$api
        .$get(`/users/${accountId}`)
        .then((response) => {
          this.isadmin = (response.role === 'ADMIN')
          this.meter.companyId = response.companyId
        })
        .catch((_error) => {
        })
    }
  }

}
</script>
