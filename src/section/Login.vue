<template>
  <v-app>
    <v-content>
      <v-container class="fill-height pt-16" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6" class="pt-16 hellofan">
                      <v-card-text class="mt-16">
                        <h1 class="text-center display-5 text-white fw-bold">
                          hello, fan!
                        </h1>
                        <h5 class="text-center fs-6 text-light">
                          Enter your personal details and start journey with us
                        </h5>
                      </v-card-text>
                      <div class="text-center pb-sm-16">
                        <v-btn
                          style="color: white"
                          class="btn btn-outline-danger"
                          variant="outlined"
                          @click="step++"
                          >SIGN UP</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-5 fw-bold"
                          style="color: var(--color-sd)"
                        >
                          sign in
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn
                            class="mx-2 red d-sm-none"
                            style="background-color: var(--color-s)"
                          >
                            <i class="bi bi-facebook fs-3 text-white"></i>
                          </v-btn>
                          <v-btn
                            class="mx-2 red d-sm-none"
                            style="background-color: var(--color-s)"
                          >
                            <i class="bi bi-instagram fs-3 text-white"></i>
                          </v-btn>
                          <v-btn
                            class="mx-2 red d-sm-none"
                            style="background-color: var(--color-s)"
                          >
                            <i class="bi bi-linkedin fs-3 text-white"></i>
                          </v-btn>
                        </div>
                        <p class="text-center fs-5 mt-6 text-dark-50">
                          Welcome back! please login to your account
                        </p>
                        <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
                        <v-form class="mx-auto" >
                          <div class="text-subtitle-1 text-medium-emphasis">
                            Email
                          </div>
                          <v-text-field
                            label="Email"
                            v-model="form.email"
                            type="text"
                          ></v-text-field>
                          <div class="text-subtitle-1 text-medium-emphasis">
                            Password
                          </div>
                          <v-text-field
                            label="Password"
                            v-model="form.password"
                            type="password"
                          ></v-text-field>
                          <h3 class="text-center fs-6 mt-3">Forgete pass ?</h3>
                          <div class="text-center mt-3">
                            <v-btn
                            @submit="signin()"
                              rounded
                              class="mb-6 text-white w-25"
                              style="background-color: var(--color-sd)"
                              >Login</v-btn
                            >
                          </div>
                        </v-form>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="12" class="signup">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 fw-bold"
                          style="color: var(--color-sd)"
                        >
                          Creat Account !
                        </h1>
                        <h5 class="text-center w-50 text-center mx-auto">
                          To keep connected with us please login with your
                          personal info
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          rounded
                          outlined
                          style="color: white"
                          class="btn btn-outline-danger"
                          variant="outlined"
                          @click="step++"
                          >SIGN IN</v-btn
                        >
                        <v-col cols="12" md="8" class="mx-auto">
                          <v-card-text>
                            <p class="text-center fs-5 mb-6">
                              Sign up for an account
                            </p>
                            <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
                            <v-form>
                              <v-text-field
                                label="Name"
                                v-model="form.name"
                                type="text"
                              ></v-text-field>
                              <v-text-field
                                label="Email"
                                v-model="form.email"
                                type="text"
                              ></v-text-field>
                              <v-text-field
                                label="Password"
                                v-model="form.password"
                                type="password"
                              ></v-text-field>
                            </v-form>
                          </v-card-text>
                          <div class="text-center mt-n5 mb-5">
                            <v-btn
                              rounded
                              color="teat accent-3 text-white"
                              style="background-color: var(--color-sd)"
                              >SIGN UP</v-btn
                            >
                          </div>
                        </v-col>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      step: 1,
      form:{
        name:"",
        email:"",
        password:""
      }
    };
    props: {
      source: String;
    }
  },
  methods: {
    signin() {
      axios
        .post("http://127.0.0.1:8000/api/login", this.form)
        .then((res) => {
          console.log(res);
        });
    },
    signup() {
      axios
        .post("http://127.0.0.1:8000/api/register", {
          name,
          username: "ahd",
          email,
          password,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate("/SignIn");
          }
        });
    },
  },
};
</script>
<style>
.signup {
  background-image: url(../img/login2.jpg);
  background-size: cover;
  color: white;
}
.signup::before {
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
.hellofan {
  background-image: url(../img/login2.jpg);
  padding-bottom: 77px;
  background-size: cover;
}
.hellofan::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0)
  );
  z-index: 0;
}
.red {
  background-color: var(--color-sd);
}
</style>
