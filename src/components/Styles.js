import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "10px",
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: "20px",
  },
  submit: {
    marginTop: "20px",
  },
}));

export default useStyles;
