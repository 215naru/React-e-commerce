// import NavBar from "./components/NavBar";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
import Home from "./views/Home";
import Details from "./views/Details";
import Cart from "./views/Cart";
import OnSale from "./views/OnSale";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound";

function App() {
  const browserRouter = createBrowserRouter([
    {path: "/", element:<Home/>},
    {path: "/cart", element: <Cart/>},
    {path: "/onsale", element: <OnSale/>},
    {path: "/details/:id", element: <Details/>},
    {path: "/*", element: <NotFound/>}
  ]); 
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;