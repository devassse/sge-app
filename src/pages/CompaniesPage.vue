<template>
  <q-page class="">
    <div class="add-company">
      <q-btn round color="black" icon="add" class="add-btn" />
    </div>
    <div class="row">
      <div class="col-3 q-pa-sm" v-for="company of companies" :key="company.id">
        <q-card class="my-card" flat bordered>
          <q-img src="../assets/cover/cover.jpeg" style="height: 140px" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">{{ company.name }}</div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                250 ft
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">{{ company.type }}</div>
            <div class="text-caption text-grey">
              {{ company.description }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

let companies = ref([
  {
    id: 1,
    name: "Empresa de Gas",
    type: "Extraction and Encapsulation",
    description: "Lorem ipsum dolor sit amet redat, dolor sit amet redat.",
  },
  {
    id: 2,
    name: "ENH",
    type: "Managment and Investigation",
    description: "Lorem ipsum dolor sit amet redat, rem ipsum dolor sit ame.",
  },
  {
    id: 3,
    name: "Banco de Mozambique",
    type: "Financial Institution",
    description: "Lorem ipsum dolor sit amet redat dolor sit amet redat",
  },
  {
    id: 4,
    name: "Transportes Lalgy",
    type: "Transportation and Logistic",
    description: "Lorem ipsum dolor sit amet redat rem ipsum dolor sit ame",
  },
  {
    id: 5,
    name: "Feira Popular",
    type: "Popular and Entertaiment",
    description: "Lorem ipsum dolor sit amet redat rem ipsum dolor sit ame",
  },
]);
</script>
<style scoped lang="scss">
.add-btn {
  position: relative;
  left: 81vw;
  right: 0;
  top: 4px;
}
.add-btn:hover {
  transform: rotate(360deg);
}
</style>
