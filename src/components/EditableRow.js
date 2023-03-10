import React from "react";
import Button from 'react-bootstrap/Button';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a user..."
          name="user"
          value={editFormData.user}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a deliverable type..."
          name="delivType"
          value={editFormData.delivType}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a deliverable name..."
          name="delivName"
          value={editFormData.delivName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter a issue..."
          name="issue"
          value={editFormData.issue}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a Start Date..."
          name="startDate"
          value={editFormData.startDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a End Date..."
          name="endDate"
          value={editFormData.endDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button variant="success" type="submit">Save</Button>  
        <Button variant="success" type="button" onClick={handleCancelClick}>Cancel</Button>  
      </td>
    </tr>
  );
};

export default EditableRow;