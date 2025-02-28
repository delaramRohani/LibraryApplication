import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}

      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button class = "login-btn"
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>

      <Box class = "signup-link" sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2">
          Don't have an account?{" "}
          <Button class = "signup-btn" onClick={() => navigate("/register")}>Sign Up</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;