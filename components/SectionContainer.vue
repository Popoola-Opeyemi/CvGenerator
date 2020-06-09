<template>
  <section class="custom-section" :class="className">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "customSection",
  props: {
    className: {
      type: String,
      default: () => ""
    }
  }
});
</script>

<style lang="scss" scoped>
.section.custom-section {
  position: relative;
}
</style>
