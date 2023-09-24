import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    { id: "item-1", label: "can i do this", content: "yea" },
    { id: "item-2", label: "can i do that", content: "nah" },
    { id: "item-3", label: "can i do these", content: "yea nah" },
  ];

  return (
    <div className="container">
      <p className="h1 p-3 mb-2 bg-success text-white">
        Accordion - useState / bootstrap
      </p>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
