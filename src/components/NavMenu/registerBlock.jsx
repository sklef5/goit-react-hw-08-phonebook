import s from './NavMenu.module.scss';
import { NavLink } from 'react-router-dom';

export const ForRegister = () => {
  return (
    <>
      <ul className={s.authBlock}>
        <li>
          <NavLink to="login" className={s.link}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="register" className={s.link}>
            Register
          </NavLink>
        </li>
      </ul>
    </>
  );
};
