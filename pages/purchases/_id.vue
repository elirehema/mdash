<template>
  <div v-if="purchase" class="container p-5 min-w-full">
    <div class="p-5 border-b flex justify-between flex-col lg:flex-row bg-gray-100">
      <div>
        <p class="font-bold text-primary flex flex-row" />

        <div>
          <span class="font-bold text-primary text-xl">
            Contol Number: {{ purchase.controlNumber }}</span>
        </div>
        <div>
          <span class="font-bold text-primary text-lg">
            Amount: {{ purchase.amount }}</span>
        </div>

        <p class="text-xs">
          View Credit purchase informations
        </p>
      </div>
      <div class="grid grid-cols-2 text-gray-500 text-xs bg-white rounded-lg shadow-md p-4">
        <div>
          <span class="font-semibold text-primary text-xs"> Transaction Date: </span>
        </div>
        <div>
          <span>{{ purchase.transactionDate | dateformat }}</span>
        </div>
        <div><span class="font-semibold text-primary text-sm"> Meter ID:</span></div>
        <div>
          <span> {{ purchase.MeterId }}</span>
        </div>
        <div><span class="font-semibold text-primary text-sm"> Payment Ref: </span></div>
        <div>
          <span>{{ purchase.paymentReference }}</span>
        </div>
        <div>
          <span class="font-semibold text-primary text-sm"> Purchased Units: </span>
        </div>
        <div>
          <span>{{ purchase.purchasedUnits }}</span>
        </div>
        <div>
          <span class="font-semibold text-primary text-sm"> Off-Set Units: </span>
        </div>
        <div>
          <span>{{ purchase.offsetUnits }}</span>
        </div>
        <div>
          <span class="font-semibold text-primary text-sm"> Effective Units: </span>
        </div>
        <div>
          <span> {{ purchase.effectiveUnits }}</span>
        </div>
        <div><span class="font-semibold text-primary text-sm"> Tariff: </span></div>
        <div>
          <span>{{ purchase.tarrifId }}</span>
        </div>
        <div><span class="font-semibold text-primary text-sm"> Recorded At: </span></div>
        <div>
          <span> {{ purchase.createdAt | dateformat }}</span>
        </div>
      </div>
    </div>
    <div class="p-5 border-b">
      <p class="text-sm font-bold">
        List of all credit purchase transactions
      </p>
    </div>
    <purchase-transactions :transactions="purchase.Transactions" />
  </div>
</template>
<script>
import TransactionComponent from '~/components/transaction.vue'
export default {
  components: {
    'purchase-transactions': TransactionComponent
  },
  data () {
    return {
      fields: [
        'ID',
        'MeterID',
        'Previous Unit',
        'Recorded Unit',
        'Offset',
        'Date:Time',
        'Active ?'
      ],
      purchase: null,
      menu: false
    }
  },
  computed: {},
  created () {
    this.requestcreditpurchaseinformation()
  },
  methods: {
    async requestcreditpurchaseinformation () {
      await this.$api
        .$get(`/purchases/${this.$route.params.id}`)
        .then((response) => {
          this.purchase = response
        })
        .catch(() => {})
    }
  }
}
</script>
