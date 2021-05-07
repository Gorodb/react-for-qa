import { useState } from "react";

const Checkbox = ({ id, onCheckHandler }) => {
  const [isChecked, toggleChecked] = useState(false)

  const clickHandler = (id) => {
    toggleChecked(!isChecked)
    onCheckHandler(id)
  }

  return (
    <>
      <input type='checkbox' checked={isChecked} onChange={() => clickHandler(id)} name='checkbox' />
    </>
  )
};

export default Checkbox;
