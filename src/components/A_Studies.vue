<template>
  <MenuHome :M1="M1" />
  <div style="background-color: var(--color-bg)">
    <div class="container">
      <h1 class="tit">الدراسات</h1>
      <p class="lis">{{ texts[0] }}</p>
      <!-- scrol image  -->
      <div
        id="carouselExampleIndicators"
        class="carousel slide pb-lg-2"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../img/zone.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../img/zone.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../img/zone.png" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuHome from "../components/Menu.vue";
export default {
  name: "studies",
  data() {
    return {
      M1: "الدراسات",
      texts: [
        "سوريا هي موطن للعديد من الملاعب البارزة التي لعبت دورًا مهمًا في الثقافة الرياضية في البلاد. يعد ملعب العباسيين أحد أشهر الملاعب ، ويقع في العاصمة دمشق. يتسع لأكثر من 30 ألف متفرج ، وقد كان مكانًا للعديد من مباريات كرة القدم وغيرها من الأحداث الرياضية. ملعب آخر بارز هو ملعب حلب الدولي ، الذي يقع في مدينة حلب. استضاف هذا الملعب ، الذي تبلغ سعته حوالي 53000 شخص ، العديد من المباريات الدولية والمحلية ، مما يدل على شغف البلاد بكرة القدم. ملعب تشرين في اللاذقية هو مكان معروف آخر ، يستوعب ما يقرب من 15000 متفرج. هذه الملاعب ، من بين أمور أخرى ، بمثابة أماكن تجمع للجماهير لدعم فرقهم المفضلة وشهدت لحظات مثيرة في تاريخ كرة القدم السورية. على الرغم من التحديات التي تواجهها بسبب الصراع المستمر ، لا تزال هذه الملاعب رموزًا مهمة للوحدة والصمود في المشهد الرياضي السوري.",
      ],
    };
  },
  components: {
    MenuHome,
  },
};
</script>
<style>
.lis{
  color: var(--color-g1);
    text-align: end;
}

</style>
