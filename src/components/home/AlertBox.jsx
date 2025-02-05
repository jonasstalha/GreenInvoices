import { useState, useEffect } from "react";
import "../home/amert.css"
const InvoiceAlert = () => {
  const mockInvoices = [
    {
      invoiceNumber: "INV001",
      category: "Electronics",
      price: 300,
      paymentStatus: "unpaid",
      expirationDate: "2023-11-21",
    },
    {
      invoiceNumber: "INV002",
      category: "Furniture",
      price: 500,
      paymentStatus: "unpaid",
      expirationDate: "2023-09-15",
    },
    {
      invoiceNumber: "INV003",
      category: "Books",
      price: 100,
      paymentStatus: "paid",
      expirationDate: "2023-12-05",
    },
  ];

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const today = new Date();
    const overdue = mockInvoices.filter((invoice) => {
      if (invoice.paymentStatus !== "paid") {
        const expirationDate = new Date(invoice.expirationDate);
        const daysDiff = (today - expirationDate) / (1000 * 60 * 60 * 24); // Days difference
        return daysDiff >= 60;
      }
      return false;
    });
    setAlerts(overdue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="alert-box">
      {alerts.length > 0 ? (
        <div>
          <h2>Overdue Invoices</h2>
          {alerts.map((alert, index) => (
            <div key={index}>
              <p>
                Invoice <span>{alert.invoiceNumber}</span> is overdue!
              </p>
              <p>Category: {alert.category}</p>
              <p>Price: ${alert.price}</p>
              <p>Please pay it immediately.</p>
            </div>
          ))}
        </div>
      ) : (
        <p>All invoices are up to date!</p>
      )}
    </div>
  );
};

export default InvoiceAlert;
