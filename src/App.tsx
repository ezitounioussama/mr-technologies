import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Shop/Product";
import About from "./pages/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Auth" element={<SignIn />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
