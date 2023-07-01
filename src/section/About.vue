<template>
  <div>
    <NavBar />
    <Hero :bg-image="'../../src/img/about.png'" />
    <div class="menu"><MenuHome :M1="M1" :M2="M2" :M3="M3"  /></div>
    <History/>
    <Awards/>
    <studies/>
    <fotter />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Hero from "../components/Hero.vue";
import MenuHome from "../components/Menu.vue";
import History from "../components/A_History.vue";
import Awards from "../components/ِA_Awards.vue";
import fotter from "../section/Fotter.vue";
import studies from "../components/A_Studies.vue";

export default {
  name: "about",
  data() {
    return{
        M1:"تاريخ المنتخب",
        M2:"الجوائز",
        M3:"الدراسات",
  };
},
  components: {
    NavBar,
    Hero,
    MenuHome,
    History,
    Awards,
    fotter,
    studies,
  }
};
</script>
