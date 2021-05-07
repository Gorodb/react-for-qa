import classes from './buttons.module.scss'

const DeleteButton = ({ onClickHandler }) => (
  <span className={classes.btn} onClick={onClickHandler}>&#10008;</span>
)

export default DeleteButton;
