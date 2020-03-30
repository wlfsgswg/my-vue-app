import Home from "./../containers/Home/index.vue";
import NotFound from "./../containers/NotFound";
import Login from "./../containers/Login";
import {
  Survey,
  Goods,
  Order,
  Custom,
  Market,
  Asset,
  Setting
} from "./../containers/Home/index.js";
// order子组件
import {
  AllOrder,
  CheckOrder,
  RefundOrder
} from "./../containers/Home/Order/index";
const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        component: Survey
      },
      {
        path: "survey",
        component: Survey
      },
      {
        path: "goods",
        component: Goods
      },
      {
        path: "order",
        component: Order,
        children: [
          {
            path: "",
            component: AllOrder
          },
          {
            path: "all",
            component: AllOrder
          },
          {
            path: "refund",
            component: RefundOrder
          },
          {
            path: "check",
            component: CheckOrder
          },
          {
            path: "ceshi",
            component: NotFound
          }
        ]
      },
      {
        path: "custom",
        component: Custom
      },
      {
        path: "market",
        component: Market
      },
      {
        path: "asset",
        component: Asset
      },
      {
        path: "setting",
        component: Setting
      }
    ]
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "*11",
    component: NotFound
  }
];
const defaultRoutes = routes[1].children;
export { routes, defaultRoutes };
