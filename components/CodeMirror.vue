<template>
  <div class="vue-codemirror">
    <client-only placeholder="Loading Editor...">
      <div class="editor-controls">
        <div class="editor-controls-select">
          <b-select
            v-model="theme"
            @input="themeslect($event)"
            class="theme-selector is-warning"
            placeholder="Select a name"
            expanded
          >
            <option
              v-for="option in ListItem"
              :value="option.value"
              :key="option.id"
            >
              <span class="theme is-Qbold">Theme:</span>
              <span class="theme-value">
                {{ option.name }}
              </span>
            </option>
          </b-select>
        </div>
      </div>
      <codemirror
        ref="cmEditor"
        :value="value"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/paraiso-light.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/theme/mbo.css";
import "codemirror/theme/paraiso-dark.css";

import { ThemeList, cmOptions } from "@/Vdata/index";
import Vue from "vue";

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: () => ""
    }
  },

  data() {
    return {
      width: 0 as number,
      height: 0 as number,
      theme: "dracula",
      ListItem: ThemeList,
      cmOptions: cmOptions
    };
  },
  methods: {
    onCmReady(cm: any) {
      this.cmOptions.theme = this.theme;

      let height = this.height;
      let width = this.width;

      if (width < 1000) {
        cm.setSize("auto", "95vh");
      } else {
        cm.setSize("auto", "96vh");
      }
    },
    onCmFocus(cm: any) {
      // console.log("the editor is focused!", cm);
    },
    onCmCodeChange(newCode: string) {
      this.$emit("input", newCode);
    },
    themeslect(event: any) {
      this.cmOptions.theme = event;
    }
  },
  mounted() {
    //@ts-ignore
    this.width = this.$vssWidth;
    //@ts-ignore
    this.height = this.$vssHeight;
    //@ts-ignore
    window.jsonlint = this.$jsonlint;

    let value = `${this.width},${this.height}`;

    // window.alert(value);
  }
});
</script>

<style lang="scss" scoped>
.vue-codemirror {
  position: relative;
  .editor-controls {
    position: absolute;
    z-index: 4;
    display: flex;
    left: 88%;
    top: 10px;
    &-select {
      // border-color: #209cee;
      background-color: transparent;
      height: 400px;
      // cursor: pointer;
      overflow: hidden;
      position: relative;
      z-index: 2;
      select {
        background-color: transparent;
      }
    }
  }
}
.CodeMirror-scroll {
  overflow: scroll !important;
  margin-bottom: 0;
  margin-right: 0;
  padding-bottom: 0;
  height: 100%;
  outline: none;
  position: relative;
  border: 1px solid #dddddd;
}
@media (max-width: 1199px) {
  .vue-codemirror {
    position: relative;
    .editor-controls {
      position: absolute;
      z-index: 4;
      display: flex;
      left: 50%;
      top: 10px;
    }
  }

  .theme-selector {
    > span.select {
      background-color: transparent;
    }
  }
}
</style>
