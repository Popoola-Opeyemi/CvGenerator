<template>
  <div class="carousel">
    <b-carousel-list
      :data="Items"
      :repeat="repeat"
      v-model="values"
      :has-grayscale="true"
      :items-to-list="itemList"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      values: 1,
      itemList: 1,
      repeat: true,
      indicatorStyle: "is-lines"
    };
  },
  props: {
    Items: {
      type: Array,
      default: () => []
    }
  }
});
</script>

<style scoped></style>
