<template>
    <Menu :M1="M1" />
  <div style="background-color: var(--color-bg)">
    <div
      class="news pb-5 d-flex flex-wrap gap-5 bg-white justify-content-center"
    >
      <Cnew />
      <Cnew />
      <Cnew />
      <Cnew />
      <Cnew />
      <Cnew />
      <Cnew />
      <Cnew />
      <Cnew />
      <Cnew />
    </div>
  </div>
</template>

<script>
import Cnew from "../components/news.vue";
import Menu from "../components/Menu.vue";
export default {
  name: "Snews",
  data() {
    return{
        M1:"أحدث الأخبار",
  };
},
  components: {
    Cnew,
    Menu,
  }
};
</script>
<style>
.news {
  overflow-y: auto;
  max-height: 450px;
}
</style>
