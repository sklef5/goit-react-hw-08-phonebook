import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormStyled, Input, Label } from './Form.styled';
import { Button } from 'components/ContactList/ContactList.styled';
import { addContact } from '../../Redux/Contacts/contactsOperation';

const initialStates = {
  name: '',
  number: '',
};

export const Form = () => {
  const dispatch = useDispatch();

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
  const newContact = { ...form };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(newContact));
    setForm(initialStates);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>Name:
      <Input
        type="text"
        name="name"

        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={form.name}
        onChange={handleChange}
      /></Label>
      <Label>Number:
      <Input
        type="tel"
        name="number"

        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={form.number}
        onChange={handleChange}
      /></Label>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};
