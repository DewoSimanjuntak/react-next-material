import AuthLayout from "../components/templates/authLayout";
import Login from "../components/organisms/Login/login";
import { Api } from "./api/api";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { signIn } from "next-auth/react"

const loginProps = {
  OnLoginClicked: async function (postbody, router) {
    const username = postbody.username;
    const password = postbody.password;
    const result = await signIn('credentials',
      {
        username,
        password
      }
    )
    console.log({result})
    const cookies = new Cookies();
    cookies.set("authorized", "true", { path: "/" });
    
    // legacy
    // const api = new Api();
    // api.client
    //   .post("https://patientlogin.mocklab.io/user/login", postbody)
    //   .then(function (response) {
    //     console.log(response);
    //     if (response && response.status === 200) {
          // const cookies = new Cookies();
          // cookies.set("authorized", "true", { path: "/" });
    //       router.push("/");
    //       console.log("success");
    //     }
    //   })
    //   .catch(function () {
    //     console.log("failed");
    //   });
  },
  OnGuestClicked: function () {},
  OnCreateAccountClicked: function (router) {
    router.push("/auth/create-account");
  },
  OnForgotPasswordClicked: function (router) {
    router.push("/forgot-password");
  },
};
export default function LoginPage() {
  return <Login {...loginProps} />;
}

LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout showMobileImage={true}>{page}</AuthLayout>;
};
