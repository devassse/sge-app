<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="height: 120px">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> </q-toolbar-title>

        <div style="cursor: pointer">
          <q-icon name="logout" size="22px" />
        </div>
      </q-toolbar>
      <div>
        <span class="text-h4 q-px-md">SGE - Sistema de Gestão de Empresas</span>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 120px);
          margin-top: 120px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple exact to="/dashboard">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-separator />
          <q-item-label
            header
            style="
              padding-top: 4px;
              padding-bottom: 2px;
              background-color: rgb(233, 232, 232);
            "
          >
            Menus
          </q-item-label>
          <q-separator />

          <q-item clickable v-ripple exact to="/companies">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Empresas </q-item-section>
          </q-item>
          <q-item clickable v-ripple exact to="/employees">
            <q-item-section avatar>
              <q-icon name="group" />
            </q-item-section>

            <q-item-section> Funcionários </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="../assets/cover/cover.jpeg"
        style="height: 120px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="46px" class="q-mb-sm">
            <img src="../assets/cover/user.png" />
          </q-avatar>
          <div class="text-weight-bold">João Devson Mucavel</div>
          <div>@devasse</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
