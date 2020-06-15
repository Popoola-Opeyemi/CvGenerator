import { GetterTree, ActionTree, MutationTree } from "vuex";
import {
  getLocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage
} from "@/utils/";
import cv from "@/Vdata/cv.json";

export const state = () => ({
  navfixedTop: false as boolean,
  page_title: "" as string,
  jsonData: {} as object,
  NavigationLink: [
    { name: "homepage", sections: "section-1" },
    { name: "Features", sections: "section-2" },
    { name: "Testimonials", sections: "section-4" },
    { name: "Contact", sections: "section-7" }
  ] as Array<{}>,

  Socials: [
    { name: "facebook", url: "", icon: "mdi-facebook" },
    { name: "twitter", url: "", icon: "mdi-twitter" },
    { name: "instagram", url: "", icon: "mdi-instagram" }
  ] as Array<{}>
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  saveNavfixedTop(state: RootState, data: boolean) {
    state.navfixedTop = data;
  },

  savePagetitle(state: RootState, data: string) {
    state.page_title = data;
  },
  savejsonData(state: RootState, data: object) {
    state.jsonData = data;
  }
};

export const actions: ActionTree<RootState, RootState> = {
  async Get({ commit }, param) {
    try {
      let req = await this.$axios.$get(`api/${param.url}`);
      return req;
    } catch (error) {
      console.log(error);
    }
  },

  async Post({ commit }, param) {
    try {
      let req = await this.$axios.$post(`api/${param.url}`, param.data);
      if (!req.errors) {
        return { status: "done", data: req.data };
      }
    } catch (error) {
      console.log(error);
      return { status: "error", data: null };
    }
  }
};
