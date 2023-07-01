<template>
  <div class="">
    <div
      class="cars d-flex gap-4"
      style="margin-top: -54px; margin-bottom: 65px"
    >
      <div
        class="card shadow text-center"
        v-for="item in items"
        style="width: 22rem"
      >
        <div class="card-header d-flex text-start align-items-center">
          <div class="last fw-bold" style="color: var(--color-s)">
            {{ item.title }}
          </div>
          <span class="ps-5">{{ item.date }}</span>
          <span class="ps-5">{{ item.time }}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title pb-3">{{ item.Stadium }}</h5>
          <div class="teams d-flex justify-content-evenly">
            <div class="team1 d-flex align-items-center">
              <div class="">
                <img src="https://www.now-time.com/flags/550/sy.png" alt="" />
                <p class="card-text">Syria</p>
              </div>
              <div class="score fw-bold ps-5 fs-1">{{ item.S_syria }}</div>
            </div>
            <i class="bi bi-dash fw-bold fs-1 pt-3"></i>
            <div class="team2 d-flex align-items-center">
              <div class="score fw-bold pe-4 fs-1">{{ item.S_rival }}</div>
              <div class="">
                <img src="https://www.now-time.com/flags/550/ae.png" alt="" />
                <p class="card-text">{{ item.N_rival }}</p>
              </div>
            </div>
          </div>
          <!-- Modal  -->
          <button
            type="button"
            class="btn btn-primary m-3"
            style="background-color: var(--color-s)"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Match Story
          </button>

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
                  <!-- ratio  -->
                  <div class="ratio ratio-4x3">
                    <div>
                      <iframe class="video" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div>
                  </div>
                  <!-- ratio  -->
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger text-white"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
          <!-- <a href="#" class="btn m-3" style="background-color: var(--color-s)"
            >Match Story</a
          > -->
        </div>
        <div class="card-footer text-muted">{{ item.league }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Match from "../Data/Nextmatch";
export default {
  name: "C_Match",
  data() {
    return {
      items: Match.items,
    };
  },
};
</script>

<style scoped>
.video {
  height: 300px;
    width: 468px;
}
.teams img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
@media (max-width: 768px) {
  .cars {
    margin-bottom: 19px;
  }
}
</style>
<!-- https://www.now-time.com/flags/550/sa.png -->
