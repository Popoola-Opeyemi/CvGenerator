<template>
  <div class="nav-container">
    <b-navbar :shadow="true" :fixed-top="true" class="nav-content">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img class="site-logo" width="25%" src="logo.png" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item
          class="navigation-item"
          v-for="nav in navLink"
          @click="navClick(nav.sections)"
          :key="nav.id"
        >
          <div class="is-col-navy is-gbold is-capitalized">{{ nav.name }}</div>
        </b-navbar-item>

        <b-navbar-item href="#" class="is-hidden-desktop">
          <b-button class="is-size-6" type="is-custom-success">
            <div class=" is-gbold is-capitalized">
              Start Campaign
            </div>
          </b-button>
        </b-navbar-item>

        <b-navbar-item href="#" class="is-hidden-desktop">
          <b-button class="is-size-6" type="is-custom-success">
            <div class=" is-gbold is-capitalized">
              Donate now
            </div>
          </b-button>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Scroller } from "@/Vdata/index";

export default Vue.extend({
  props: {
    isActive: {
      type: Boolean,
      default: () => false
    },
    fixedNav: {
      type: Boolean,
      default: () => false
    },
    navLink: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    navClick(event: any) {
      this.$emit("navClick", event);
    }
  }
});
</script>

<style lang="scss" scoped>
.nav-container {
  .navbar {
    background-color: #dd2476;
    transition: transform 500ms ease, background 500ms ease,
      -webkit-transform 500ms ease;
    // top: 80px;
  }
  .nav-content {
    .site-logo {
      max-height: 2rem;
    }
    .navbar-menu {
      a.navbar-item {
        color: white;
        font-family: "QuickSandBold";
      }
    }
    padding: 15px 13.9%;
  }
}
@media (max-width: 1199px) {
  .nav-container {
    .nav-content {
      padding: 0px 0px;
      text-align: center;
      .site-logo {
        max-height: 20px;
        // font-size: 10px;
      }
    }
  }
}
</style>
