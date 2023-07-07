import Vue from 'vue'
const mixins = {
  components: {
    'skeleton-table-loader': () => import('~/components/loaders/skeleton-table-loader.vue'),
    'skeleton-datepicker-loader': () => import('~/components/loaders/skeleton-date-picker.vue'),
    'export-button': () => import('@/components/btn-export.vue')
  },
  data () {
    return {
      footerprops: {
        'items-per-page-options': [10, 20, 30, 40, 50, 10]
      },
      delay: 3000
    }
  },
  methods: {},
  computed: {

    msisdn () {
      return localStorage.getItem('msisdn')
    }

  }

}
Vue.mixin(mixins)
