const routes = [
  {
    path: "/",
    component: () => import("@/containers/Home/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/containers/Home/Survey/index.vue")
      },
      {
        path: "survey",
        component: () => import("@/containers/Home/Survey/index.vue")
      },
      {
        path: "goods",
        component: () => import("@/containers/Home/Goods/index.vue")
      },
      {
        path: "order",
        component: () => import("@/containers/Home/Order/index.vue"),
        children: [
          {
            path: "",
            component: () => import("@/containers/Home/Order/All/index.vue")
          },
          {
            path: "all",
            component: () => import("@/containers/Home/Order/All/index.vue")
          },
          {
            path: "refund",
            component: () => import("@/containers/Home/Order/Refund/index.vue")
          },
          {
            path: "check",
            component: () => import("@/containers/Home/Order/Check/index.vue")
          },
          {
            path: "ceshi",
            component: () => import("@/containers/NotFound/index.vue")
          }
        ]
      },
      {
        path: "custom",
        component: () => import("@/containers/Home/Custom/index.vue")
      },
      {
        path: "market",
        component: () => import("@/containers/Home/Market/index.vue")
      },
      {
        path: "asset",
        component: () => import("@/containers/Home/Asset/index.vue")
      },
      {
        path: "setting",
        component: () => import("@/containers/Home/Setting/index.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/containers/Login/index.vue")
  },
  {
    path: "*",
    component: () => import("@/containers/NotFound/index.vue")
  }
];
const defaultRoutes = routes[1].children;
export { routes, defaultRoutes };
