import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../redux/actions/auth";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  console.log(user);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formInput));
    history.push("/");
  };
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6">Login Yourself </Typography>
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={formInput.email}
            onChange={handleChange}
          />

          <TextField
            name="password"
            variant="outlined"
            label="Password"
            fullWidth
            type="password"
            value={formInput.password}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
