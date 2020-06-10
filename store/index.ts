import { GetterTree, ActionTree, MutationTree } from "vuex";

export const state = () => ({
  navfixedTop: false as boolean,
  page_title: "" as string,

  NavigationLink: [
    { name: "homepage", sections: "section-1", link: "/" },
    { name: "Features", sections: "section-2", link: "/backers" },
    { name: "Gallery", sections: "section-5", link: "/contact" },
    { name: "Contact", sections: "section-5", link: "/contact" }
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
      return req;
    } catch (error) {
      console.log(error);
    }
  }
};
