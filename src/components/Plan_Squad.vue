<template>
  <div class="plan d-flex">
      <div class="num-plan">
         4-3-3
      </div>
    <div class="name-plan ">
      management
      <span class="d-block fw-bold"> HECTOR CUPER </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "paln",
};
</script>

<style>
.plan{
    position: relative;
    left: 36%;
    top: 20px;
}
@media (max-width: 768px) {
  .plan{
    position: relative;
    left: 20%;
    top: 20px;
}
}
.name-plan {
    margin-left: 20px;
}

.num-plan{
    width: 113px;
    height: 50px;
    font-size: 31px;
    font-weight: bold;
    background-color: var(--color-s);
    text-align: center;
    border-radius: 11PX;
}

</style>
