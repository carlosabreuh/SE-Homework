import React, { useState, useEffect } from "react";
import "./indexindex.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    { itemName: "item 1", brand: "item 1", quantity: 1, isPurchsed: false },
    { itemName: "item 2", brand: "item 2", quantity: 2, isPurchsed: false },
    { itemName: "item 3", brand: "item 3", quantity: 3, isPurchsed: false },
  ]);

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input className="add-item-input" placeholder="Add an item..." />
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name">
                {/* HINT: replace false with a boolean indicating the item has been completed or not */}
                {item.isPurchsed ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>Item 1</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: 6</div>
      </div>
    </div>
  );
};

export default App;
