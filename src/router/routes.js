const routes = [
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("src/pages/HomePage.vue") },
      { path: "/map", component: () => import("src/pages/mapPage.vue") },
    ],
  },
  // {
  //   path: "/",
  //   component: () => import("layouts/firstLayout.vue"),
  //   children: [
  //     { path: "/", component: () => import("src/pages/loginPage.vue") },
  //   ],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
