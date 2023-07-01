<template>
  <div class="pb-5" style="background-color: var(--color-bg);">
    <Menu :M1="M1" />
    <div class="p-5 sup-pic d-flex mx-auto justify-content-evenly align-items-center" >
      <img src="../img/support4.jfif" alt="" />
      <img src="../img/support3.png" alt="" />
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
  name: "supporters",
  data() {
    return {
      M1: "الداعمين",
    };
  },
  components: {
    Menu,
  },
};
</script>
<style>
.sup-pic img {
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 10px;
}

</style>
