<template>
  <div class="moreInfo">
    <div class="moreInfo__header has-text-centered is-col-navy">
      <div class="moreInfo__header-title">Xtra</div>
      <div
        class="moreInfo__header-subtitle title is-3-desktop is-size-4-mobile is-rubik-bold is-col-navy"
      >
        More From Us
      </div>
    </div>

    <div class="moreInfo__switcher">
      <b-tabs type="is-boxed" :multiline="true" header="hello" expanded>
        <b-tab-item v-for="(item, idx) in ItemList" :key="idx">
          <template slot="header">
            <span class="b-title">{{ item.title }}</span>
          </template>
          <div class="tab-content">
            <div class="columns" :class="idx % 2 == 0 ? '' : 'is-col-reverse'">
              <div class="column is-3">
                <img src="app/4.png" alt="" srcset="" />
              </div>
              <div class="column">
                <div
                  class="tab-content__title is-col-navy title is-size-2-desktop is-size-3-mobile is-Qlight"
                >
                  {{ item.title }}
                </div>
                <div class="tab-content__subtitle is-size-5 is-Qlight ">
                  {{ item.subtitle }}
                </div>
                <div class="tab-content__content">{{ item.content }}</div>
              </div>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    ItemList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      reversed: false
    };
  },
  methods: {
    reverse(idx: number) {
      return idx / 2;
    }
  }
});
</script>

<style lang="scss" scoped>
.moreInfo {
  padding: 0px 70px;
  &__header {
    margin-bottom: 50px;
  }
  &__title {
    padding-bottom: 30px;
  }

  &__switcher {
    background-color: white;

    .tab-content {
      &__title {
      }
      &__subtitle {
      }
      &__content {
        padding: 30px 0px;
        color: grey;
      }
    }
  }
}

@media (max-width: 1199px) {
  .moreInfo {
    padding: 30px 0px;
    &__header {
      margin-bottom: 20px;
    }
    &__title {
      padding-bottom: 20px;
    }
  }
}
</style>
