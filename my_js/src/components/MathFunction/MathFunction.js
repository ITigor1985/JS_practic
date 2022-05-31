const MathFunction = () => {
  let fruit = prompt("Какой фрукт купить?", "apple");

  let bag = {
    [fruit]: 5, // имя свойства будет взято из переменной fruit
  };
  alert(bag.apple); // 5, если fruit="apple"

  return <code>{bag.apple}</code>;
};

export default MathFunction;
