import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./Store/index";
import router from "./Router/index";


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(vuetify).use(store).use(router).mount("#app");






















// vutify
// import "vuetify/styles";
// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// const vuetify = createVuetify({
//   components,
//   directives,
// });
