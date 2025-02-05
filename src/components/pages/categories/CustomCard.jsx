// CustomCard.js
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const CustomCard = ({
  title,
  price,
  category,
  status,
  invoiceNumber,
  expirationDate,
  onView,
  backgroundColor = "#ffffff", // Default background color
  textColor = "#000000", // Default text color
}) => {
  return (
    <Card
      sx={{
        backgroundColor, // Dynamic background color
        color: textColor, // Dynamic text color
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
        ":hover": {
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <Typography variant="body2">Category: {category}</Typography>
        <Typography variant="body2">Status: {status}</Typography>
        <Typography variant="body2">Invoice #: {invoiceNumber}</Typography>
        <Typography variant="body2">Expires: {expirationDate}</Typography>
        <Button
          variant="contained"
          onClick={onView}
          sx={{
            marginTop: "16px",
            backgroundColor: "#007bff",
            color: "#ffffff",
          }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
