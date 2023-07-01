<template>
  <div class="" style="background-color: var(--color-bg);">
    <h1 class="head"><Menu :M1="M" /></h1>
    <div class="wrapper container d-flex">
      <div class="item"><C_Player /></div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import C_Player from "../components/C_PLAYER.vue";
export default {
  name: "TopPlayers",
  data() {
    return {
      M: "أفضل اللاعبين",
    };
  },
  components: {
    Menu,
    C_Player,
  },
};
</script>

<style scoped>
.head {
  font-size: 20px;
}
.wrapper {
  overflow-x: auto;
}
.wrapper::-webkit-scrollbar {
  width: 0;
}
</style>
