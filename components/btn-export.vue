<template>
  <a :href="`${$api.defaults.baseURL}/report/${report}`" target="_blank">
    <v-btn
      color="primary"
      dark
      class="mb-2 ml-2"
    >
      <v-icon left>
        mdi-tray-arrow-down
      </v-icon>
      Export CVS
    </v-btn>
  </a>
</template>
<script>
export default {
  props: {
    report: {
      type: String,
      default: null
    }
  }
}
</script>
