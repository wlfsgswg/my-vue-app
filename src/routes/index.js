const routes = [
  {
    path: "/",
    component: () => import("@/containers/Home/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/containers/Home/Survey/index.vue"),
        children: [
          {
            path: "",
            component: () => import("@/containers/Home/Survey/Com/index.vue")
          }
        ]
      },
      {
        path: "survey",
        component: () => import("@/containers/Home/Survey/index.vue"),
        children: [
          {
            path: "",
            component: () => import("@/containers/Home/Survey/Com/index.vue")
          }
        ]
      },
      {
        path: "goods",
        component: () => import("@/containers/Home/Goods/index.vue"),
        children: [
          {
            path: "",
            component: () => import("@/containers/Home/Goods/Control/index.vue")
          },
          {
            path: "control",
            component: () => import("@/containers/Home/Goods/Control/index.vue")
          },
          {
            path: "groups",
            component: () => import("@/containers/Home/Goods/Groups/index.vue")
          },
          {
            path: "tags",
            component: () => import("@/containers/Home/Goods/Tags/index.vue")
          }
        ]
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
        component: () => import("@/containers/Home/Custom/index.vue"),
        children: [
          {
            path: "",
            component: () => import("@/containers/Home/Custom/Query/index.vue")
          },
          {
            path: "query",
            component: () => import("@/containers/Home/Custom/Query/index.vue")
          },
          {
            path: "tags",
            component: () => import("@/containers/Home/Custom/Tags/index.vue")
          }
        ]
      },
      {
        path: "market",
        component: () => import("@/containers/Home/Market/index.vue"),
        children: [
          {
            path: "",
            component: () => import("@/containers/Home/Market/Shop/index.vue")
          },
          {
            path: "shop",
            component: () => import("@/containers/Home/Market/Shop/index.vue")
          },
          {
            path: "coupon",
            component: () => import("@/containers/Home/Market/Coupon/index.vue")
          },
          {
            path: "exam",
            component: () => import("@/containers/Home/Market/Exam/index.vue")
          }
        ]
      },
      {
        path: "asset",
        component: () => import("@/containers/Home/Asset/index.vue"),
        children: [
          {
            path: "",
            component: () => import("@/containers/Home/Asset/Survey/index.vue")
          },
          {
            path: "survey",
            component: () => import("@/containers/Home/Asset/Survey/index.vue")
          },
          {
            path: "balance",
            component: () => import("@/containers/Home/Asset/Balance/index.vue")
          },
          {
            path: "reco",
            component: () => import("@/containers/Home/Asset/Reco/index.vue")
          }
        ]
      },
      {
        path: "setting",
        component: () => import("@/containers/Home/Setting/index.vue"),
        children: [
          {
            path: "",
            component: () =>
              import("@/containers/Home/Setting/Message/index.vue")
          },
          {
            path: "message",
            component: () =>
              import("@/containers/Home/Setting/Message/index.vue")
          },
          {
            path: "currency",
            component: () =>
              import("@/containers/Home/Setting/Currency/index.vue")
          },
          {
            path: "clerk",
            component: () => import("@/containers/Home/Setting/Clerk/index.vue")
          },
          {
            path: "address",
            component: () =>
              import("@/containers/Home/Setting/Address/index.vue")
          },
          {
            path: "member",
            component: () =>
              import("@/containers/Home/Setting/Member/index.vue")
          },
          {
            path: "role",
            component: () => import("@/containers/Home/Setting/Role/index.vue")
          }
        ]
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
