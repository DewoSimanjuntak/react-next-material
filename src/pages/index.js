import LoginPage from "./login";
import AuthLayout from "../components/templates/authLayout";
import Cookies from "universal-cookie";
import { StyledButton } from "../components/atoms/Button/button";
import { Api } from "./api/api";
import { useRouter } from "next/router";

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req.headers.cookie);

  if (!cookies.get("authorized")) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const api = new Api();
  const router = useRouter();
  return (
    <AuthLayout>
      <StyledButton
        primary={true}
        size="large"
        gradient={false}
        onClick={function () {
          api.client
            .post("https://patientlogout.mocklab.io/user/logout", {
              username: "user1",
            })
            .then(function (response) {
              console.log(response);
              if (response && response.status === 200) {
                const cookies = new Cookies();
                cookies.remove("authorized", "true", { path: "/" });
                router.push("/");
                console.log("success logout");
              }
            })
            .catch(function () {
              console.log("failed logout");
            });
        }}
      >
        Logout
      </StyledButton>
    </AuthLayout>
  );
}
