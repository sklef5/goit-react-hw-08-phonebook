import { Contact, Button, List, Block, Wrapper, Emptylist} from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, removeContact } from '../../Redux/Contacts/contactsOperation';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.data);

  
  useEffect(() => {
    dispatch(getContact());
  }, [contacts.length, dispatch]);



  const contactFilter = () => {
    if (filter === '') return contacts;

    return contacts.filter(item => item.name.toLowerCase().includes(filter));
  };
  const contactList = contactFilter();
  return (
    <Wrapper>
    {contactList?.length===0 ? <Emptylist>You don't add contacts yet</Emptylist>:
    (<List>
      {contactList?.map(({ avatar, name, number, id }) => {
        return (
          <Contact key={id}>
            <Block>
              <p>Name: {name}</p>
              <p>Number: {number}</p>
            </Block>
            <Button type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </Button>
          </Contact>
        );
      })}
    </List>)}
      
    </Wrapper>
  );
};

export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDelete: PropTypes.func.isRequired,
// };
