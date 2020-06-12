<template>
  <div class="nav-container">
    <b-navbar
      type="is-custom-navy"
      :shadow="true"
      :is-active.sync="isActive"
      :fixed-top="true"
      class="nav-content"
    >
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img class="site-logo" src="logo.png" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <div class="nav-child-links">
          <b-navbar-item
            class="navigation-item "
            v-for="nav in navigationLink"
            @click="navClick(nav.sections)"
            :key="nav.id"
          >
            <div class="is-gbold is-capitalized">{{ nav.name }}</div>
          </b-navbar-item>
        </div>

        <div class="generate-link">
          <nuxt-link to="/generate">
            <b-button
              class=""
              size="is-small is-info"
              outlined
              type="is-custom-success"
            >
              <div class=" is-gbold is-capitalized">
                Generate Resume
              </div>
            </b-button>
          </nuxt-link>
        </div>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    fixedNav: {
      type: Boolean,
      default: () => false
    },
    navigationLink: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    navClick(event) {
      console.log("event", event);
      this.isActive = false;
      this.$emit("navClick", event);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  .navbar {
    // background-color: #3b4473;
    transition: transform 500ms ease, background 500ms ease,
      -webkit-transform 500ms ease;
    // top: 80px;
  }
  .nav-content {
    padding: 10px 17%;
    .generate-link {
      padding-top: 12px;
    }
    .nav-child-links {
      display: inherit;
    }

    a.navigation-item {
      color: white;
    }
    a.navigation-item:hover {
      // color: black;
      background-color: unset;
    }
  }
}
@media (max-width: 1199px) {
  .nav-container {
    .nav-content {
      padding: 0px 0px;
      text-align: center;
      .nav-child-links {
        display: flex;
      }
      a.navigation-item {
        color: black;
      }
      .site-logo {
        max-height: 25px;
        // font-size: 10px;
      }
    }
  }
}
</style>
