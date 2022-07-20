import DefaultLayout from "../components/templates/default";
import Button from "@mui/material/Button";
import StyledInput from '../components/atoms/Input/input'
import { useForm, Controller } from "react-hook-form";
import styles from "../../styles/Login.module.css";
import { Box } from "@mui/material";
// import Posts from "../features/posts/Posts";

import { useDispatch } from 'react-redux'
import { fetchUser } from '../store/user'
import { useEffect } from "react";

export default function KitchenSinkPage() {
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
      console.log({data});
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser({ limit: 5 }))
  }, [dispatch])
  
  return (
    <section className={styles.authComponentContainer}>
      <Box sx={{backgroundColor: 'white'}}>
        {/* <Posts /> */}
        {/* <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <Controller
            // render={({field, fieldState}) => {
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              // console.log({fieldState})
              return (
              <StyledInput type="dob" id="firstName" label="First Name"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                // {...field}
                // {...fieldState}
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
        </form> */}

        Kitchen Sink
      </Box>
    </section>
  );
}

KitchenSinkPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};


