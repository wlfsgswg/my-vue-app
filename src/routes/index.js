import Home from "./../containers/Home";
import NotFound from "./../containers/NotFound";
import About from "./../containers/About";
const routes = {
  "/": Home,
  "/about": About,
  "*": NotFound
};

export { routes };
