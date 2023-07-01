<template>
  <div style="background-color: var(--color-bg);padding-top: 23px;">
    <div class="wrap container">
      <div class="d-flex">
        <card />
      </div>
    </div>
  </div>
</template>

<script>
import card from "../components/C_Match.vue";
export default {
  name: "Calendar",
  components: {
    card,
  },
};
</script>

<style>
span .icon {
  background-color: var(--color-s);
}
.wrap{
  overflow-x: auto;
}
.wrap::-webkit-scrollbar {
  width: 0;
}
</style>
