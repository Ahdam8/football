<template>
  <div style="background-color: var(--color-bg);">
    <h1 class="head"><Menu :M1="M" /></h1>
    <div class="overflow-auto pt-2 pb-5">
    <div class="Preview scrol">
      <div id="list-example" class="list-group">
        <PreviewMatch />
        <PreviewMatch />
        <PreviewMatch />
        <PreviewMatch />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import PreviewMatch from "../components/PreviewMatch.vue";
import Menu from "../components/Menu.vue";
export default {
  name: "Preview",
  data() {
    return {
      M: "المباريات السابقة",
    };
  },
  components: {
    PreviewMatch,
    Menu,
  },
};
</script>

<style scoped>
.scrol {
  height: 150px;
}
.head {
  font-size: 20px;
}
</style>
