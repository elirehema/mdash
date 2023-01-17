import Vue from 'vue'
const mixins = {
  components: {
    'export-button': () => import('@/components/btn-export.vue')
  },
  data () {
    return {
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
