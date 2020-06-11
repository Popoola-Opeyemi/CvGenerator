<template>
  <div class="nav-container">
    <b-navbar :shadow="true" :fixed-top="true" class="nav-content">
      <template slot="brand">
        <b-navbar-item tag="router-link" to="/">
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
          <div class="is-gbold is-capitalized">{{ nav.name }}</div>
        </b-navbar-item>

        <nuxt-link to="/generate" class="generate-link">
          <b-button
            class="is-hidden-mobile"
            size="is-small is-info"
            outlined
            type="is-custom-success"
          >
            <div class=" is-gbold is-capitalized">
              Generate Resume
            </div>
          </b-button>
        </nuxt-link>
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
    background-color: #22282e;
    transition: transform 500ms ease, background 500ms ease,
      -webkit-transform 500ms ease;
    // top: 80px;
  }
  .nav-content {
    .generate-link {
      padding-top: 13px;
    }
    .site-logo {
      max-height: 2rem;
    }
    .navbar-menu {
      a.navbar-item {
        color: white;
        // font-family: "QuickSandBold";
      }
      a.navbar-item:hover {
        color: white;
        background-color: #22282e;
      }
    }
    padding: 10px 13.9%;
  }
}
@media (max-width: 1199px) {
  .nav-container {
    .nav-content {
      a.navbar-burger {
        color: white;
      }
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
