<template>
  <div class="d-flex justify-content-between align-items-center bg-light p-2">
    <p>Copyright 2023 All Rights Reserved</p>
    <p>Designed by Focal X UI/UX Team</p>
    <div class="icon d-flex">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram "></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fotter",
};
</script>

<style scoped>
p{
    color:var(--color-g)
}
@media (max-width: 768px) {
  p{
    font-size: 10px;
}
}
i{
    font-size:20px ;
    margin-left: 23px;
}
@media (max-width: 768px) {
  i{
    font-size: 7px;
    margin-left: 4px;
}
}
@media (max-width: 768px) {
  .icon{
    position: relative;
    top: -6px;
}
}

</style>
