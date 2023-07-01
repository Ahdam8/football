<template>
  <div class="PreviewCom pb-3 container">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <div class="front w-100 d-flex justify-content-around">
              <div class="text">
                <p class="fw-bold text-dark">asian cup AFC 2022</p>
                <p>sun, oct 12th 5.30 PM</p>
              </div>
              <div class="image">
                <img src="https://www.now-time.com/flags/550/sy.png" alt="" />
                <img
                  src="https://www.now-time.com/flags/550/sa.png"
                  alt=""
                  class="img2"
                />
              </div>
              <div class="name">
                <p class="fw-bold" style="color: var(--color-s)">
                  Syria =><span class="ps-3">2</span>
                </p>
                <p class="text-dark fw-bold">
                  Qatar =><span class="ps-3">2</span>
                </p>
              </div>
            </div>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div class="accordion-body">contain</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewCom",
};
</script>

<style scoped>
.front .text p {
  font-size: 12px;
  color: var(--color-g1);
}
.front {
  height: 52px;
}
.front .image img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.front .image .img2 {
  margin: -8px;
}
@media (max-width: 768px) {
  .front .text p{
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .front .image img{
    width: 36px;
    height: 35px;
  }
}
@media (max-width: 768px) {
  .front .name p{
    font-size: 11px;

  }
}
</style>
