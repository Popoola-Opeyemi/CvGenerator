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
                  >Generate Cv</b-button
                >
              </nuxt-link>
              <div class="leftContent-navigate_second is-col-green">
                <b-button
                  @click="watchVideo"
                  outlined
                  icon-left="mdi mdi-play"
                  type="is-danger "
                >
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
              src="homesection-2.png"
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
              Resume builder will help you while job hunting. We help you to
              create a professional looking cv, just by commiting little edit,
              so you can share your professional resume in pdf format quickly.
            </div>

            <!-- <div class="contain-left-need">All you need to do is</div> -->

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
                  Once editing is done look down you'll see button control to
                  generate a download for your cv, simple as abc.
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

    <!-- <custom-section
      :class="'homepage__section-5'"
      :hide-container="false"
      id="section-5"
    >
      <app-slider :Items="SliderList" class="app-slider" />
    </custom-section> -->

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
import MediaPlayer from "@/components/MediaPlayer.vue";

// import { getIdFromURL, getTimeFromURL } from "vue-youtube-embed";
import { mapState } from "vuex";

import {
  FeatureList,
  SliderList,
  TestimoniaList,
  mediaPlayer,
  moreItemsList
} from "~/Vdata/index.ts";

export default Vue.extend({
  head() {
    return {
      title: "Resume Generator",
      meta: [
        {
          property: "og:title",
          content: "Resume Generator"
        },
        {
          property: "og:description",
          content:
            "When its time to apply for that awsome tech job,we got you covered. With just few lines of json we get you a professional resume in less than 30 seconds"
        },
        {
          property: "og:url",
          content: "https://resumeb0t.herokuapp.com/"
        },
        {
          property: "og:image",
          content: `/static/logo.png`
        },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "title",
          name: "title",
          content: "Resume Generator"
        },
        {
          hid: "description",
          name: "description",
          content:
            "Your One Stop Resume Generator Buit with ❤️ by developers for you"
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Resume, Cv Generator, Json Cv Generator, Fast Cv Generate"
        }
      ]
    };
  },
  components: {
    customSection,
    ItemList,
    Testimonials,
    MoreInfo,
    CustomCarousel,
    AppSlider,
    ContactSection
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
  },
  methods: {
    watchVideo() {
      let url: string = "https://youtu.be/kfJhKooQcgc";
      let data: mediaPlayer;

      data = {
        component: MediaPlayer,
        //@ts-ignore
        url: this.getIdFromURL(url)
      };

      //@ts-ignore
      this.$buefy.modal.open({
        parent: this,
        component: data.component,
        props: { data: data, width: "700", height: "800" },
        hasModalCard: true
      });
    }
  }
});
</script>

<style scoped></style>
