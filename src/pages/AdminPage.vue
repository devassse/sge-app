<template>
  <q-page class="">
    <div class="add-employee">
      <q-btn round color="black" icon="add" class="add-btn" />
    </div>
    <div class="row">
      <div class="col-sm-12">
        <h5 class="text-center">Associar Funcionários a Utilizadores</h5>
      </div>
      <div class="col-sm-4 q-pa-sm" v-for="user in users" :key="user.id">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">{{ user.name }}</div>
            <div class="text-subtitle2">
              <em>Username</em> {{ user.username }}
            </div>
            <div class="text-subtitle2"><em>Password</em> *****</div>
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat>Remover</q-btn>
            <q-btn flat>Desvincular</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

let users = ref([
  {
    id: 1,
    name: "Administrator",
    username: "admin",
    password: "*****",
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
