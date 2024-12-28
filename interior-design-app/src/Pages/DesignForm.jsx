import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DesignForm = () => {
  // Single state object for all form details
  const [formDetails, setFormDetails] = useState({
    price: "",
    image: "",
    details: "",
    d_rating: "",
    description: "",
    w_id: "101",
    m_name: "",
    m_qty: "",
    m_price: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with details:", formDetails);
    // Perform further actions here (e.g., API call)
    try {
      let response = await axios.post(
        "http://localhost:8080/api/newdesign",
        formDetails
      );
      if (response.status == 200) {
        alert(response.data.message);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
    setFormDetails({
      price: "",
      image: "",
      details: "",
      d_rating: "",
      description: "",
      w_id: "101",
      m_name: "",
      m_qty: "",
      m_price: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add Product Details
        </h2>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formDetails.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formDetails.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Details */}
        <div>
          <label
            htmlFor="details"
            className="block text-sm font-medium text-gray-700"
          >
            Details
          </label>
          <input
            type="text"
            id="details"
            name="details"
            value={formDetails.details}
            onChange={handleChange}
            placeholder="Enter details"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* D_Rating */}
        <div>
          <label
            htmlFor="d_rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="number"
            id="d_rating"
            name="d_rating"
            value={formDetails.d_rating}
            onChange={handleChange}
            placeholder="Enter rating"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formDetails.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* W_ID */}
        <div>
          <label
            htmlFor="w_id"
            className="block text-sm font-medium text-gray-700"
          >
            Worker ID (101-105)
          </label>
          <input
            type="number"
            id="w_id"
            min="101"
            max="105"
            name="w_id"
            value={formDetails.w_id}
            onChange={handleChange}
            placeholder="Enter Worker ID (101-105)"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="m_name"
            className="block text-sm font-medium text-gray-700"
          >
            Material used
          </label>
          <input
            type="text"
            id="m_name"
            name="m_name"
            value={formDetails.m_name}
            onChange={handleChange}
            placeholder="Enter material name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="m_qty "
            className="block text-sm font-medium text-gray-700"
          >
            Quantity used
          </label>
          <input
            type="number"
            id="m_qty"
            name="m_qty"
            value={formDetails.m_qty}
            onChange={handleChange}
            placeholder="Enter material name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="m_price "
            className="block text-sm font-medium text-gray-700"
          >
            Quantity used
          </label>
          <input
            type="number"
            id="m_price"
            name="m_price"
            value={formDetails.m_price}
            onChange={handleChange}
            placeholder="Enter total material price"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesignForm;
