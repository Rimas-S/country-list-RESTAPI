import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CartPage from "./components/cartPage/CartPage";
import Detail from "./components/detail/Detail";
import Home from "./components/home/Home";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

function App() {
  // test switch mode
  const theme = useSelector((state: RootStateOrAny) => state.themeMode);

  return (
    <div className="App" data-theme={theme}>
      <div className="App_theme">
        <ThemeSwitch />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:country" element={<Detail />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
