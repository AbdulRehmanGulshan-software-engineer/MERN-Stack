import React from "react";

const Success = ({ title = "Added to cart", message }) => {
  return (
    <div className="success-toast">
      <span className="success-toast-icon">✓</span>

      <div className="success-toast-content">
        <span className="success-toast-title">{title}</span>
        <span className="success-toast-message">{message}</span>
      </div>
    </div>
  );
};

export default Success;