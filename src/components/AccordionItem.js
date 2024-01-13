export default function AccordionItem(props) {
  const { handleClick, activeAccordionNumb, itemNumb, title, content } = props;
  return (
    <div onClick={() => handleClick(itemNumb)}>
      {title}
      {activeAccordionNumb === itemNumb ? <p>{content}</p> : null}
    </div>
  );
}

// props is an object and it's always from -- Parent to Child
// i have to mention props here "destructurization":  const {handleClick, activeAccordionNumb} = props;
