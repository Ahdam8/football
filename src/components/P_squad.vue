<template>
  <div class="container">
    <!-- point squad  -->
    <div class="points d-flex justify-content-evenly flex-wrap mx-auto">
      <div class="point" v-for="item in players" @click="convert(item.num)">
        <div class="num">{{ item.num }}</div>
        <div class="name">{{ item.name.slice(0, 7) }}</div>
      </div>
    </div>
    <!-- <card squad  -->
    <div class="cardplay pt-5">
      <div class="card border-danger mb-3" style="max-width: 21rem">
        <div class="card-header">
          {{ card2.name }}
        </div>
        <div class="d-flex">
          <div class="card-body text-primary">
            <h3 class="card-title fw-bold">{{ card2.center }}</h3>
            <p class="card-text">{{ card2.club }}</p>
            <span>AGE : {{ card2.age }}</span>
          </div>
          <div class="number">{{ card2.num }}</div>
        </div>
        <div class="score d-flex justify-content-between p-3">
          <div class="played text-center shadow p-2 rounded">
            <h4>played</h4>
            <p class="pt-3 fw-bold fs-5">{{ card2.Playr }}</p>
          </div>
          <div class="Goals text-center shadow p-2 rounded">
            <h4>Goals</h4>
            <p class="pt-3 fw-bold fs-5">{{ card2.goals }}</p>
          </div>
          <div class="Assits text-center shadow p-2 rounded">
            <h4>Assits</h4>
            <p class="pt-3 fw-bold fs-5">{{ card2.assists }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Players from "../Data/Profileplyers";
import { ref } from "vue";
export default {
  name: "P_squad",
  data() {
    return {
      players: Players.items,
      card2: {
        num: "11",
        name: "Ahd Mkedh",
        src: "1Mawas",
        center: "center forward",
        Playr: "44",
        goals: "50",
        assists: "8",
        Playr: "44",
        age: "54",
      },
    };
  },
  methods: {
    convert(el) {
      let card1 = this.players.filter((ele) => {
        return ele.num === el;
      });
      this.card2 = [];
      this.card2 = card1[0];
    },
  },
};
</script>
<style>
.points {
  margin-top: 66px;
  gap: 56px;
}
@media (max-width: 768px) {
  .points {
    margin-top: 50px;
    gap: 30px;
    width: 331px;

  }
}
.point {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-g1);
  cursor: pointer;
}
.num {
  color: var(--color-s);
  font-weight: bold;
  font-size: 37px;
  position: relative;
  left: 7px;
  top: 3px;
}
.name {
  width: 100px;
  margin-top: 10px;
}
.card {
  top: 55px;
  margin: auto;
  border: 2px solid var(--color-sd);
}
.number {
  left: -26px;
  position: relative;
  color: white;
  width: 70px;
  height: 70px;
  background-color: var(--color-s);
  font-size: 46px;
  border-radius: 50%;
  text-align: center;
  top: 50px;
}
@media (max-width: 768px) {
  .number {
    top: 20px;
  }
}
h4,
h3 {
  color: var(--color-s);
}
</style>
