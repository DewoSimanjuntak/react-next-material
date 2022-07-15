import { TextField } from "@mui/material";

// expected props
const props = {
  fields: {
    onChange: () => {},
    type: "",
    key: "",
    textFieldProps,
  },
};

export const normalField = ({ ...props }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        {...textFieldProps}
      />
    </>
  );
};

export const FormFieldsGenerator = ({ ...props }) => {
  let element = normalField(props);
  switch (type) {
    case "reddit":
      return (
        <>
          <>
            <RedditTextField
              variant="filled"
              style={{ marginTop: 11 }}
              sx={{
                m: 1,
                backgroundColor: "white",
                borderRadius: "4px",
                borderColor: "#B5B5B5",
              }}
              {...props}
            />
          </>
        </>
      );

    default:
      return normalField(props);
  }
};

export default FormMessage;
