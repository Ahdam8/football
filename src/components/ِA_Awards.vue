<template>
  <div class="text-center mx-auto"><MenuHome :M1="M1" /></div>
  <div class="aword" >
    <div class="container">
      <h1 class="tit">
        حقق المنتخب السوري لكرة القدم العديد من الجوائز والتقديرات البارزة عبر
        تاريخه. فيما يلي بعض الجوائز والإنجازات البارزة
      </h1>
      <ul class="text-end">
        <li class="lis" v-for="(text, index) in texts" :key="index">
          {{ text }}
        </li>
      </ul>
      <!-- start cards  -->
      <div class="cards2 d-flex gap-lg-4 gap-2">
        <div class="card2 shadow" style="width: 18rem">
          <img src="../img/aword2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text2" style="background-color: transparent">
              كأس آسيا
            </p>
          </div>
        </div>
        <div class="card2 shadow" style="width: 18rem">
          <img src="../img/aword3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text2">بطولة اتحاد غرب آسيا لكرة القدم</p>
          </div>
        </div>
        <div class="card2 shadow" style="width: 18rem">
          <img src="../img/aword4.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text2">تصفيات كأس العالم</p>
          </div>
        </div>
        <div class="card2 shadow" style="width: 18rem">
          <img src="../img/aword2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text2">كأس آسيا</p>
          </div>
        </div>
        <div class="card2 shadow" style="width: 18rem">
          <img src="../img/aword3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text2">بطولة اتحاد غرب آسيا لكرة القدم</p>
          </div>
        </div>
        <div class="card2 shadow" style="width: 18rem">
          <img src="../img/aword4.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text2">تصفيات كأس العالم</p>
          </div>
        </div>
      </div>
      <p class="last">
        هذه الجوائز والإنجازات لا تجلب الاعتراف للمنتخب السوري لكرة القدم فحسب ،
        بل تشكل أيضًا مصدر فخر وإلهام للاعبين والمدربين والمشجعين. إنها تعكس
        موهبة الفريق وعمله الجاد وتفانيه في الرياضة ، وهي شهادة على مساهمة
        الفريق في كرة القدم السورية.
      </p>
    </div>
  </div>
</template>

<script>
import MenuHome from "../components/Menu.vue";

export default {
  name: "Awards",
  data() {
    return {
      M1: "الجوائز",
      texts: [
        "كأس آسيا: في عام 1984 ، وصل المنتخب السوري إلى نهائيات كأس آسيا ، حيث احتل المركز الثاني في البطولة. لقد كان إنجازًا كبيرًا وأظهر القدرة التنافسية للفريق على المستوى القاري.",
        "بطولة اتحاد غرب آسيا لكرة القدم: في عام 2012 ، فازت سوريا ببطولة اتحاد غرب آسيا لكرة القدم ، والمعروفة أيضًا باسم بطولة اتحاد غرب آسيا لكرة القدم. كانت لحظة فخر للفريق وشهادة على مهارتهم وتصميمهم.",
        "تصفيات كأس العالم FIFA: تأهل المنتخب السوري إلى تصفيات كأس العالم FIFA في مناسبات متعددة. في حين أنهم لم يتأهلوا بعد للبطولة نفسها ، فإن وجودهم في التصفيات يسلط الضوء على قدرتهم التنافسية وطموحهم على الساحة العالمية.",
        "كأس العرب: حقق المنتخب السوري نجاحاً في بطولة كأس الأمم العربية ، وهي بطولة منتخبات عربية. لقد وصلوا إلى نهائيات المسابقة وحصلوا على المركز الثاني ، مما يدل على قدرتهم على التنافس مع دول عربية أخرى",
      ],
    };
  },
  components: {
    MenuHome,
  },
};
</script>
<style>
ul .lis {
  font-size: 17px;
  line-height: 34px;
  padding: 11px;
}
@media (max-width: 786px) {
  ul .lis {
    font-size: 15px;
    line-height: 22px;
    padding: 10px 0px;
    margin-right: 18px;
  }
}
.tit {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  padding: 40px;
}
@media (max-width: 786px) {
  .tit {
    padding: 0;
    padding-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
}
.card-img-top {
  height: 268px;
  width: 100%;
}
@media (max-width: 786px) {
  .card-img-top {
    height: 268px;
    width: 100%;
    margin: 0;
  }
}
.cards2 {
  padding: 5px 15px;
  overflow-x: auto;
}

.cards2::-webkit-scrollbar {
  width: 0;
}
.card2 {
  min-width: 30%;
  text-align: center;
  font-size: 13px;
}
@media (max-width: 786px) {
  .card2 {
    min-width: 43%;
    text-align: center;
    font-size: 12px;
  }
}
.card-text2 {
  margin: 12px;
  color: var(--color-g1);
}
.last {
  font-size: 17px;
  line-height: 34px;
  padding: 11px;
  color: var(--color-g1);
  text-align: end;
  margin: 0;
}
</style>
