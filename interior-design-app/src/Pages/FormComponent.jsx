import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "../Context/UserProvider";

const FormComponent = () => {
  const user = useContext(userContext);
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    u_id: user.user.u_id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };
  let { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formDetails);
    // Reset the form
    setFormDetails({ description: "" });
    try {
      let response = await axios.post(
        `http://localhost:8080/api/design/${id}/feedback`,
        {
          id,
          formDetails,
        }
      );
      console.log(response.data);
      if (response.data == "success") navigate(`/design/${id}`);
    } catch (err) {
      console.log(err + "  error in formcomponent");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Description Form
        </h2>
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
            min={1}
            max={5}
            name="d_rating"
            value={formDetails.d_rating}
            onChange={handleChange}
            placeholder="Enter rating"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formDetails.description}
            required
            onChange={handleChange}
            placeholder="Enter your description here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
