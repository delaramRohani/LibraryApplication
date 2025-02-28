import React, { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Welcome {user ? user.name : "Guest"}!
      </Typography>

      {user && (
        <Typography variant="h6" align="center">
          Your email: {user.email}
        </Typography>
      )}

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ marginTop: "20px" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Home;
