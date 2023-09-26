<template>
  <q-page class="row">
    <div class="col q-pa-md">
      <q-table
        title="Relatório de Empresas"
        :rows="companies"
        :columns="columnsCompany"
        row-key="name"
      >
        <template v-slot:top>
          <p class="text-h6">Relatório de Empresas</p>
          <q-space />
          <q-btn label="Download PDF" @click="downloadCompanyReport"></q-btn>
        </template>
      </q-table>
    </div>
    <div class="col q-pa-md">
      <q-table
        title="Relatório de Funcionários"
        :rows="employees"
        :columns="columnsEmployes"
        row-key="name"
      >
        <template v-slot:top>
          <p class="text-h6">Relatório de Funcionários</p>
          <q-space />
          <q-btn label="Download PDF" @click="downloadEmployeReport"></q-btn>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/logo/logo.png";
import axios from "axios";

const doc = new jsPDF();
let employees = ref();
let companies = ref();

const downloadCompanyReport = () => {
  autoTable(doc, {
    body: companies.value,
    columns: [
      { header: "Nome de Empresas", dataKey: "name" },
      { header: "Slogan", dataKey: "slogan" },
      { header: "Reputação", dataKey: "stars" },
      { header: "Descrição", dataKey: "description" },
    ],
    didDrawPage: function (data) {
      doc.addImage(logo, "PNG", 15, 5, 8, 7);
      doc.text(25, 10.2, "Relatório de Empresas");
    },
  });
  doc.save("empresas.pdf");
};
const downloadEmployeReport = () => {
  autoTable(doc, {
    body: employees.value,
    columns: [
      { header: "Primeiro Nome", dataKey: "firstname" },
      { header: "Último Nome", dataKey: "lastname" },
      { header: "Profissão", dataKey: "position" },
    ],
    didDrawPage: function (data) {
      doc.addImage(logo, "PNG", 15, 5, 8, 7);
      doc.text(25, 10.2, "Relatório de Funcionários");
    },
  });
  doc.save("funcionarios.pdf");
};

const columnsCompany = [
  {
    name: "name",
    required: true,
    label: "Nome da Empresa",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "slug",
    required: true,
    label: "Slug",
    align: "left",
    field: (row) => row.slogan,
    sortable: true,
  },
  {
    name: "rating",
    required: true,
    label: "Reputação",
    align: "left",
    field: (row) => row.stars,
    sortable: true,
  },
  {
    name: "description",
    required: true,
    label: "Descrição",
    align: "left",
    field: (row) => row.description,
    sortable: true,
  },
];

const columnsEmployes = [
  {
    name: "firstname",
    required: true,
    label: "Primeiro nome",
    align: "left",
    field: (row) => row.firstname,
    sortable: true,
  },
  {
    name: "lastname",
    required: true,
    label: "Último nome",
    align: "left",
    field: (row) => row.lastname,
    sortable: true,
  },
  {
    name: "position",
    required: true,
    label: "Profissão",
    align: "left",
    field: (row) => row.position,
    sortable: true,
  },
];

const getCompanies = async () => {
  const response = await axios.get("http://localhost:8080/company");
  companies.value = response.data;
};

const getEmployees = async () => {
  const response = await axios.get("http://localhost:8080/employee");
  employees.value = response.data;
};

onMounted(() => {
  getCompanies();
  getEmployees();
});
</script>
