import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayoutHOC";
import DesignHero from "../Components/HeroCarousel/DesignHeroComponent";
import axios from "axios";

// Component to display individual worker details
const WorkerDetails = ({ worker }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <h3 className="text-lg font-bold text-gray-700 mb-2">{worker.name}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Phone:</span> {worker.phone}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Address:</span> {worker.address}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Experience:</span> {worker.experience}{" "}
        years
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Salary:</span> ₹{worker.salary}
      </p>
    </div>
  );
};

// Component to display worker list
const WorkerList = ({ workers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {workers.map((worker) => (
        <WorkerDetails key={worker.w_id} worker={worker} />
      ))}
    </div>
  );
};

// Component to display individual material details
const MaterialDetails = ({ material }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        {material.m_name}
      </h3>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Quantity:</span> {material.m_qty}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Price:</span> ₹{material.m_price}
      </p>
    </div>
  );
};

// Component to display material list
const MaterialList = ({ materials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {materials.map((material) => (
        <MaterialDetails key={material.m_id} material={material} />
      ))}
    </div>
  );
};

// Component to display cost details
const CostDetails = ({ cost }) => {
  return (
    <div className="mt-8 p-6 border rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg">
      <h2 className="text-2xl font-bold">Cost Summary</h2>
      <p className="text-lg mt-2">
        <span className="font-semibold">Worker Cost:</span> ₹{cost.workerCost}
      </p>
      <p className="text-lg">
        <span className="font-semibold">Material Cost:</span> ₹
        {cost.materialCost}
      </p>
      <p className="text-2xl font-bold mt-4">
        <span className="underline">Total Cost:</span> ₹{cost.totalCost}
      </p>
    </div>
  );
};

// Main DesignPage component
const DesignPage = () => {
  const { id } = useParams();
  const [workerDetails, setWorkerDetails] = useState([]);
  const [materialDetails, setMaterialDetails] = useState([]);
  const [costDetails, setCostDetails] = useState(null);

  // Fetch worker details
  useEffect(() => {
    const fetchWorkerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/design/${id}/workerdetail`
        );
        setWorkerDetails(response.data);
      } catch (error) {
        console.error("Error fetching worker details:", error);
      }
    };
    fetchWorkerDetails();
  }, [id]);

  // Fetch material details
  useEffect(() => {
    const fetchMaterialDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/design/${id}/materialdetail`
        );
        setMaterialDetails(response.data);
      } catch (error) {
        console.error("Error fetching material details:", error);
      }
    };
    fetchMaterialDetails();
  }, [id]);

  // Fetch cost details
  useEffect(() => {
    const fetchCostDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/design/${id}/totalcost`
        );
        setCostDetails(response.data);
      } catch (error) {
        console.error("Error fetching cost details:", error);
      }
    };
    fetchCostDetails();
  }, [id]);

  return (
    <>
      <DesignHero design_id={id} />
      <div className="container mx-auto px-4">
        {/* Worker Details Section */}
        <h2 className="text-2xl font-bold text-white mt-8">Worker Details</h2>
        {workerDetails.length > 0 ? (
          <WorkerList workers={workerDetails} />
        ) : (
          <p className="text-gray-600 mt-4">
            No workers found for this design.
          </p>
        )}

        {/* Material Details Section */}
        <h2 className="text-2xl font-bold text-white mt-8">Material Details</h2>
        {materialDetails.length > 0 ? (
          <MaterialList materials={materialDetails} />
        ) : (
          <p className="text-gray-600 mt-4">
            No materials found for this design.
          </p>
        )}

        {/* Cost Details Section */}
        {costDetails && <CostDetails cost={costDetails} />}
      </div>
    </>
  );
};

export default DefaultLayout(DesignPage);
