
import ProviderRegistration from "../components/organisms/ExternalProviderRegistration/ProviderRegistration";
import AuthLayout from '../components/templates/authLayout'

export default function ProviderRegistrationPage() {
  return (
    <section>
      <ProviderRegistration />
    </section>
  );
}

ProviderRegistrationPage.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
