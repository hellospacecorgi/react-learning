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

    return (
      <div key={item.id}>
        <div
          className="box has-text-primary-light has-background-info"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });
  return <div className="has-text-primary-light">{renderedItems}</div>;
}

export default Accordion;
