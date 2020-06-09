<template>
  <div class="moreInfo">
    <div class="moreInfo__sub-title"></div>
    <div class="moreInfo__title"></div>
    <div class="moreInfo__switcher">
      <b-tabs type="is-boxed">
        <b-tab-item>
          <template slot="header">
            <!-- <b-icon icon="information-outline"></b-icon> -->
            <span> Issues <b-tag rounded> 3 </b-tag> </span>
          </template>
          <div class="tab-content"></div>
        </b-tab-item>
        <b-tab-item>
          <template slot="header">
            <b-icon icon="source-pull"></b-icon>
            <span>
              Pull Requests <b-tag rounded> {{ 0 }} </b-tag>
            </span>
          </template>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.moreInfo {
  &__switcher {
  }
  background-color: white;
}
</style>
