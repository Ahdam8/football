import { createRouter, createWebHistory } from "vue-router";
import hello from "../components/HelloWorld.vue"
import SignIn from "../section/Login.vue"
import squad from "../section/TheSquad.vue"
import live from "../section/Live.vue"
import about from "../section/About.vue"
import Fanz from "../section/Fanz_Zone.vue"
let history = createWebHistory();

let routes = [
  {
    path: "/",
    name: "home",
    component: hello,
  },
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/squad",
    name: "squad",
    component: squad,
  },
  {
    path: "/live",
    name: "live",
    component: live,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/fanz",
    name: "fanz",
    component: Fanz,
  },
];

export default createRouter({ history, routes });






