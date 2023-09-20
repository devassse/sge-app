<template>
  <q-page class="">
    <div class="add-employee">
      <q-btn
        round
        color="black"
        icon="add"
        class="add-btn"
        @click="enableAddEmployee"
      />
    </div>
    <div class="row" v-show="employeesForm">
      <div class="col-sm-6 q-pa-sm">
        <span>Formulário de Registo de Funcionário</span>
        <div class="row q-col-gutter-x-md">
          <div class="col-sm-6">
            <q-input
              class="q-mt-sm"
              v-model="firstname"
              label="Primeiro Nome"
              dense
            />
          </div>
          <div class="col-sm-6">
            <q-input
              class="q-mt-sm"
              v-model="lastname"
              label="Último Nome"
              dense
            />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-sm-6">
            <q-select
              style="margin-top: 8px"
              v-model="position"
              :options="positions"
              label="Profissão"
              dense
            />
          </div>
          <div class="col-sm-6">
            <q-input class="q-mt-sm" v-model="nuit" label="NUIT" dense />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-sm-6">
            <q-input class="q-mt-sm" v-model="address" label="Endereço" dense />
          </div>
          <div class="col-sm-6">
            <q-input class="q-mt-sm" v-model="phone" label="Telefone" dense />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-sm-6">
            <q-select
              style="margin-top: 8px"
              v-model="maritalstate"
              :options="maritalstates"
              label="Estado Civil"
              dense
            />
          </div>
          <!-- <div class="col-sm-6">
            <q-input class="q-mt-sm" v-model="nuit" label="NUIT" dense />
          </div> -->
        </div>
        <div class="row">
          <div class="col-12">
            <q-input
              type="textarea"
              class="q-mt-sm"
              v-model="description"
              label="Descrição"
              dense
            />
          </div>
        </div>

        <div class="q-mt-md">
          <q-btn
            class="q-ma-sm"
            color="primary"
            label="Gravar"
            @click="saveEmployee"
            v-show="newemployee"
          />
          <q-btn
            class="q-ma-sm"
            color="orange"
            label="Actualizar"
            @click="updateCompany"
            v-show="updateemployee"
          />
          <q-btn
            class="q-ma-sm"
            color="red"
            label="Fechar"
            @click="closeAddEmployee"
          />
        </div>
      </div>
    </div>
    <div class="row" v-show="employeesList">
      <div class="col-sm-12" v-if="employees.length == 0">
        <h3 class="text-center">:-)</h3>
        <h4 class="text-center gray-2">Sem nenhum Funcionário Registado</h4>
      </div>
      <div
        class="col-3 q-pa-sm"
        v-for="employee of employees"
        :key="employee.id"
      >
        <q-card class="my-card" flat bordered>
          <q-img src="../assets/cover/user-cover.jpg" style="height: 80px" />

          <q-card-section>
            <q-img
              class="absolute"
              src="../assets/cover/user.png"
              style="width: 50px; right: 10px; top: -25px"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ employee.firstname }} {{ employee.lastname }}
              </div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              ></div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">{{ employee.position }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

let employees = ref([]);

let employeesList = ref(true);
let employeesForm = ref(false);

let newemployee = ref(true);
let updateemployee = ref(false);

let firstname = ref();
let lastname = ref();
let position = ref();
let stars = ref();
let maritalstate = ref();

const enableAddEmployee = () => {
  employeesForm.value = true;
  employeesList.value = false;

  newemployee.value = true;
  updateemployee.value = false;
};

const closeAddEmployee = () => {
  employeesForm.value = false;
  employeesList.value = true;

  newemployee.value = false;
  updateemployee.value = true;

  clearFields();
};

const getEmployees = async () => {
  const response = await axios.get("http://localhost:8080/employee");
  employees.value = response.data;
};

const saveEmployee = async () => {
  if (
    firstname.value == null ||
    lastname.value == null ||
    position.value == null
  ) {
    alert("Preencha todos Campos");
    return;
  }
  let params = {
    firstname: firstname.value,
    lastname: lastname.value,
    position: position.value,
  };

  await axios.post("http://localhost:8080/employee", params);

  closeAddEmployee();
  clearFields();
  getEmployees;
};

const clearFields = () => {
  firstname.value = "";
  lastname.value = "";
  position.value = "";
};

onMounted(() => {
  getEmployees();
});

const positions = ref(["Administrador", "Registador", "Inspector"]);
const maritalstates = ref(["Solteiro(a)", "Casado(a)", "Viúvo(a)"]);
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
