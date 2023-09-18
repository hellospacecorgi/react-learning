import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    { id: "asdf", label: "can i do this", content: "yea" },
    { id: "qwer", label: "can i do that", content: "nah" },
    { id: "zcxv", label: "can i do these", content: "yea nah" },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
