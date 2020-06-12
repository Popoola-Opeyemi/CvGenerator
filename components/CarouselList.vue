<template>
  <div class="carousel">
    <div class="carousel__title is-size-7 has-text-centered is-col-navy">
      GALLERY
    </div>
    <div
      class="carousel__subtitle has-text-centered title is-size-4-mobile is-size-3-desktop is-rubik-bold is-col-navy"
    >
      App Screenshots
    </div>

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
