import { useEffect } from "react";
import axios from "axios";
import api from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { successSocialLogin } from "../../../store/slice/userSlice";

const { Kakao } = window;

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${process.env.REACT_APP_FRONTEND_BASE_URL}/login/oauth&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res: any) => {
        console.log(res);
        Kakao.Auth.setAccessToken(res.data.access_token);
        Kakao.API.request({
          url: "/v2/user/me",
          //success
          success: function (response: any) {
            console.log("카카오로그인성공");
            console.log(response);
            console.log(response.kakao_account.email);
            const userData = {
              email: response.kakao_account.email,
              userName: response.properties.nickname,
              profileImage: response.properties.profile_image,
              thumbnailImage: response.properties.thumbnail_image,
            };
            axios
              .post("https://pet-commerce.shop/v1/api/kakao", {
                email: response.kakao_account.email,
                userName: response.properties.nickname,
              })
              .then((res: any) => {
                console.log("백엔드데이터", res);
                if (res.status === 200) {
                  console.log("나 토큰임", res.headers.authorization);
                  const token = res.data.token;
                  localStorage.setItem("accesstoken", token);
                  navigate("/");
                } else if (res.status === 202) {
                  console.log("뭘봐");
                }
              })
              .catch((error: any) => {
                console.error("Kakao Auth Error:", error);
              });
            dispatch(successSocialLogin(userData));
            navigate("/");
          },
          //fail
          fail: function (error: any) {
            console.log(error);
          },
        });
      });
  }, []);

  return <div>로그인이 성공적으로 완료되었습니다.</div>;
};

export default KakaoRedirectHandler;

// ((res: any) => {
//   console.log(res);
//   const { access_token } = res.data;
//   axios.post(
//       `https://kapi.kakao.com/v2/user/me`,
//       {},
//       {
//           headers: {
//               Authorization: `Bearer ${access_token}`,
//               "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//           }
//       }
//   )
