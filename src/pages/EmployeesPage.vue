<template>
  <q-page class="">
    <div class="add-employee">
      <q-btn round color="black" icon="add" class="add-btn" />
    </div>
    <div class="row">
      <div
        class="col-3 q-pa-sm"
        v-for="employee of employees"
        :key="employee.id"
      >
        <q-card class="my-card" flat bordered>
          <q-img src="../assets/cover/user-cover.jpg" style="height: 130px" />

          <q-card-section>
            <q-img
              class="absolute"
              src="../assets/cover/user.png"
              style="width: 50px; right: 10px; top: -25px"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">{{ employee.name }}</div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="star" />
                250 Pts
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">{{ employee.type }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

let stars = ref();

let employees = ref([
  {
    id: 1,
    name: "Manuel José de Almeida",
    type: "Administrador",
    description: "Lorem ipsum dolor sit amet redat, dolor sit amet redat.",
  },
  {
    id: 2,
    name: "Maria Jorge",
    type: "Managment and Investigation",
    description: "Lorem ipsum dolor sit amet redat, rem ipsum dolor sit ame.",
  },
  {
    id: 3,
    name: "Bento Nhantumbo",
    type: "Financial Institution",
    description: "Lorem ipsum dolor sit amet redat dolor sit amet redat",
  },
  {
    id: 4,
    name: "Mario Sergio",
    type: "Transportation and Logistic",
    description: "Lorem ipsum dolor sit amet redat rem ipsum dolor sit ame",
  },
  {
    id: 5,
    name: "Freya Abdul Alibah",
    type: "Popular and Entertaiment",
    description: "Lorem ipsum dolor sit amet redat rem ipsum dolor sit ame",
  },
]);
</script>
<style scoped lang="scss">
.add-btn {
  position: relative;
  left: 94%;
  top: 4px;
}
.add-btn:hover {
  transform: rotate(360deg);
}
</style>
