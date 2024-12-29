import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { userContext } from "../../Context/UserProvider";

const PaymentModel = ({ isOpen, setIsOpen, price }) => {
  const user = useContext(userContext);
  const { id } = useParams();
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

  const closeModal = async (e) => {
    if (!user.user && e.target.id == "pay")
      // console.log(e.target.id);
      return alert("Please Sign-in to make payment");
    try {
      let response = await axios.post("http://localhost:8080/api/payment", {
        u_id: user.user.u_id,
        d_id: id,
        total: costDetails,
      });
      if (response.status == 200) {
        alert("Payment success");
      }
    } catch (err) {
      console.log(err);
    }
    setIsOpen(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make your payment.
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Make your payment by clicking on the button.
                  </p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    type="button"
                    id="pay"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white-900 hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-900 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Pay ₹{costDetails}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white-900 hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-900 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModel;
