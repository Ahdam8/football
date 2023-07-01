<template>
  <div
    class="articl d-lg-flex d-md-flex d-sm-block gap-3 container shadow rounded mx-auto position-relative align-items-center"
  >
    <div class="col col-lg-8 text-end">
      سوريا هي موطن للعديد من الملاعب البارزة التي لعبت دورًا مهمًا في الثقافة
      الرياضية في البلاد. يعد ملعب العباسيين أحد أشهر الملاعب ، ويقع في العاصمة
      دمشق. يتسع لأكثر من 30 ألف متفرج ، وقد كان مكانًا للعديد من مباريات كرة
      القدم وغيرها من الأحداث الرياضية. ملعب آخر بارز هو ملعب حلب الدولي ، الذي
      يقع في مدينة حلب. استضاف هذا الملعب ، الذي تبلغ سعته حوالي 53000 شخص ،
      العديد من المباريات الدولية والمحلية ، مما يدل على شغف البلاد بكرة القدم.
      ملعب تشرين في اللاذقية هو مكان معروف آخر ، يستوعب ما يقرب من 15000 متفرج.
      هذه الملاعب ، من بين أمور أخرى ، بمثابة أماكن تجمع للجماهير لدعم فرقهم
      المفضلة وشهدت لحظات مثيرة في تاريخ كرة القدم السورية. على الرغم من
      التحديات التي تواجهها بسبب الصراع المستمر ، لا تزال هذه الملاعب رموزًا
      مهمة للوحدة والصمود في المشهد الرياضي السوري.
    </div>
    <div class="col col-lg-4">
      <img src="../img/squad.png" class="im" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Articl",
  
};
</script>
<style>
.articl {
  margin-top: 100px;
  border: 1px solid;
  padding: 20px;
  margin-bottom: 60px; 
  border:2px solid var(--color-sd);
}
@media (max-width: 768px) {
  .articl {
    margin-top: 100px;
    padding: 20px;
    margin-bottom: 23px auto;
    width: 340px;
}
}
.im {
  max-width: 100%;
  height: 350px;
  margin: 1px 37px;
}

@media (max-width: 768px) {
  .im {
    margin: 10px;
  }
}
</style>
