import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import './signup.css'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <Container class="signup-container">
      <Box>
        <Typography class="signup-title">Sign Up</Typography>
      </Box>

      {error && <Alert class="signup-error-message">{error}</Alert>}

      <form onSubmit={handleRegister}>
        <TextField
          className="signup-input-field"
          label="Full Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          className="signup-input-field"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          className="signup-input-field"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button class="signup-register-button" type="submit">
          Sign Up
        </Button>
      </form>

      <Box id="login-link">
        <Typography variant="body2">
          Already have an account?{" "}
          <Button onClick={() => navigate("/login")}>Login</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;