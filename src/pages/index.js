import { Skeleton, Stack } from '@mui/material';
import DefaultLayout from '../components/templates/default';

export default function Home() {
  return (
    <Stack spacing={2} padding={4}>
      <div>This is Homepage</div>
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