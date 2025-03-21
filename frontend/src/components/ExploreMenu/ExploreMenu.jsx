import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, SetCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to serve fresh and delicious food to satisfy your cravings.
      </p>

      {/* Menu Categories */}
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              SetCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
