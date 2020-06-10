<template>
  <div>
    <code-mirror />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CodeMirror from "@/components/CodeMirror.vue";
export default Vue.extend({
  layout: "generate",
  components: {
    CodeMirror
  }
});
</script>

<style scoped></style>
