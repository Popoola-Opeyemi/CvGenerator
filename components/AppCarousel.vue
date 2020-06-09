<template>
  <div>
    <cover-carousel :coverList="coverList" :coverWidth="260" :index="count" />
  </div>
</template>

<script>
import Vue from "vue";

// @ts-ignore

export default {
  mounted() {
    if (process.client) {
      window.setInterval(() => this.next(), 10000);
    }
  },
  methods: {
    prev() {
      this.count -= 1;
    },

    next() {
      if (this.count < 3) {
        this.count += 1;
      } else {
        this.count = 0;
      }
    }
  },
  data() {
    return {
      count: 0,
      coverList: [
        {
          cover: "../app/1.png",
          title: "React"
        },
        {
          cover: "../app/1.png",
          title: "Yarn"
        },
        {
          cover: "../app/1.png",
          title: "Node"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
