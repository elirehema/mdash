<template>
  <v-card v-if="purchase">
    <v-container fluid class="d-flex justify-space-between mb-6">
      <v-card elevation="0" class="px-5 py-5" color="#fcf4eb">
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
      <v-card min-width="30%" elevation="0" class="px-5 py-2" color="#fcf4eb">
        <v-container fluid>
          <div class="d-flex justify-space-between">
            <span class="text-caption"> Meter ID:</span>
            <span class="text-caption"> {{ purchase.meterId }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span class="font-semibold text-primary text-caption"> Purchased Units: </span>

            <span class="text-caption">{{ purchase.purchasedUnits }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span class="font-semibold text-primary text-caption"> Effective Units: </span>

            <span class="text-caption"> {{ purchase.effectiveUnits }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span class="font-semibold text-primary text-caption"> Off-Set Units: </span>

            <span class="text-caption">{{ purchase.offsetUnits }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span class="font-semibold text-primary text-caption"> Tariff: </span>

            <span class="text-caption">{{ purchase.tarrifId }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span class="font-semibold text-primary text-caption"> Payment Ref: </span>
            <span class="text-caption">{{ purchase.paymentReference }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span class=" text-caption"> Transaction Date: </span>
            <span class="text-caption">{{ purchase.transactionDate | dateformat }}</span>
          </div>
          <div class="d-flex justify-space-between">
            <span class="font-semibold text-primary text-caption"> Recorded At: </span>
            <span class="text-caption"> {{ purchase.createdAt | dateformat }}</span>
          </div>
        </v-container>
      </v-card>
    </v-container>
    <div class="pl-5 border-b">
      <p class="font-weight-bold">
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
