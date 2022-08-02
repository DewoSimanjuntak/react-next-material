import AuthLayout from '../components/templates/authLayout';
import Cookies from 'universal-cookie';
import { Api } from "./api/api";
import dynamic from "next/dynamic"

//Prevent html being match between server and client
const ForgotPasswordComponent = dynamic(
  () => import("../components/organisms/ForgotPassword/forgotPassword"),
  {
    ssr: false,
  }
);

const forgotPasswordProps = {
  OnSubmitClicked: function (postbody, router, callback) {
    const api = new Api();
    const cookies = new Cookies();
    api
    .forgotpassword({provider:{...postbody}})
      .then(function (response) {
        //console.log(response);
        //console.log(router)
        //router.push("/patient");
        const hostname = window.location.origin;
      //   window.location.href = `${hostname}/provider`;
      //   console.log("success");
        cookies.set("authorized", true);
        callback({ status: "success" });
      })
      .catch(function (err) {
        console.log(err);
        const incorrectUsername = err.responseCode === 2000
      callback({
        status: "failed",
        // message: {
        //   title: incorrectUsername ? "Incorrect Username" : "",
        //   description: err.message,
        // },
      });
        
      });
  },
  
};
export default function ForgotPasswordPage() {
  return (
    <div >
      <section >
       <ForgotPasswordComponent {...forgotPasswordProps} />;
      </section>
    </div>
  );
}
ForgotPasswordPage.getLayout = function getLayout(page) {
return <AuthLayout showMobileImage={true}>{page}</AuthLayout>;
};

