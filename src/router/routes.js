const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
      {
        path: "/companies",
        component: () => import("pages/CompaniesPage.vue"),
      },
      {
        path: "/employees",
        component: () => import("pages/EmployeesPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
