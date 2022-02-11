import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from 'ContactItem';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onContactDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, onContactDelete } = this.props;

    return (
      <ul className={s.contactList}>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <ContactItem
              key={id}
              onDeleteClick={() => {
                onContactDelete(id);
              }}
              name={name}
              number={number}
            ></ContactItem>
          );
        })}
      </ul>
    );
  }
}
export default ContactList;
