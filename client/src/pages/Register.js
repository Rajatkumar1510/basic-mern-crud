import React from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

const Register = () => {
  return (
    <Container>
      <Paper>
        <form>
          <Typography variant="h6">Register Yourself </Typography>
          <TextField name="title" variant="outlined" label="Title" fullWidth />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
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
          <Button variant="contained" color="secondary" size="small" fullWidth>
            Clear
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
