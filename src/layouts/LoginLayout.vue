<template>
  <q-layout class="login-page" view="">
    <div>
      <div class="logo">
        <img src="../assets/logo/logo.png" alt="" />
      </div>

      <div class="login-form">
        <q-input dense color="blue" v-model="username" label="Utilizador">
          <template v-slot:prepend>
            <q-icon name="group" />
          </template>
        </q-input>
        <q-separator size="2.2rem" color="blue-1" />
        <q-input
          dense
          color="blue"
          v-model="username"
          label="Password"
          type="password"
        >
          <template v-slot:prepend>
            <q-icon name="group" />
          </template>
        </q-input>

        <q-separator size="2.2rem" color="blue-1" />
        <q-btn
          color="primary"
          label="Log In"
          style="width: 100%"
          to="/dashboard"
        />
      </div>
    </div>
  </q-layout>
</template>
<script setup></script>
<style scoped lang="scss">
.login-page {
  display: flex;
  justify-content: center;
  margin-top: 15vh;
}
.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 2.2rem;
}
.logo img {
  width: 120px;
}
.login-form {
  width: 460px;
  padding: 2.2rem;
  background-color: #e3f2fd;
  border-radius: 10px;
}
</style>
