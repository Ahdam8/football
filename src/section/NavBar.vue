<template>
  <nav
    class="navbar navbar-expand-lg w-100 navbar-light"
    style="background-color: var(--color-bg)"
  >
    <div class="container">
      <div class="navbar-brand ms-lg-5">
        <div class="d-flex flex-end gap-1  align-items-center">
          <!-- live -->
          <button
            type="button"
            style="background-color: var(--color-s)"
            class="live fw-bold btn me-4 livebtn"
          >
            <router-link style="color: var(--color-btn)" :to="{ name: 'live' }"
              >مباشر</router-link
            >
          </button>
          <!-- language -->
          <div class="btn-group langall">
            <button
              class="btn btn-sm fw-bold langbtn"
              style="background-color: var(--color-s); color: var(--color-btn);"
              type="button"
            >
              عربي
            </button>
            <button
              type="button"
              class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="">Arabic</a></li>
              <li><a class="dropdown-item" href="">English</a></li>
            </ul>
          </div>
          <div class="icon d-flex align-items-center">
            <div class="find d-flex">
              <v-text-field
                class="inpu"
                placeholder="Search"
                variant="underlined"
                append-inner-icon="mdi-map-marker"
              ></v-text-field>
              <div class="inpuicon mt-1"><i class="bi bi-search ps-lg-3 fs-sm-6"></i></div>
            </div>

            <router-link style="color: var(--color-g2)" :to="{ name: 'SignIn' }"
              ><i class="bi bi-person ps-3 fs-3"></i
            ></router-link>
          </div>
        </div>
      </div>
      <a class="navbar-brand fs-6" href="#">Navbar</a>
      <button
        class="navbar-toggler toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#x"
        aria-controls="x"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse x" id="x">
        <ul class="navbar-nav fw-bold me-auto mb-2 mb-lg-0">
          <li class="link nav-item">
            <a class="nav-link" href="#"
              ><router-link
                :to="{ name: 'fanz' }"
                style="color: var(--color-g1)"
                >الجمهور</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link
                :to="{ name: 'squad' }"
                style="color: var(--color-g1)"
                >الفريق</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link
                :to="{ name: 'about' }"
                style="color: var(--color-g1)"
                >حول المنتخب</router-link
              ></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><router-link :to="{ name: 'home' }" style="color: var(--color-s)"
                >الرئيسية</router-link
              ></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    // open() {
    //   let input = document.querySelector(".inpu")
    //   input.style.width = "200px"
    // }
  },
};
</script>

<style>
@media (min-width: 768px) {
  .x {
    flex: initial;
  }
}
@media (max-width: 768px) {
  .x {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
}
.inpu {
  position: relative;
  height: 38px;
  top: -16px;
  width: 0;
  transition: 0.3s;
}
.find:hover .inpu{
  width: 200px;
}
@media (max-width: 768px) {
  .find:hover .inpu{
  width: 64px;
}
}
@media (max-width: 768px) {
  .toggle{
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .livebtn{
    font-size: 10px;
  }
}
@media (max-width: 768px) {
  .langbtn{
    font-size: 10px;
  }
}
@media (min-width: 768px) {
  .langbtn{
    font-size: 17px;
  }
}
@media (max-width: 768px) {
  .langall{
    left: -14px;
  }
}

</style>
