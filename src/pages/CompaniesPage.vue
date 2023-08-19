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
            v-show="newcompany"
          />
          <q-btn
            class="q-ma-sm"
            color="orange"
            label="Actualizar"
            @click="updateCompany"
            v-show="updatecompany"
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
      <div class="col-sm-12" v-if="companies.length == 0">
        <h3 class="text-center">:-)</h3>
        <h4 class="text-center gray-2">Sem nenhuma Empresa Registada</h4>
      </div>
      <div
        v-else
        class="col-3 q-pa-sm"
        v-for="company of companies"
        :key="company.id"
      >
        <q-card class="my-card" flat bordered>
          <q-img src="../assets/cover/cover.jpeg" style="height: 140px" />
          <q-btn
            class="absolute"
            flat
            round
            icon="more_vert"
            dense
            size="md"
            color="white"
            style="right: 0"
          >
            <q-menu>
              <q-list>
                <div clickable v-close-popup v-ripple>
                  <q-btn
                    class="full-width"
                    flat
                    size="0.8rem"
                    label="Editar"
                    color="primary"
                    @click="getCompany(company.id)"
                  />
                </div>
                <div clickable v-close-popup v-ripple>
                  <q-btn
                    class="full-width"
                    flat
                    size="0.8rem"
                    label="Apagar"
                    color="red"
                    @click="deleteCompany(company.id)"
                  />
                </div> </q-list
            ></q-menu>
          </q-btn>
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
              ></div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              {{ company.slogan }}
            </div>
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

let companyid = ref();
let companyname = ref();
let companyslogan = ref();
let companydescription = ref();
let stars = ref();

let companies = ref([]);

let newcompany = ref(true);
let updatecompany = ref(false);

const enableAddCompany = () => {
  companiesListing.value = false;
  companiesForm.value = true;

  updatecompany.value = false;
  newcompany.value = true;
};

const closeAddCompany = () => {
  companiesListing.value = true;
  companiesForm.value = false;

  clearFields();
  updatecompany.value = true;
  newcompany.value = false;
};

const saveCompany = async () => {
  if (
    companyname.value == null ||
    companyslogan.value == null ||
    companydescription.value == null
  ) {
    alert("Preencha todos Campos");
    return;
  }
  let params = {
    name: companyname.value,
    slogan: companyslogan.value,
    description: companydescription.value,
    stars: stars.value,
  };

  await axios.post("http://localhost:8080/company", params);

  clearFields();
  closeAddCompany();
  getCompanies();
};

const updateCompany = async () => {
  let params = {
    id: companyid.value,
    name: companyname.value,
    slogan: companyslogan.value,
    description: companydescription.value,
    stars: stars.value,
  };

  await axios.put(`http://localhost:8080/company/${companyid.value}`, params);

  clearFields();
  closeAddCompany();
  getCompanies();
};

const deleteCompany = async (id) => {
  if (confirm("Deseja realmente apagar essa Empresa?") == true) {
    await axios.delete(`http://localhost:8080/company/${id}`);
  }
  getCompanies();
};

const clearFields = () => {
  companyid.value = "";
  companyname.value = "";
  companyslogan.value = "";
  companydescription.value = "";
  stars.value = "";
};

const getCompanies = async () => {
  const response = await axios.get("http://localhost:8080/company");
  companies.value = response.data;
};

const getCompany = async (id) => {
  companyid.value = id;
  const response = await axios.get(`http://localhost:8080/company/${id}`);
  enableAddCompany();
  companyname.value = response.data.name;
  companyslogan.value = response.data.slogan;
  companydescription.value = response.data.description;
  stars.value = response.data.stars;

  updatecompany.value = true;
  newcompany.value = false;
};

onMounted(() => {
  getCompanies();
});
</script>
<style scoped lang="scss">
.my-card {
  min-height: 350px;
  overflow-y: auto;
}
.add-btn {
  position: relative;
  left: 96%;
  top: 4px;
}
.add-btn:hover {
  transform: rotate(360deg);
}
</style>
