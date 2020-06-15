<template>
  <div>
    <code-mirror v-model="cvData" @input="input($event)" />
    <editor-footer @download="download()" @reset="reset()" @clear="clear()" />
    <b-loading
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="true"
    ></b-loading>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CodeMirror from "@/components/CodeMirror.vue";
import EditorFooter from "@/components/EditorFooter.vue";

import { parseTypes } from "@/Vdata";

import {
  clone,
  tryParseJSON,
  Notification,
  Notify,
  isEmpty,
  saveToLocalStorage,
  getLocalStorage
} from "@/utils";

import cv from "@/Vdata/cv.json";

import { mapState } from "vuex";

export default Vue.extend({
  layout: "generate",

  async asyncData({ store }) {
    let original: string;
    let cvData = JSON.stringify(cv, null, 2);
    return { cvData, original: cvData };
  },

  head() {
    return {
      title: "Resume Editor",
      meta: [
        {
          property: "og:title",
          content: "Resume Generator Editor"
        },
        {
          property: "og:description",
          content: "Resume Editor made with love for you"
        },
        {
          property: "og:url",
          content: "https://resumeb0t.herokuapp.com/"
        },
        {
          property: "og:image",
          content: ``
        },

        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "title",
          name: "title",
          content: "Resume Editor"
        },
        {
          hid: "description",
          name: "description",
          content: "Resume Editor for your resume "
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Resume, Cv Generator, Json Cv Generator, Fast Cv Generate"
        }
      ]
    };
  },

  data() {
    return {
      isLoading: false as boolean,
      downloadLink: "" as string,
      valid: true,
      cvData: "" as string,
      original: "" as string
    };
  },

  methods: {
    async download(event: any) {
      //@ts-ignore
      let isValid: parseTypes = tryParseJSON(this.$jsonlint, this.cvData);

      if (!isValid.status) {
        Notify(
          this,
          "Your Document has unfixed Errors, Please fix them before continuing",
          "is-info"
        );
        return;
      }
      let empty = isEmpty(isValid.data as parseTypes);

      if (empty) {
        Notify(
          this,
          "Your Document is Empty, Please add some content",
          "is-info"
        );
        return;
      }

      this.isLoading = true;

      let param = {
        url: "generate",
        data: isValid.data
      };

      let req = await this.$store.dispatch("Post", param);

      if (req.status == "done") {
        this.isLoading = false;
        saveToLocalStorage("cvData", isValid.data as parseTypes);
        Notification(this, "Cv Generated", "is-success", "is-top-right");
        window.document.location.href = req.data.filename;
      }

      if (req.status == "error") {
        this.isLoading = false;
        Notify(
          this,
          "Woops Something went wrong. Please try again",
          "is-danger",
          "is-top-right"
        );
      }
      isValid = {};
    },

    input(event: any) {
      //@ts-ignore
      const isValid = tryParseJSON(this.$jsonlint, event);
      this.valid = isValid.status as boolean;
    },

    reset(event: any) {
      const value = JSON.stringify(cv, null, 4);
      this.cvData = this.original;
    },
    clear(event: any) {
      this.cvData = `{}`;
    }
  },

  components: {
    CodeMirror,
    EditorFooter
  },
  mounted() {
    let storedCv = getLocalStorage("cvData");
    if (!storedCv == false) {
      this.cvData = JSON.stringify(storedCv, null, 2);
    }
  }
});
</script>

<style scoped></style>
