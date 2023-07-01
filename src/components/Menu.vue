<template>
  <div>
    <div class="Menu ">
      <ul
        class="position-relative fw-bold shadow mb-0 p-4 bg-light d-flex flex-row-reverse  justify-content-evenly"
      >
      <li><a class="link active fw-bold" href="#">{{ M1 }}</a></li>
      <li><a class="link" href="#">{{ M2 }}</a></li>
      <li><a class="link" href="#">{{ M3 }}</a></li>
      <li><a class="link" href="#">{{ M4 }}</a></li>
      <li><a class="link" href="#">{{ M5 }}</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props:["M1","M2","M3","M4","M5"]
};
</script>

<style scoped>
ul li a.active{
  color: var(--color-s);
}
ul li a{
  color:var(--color-g1);
} 
li a:hover {
    color: var(--color-s);
}
@media (max-width: 768px) {
  .Menu a{
    font-size: 10px;
  }
}


</style>