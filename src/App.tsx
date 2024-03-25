import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
