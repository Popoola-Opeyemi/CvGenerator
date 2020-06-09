<template>
  <div class="container navigation-container">
    <b-navbar :fixed-top="navfixedTop" :class="navfixedTop ? 'fixed-top' : ''">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <!-- <img class="site-logo" src="" /> -->
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item
          tag="nuxt-link"
          class="navigation-item"
          v-for="nav in navLink"
          :key="nav.id"
          :to="nav.link"
        >
          <div class="link-container is-uppercase is-size-6-desktop	">
            {{ nav.name }}
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  props: {
    navfixedTop: {
      type: Boolean,
      default: () => false
    },
    navLink: {
      type: Array,
      default: () => []
    }
  }
  // props: {
  //   navfixedTop: {
  //     type: Boolean,
  //     required: true,
  //     default: () => false
  //   },
  //   navLink: {
  //     type: Array,
  //     required: true
  //   } as PropOptions<{}>
  // }
});
</script>

<style scoped></style>
