import { nanoid } from 'nanoid';
import { Input, Label, FormStyled } from 'components/Form/Form.styled';
import { filterContacts } from '../../Redux/Filter/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FormStyled>
      <Label htmlFor="">Find contacts by name</Label>
      <Input
        id={filterId}
        type="text"
        name="filter"
        // value={form.value}
        onChange={onChange}
      />
    </FormStyled>
  );
};
export default Filter;
