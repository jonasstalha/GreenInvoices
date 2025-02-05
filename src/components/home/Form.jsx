import { useState } from "react";
import "./facture.css"; // Link the above CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    file: null,
    price: "",
    category: "",
    paymentStatus: "",
    invoiceNumber: "",
    expirationDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formPayload = new FormData();
      formPayload.append("file", formData.file);
      formPayload.append("price", formData.price);
      formPayload.append("category", formData.category);
      formPayload.append("paymentStatus", formData.paymentStatus);
      formPayload.append("invoiceNumber", formData.invoiceNumber);
      formPayload.append("expirationDate", formData.expirationDate);

      const response = await fetch("https://your-api-endpoint.com/upload", {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Formm submitted successfully:", result);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="formm" onSubmit={handleSubmit}>
      <h2>Invoice Submission Form</h2>

      <label>
        File:
        <input type="file" name="file" onChange={handleChange} />
      </label>

      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Payment Status:
        <select
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="pending">Pending</option>
        </select>
      </label>

      <label>
        Invoice Number:
        <input
          type="text"
          name="invoiceNumber"
          value={formData.invoiceNumber}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Expiration Date:
        <input
          type="date"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit Invoice</button>
    </form>
  );
};

export default Form;
