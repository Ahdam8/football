<template>
  <div style="background-color: var(--color-bg);">
    <div class="container">
    <div class="best-goal pt-5 d-lg-flex d-md-flex d-sm-block align-items-center">
      <div class="disc text-lg-end text-sm-end pe-lg-16 pe-md-8">
        <h1 class="">أجمل هدف في مسيرة المنتخب السوري</h1>
        <p class="pt-9 fs-6" style="color: var(--color-g1)">
          لحظـات تاريخيــــة كرويــــة محفورة في ذاكــرة السوريين 23-12-2018
        </p>
        <p class="pt-9 fs-6" style="color: var(--color-g1)">
          من خلال التركيز القوي على تنميــة الشــــباب ودعم المشجعين المتحمسـين
          ، تمكن الفريق من إنتاج لاعبين ماهرين ذهبوا للعب مع أندية محلية
          ودوليـــة بارزة. تاريخ المنتخب السوري لكرة القدم هو شهادة على البلد.
        </p>
        <button
          class="btn text-light w-25"
          style="background-color: var(--color-sd)"
        >
          اقرأ المزيد
        </button>
      </div>
      <div class="text-lg-end text-md-end">
        <img class="img-best" src="../img/best.png" alt="" />
      </div>
    </div>
    <div class="card img-card text-white">
      <img src="../img/best2.jpg" class="card-img imgzone " alt="..." />
      <div class="card-img-overlay text-center">
        <h5 class="card-title-zone">
          مشجعين متحمسين ، تمكن الفريق من إنتاج لاعبين ماهرين ذهبوا للعب لأندية
          محلية ودولية بارزة. تاريخ المنتخب السوري لكرة القدم هو شهادة على البلد
        </h5>
        <button
          class="btn text-white btnzone "
          style="background-color: var(--color-sd)"
        >
          اقرأ المزيد
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "FanzZone_About",
};
</script>
<style>
.img-best {
  height: 408px;
  min-width: 609px;
  left: 555px;
  top: 668px;
  border-radius: 0px;
}
@media (max-width: 768px) {
  .disc {
    text-align: center;
  }
}
@media (max-width: 768px) {
  .img-best {
    height: 252px;
    min-width: 297px;
    left: 555px;
    top: 668px;
    border-radius: 0px;
  }
}
.img-card {
  height: 339px;
  width: 988px;
}
@media (max-width: 768px) {
  .img-card {
    height: 312px;
    width: 248px;
  }
}
.card-img-overlay {
  background: linear-gradient( 180.64deg, rgba(0, 0, 0, 0) 0.55%, #1d1d1d 120.45% );
}
/* @media (max-width: 768px) {
    .card-img-overlay {
        display: none
    };
} */

.imgzone {
    height: 100%;
    width: 100%;
}
@media (max-width: 768px) {
  .imgzone {
    height: 312px;
    width: 248px;
    margin: 0;
  }
}

.card-title-zone {
  position: absolute;
  bottom: 72px;
  width: 702px;
  text-align: center;
  margin-left: 108px;
}
@media (max-width: 768px) {
  .card-title-zone {
    bottom: 64px;
    text-align: center;
    font-size: 14px;
    margin-left: -11px;
    width: 238px;
  }
}
.btnzone {
  position: absolute;
  bottom: 16px;
}
@media (max-width: 768px) {
  .btnzone {
    bottom: 12px;
    width: 100px;
    left: 80px;
  }
}
</style>
