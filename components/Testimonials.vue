<template>
  <div class="testimonials">
    <div class="columns is-variable">
      <div class="column is-3">
        <div class="testimonials__left">
          <div
            class="testimonials__left-subtitle is-rubik-bold is-size-6-desktop"
          >
            Testimonials
          </div>
          <div class="testimonials__left-title ">
            <span
              class="first is-size-2-desktop is-size-3-mobile is-permMarker is-col-blue"
            >
              From Our
            </span>
            <br />
            <span class="second is-Qbold is-size-4 is-size-5-mobile "
              >Amazing Community</span
            >
          </div>
        </div>
      </div>
      <div class="column">
        <div class="testimonials__right">
          <div
            class="testimonials__right-icon is-Qbold is-size-2-desktop is-size-2-mobile"
          >
            “
          </div>
          <b-carousel
            class="testimonials__right-carousel"
            :interval="5000"
            :pause-hover="false"
            :indicator="false"
            :arrow="false"
          >
            <b-carousel-item v-for="(item, idx) in Testimonials" :key="idx">
              <div class="__content is-size-5">
                <p>
                  {{ item.content }}
                </p>
              </div>
              <div class="__author">
                <span class="__name is-gbold">{{ item.name }}</span>
                <span class="__location is-Qlight">
                  , {{ item.location }}
                </span>
              </div>
            </b-carousel-item>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Testimonials: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.testimonials {
  filter: blur();

  padding: 100px 0px;
  background: rgba(0, 0, 0, 0.72);

  &__left {
    padding: 20px 0px 0px 30px;
    &-title {
      padding-top: 20px;
    }
  }

  &__right {
    // padding-top: 10px;
    padding: 10px 0px 0px 10px;

    &-carousel {
      // padding-top: 28px;
      .__content {
        line-height: 35px;
      }
      .__author::before {
        content: "";
        display: inline-block;
        height: 2px;
        width: 20px;
        background-color: #4d8dff;
        vertical-align: middle;
        margin-right: 20px;
      }

      .__author {
        padding-top: 20px;
      }
    }
  }
}
@media (max-width: 1199px) {
  .testimonials {
    filter: blur();

    padding: 30px 0px;
    background: rgba(0, 0, 0, 0.72);

    &__left {
      padding: 10px 0px 0px 20px;
      &-subtitle {
        font-size: 10px;
      }
      &-title {
        padding-top: 10px;
      }
    }

    &__right {
      padding: 0px 20px;
      &-carousel {
        .__content {
          line-height: 35px;
        }
        .__author::before {
          content: "";
          display: inline-block;
          height: 2px;
          width: 20px;
          background-color: #4d8dff;
          vertical-align: middle;
          margin-right: 20px;
        }

        .__author {
          padding-top: 20px;
        }
      }
    }
  }
}
</style>
