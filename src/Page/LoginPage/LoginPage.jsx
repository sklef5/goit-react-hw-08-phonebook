import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {loginUser} from '../../Redux/Auth/authOperation';
import s from './LoginPage.module.scss';

const initialStates = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState(initialStates);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(form));
    setForm(initialStates)
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Login</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.labelField}>
          E-mail
          <input
            className={s.inputField}
            type="email"
            name="email"
            placeholder='Enter your e-mail'
            title=""
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={s.labelField}>
          Password
          <input
            className={s.inputField}
            placeholder='Enter your password'
            type="password"
            name="password"
            title=""
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={s.button}>Add contact</button>
      </form>
    </div>
  );
};

export default LoginPage;
