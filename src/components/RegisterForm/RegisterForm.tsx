import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { register } from "../../redux/auth/authOperation";
import { useAppDispatch } from "../../hooks/hooks";
import { Notify } from "notiflix";

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      register({
        email: formData.email,
        password: formData.password,
      })
    );
    console.log(formData.email, formData.password);
    Notify.info("Verification link sent to email. Check your mail.");
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
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
