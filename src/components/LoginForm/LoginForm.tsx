import { Box, TextField, Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import { login } from "../../redux/auth/authOperation";
import { useState } from "react";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      login({
        email: formData.email,
        password: formData.password,
      })
    );
    console.log(formData.email, formData.password);
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <Box>
          <TextField
            name="email"
            type="text"
            placeholder="johnny@email.com"
            variant="outlined"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            variant="outlined"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
          />
        </Box>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          className="submit-button"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
