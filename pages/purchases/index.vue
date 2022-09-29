<template>
  <div class="container min-w-full">
    <div class="p-5 border-b flex justify-between ">
      <div>
        <p class="font-bold text-primary text-3xl">
          Credit Purchases
        </p>
        <p class="text-sm font-light">
          List of all credit purchases
        </p>
      </div>
      <nuxt-link to="/payments">
        <a class="underline italic text-blue-500">View all payments</a>
      </nuxt-link>
    </div>
    <credit-purchase :purchases="purchases" />
  </div>
</template>
<script >
import { mapGetters } from 'vuex'
import CreditPurchaseComponent from '~/components/credit-purchase.vue'
export default {
  components: {
    'credit-purchase': CreditPurchaseComponent
  },
  data () {
    return {
      menu: false
    }
  },
  computed: {
    ...mapGetters({
      purchases: 'purchases'
    })
  },
  created () {
    this.$store.dispatch('_fetchcreditpurchases')
  },
  methods: {
    openmenu () {
      this.menu = !this.menu
    }
  }

}
</script>
