import { Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard"; // Import the CustomCard component

const data = [
  {
    title: "Product 1",
    price: 100,
    category: "Category 1",
    status: "Active",
    invoiceNumber: "INV-001",
    expirationDate: "2022-12-31",
    onView: () => {
      alert("Viewing Product 1");
    },
  },
  {
    title: "Product 2",
    price: 200,
    category: "Category 2",
    status: "Inactive",
    invoiceNumber: "INV-002",
    expirationDate: "2023-01-31",
    onView: () => {
      alert("Viewing Product 2");
    },
  },  {
    title: "Product 1",
    price: 100,
    category: "Category 1",
    status: "Active",
    invoiceNumber: "INV-001",
    expirationDate: "2022-12-31",
    onView: () => {
      alert("Viewing Product 1");
    },
  },
  {
    title: "Product 2",
    price: 200,
    category: "Category 2",
    status: "Inactive",
    invoiceNumber: "INV-002",
    expirationDate: "2023-01-31",
    onView: () => {
      alert("Viewing Product 2");
    },
  },
  {
    title: "Product 1",
    price: 100,
    category: "Category 1",
    status: "Active",
    invoiceNumber: "INV-001",
    expirationDate: "2022-12-31",
    onView: () => {
      alert("Viewing Product 1");
    },
  },
  {
    title: "Product 2",
    price: 200,
    category: "Category 2",
    status: "Inactive",
    invoiceNumber: "INV-002",
    expirationDate: "2023-01-31",
    onView: () => {
      alert("Viewing Product 2");
    },
  },
  {
    title: "Product 1",
    price: 100,
    category: "Category 1",
    status: "Active",
    invoiceNumber: "INV-001",
    expirationDate: "2022-12-31",
    onView: () => {
      alert("Viewing Product 1");
    },
  },
  {
    title: "Product 2",
    price: 200,
    category: "Category 2",
    status: "Inactive",
    invoiceNumber: "INV-002",
    expirationDate: "2023-01-31",
    onView: () => {
      alert("Viewing Product 2");
    },
  },
  // Add more data here...
];

const Category1 = () => {
  const cardBackgroundColor = "#FADA7A"; // Light blue background for this page
  const cardTextColor = "#212121"; // Dark blue text for this page

  return (
    <div style={{ padding: "16px" }}> {/* Wrapper div for the page */}
      {/* Title Section */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        This is Category five
      </Typography>

      {/* Grid Section */}
      <Grid
        container
        spacing={2} // Adds space between grid items
        sx={{
          padding: 2,
        }}
      >
        {data.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            {/* Each card will take 12 columns on small screens, 6 on medium, etc. */}
            <CustomCard
              title={item.title}
              price={item.price}
              category={item.category}
              status={item.status}
              invoiceNumber={item.invoiceNumber}
              expirationDate={item.expirationDate}
              onView={item.onView}
              backgroundColor={cardBackgroundColor} // Pass background color
              textColor={cardTextColor} // Pass text color
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Category1;
