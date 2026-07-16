import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./styles.css";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (!items || items.length === 0) {
    return <p>No items available</p>;
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-title"
            onClick={() => handleClick(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.title}</span>

            {openIndex === index ? (
              <ChevronUp style={{ float: "right" }} />
            ) : (
              <ChevronDown style={{ float: "right" }} />
            )}
          </button>

          {openIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;