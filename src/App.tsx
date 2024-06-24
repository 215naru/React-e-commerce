// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
import Home from "./views/Home";
import Details from "./views/Details";
import Cart from "./views/Cart";
import OnSale from "./views/OnSale";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound";
import { Provider } from "react-redux";
import store from "./store/index"

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/onsale", element: <OnSale /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/*", element: <NotFound /> }
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter} />
    </Provider>
  );
}

export default App;