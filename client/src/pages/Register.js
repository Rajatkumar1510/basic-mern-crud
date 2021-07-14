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
import { registerUser } from "../redux/actions/auth";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state);
  // console.log(user);
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formInput));
    // history.push("/");
  };
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Paper>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6">Register Yourself </Typography>
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            fullWidth
            value={formInput.email}
            onChange={handleChange}
          />
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            fullWidth
            value={formInput.name}
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

export default Register;
