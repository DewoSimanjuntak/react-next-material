import AuthLayout from '../../../components/templates/authLayout'
import {StyledInput} from '@/components/atoms/Input/input'
// import {StyledInput} from '../../../components/atoms/Input/input'
import TestCom from 'src/components/testcom'

export default function CreateAccountPage() {
  return (
    <section>
      <TestCom />
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