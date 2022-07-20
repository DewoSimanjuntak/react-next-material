import AuthLayout from "../components/templates/authLayout";
import Login from "../components/organisms/Login/login";

export default function LoginPage() {
  return (
      <Login />
  );
}

LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
