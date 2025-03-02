import React from "react";
import { Container, TextField, Button, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <Typography variant="h4" className="logo" onClick={() => navigate("/")}>Book Library</Typography>
        <div>
          <Button color="inherit" onClick={() => navigate("/login")} className="auth-button">Login</Button>
          <Button color="inherit" onClick={() => navigate("/register")} className="auth-button">Sign Up</Button>
        </div>
      </header>

      {/* Search Bar */}
      <Container className="search-container">
        <TextField fullWidth label="Search for books..." variant="outlined" className="search-input" />
      </Container>

      {/* Book List */}
      <Container className="book-list">
        <Typography variant="h5" className="section-title">Popular Books</Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((book) => (
            <Grid item xs={12} sm={6} md={3} key={book}>
              <Card className="book-card">
                <CardMedia className="book-image" image="https://via.placeholder.com/150" title="Book Cover" />
                <CardContent>
                  <Typography variant="h6">Book Title</Typography>
                  <Typography variant="body2" color="textSecondary">Author Name</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* View All Books Button */}
      <Container className="view-all-container">
        <Button variant="contained" color="primary" onClick={() => navigate("/books")}>View All Books</Button>
      </Container>

      {/* Footer */}
      <footer className="footer">
        <Typography variant="body2">&copy; 2025 Book Library. All rights reserved.</Typography>
      </footer>
    </div>
  );
};

export default Home;