<template>
  <div>
    <client-only placeholder="Codemirror Loading...">
      <codemirror
        ref="cmEditor"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
      />
    </client-only>
  </div>
</template>

<script>
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/dracula.css";
import cv from "@/Vdata/cv.json";
export default {
  data() {
    return {
      code: cv,
      cmOptions: {
        tabSize: 4,
        mode: {
          name: "javascript",
          mime: "application/json",
          json: true,
          statementIndent: 2
        },
        theme: "dracula",
        lineNumbers: true,
        line: true
        // more CodeMirror options...
      }
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focused!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  }
};
</script>
