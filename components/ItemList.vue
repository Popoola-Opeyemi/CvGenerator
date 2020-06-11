<template>
  <div class="item-box">
    <div class="columns is-variable is-4">
      <div class="column" v-for="List in featureList" :key="List.id">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="List.icon" />
            </p>
          </figure>
          <div class="media-content">
            <div class="media-content-title is-col-navy title is-5 Qlight">
              {{ List.title }}
            </div>
            <div class="media-content-content">{{ List.content }}</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    boxColor(val: any) {
      return {
        "background-color": `#${val.color}`
      };
    }
  },
  props: {
    featureList: {
      type: Array,
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
.item-box {
  .media-content {
    &-title {
    }
    &-content {
    }
  }
}
@media (max-width: 1199px) {
  .item-box {
    .media-content {
      &-title {
      }
      &-content {
      }
    }
  }
}
</style>
