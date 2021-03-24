import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signup"
          >
            SignUp
          </Button>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signin"
          >
            SignIn
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
