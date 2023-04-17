import { useState } from 'react';
import { registerUser } from '../../Redux/Auth/authOperation';
import { useDispatch } from 'react-redux';
import s from './RegisterPage.module.scss';

const initialStates = {
  name: '',
  email: '',
  password: '',
};
const RegisterPage = () => {
  const [form, setForm] = useState(initialStates);
  const dispatch = useDispatch();

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
    dispatch(registerUser(form));
    setForm(initialStates);
  };
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Registration</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.labelField}>
          Name
          <input
            className={s.inputField}
            type="text"
            name="name"
            title=""
            placeholder="Enter your name"
            value={form.login}
            onChange={handleChange}
            required
          />
        </label>
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

export default RegisterPage;
