import ContactList from '../components/ContactList/ContactList';
import { Form } from '../components/Form/Form';
import Filter from '../components/Filter/Filter'
const ContentBlock = () => {
  return (
    <>
      <Form />
      <Filter/>
      <ContactList />
    </>
  );
};
export default ContentBlock;
