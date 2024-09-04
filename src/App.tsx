import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/Boutique" element={<Boutique />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Auth" element={<SignIn />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
