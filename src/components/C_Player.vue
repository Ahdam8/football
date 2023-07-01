<template>
  <div class="container d-flex" style="margin-top: -54px;margin-bottom;: -54px">
    <div
      class="card d-flex"
      v-for="item in items"
      style="width: 15rem; color: white"
    >
      <span class="position-absolute fw-bold" style="color: var(--color-s)">{{
        item.num
      }}</span>
      <img src="../img//ebrahem.png" class="card-img-top over" alt="..." />
      <div class="card-body body bg-whit" style="transition: 0.4s">
        <div class="card-text p-2">
          <h1 class="fs-4 fw-bold">{{ item.name }}</h1>
          <p>{{ item.center }}</p>
        </div>
        <div class="work text-center d-flex justify-content-between">
          <div class="match">
            <h1 class="fs-6 fw-bold">Playrs</h1>
            <p>{{ item.Playr }}</p>
          </div>
          <div class="goals">
            <h1 class="fs-6 fw-bold">Goals</h1>
            <p>{{ item.goals }}</p>
          </div>
          <div class="assists">
            <h1 class="fs-6 fw-bold">Assists</h1>
            <p>{{ item.assists }}</p>
          </div>
        </div>
      </div>
                <!-- /////////////////////////////////////// -->
      <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-end" id="staticBackdropLabel">
                    ملخص المباراة هنا
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  sdvsdvdsvdsvdv
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- /////////////////////////////////////// -->
      <div
        class="btn white-50 text-white w-100"
        style="background-color: var(--color-sd)"
      >
        Profile
      </div>
    </div>
  </div>
</template>
<script>
import Players from "../Data/Profileplyers";

export default {
  name: "C_Player",
  created() {
    fetch("http://127.0.0.1:8000/api/players")
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      });
      // '/register'
      // '/login'
  },
  data() {
    return {
      items: Players.items,
    };
  },
};
</script>

<style scoped>
.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4),
    rgba(255, 255, 255, 0)
  );
  z-index: 0;
}
img {
  min-width: 100%;
  height: 223px;
  width: 210px;
}
@media (max-width: 768px) {
  .over {
    margin: 0;
  }
}
.card {
  min-width: 223px;
  height: 260px;
  overflow: hidden;
  margin: 0 5px;
}
@media (min-width: 768px) {
  .card {
    height: 260px;
  }
}
.body {
  transform: 0.3s;
}
.card-text h1 {
  margin: 0px;
}
.card-text p {
  font-size: 12px;
}
.card span {
  font-size: 45px;
  top: -12px;
  padding: 6px;
}
.body {
  position: absolute;
  min-width: 100%;
  bottom: -66px;
}
.card:hover .body {
  bottom: 60px;
}
.card .work {
  bottom: -15px;
  position: relative;
}
.btn {
  border-radius: 0px;
  z-index: 2;
}
</style>
