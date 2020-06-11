<template>
  <div class="homepage" id="section-1">
    <custom-section :class="'homepage__section'">
      <div class="columns">
        <div class="column is-5">
          <div class="leftContent">
            <div
              class="leftContent-title title is-col-navy is-size-2-desktop is-size-4-mobile"
            >
              FavResume Generator
            </div>

            <div class="leftContent-content">
              When its time to apply for that awsome tech job,we got you
              covered. With just few lines of json we get you a professional
              resume in less than 30 seconds
            </div>
            <div class="leftContent-navigate is-flex">
              <nuxt-link to="/generate">
                <b-button
                  outlined
                  type="leftContent-navigate_first is-custom-navy"
                  >Get Started</b-button
                >
              </nuxt-link>
              <div class="leftContent-navigate_second is-col-green">
                <b-button outlined icon-left="mdi mdi-play" type="is-info ">
                  Watch the Video
                </b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="right-content has-text-centered">
            <img
              class="image-container"
              src="oval_image.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </custom-section>

    <custom-section :class="'homepage__section-2'" id="section-2">
      <div class="columns is-centered">
        <div
          class="section-title is-col-navy title is-size-3-desktop is-size-4-mobile is-Qmedium"
        >
          Features you'll love
        </div>
      </div>
      <div class="feature-list">
        <item-list :feature-list="featureList"> </item-list>
      </div>
    </custom-section>

    <custom-section :class="'homepage__section-3'" id="section-3">
      <div class="columns">
        <div class="column">
          <div class="contain-left">
            <div
              class="contain-left-subtitle is-Qmedium is-size-6-desktop is-size-7-mobile"
            >
              How it works
            </div>
            <div
              class="contain-left-title  is-col-navy title is-size-3-desktop is-size-4-mobile"
            >
              Instant Cv, Anytime, Anywhere
            </div>
            <div class="contain-left-content">
              Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin
              Atlantic saury swordfish southern sandfish Rudderfish long-finned
              flyingfish. Fangtooth yellowtail banded killifish seamoth
            </div>

            <div class="contain-left-container">
              <div class="textContent">
                <div class="textContent-title is-col-navy  is-size-6 is-Qbold">
                  Edit Json
                </div>
                <div class="textContent-content is-rubik-light">
                  The Editor is configured with a dummy Json data to guide you
                  to fill the fields
                </div>
              </div>

              <div class="textContent">
                <div class="textContent-title is-col-navy  is-size-6 is-Qbold">
                  Generate and Download
                </div>
                <div class="textContent-content is-rubik-light ">
                  Once Editing is done Hover on the plus sign on the buttom to
                  generate your cv
                </div>
              </div>
              <div class="textContent">
                <div class="textContent-title is-col-navy  is-size-6 is-Qbold">
                  Have a wonderful career
                </div>
                <div class="textContent-content is-rubik-light">
                  Wishing you a wonderful career endaveour to rate us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="contain-right">
            <img src="user-image.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </custom-section>

    <custom-section :class="'homepage__section-4'" id="section-4">
      <testimonials :Testimonials="Testimonials" />
    </custom-section>

    <custom-section
      :class="'homepage__section-5'"
      :hide-container="false"
      id="section-5"
    >
      <!-- <custom-carousel /> -->
      <app-slider :Items="SliderList" class="app-slider" />
    </custom-section>

    <custom-section :class="'homepage__section-6'" id="section-6">
      <more-info :item-list="moreItemsList" />
    </custom-section>

    <custom-section :class="'homepage__section-7'" id="section-7">
      <contact-section />
    </custom-section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import customSection from "~/components/SectionContainer.vue";
import ItemList from "~/components/ItemList.vue";
import Testimonials from "~/components/Testimonials.vue";
import CustomCarousel from "~/components/AppCarousel.vue";
import MoreInfo from "~/components/More.vue";
import AppSlider from "~/components/CarouselList.vue";
import ContactSection from "~/components/ContactSection.vue";
import NavBar from "~/components/NavBar.vue";
import { mapState } from "vuex";

import {
  FeatureList,
  SliderList,
  TestimoniaList,
  moreItemsList
} from "~/Vdata/index.ts";

export default Vue.extend({
  components: {
    customSection,
    ItemList,
    Testimonials,
    MoreInfo,
    CustomCarousel,
    AppSlider,
    ContactSection,
    NavBar
  },
  data() {
    return {
      Testimonials: TestimoniaList,
      featureList: FeatureList,
      SliderList: SliderList,
      moreItemsList: moreItemsList
    };
  },
  computed: {
    ...mapState(["NavigationLink", "Socials", "page_title", "navfixedTop"])
  }
});
</script>

<style scoped></style>
