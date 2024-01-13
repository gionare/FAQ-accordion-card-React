import AccordionItem from "../AccordionItem";
import styles from "./AccordionCard.module.css";
import { useState } from "react";
import { itemsData } from "../../data/data";

function AccordionCard() {
  const [activeAccordionNumb, setAcctiveAccordionNumb] = useState(null);

  const handleClick = (accordionNumber) => {
    if (activeAccordionNumb === accordionNumber) {
      setAcctiveAccordionNumb(null);
    } else {
      setAcctiveAccordionNumb(accordionNumber);
    }
  };

  return (
    <div className={`${styles.cardContainer}`}>
      {itemsData.map((item) => (
        <AccordionItem
          activeAccordionNumb={activeAccordionNumb}
          handleClick={handleClick}
          itemNumb={item.itemNumb}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default AccordionCard;

// each accordion onClick will check if useState() value is active or not,
// if active than it will disable useState function part
// if it's not active then it wil activate useState function

// using Conditional (ternary) operator: {activeAccordionNumb === 5 ? <p>55555</p> : null}

// if (activeAccordionNumb === 4) {
//   setAcctiveAccordionNumb(null);
// } else {
//   setAcctiveAccordionNumb(4);
// }
// created handleClick() for upper if satement

// <div onClick={() => handleClick(4)}>
//       accordion4444 Title
//       {activeAccordionNumb === 4 ? <p>44444444</p> : null}
//     </div>
// i had this code repetive and it was time to move it as an component
// so i gave activeAccordionNumb and handleClick, value and function to AccrodionItem
// activeAccordionNumb={activeAccordionNumb} - for AccrodionItem

/* <AccordionItem
        activeAccordionNumb={activeAccordionNumb}
        handleClick={handleClick}
        itemNumb={2}
        title="Accordion 222 Title"
        content="22"
      /> */
// this was repetitive.
// map item items.map()
// give map a function, which is transformer ...
/* {items.map((item) => (
      <AccordionItem
      activeAccordionNumb={activeAccordionNumb}
      handleClick={handleClick}
      itemNumb={item.itemNumb}
      title={item.title}
      />
    ))} /> */
