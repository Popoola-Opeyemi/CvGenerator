import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'


// codemirror language
import 'codemirror/mode/vue/vue.js'
// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js'
// more codemirror resource...

import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/json-lint'
import 'codemirror/addon/display/autorefresh'

import "codemirror/mode/javascript/javascript";
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/display/autorefresh'

Vue.use(VueCodemirror)