
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NotFound = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" color="error">
        404 - Page Not Found
      </Typography>
      <Typography sx={{ mt: 2 }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
        Go Back to Home
      </Link>
    </Box>
  );
};

export default NotFound;
