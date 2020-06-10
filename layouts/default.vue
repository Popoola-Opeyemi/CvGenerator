<template>
  <div class="Homelayout">
    <nav-bar
      :navfixed-top="true"
      :nav-link="NavigationLink"
      @navClick="scroller($event)"
      v-scroll-to="`#${scroll}`"
    />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import NavBar from "~/components/NavBar.vue";

export default Vue.extend({
  data() {
    return {
      scroll: ""
    };
  },
  components: {
    NavBar
  },
  computed: {
    ...mapState(["NavigationLink", "Socials", "page_title", "navfixedTop"])
  },
  methods: {
    scroller(a: string) {
      this.scroll = a;
    }
  }
});
</script>

<style scoped></style>
