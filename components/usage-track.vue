<template>
  <div v-if="tracks" class="container  min-w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        v-if="tracks"
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
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(t, i) in tracks"
          :key="i"
          class="
              odd:bg-gray-50
              bg-white
              border-b text-gray-500
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
            {{ t.id }}
          </th>
          <td class="py-4 px-6">
            <nuxt-link :to="`/meters/${t.MeterId}`">
              <span
                class="mt-16 bg-transparent
              transform
              hover:scale-125
              hover:text-lg hover:italic
              transition hover:font-bold
              ease-out hover:text-blue-600
              duration-600"
              >{{ t.MeterId }}</span>
            </nuxt-link>
          </td>
          <td class="py-4 px-6">
            {{ t.recordedUnit }}
          </td>
          <td class="py-4 px-6">
            {{ t.offSet }}
          </td>
          <td class="py-4 px-6 text-green-500 font-semibold">
            {{ "[ "+ t.valveStatus + " ] - " + t.valveStatusMessage }}
          </td>
          <td class="py-4 px-6">
            {{ t.createdAt | dateformat }}
          </td>
          <td class="py-4 px-6">
            {{ t.updatedAt | dateformat }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="grid grid-cols-2 py-10 justify-center content-center">
    <div class="justify-self-end">
      <svg
        class="animate-spin fill-blue-600"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.129 3.195a9.033 9.033 0 0 1 3.742 0 .75.75 0 1 1-.31 1.467 7.534 7.534 0 0 0-3.122 0 .75.75 0 0 1-.31-1.467Zm5.736 1.476a.75.75 0 0 1 1.038-.22 9.03 9.03 0 0 1 1.097.84V4.25a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.35a7.537 7.537 0 0 0-1.015-.791.75.75 0 0 1-.22-1.038ZM19.5 12v-.75a.75.75 0 0 1 1.5 0V12c0 .64-.067 1.267-.195 1.871a.75.75 0 0 1-1.467-.31A7.538 7.538 0 0 0 19.5 12ZM8.135 4.671a.75.75 0 0 1-.22 1.038A7.545 7.545 0 0 0 5.71 7.915a.75.75 0 1 1-1.257-.818 9.044 9.044 0 0 1 2.645-2.646.75.75 0 0 1 1.038.22ZM4.662 10.44a.75.75 0 0 0-1.467-.31 9.033 9.033 0 0 0 0 3.742.75.75 0 1 0 1.467-.31 7.534 7.534 0 0 1 0-3.122Zm14.667 5.426a.75.75 0 0 1 .22 1.038 9.043 9.043 0 0 1-2.646 2.646.75.75 0 0 1-.818-1.258 7.548 7.548 0 0 0 2.206-2.206.75.75 0 0 1 1.038-.22Zm-13.62.22a.75.75 0 1 0-1.257.818 9.043 9.043 0 0 0 2.645 2.646.75.75 0 0 0 .818-1.258 7.546 7.546 0 0 1-2.206-2.206Zm3.841 3.831a.75.75 0 0 1 .89-.578 7.538 7.538 0 0 0 3.12 0 .75.75 0 1 1 .311 1.467 9.035 9.035 0 0 1-3.742 0 .75.75 0 0 1-.579-.889Z" />
      </svg>
    </div>
    <div class="mt-1 ml-4 text-blue-600 justify-self-start">
      <span> Please Wait...</span>
    </div>
  </div>
</template>
<script >
export default {
  props: {
    tracks: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      fields: ['ID', 'MeterID', 'Recorded Unit', 'Offset', 'Valve Status Message', 'Created at', 'Updated at'],
      menu: false
    }
  }

}
</script>
