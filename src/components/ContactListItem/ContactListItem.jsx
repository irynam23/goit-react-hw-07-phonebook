import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      {name}: {phone}
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
