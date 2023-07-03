<template>
  <v-card v-if="purchase">
    <v-container class="d-flex justify-space-between mb-6">
      <v-card elevation="0" class="px-5 py-5" style="background-color: bisque;">
        <v-container fluid>
          <p />
          <div>
            <span class="font-weight-bold">
              Contol Number: {{ purchase.controlNumber }}</span>
          </div>
          <div>
            <span class="font-weight-bold">
              Amount: {{ purchase.amount }}</span>
          </div>

          <p>
            View Credit purchase informations
          </p>
        </v-container>
      </v-card>
      <v-card elevation="0" class="px-5 py-5" style="background-color: rgb(245, 238, 230);">
        <v-container fluid>
          <div>
            <span class="font-semibold text-primary text-xs"> Transaction Date: </span>
          </div>
          <div>
            <span>{{ purchase.transactionDate | dateformat }}</span>
          </div>
          <div>
            <span class="font-semibold text-primary text-sm"> Meter ID:</span>
          </div>
          <div>
            <span> {{ purchase.MeterId }}</span>
          </div>
          <div >
            <span class="font-semibold text-primary text-sm"> Payment Ref: </span>
          </div>
          <div>
            <span>{{ purchase.paymentReference }}</span>
          </div>
          <div >
            <span class="font-semibold text-primary text-sm"> Purchased Units: </span>
          </div>
          <div>
            <span>{{ purchase.purchasedUnits }}</span>
          </div>
          <div >
            <span class="font-semibold text-primary text-sm"> Off-Set Units: </span>
          </div>
          <div>
            <span>{{ purchase.offsetUnits }}</span>
          </div>
          <div >
            <span class="font-semibold text-primary text-sm"> Effective Units: </span>
          </div>
          <div>
            <span> {{ purchase.effectiveUnits }}</span>
          </div>
          <div >
            <span class="font-semibold text-primary text-sm"> Tariff: </span>
          </div>
          <div>
            <span>{{ purchase.tarrifId }}</span>
          </div>
          <div >
            <span class="font-semibold text-primary text-sm"> Recorded At: </span>
          </div>
          <div>
            <span> {{ purchase.createdAt | dateformat }}</span>
          </div>
        </v-container>
      </v-card>
    </v-container>
    <div class="p-5 border-b">
      <p class="text-sm font-bold">
        List of all credit purchase transactions
      </p>
    </div>
    <purchase-transactions :transactions="purchase.Transactions" />
  </v-card>
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
