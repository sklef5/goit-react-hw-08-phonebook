import s from './NavMenu.module.scss';
import { logoutUser } from '../../Redux/Auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { selectorIsUser as user } from '../../services/isAuth';

export const AuthBlock = () => {
  const dispatch = useDispatch();
  const isUser = useSelector(user);
  return (
    <ul className={s.userBlock}>
      <li className={s.userAuth}>{isUser}</li>
      <li>
        <button onClick={() => dispatch(logoutUser())} className={s.btnLogOut}> Logout </button>
      </li>
    </ul>
  );
};
