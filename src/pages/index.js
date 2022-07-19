import { Skeleton, Stack } from '@mui/material';
import { useGetUserData } from "../../hooks/useUser";
import DefaultLayout from '../components/templates/default';

export default function Home() {
  const { data, error } = useGetUserData()

  if (error) console.log({error})
  const userData = data || {}

  return (
    <Stack spacing={2} padding={4}>
      <div>This is Homepage</div>
      <div>User Data: {userData.firstName} {userData.lastName}</div>
      <Skeleton variant="rectangular" width={'50%'} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}