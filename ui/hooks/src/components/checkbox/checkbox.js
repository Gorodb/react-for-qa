import { useState } from 'react';

function Checkbox({_id, onClickHandler }) {
  const [checked, toggleChecked] = useState(false)

  const onCheckHandler = (id) => {
    onClickHandler(id)
    toggleChecked(!checked)
  }

  return (
    <>
      <input type="checkbox" name={_id} checked={checked} onChange={() => toggleChecked(!checked)} onClick={() => onCheckHandler(_id)} />
      <span style={{cursor: "pointer"}} onClick={() => onCheckHandler(_id)}>&nbsp; Check it</span>
    </>
  )
}

export default Checkbox;
