import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  render() {
    const { name, number, onDeleteClick } = this.props;
    return (
      <li className={s.contactItem}>
        {name} : {number}
        <button className={s.btnDelete} type="button" onClick={onDeleteClick}>
          Delete
        </button>
      </li>
    );
  }
}
export default ContactItem;
