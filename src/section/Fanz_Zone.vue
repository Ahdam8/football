<template>
  <div>
    <NavBar />
    <Hero :bg-image="'../../src/img/zone.png'" />
    <About />
    <cardZone />
    <fotter />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/FanzZone_About.vue";
import cardZone from "../components/Card_FanzZone.vue";
import fotter from "../section/Fotter.vue";
export default {
  name: "fanz_zone",
  components: {
    NavBar,
    Hero,
    About,
    cardZone,
    fotter,
  },
};
</script>
