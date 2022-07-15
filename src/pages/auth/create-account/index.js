import AuthLayout from '../../../components/templates/authLayout'
import { StyledInput } from '../../../components/atoms/Input/input'

export default function CreateAccountPage() {
  return (
    <section>
      <StyledInput />
    </section>
  )
}

CreateAccountPage.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}