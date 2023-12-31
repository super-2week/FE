import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import KakaoRedirectHandler from "./components/login/kakao/KakaoRedirectHandler";
import {
  CartPage,
  DetailPage,
  ListPage,
  MainPage,
  NotFoundPage,
  SignupPage,
} from "./pages";
import GlobalStyle from "./components/global/GlobalStyle";
import HeaderWrap from "./components/global/header/HeaderWrap";

function App() {
  return (
    <Router>
      <HeaderWrap />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/oauth" element={<KakaoRedirectHandler />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/form" element={<PostItemPage />} /> */}
        <Route path="/product/:productId" element={<DetailPage />} />
        <Route
          path="/list/product/:animalCategory/:productCategory/:sortBy"
          element={<ListPage />}
        />
        <Route path="/list/product/total/:searchWord" element={<ListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
