import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Cgtest = () => {
  const navigate = useNavigate(); // Hook to handle navigation
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <div>
      <div>Cgtest</div>
      <button onClick={handleBack} style={{ marginTop: "20px" }}>
        Go Back
      </button>
    </div>
  );
}
export default Cgtest;