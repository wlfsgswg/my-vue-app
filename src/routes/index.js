import Home from "./../containers/Home";
import NotFound from "./../containers/NotFound";
import Login from "./../containers/Login";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/404",
    component: NotFound
  }
];

export { routes };
