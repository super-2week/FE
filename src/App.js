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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/form" element={<PostItemPage />} />
        <Route path="product/:productId" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
