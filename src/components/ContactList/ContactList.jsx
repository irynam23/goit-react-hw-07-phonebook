import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {!!contacts.length && (
        <ul>
          {contacts.map(({ name, phone, id }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
    </div>
  );
};
