<template>
  <div v-if="pages>1">
    <div class="flex flex-col items-center p-4 ">
      <!-- Help text -->
      <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing <span class="font-semibold text-gray-900 dark:text-white">{{ page }}</span> out of <span class="font-semibold text-gray-900 dark:text-white">{{ pages }}</span> Pages
      </span>
      <div class="inline-flex mt-2 xs:mt-0">
        <!-- Buttons -->
        <button :disabled="page == 1" class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-plainblue rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="previousclicked">
          <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>
          Prev
        </button>
        <button :disabled="page == pages" class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-primary rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="nextclicked">
          Next
          <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </button>
      </div>
    </div>
    <div v-if="false" class=" min-w-full bg-emerald-50 py-5">
      <div class="flex justify-end  w-full">
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" @click="previousclicked">
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: mini/chevron-left -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </a>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a
            v-for="p in pages"
            :key="p"
            type="button"
            aria-current="page"
            class="relative z-10 inline-flex items-center border   px-4 py-2 text-sm font-medium  focus:z-20 cursor-pointer"
            :class="(p==current) ? 'border-plainblue bg-plainblue text-white font-bold':'text-gray-500 bg-white border-gray-300'"
            @click="updatepage(p)"
          >{{ p }}</a>

          <a class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" @click="nextclicked">
            <span class="sr-only">Next</span>
            <!-- Heroicon name: mini/chevron-right -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
<script >
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      current: 0
    }
  },
  created () {
    this.current = this.page
  },
  methods: {
    updatepage (page) {
      this.current = page
      this.requestdateupdate()
    },
    previousclicked () {
      this.current = (this.current > 1) ? this.current - 1 : this.current
      this.requestdateupdate()
    },
    nextclicked () {
      this.current = (this.current < this.pages) ? this.current + 1 : this.current
      this.requestdateupdate()
    },
    requestdateupdate () {
      this.$emit('update', this.current)
    }
  }
}
</script>
