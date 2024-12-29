import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import PaymentModel from "../PaymentModel/Payment.component";
import axios from "axios";
import { userContext } from "../../Context/UserProvider";

//take props
const DesignHero = (props) => {
  const navigate = useNavigate();
  let user = useContext(userContext);
  let id = props.design_id;
  const [costDetails, setCostDetails] = useState(0);
  // Fetch cost details
  useEffect(() => {
    const fetchCostDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/design/${id}/totalcost`
        );
        setCostDetails(response.data.totalCost);
      } catch (error) {
        console.error("Error fetching cost details:", error);
      }
    };
    fetchCostDetails();
  }, [id]);
  let [design, setDesign] = useState({
    title: "",
    desc: "",
    rating: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState(
    "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
  );

  useEffect(() => {
    // Fetch data when component mounts or `id` changes
    const fetchDesign = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/design/${id}`
        );
        if (response.data == "error") {
          console.log("Design does not exists");
          alert("design does not exists");
        } else {
          setImageUrl(response.data.image_url);
          console.log(response.data);
          setDesign({ ...response.data });
        }
      } catch (err) {
        console.log("Error in DesignHeroComponent");
        console.log(err);
      }
    };

    fetchDesign();
  }, [id]);

  const handlePurchase = (price) => {
    setIsOpen(true);
    setPrice(price);
  };
  const handleDelete = async () => {
    console.log("delete");
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/design/${id}`
      );
      if (response.status == 200) {
        navigate("/home");
        alert(response.data.message);
      } else {
        setImageUrl(response.data.image_url);
        console.log(response.data);
        setDesign({ ...response.data });
      }
    } catch (err) {
      console.log("Error in DesignHeroComponent");
      console.log(err);
    }
  };
  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div>
        {/* Mobile */}
        <div className="lg:hidden w-full">
          <img
            src={imageUrl}
            alt={design.title || "Interior Design Cover"}
            className="m-4 rounded-md"
            style={{ width: "calc(100% - 2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>{design.description || "Design details Description"}</h4>
              <h4>Ratings: {design.ratings || "No ratings yet"}</h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button
              className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
              onClick={() => handlePurchase(149)}
              aria-label="Rent Design for ₹149"
            >
              Buy ₹ {costDetails}
            </button>
            <button
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
              onClick={() => handlePurchase(599)}
              aria-label="Buy Design for ₹599"
            >
              Feedback
            </button>
            {(() => {
              if (user.user) {
                if (user.user.u_id == 12) {
                  return (
                    <button
                      className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
                      onClick={() => handleDelete()}
                    >
                      Delete Design
                    </button>
                  );
                }
              }
            })()}
          </div>
        </div>
      </div>
      <div
        className="relative hidden w-full lg:block"
        style={{ height: "30rem" }}
      >
        {/* Large screen */}
        <div
          className="absolute z-10 w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgb(34,34,34) 24.95%, rgb(34,34,34) 38.8%, rgba(34,34,34,0.04) 97.47%, rgba(34,34,34,0) 100%)",
          }}
        >
          <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
            <div className="w-96 h-96">
              <img
                src={imageUrl}
                alt={design.title || "Interior Design Cover"}
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <div className="flex flex-col gap-3 px-4 my-3">
                <h1 className="text-white font-extrabold text-5xl">
                  {design.title || "Design Title"}
                </h1>
                <div className="text-white flex flex-col gap-2">
                  <h4>Ratings: {design.ratings || "No ratings yet"}</h4>
                  <h4>{design.description || "Design Description"}</h4>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 text-xl">
                <button
                  className="bg-red-500 w-60 py-3 text-white font-semibold rounded-lg"
                  onClick={() => handlePurchase(149)}
                  aria-label="Rent Design for ₹149"
                >
                  Buy ₹ {costDetails}
                </button>
                <Link to={`/design/${id}/feedback`}>
                  <button
                    className="bg-red-600 w-60 py-3 text-white font-semibold rounded-lg"
                    aria-label="Buy Design for ₹599"
                  >
                    Feedback
                  </button>
                </Link>
                {(() => {
                  if (user.user) {
                    if (
                      user.user.username == "admin" &&
                      user.user.password == "admin"
                    ) {
                      return (
                        <button
                          className="bg-blue-600 px-4 py-3 text-white font-semibold rounded-lg"
                          onClick={() => handleDelete()}
                        >
                          Delete Design
                        </button>
                      );
                    }
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
        <img
          src={imageUrl}
          alt={design.title || "Interior Design Cover"}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default DesignHero;
