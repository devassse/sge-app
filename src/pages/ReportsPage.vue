<template>
  <q-page class="row">
    <div class="col q-pa-md">
      <q-table
        title="Relatório de Empresas"
        :rows="rows"
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
        :rows="rows"
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
import { jsPDF } from "jspdf";

const doc = new jsPDF();

const downloadCompanyReport = () => {
  doc.text("Hello world!", 10, 10);
  doc.save("empresas.pdf");
};
const downloadEmployeReport = () => {
  doc.text("Hello world!", 10, 10);
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
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "rating",
    required: true,
    label: "Reputação",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "description",
    required: true,
    label: "Descrição",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
];

const columnsEmployes = [
  {
    name: "name",
    required: true,
    label: "Nome do Funcionário",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "profissional",
    required: true,
    label: "Profissão",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "rating",
    required: true,
    label: "Reputação",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
];
</script>
