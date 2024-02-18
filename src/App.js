import Home from "./components/routes/home/home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/routes/navbar/navbar";
import SignIn from "./components/routes/signIn/signIn";

const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the Shop</h1>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
