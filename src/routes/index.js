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
const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "" || "survey",
        component: Survey
      },
      {
        path: "goods",
        component: Goods
      },
      {
        path: "order",
        component: Order
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
    path: "*",
    component: NotFound
  }
];
const defaultRoutes = routes[1].children;
export { routes, defaultRoutes };
