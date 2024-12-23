import React from "react";

const DesignHero = () => {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D";

  return (
    <>
      <div>
        {/* Mobile */}
        <div className="lg:hidden w-full">
          <img
            src={imageUrl}
            alt="Interior Design Cover"
            className="m-4 rounded-md"
            style={{ width: "calc(100% - 2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>Design details Description ex</h4>
              <h4>Design details Description ex</h4>
              <h4>Design details Description ex</h4>
            </div>
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
            <div className="w-64 h-96">
              <img
                src={imageUrl}
                alt="Interior Design Cover"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <img
          src={imageUrl}
          alt="Interior Design Cover"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </>
  );
};

export default DesignHero;
