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

import { clone, tryParseJSON, Notification, Notify } from "@/utils";

import cv from "@/Vdata/cv.json";

import { mapState } from "vuex";

export default Vue.extend({
  layout: "generate",

  async asyncData({ store }) {
    let original: string;
    let cvData = JSON.stringify(cv, null, 2);
    return { cvData, original: cvData };
  },

  data() {
    return {
      isLoading: false as boolean,
      valid: true,
      cvData: "" as string,
      original: "" as string
    };
  },

  methods: {
    async download(event: any) {
      if (!this.valid) {
        Notify(
          this,
          "Your Document has unfixed Errors, Please fix before continuing",
          "is-info"
        );
        return;
      }

      this.isLoading = true;
      let param = {
        url: "generate",
        data: this.cvData
      };
      let req = await this.$store.dispatch("Post", param);

      if (req.status == "done") {
        this.isLoading = false;
        // generate download
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
    },

    input(event: any) {
      //@ts-ignore
      const isValid = tryParseJSON(this.$jsonlint, event);
      this.valid = isValid.status;
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
    //@ts-ignore
    window.jsonlint = this.$jsonlint;
  }
});
</script>

<style scoped></style>
