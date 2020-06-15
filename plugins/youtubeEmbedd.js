import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'

import { getIdFromURL, getTimeFromURL } from "vue-youtube-embed";

Vue.prototype.getIdFromURL = getIdFromURL
Vue.prototype.getTimeFromURL = getTimeFromURL

// if you want to install the component globally with a different name
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-embedd" })