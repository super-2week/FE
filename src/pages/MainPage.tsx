import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const MainPage = () => {
  // useSelector에서 RootState를 사용하여 스토어의 상태를 추출합니다.
  const user = useSelector((state: RootState) => state.loginuser);
  const signupuser = useSelector((state: RootState) => state.signupuser);

  const { userName, profileImage } = user;
  const { email, detailAddress } = signupuser;

  return (
    <div>
      <h1>Welcome, {userName}</h1>
      <p>Email: {email || "No email available"}</p>
      <p>Detail Address: {detailAddress || "No detail address available"}</p>
      {profileImage && <img src={profileImage} alt="Profile" />}
    </div>
  );
};

export default MainPage;
