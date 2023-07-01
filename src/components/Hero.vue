<template>
  <div class="Hero text-white w-100 " :style="{ backgroundImage: `url(${bgImage})` }">
    <img src="{{  }}" alt="">
    <div
    style="color:var(--color-g2)"
      class="title position-absolute top-50 start-50 translate-middle text-center"
    >
      <h1 class="fw-bold">المنتخب السوري لكرة القدم</h1>
      <p class="fs-1">فريق واحد ... حلم واحد</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    bgImage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.Hero::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(255, 255, 255,0));
  z-index: 0;
}
.Hero {
  position: relative;
  height: 65vh;
  background-size: cover;
}
@media (max-width: 768px) {
  .title {
    width: 365px;
  }
}
@media (max-width: 768px) {
  .Hero {
    height: 40vh;
  }
}
</style>
