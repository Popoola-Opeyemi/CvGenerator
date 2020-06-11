<template>
  <div class="editor-footer is-flex">
    <div class="left">
      <!-- <p>Powered by,</p> -->
      <div class="content is-flex">
        <div class="content-text has-text-white is-size-6">Powered By</div>
        <div class="content-logo">
          <nuxt-link to="/">
            <img class="logo-icon" src="logo.png" alt="" srcset="" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="right is-flex">
      <div class="right__items">
        <b-button
          size="is-small"
          class="right_items-download"
          type="is-info"
          outlined
          @click="download()"
          >Download Cv</b-button
        >
      </div>
      <div class="right__items">
        <b-button
          size="is-small"
          class="right_items-reset"
          type="is-info"
          outlined
          @click="reset()"
          >Reset</b-button
        >
      </div>
      <div class="right__items">
        <b-button
          size="is-small"
          class="right_items-reset"
          type="is-info"
          outlined
          @click="clear()"
          >Clear</b-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    clear() {
      this.$emit("clear");
    },
    download() {
      this.$emit("download");
    },
    reset() {
      this.$emit("reset");
    }
  }
});
</script>

<style scoped lang="scss">
.editor-footer {
  height: 2.5rem;
  border-top: 2px solid rgba(34, 40, 46, 0.8);
  background-color: rgb(34, 40, 46);
  justify-content: space-between;
  .left {
    .content {
      &-text {
        padding: 5px 20px 0px 10px;
        // padding-top: 5px;
        // padding-right: 20px;
      }
      &-logo {
        img.logo-icon {
          max-height: 30px;
        }
      }
    }
  }
  .right {
    flex-direction: row-reverse;
    &__items {
      padding: 5px 10px 0px 0px;
    }
  }
}

@media (max-width: 1199px) {
}
</style>
