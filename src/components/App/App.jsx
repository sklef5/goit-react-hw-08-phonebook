import { AppStyled } from './App.styled';
import { useEffect } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MenuBlock from '../NavMenu/NavMenu';
import Register  from '../../Page/RegisterPage/RegisterPage';
import Login from '../../Page/LoginPage/LoginPage'
import Content from '../../Page/ContentPage'
import {selectorIsToken, } from '../../services/isAuth'
import {getCurrentUser} from '../../Redux/Auth/authOperation'

export function App() {
  const isToken = useSelector(selectorIsToken);
  const dispatch = useDispatch()


  const PrivateRoute = ({ component, redirectTo = "/login" }) => {  
    return isToken ? component : <Navigate to={redirectTo} />;
  };
  
  const PublicRoute = ({ component, redirectTo = "/content" }) => {  

    return !isToken ? component : <Navigate to={redirectTo} />;
  };

  useEffect(()=>{
  dispatch(getCurrentUser())
}, [dispatch])

  return(
    <AppStyled>
      <MenuBlock/>
      <Routes>
        <Route path="/register" 
        element={<PublicRoute component={<Register/>}/>}
        />
        <Route path="/login" 
        element={<PublicRoute component={<Login/>}/>}
        />
        <Route path='/content'
         element={<PrivateRoute component={<Content/>}/>} 
        />
        <Route path='*' 
        element={<Navigate to="/content" />}/>
      </Routes>

    </AppStyled>
  );
}
