<template>
  <div class="Homelayout">
    <nav-bar
      class="is-hidden-mobile"
      :navfixed-top="true"
      :nav-link="NavigationLink"
      @navClick="scroller($event)"
      v-scroll-to="`#${scroll}`"
    />
    <nav-bar
      class="mobile-nav is-hidden-desktop"
      :navfixed-top="true"
      :nav-link="NavigationLink"
    />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import NavBar from "~/components/NavBar.vue";
import CustomFooter from "~/components/CustomFooter.vue";

export default Vue.extend({
  data() {
    return {
      scroll: ""
    };
  },
  components: {
    NavBar,
    CustomFooter
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
