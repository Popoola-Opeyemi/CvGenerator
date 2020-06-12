<template>
  <div class="Homelayout">
    <Navigation
      @navClick="scroller($event)"
      v-scroll-to="`#${scroll}`"
      :navigation-link="NavigationLink"
    />

    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Navigation from "~/components/Navigation.vue";
import CustomFooter from "~/components/CustomFooter.vue";

export default Vue.extend({
  data() {
    return {
      scroll: ""
    };
  },
  components: {
    CustomFooter,
    Navigation
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
