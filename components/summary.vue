<template>
  <v-col class="pa-1" xs="6" sm="6" md="2" xl="2">
    <v-card dark class="mx-auto" color="primary" flat elevation="1" :to="item.to">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-black">
            {{ item.value }}
          </v-list-item-title>
          <v-list-item-subtitle class="font-weight-normal white--text my-1">
            {{ item.title }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon color="blue lighten-5" v-text="`mdi-${item.icon}`" />
          <v-list-item-action-text />
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      data: "234721931",
    };
  },
};
</script>
<style scoped>
.outlined {
  color: blue !important;
  border-color: blue !important;
}
</style>
