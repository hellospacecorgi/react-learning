import { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-l">
        {" "}
        {isExpanded ? <AiFillCaretDown /> : <AiFillCaretLeft />}
      </span>
    );

    // conditional rendering where && renders the first truthy value
    // so if the first value is false, it will not render the second value
    const content = isExpanded && (
      <div className="border-b p-5">{item.content}</div>
    );

    const handleClick = (index) => {
      console.log("STALE STATE", expandedIndex);
      setExpandedIndex((currentIndex) => {
        console.log("UP TO DATE STATE", currentIndex);
        expandedIndex === index
          ? setExpandedIndex(-1)
          : setExpandedIndex(index);
      });
    };

    const dataBsTargetId = `#${item.id}`;

    return (
      // <div key={item.id}>
      //   <div
      //     className="box has-text-primary-light has-background-info"
      //     onClick={() => handleClick(index)}
      //   >
      //     {item.label}
      //     {icon}
      //   </div>
      //   {content}
      // </div>
      <div className="accordion-item" key={item.id}>
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={dataBsTargetId}
            aria-expanded="false"
            aria-controls={item.id}
          >
            Accordion Item #{item.id} {item.label}
          </button>
        </h2>
        <div
          id={item.id}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{item.content}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="accordion has-text-primary-light" id="accordionExample">
      {renderedItems}
    </div>
  );
}

export default Accordion;
