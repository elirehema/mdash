<template>
  <credit-purchase
    :purchases="purchases"
    :items="items"
    :page="page"
    :items-per-page="itemsPerPage"
    :pages="pages"
    @paginate="paginate"
  />
</template>
<script >
import CreditPurchaseComponent from '~/components/credit-purchase.vue'
export default {
  components: {
    'credit-purchase': CreditPurchaseComponent
  },
  data () {
    return {
      menu: false,
      purchases: null,
      pages: 1,
      items: 0,
      page: 1,
      itemsPerPage: 10
    }
  },
  created () {
    this.paginate({ page: 0, itemsPerPage: Math.round(window.innerHeight / 64) })
  },
  methods: {
    viewCredit (it) {
      this.$router.push({ path: `purchases/${it}` })
    },
    async paginate (it) {
      await this.$api
        .$get('/purchases/paginate', { params: { page: it.page, size: it.itemsPerPage } })
        .then((response) => {
          this.page = response.currentPage
          this.purchases = response.results
          this.pages = response.totalPages
          this.items = response.totalRows
          this.page = response.currentPage
          this.itemsPerPage = response.size
        })
        .catch((_error) => {
        })
    }
  }

}
</script>
