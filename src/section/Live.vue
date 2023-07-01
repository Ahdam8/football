<template>
  <div>
    <NavBar />
    <Hero :bg-image="'../../src/img/live.png'" />
    <Menu :M1="M1" :M2="M2"/>
    <live/>
    <fotter/>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import Hero from "../components/Hero.vue";
import Menu from "../components/Menu.vue";
import live from "../components/LiveComp.vue";
import fotter from "../section/Fotter.vue";
export default {
  name: "live ",
  data() {
    return{
        M1:"معلومات المباراة",
        M2:"مشاهدة مباشرة"
    }
  },
  components: {
    NavBar,
    Hero,
    Menu,
    live,
    fotter,
  },
};
</script>
