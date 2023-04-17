import {  useSelector} from 'react-redux';
import s from './NavMenu.module.scss';
import {selectorIsToken as token} from '../../services/isAuth'

import {ForRegister} from './registerBlock'
import {AuthBlock} from './authBlock'

const NavMenuBlock = () => {
  const isToken = useSelector(token);
  return (
    <div className={s.wrapper}>
      <div className={s.menuBlock}>
        <p className={s.logo}>PHONEBOOK</p>
        {!isToken ? <ForRegister/>:<AuthBlock/>}       
        
      </div>
    </div>
  );
};
export default NavMenuBlock;
