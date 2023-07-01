<template>
  <div>
    <NavBar />
    <Hero :bg-image="'../../src/img/home.png'"/>
    <MenuHome :M1="M1" :M2="M2" :M3="M3" :M4="M4" :M5="M5" />
    <Calendar />
    <Preview />
    <TopPlayers />
    <news />
    <Supporters />
    <Fotter />
  </div>
</template>

<script>
import NavBar from "../section/NavBar.vue";
import Hero from "./Hero.vue";
import MenuHome from "../components/Menu.vue";
import C_Match from "./C_Match.vue";
import Calendar from "../section/Calendar.vue";
import Preview from "../section/Preview.vue";
import TopPlayers from "../section/TopPlayers.vue";
import news from "../section/news.vue"
import Fotter from "../section/Fotter.vue";
import Supporters from "../components/Supporters.vue";

export default {
  name: "Hello",
  data() {
    return {
        M1:"التقويم",
        M2:"أفضل اللاعبين",
        M3:"المعرض",
        M4:"الأخبار",
        M5:"الداعمين",
    };
  },
  components: {
    NavBar,
    Hero,
    MenuHome,
    C_Match,
    Calendar,
    Preview,
    TopPlayers,
    Fotter,
    news,
    Supporters,
  },
};
</script>

<style scoped></style>
