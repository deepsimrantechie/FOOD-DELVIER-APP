import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-bg"></div> {/* Background Image Overlay */}
      <div className="header-contents">
        <h2>Order Your Favorite Food Here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes made
          with the finest ingredients and culinary expertise. Our mission is to
          satisfy your cravings and elevate your dining experience.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
