import React from "react";

const Map = () => {
  return (
    <div className="mt-20">
      <div className="w-full h-96 border-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0910698176262!2d91.86575637393635!3d24.894875043882283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750550034583183%3A0xa89d57671c0f654a!2sOptiWebFusion!5e0!3m2!1sen!2sbd!4v1730097564810!5m2!1sen!2sbd"
        //   width="600"
        //   height="450"
        //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full bg-black"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
