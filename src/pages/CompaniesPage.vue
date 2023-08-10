<template>
  <q-page class="">
    <div class="add-company">
      <q-btn
        round
        color="black"
        icon="add"
        class="add-btn"
        @click="enableAddCompany"
      />
    </div>
    <div class="row" v-show="companiesForm">
      <div class="col-sm-6 q-pa-sm">
        <span>Formulário de Registo de Empresa</span>
        <q-input
          class="q-mt-sm"
          v-model="companyname"
          label="Nome da Empresa"
          dense
        />
        <div class="row q-col-gutter-x-md">
          <div class="col-sm-6">
            <q-input
              class="q-mt-sm"
              v-model="companyslogan"
              label="Slogan"
              dense
            />
          </div>
          <div class="col-sm-6">
            <q-input
              type="number"
              class="q-mt-sm"
              v-model="stars"
              label="Reputação"
              max="5"
              dense
            />
          </div>
        </div>
        <q-input
          type="textarea"
          class="q-mt-sm"
          v-model="companydescription"
          label="Descrição"
          dense
        />

        <div class="q-mt-md">
          <q-btn
            class="q-ma-sm"
            color="primary"
            label="Gravar"
            @click="saveCompany"
          />
          <q-btn
            class="q-ma-sm"
            color="red"
            label="Fechar"
            @click="closeAddCompany"
          />
        </div>
      </div>
    </div>
    <div class="row" v-show="companiesListing">
      <div class="col-3 q-pa-sm" v-for="company of companies" :key="company.id">
        <q-card class="my-card" flat bordered>
          <q-img src="../assets/cover/cover.jpeg" style="height: 140px" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 15px; transform: translateY(-50%)"
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
import { ref, onMounted } from "vue";
import axios from "axios";

let companiesListing = ref(true);
let companiesForm = ref(false);

let companyname = ref();
let companyslogan = ref();
let companydescription = ref();
let stars = ref();

const enableAddCompany = () => {
  companiesListing.value = false;
  companiesForm.value = true;
};

const closeAddCompany = () => {
  companiesListing.value = true;
  companiesForm.value = false;

  clearFields();
};

const saveCompany = () => {
  let params = {
    name: companyname.value,
    slogan: companyslogan.value,
    description: companydescription.value,
    stars: stars.value,
  };

  console.log("Company", params);
  clearFields();
};

const clearFields = () => {
  companyname.value = "";
  companyslogan.value = "";
  companydescription.value = "";
  stars.value = "";
};

const getCompanies = async () => {
  const response = await axios.get("http://localhost:8080/api/company");
  console.log("Companies", response);
};

onMounted(() => {
  getCompanies();
});

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
  left: 96%;
  top: 4px;
}
.add-btn:hover {
  transform: rotate(360deg);
}
</style>
