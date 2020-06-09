<template>
  <div class="Homelayout">
    <nav-bar :nav-link="NavigationLink" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import NavBar from "~/components/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar
  },
  computed: {
    ...mapState(["NavigationLink", "Socials", "page_title", "navfixedTop"])
  }
});
</script>

<style scoped></style>
