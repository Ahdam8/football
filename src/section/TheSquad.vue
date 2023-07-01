<template>
  <div class="">
    <NavBar />
    <!-- <div class="ff" style="background-image: url('../../src/img/squad1.png');"></div> -->
    <Hero :bg-image="'../../src/img/squad1.png'"/>
    <MenuHome :M1="M1" />
    <plan />
    <P_squad />
    <Articl />
    <fotter />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Hero from "../components/Hero.vue";
import MenuHome from "../components/Menu.vue";
import plan from "../components/Plan_Squad.vue"
import P_squad from "../components/P_squad.vue";
import Articl from "../components/Articl_squad.vue";
import fotter from "../section/Fotter.vue";
export default {
  name: "TheSquad",
  data() {
    return{
        M1:"اللاعبين",
  };
},
  components: {
    NavBar,
    Hero,
    MenuHome,
    plan,
    P_squad,
    Articl,
    fotter,
  },
};
</script>

<style  >
.ff{
  min-width: 100%;
  height: 600px;
}
</style>
