import DefaultLayout from "../components/templates/default";
import Button from "@mui/material/Button";
import StyledInput from '../components/atoms/Input/input'
import { useForm, Controller } from "react-hook-form";
import styles from "../../styles/Login.module.css";
import { Stack, Box } from "@mui/material";


export default function KitchenSinkPage() {
  const { handleSubmit, setError, control } = useForm();

  const onSubmit = data => {
    console.log({data});
    setError("firstName", {type: 'custom', message: 'An error occured'})
  };
      
  return (
    <div style={{padding: 16}}>
      <div style={{marginBottom: 32, textDecoration: 'underline'}}>Kitchen Sink - trial & error</div>

      <Box sx={{backgroundColor: 'white', width: 300}}>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <Stack spacing={2}>
            <Controller
              // render={({field, fieldState}) => {
              render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                <StyledInput type="text" id="firstName" label="First Name"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  />
                )
              }}
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: 'First name required' }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={styles.containedButton}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}

KitchenSinkPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
