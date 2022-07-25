import { colors } from '../../../styles/theme'

export const styles = {
  container: {
    width: 350,
    padding: "1rem 1rem ",
    backgroundColor: "white",
    alignSelf: "center",
    margin: "auto",
    borderRadius: "5px"
  },
  form: {
    display: "grid",
    marginTop: "8px"
  },
  titleStyles: {
    paddingTop: "6px",
    marginLeft: "8px",
    marginRight: "8px",
    color: "#366A70",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "26px",
  },
  passwordLabel: {
    margin: "8px",
    fontSize: "1rem",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
  },
  divMargin: {
    marginLeft: "8px",
    marginRight: "8px",
    paddingBottom: "6px"
  },
  bottomParagraph: {
    color: "#366A70",
    fontSize: "14px",
    textAlign: "center",
    fontWeight: 400,
    lineHeight: "18px",
  },
  loginLink: {
    color: "#3EAFBD",
    textDecoration: "underline"
  },
  containedButton: {
    backgroundColor: "#2095a9",
    borderRadius: 46,
    color: "white",
    margin: 1,
    "&:hover": {
      backgroundColor: "#1c8696",
    },
  },
  registeredUsernameWrapper: {
    padding: 16,
    borderRadius: 4,
    color: "#366A70",
    backgroundColor: `${colors.teal}0d`,
    margin: 8
  }
}