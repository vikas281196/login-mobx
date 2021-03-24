import React, { Fragment } from "react";
import { Typography, Grid, TextField, Avatar, Button } from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";
import useStyles from "./Styles";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

const Signin = observer(({ userStore }) => {
  let history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    userStore.setUsers(JSON.parse(localStorage.getItem("users")));

    const { email } = data;
    userStore.setLoginUser(email);

    if (userStore.isLogin) {
      history.push("/userprofile");
    } else {
      history.push("/errorpage");
    }
  };

  return (
    <Fragment>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={register}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Fragment>
  );
});

export default Signin;
