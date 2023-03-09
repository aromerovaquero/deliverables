import React from "react";
import Button from 'react-bootstrap/Button';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.user}</td>
      <td>{contact.delivType}</td>
      <td>{contact.delivName}</td>
      <td>{contact.issue}</td>
      <td>{contact.startDate}</td>
      <td>{contact.endDate}</td>
      <td>
        <Button variant="success" type="button" 
          onClick={(e) => handleEditClick(e, contact)}>Edit</Button>  
        <Button variant="danger" type="button" 
          onClick={(e) => handleDeleteClick(contact.id)}>Delete</Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;