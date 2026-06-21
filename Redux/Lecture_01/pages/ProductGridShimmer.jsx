import React from "react";
import "../ProductGridShimmer.css";

export default function ProductGridShimmer() {
  return (
    <div className="products-shimmer-grid">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="product-shimmer-card">
          <div className="shimmer shimmer-image"></div>

          <div className="shimmer shimmer-title"></div>
          <div className="shimmer shimmer-title short"></div>

          <div className="shimmer shimmer-rating"></div>

          <div className="shimmer shimmer-price"></div>

          <div className="shimmer shimmer-button"></div>
        </div>
      ))}
    </div>
  );
}