<template>
  <div v-if="users" class="container min-w-full">
    <div class="p-5 border-b flex flex-row justify-between">
      <div>
        <p class="font-bold text-primary text-3xl">
          Users
        </p>
        <p class="text-sm font-light">
          List of all system users
        </p>
      </div>
      <div>
        <nuxt-link to="/users/add">
          <button type="button" class="bg-primary font-bold text-white p-2 px-3 rounded-lg border border-primary">
            + New User
          </button>
        </nuxt-link>
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
          v-for="(c, i) in users"
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
            {{ c.firstname }} {{ c.lastname }}
          </th>
          <td class="py-4 px-6">
            {{ c.email }}
          </td>
          <td class="py-4 px-6">
            {{ c.phone }}
          </td>
          <td class="py-4 px-6">
            {{ c.isActive }}
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
      fields: ['Name', 'Email', 'Phone', 'Active ?'],
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      users: 'users'
    })
  },
  created () {
    this.$store.dispatch('_fetchusers')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }

}
</script>
