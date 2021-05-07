import { NavLink } from "react-router-dom";

import classes from './menu.module.scss'

const Menu = () => {
  return (
    <div className={classes.menu}>
      <div className={classes['menu-container']}>
        <div className={classes['menu-item']}><NavLink to='/' exact alt="">Опросы</NavLink></div>
        <div className={classes['menu-item']}><NavLink to='/create' alt="">Создать опрос</NavLink></div>
      </div>
    </div>
  )
}

export default Menu;
