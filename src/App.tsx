import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import {
  DetailPage,
  MainPage,
  NotFoundPage,
  PostItemPage,
  SignupPage,
} from "./pages";
import GlobalStyle from "./components/global/GlobalStyle";
import ComparisonPage from "./pages/ComparisonPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/form" element={<PostItemPage />} />
        <Route path="/product/:productId" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/product/comparison" element={<ComparisonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
