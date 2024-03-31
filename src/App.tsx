import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Factories from "./pages/Factories";
import ShowRoom from "./pages/ShowRoom";
import CategoriesProduct from "./pages/CategoriesProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import ThankYou from "./pages/ThankYou";
import { useSelector } from "react-redux";
import SearchResults from "./pages/SearchResults";
import { selectSearchValue } from "./slices/SearchSlices";
const App = () => {
  const value = useSelector(selectSearchValue);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          {value !== "" ?  <Route element={<SearchResults />} index /> :  <Route element={<Home />} index />}
         
          <Route element={<Services />} path="/services" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<Factories />} path="/factories" />
          <Route element={<ShowRoom />} path="/shovrum" />
          <Route element={<CategoriesProduct />} path="/categories/:id" />
          <Route element={<ProductDetail />} path="/product/:id" />
          <Route element={<Cart />} path="cart" />
          <Route element={<Checkout />} path="/checkout" />
          <Route element={<ThankYou />} path="/thank-you" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
