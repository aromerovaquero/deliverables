import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Select from "react-select";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    user: "",
    delivType: "",
    delivName: "",
    issue: "",
    startDate: "",
    endDate: "",
  });

  const [editFormData, setEditFormData] = useState({
    user: "",
    delivType: "",
    delivName: "",
    issue: "",
    startDate: "",
    endDate: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldUser = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    console.log(fieldUser);
    console.log(fieldValue);

    const newFormData = { ...addFormData };
    newFormData[fieldUser] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldUser = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldUser] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      user: addFormData.user,
      delivType: addFormData.delivType,
      delivName: addFormData.delivName,
      issue: addFormData.issue,
      startDate: addFormData.startDate,
      endDate: addFormData.endDate,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      user: editFormData.user,
      delivType: editFormData.delivType,
      delivName: editFormData.delivName,
      issue: editFormData.issue,
      startDate: editFormData.startDate,
      endDate: editFormData.endDate,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      user: contact.user,
      delivType: contact.delivType,
      delivName: contact.delivName,
      issue: contact.issue,
      startDate: contact.startDate,
      endDate: contact.endDate,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const delivTypeList = [
    { label: 'Source Code', value: 'type1'},
    { label: 'Analysis', value: 'type2'},
  ]

  const handleSelectChange = ( event ) => {
    const newFormData = { ...addFormData };
    newFormData['delivType'] = event.label;

    setAddFormData(newFormData);
  }

  return (
    <div className="app-container">
      <h2>Add a Deliverable</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="user"
          required="required"
          placeholder="Enter a user..."
          onChange={handleAddFormChange}
        />
        <Select
          options = { delivTypeList } 
          name="delivType"
          required="required"
          placeholder="Enter a deliverable type..."
          onChange={handleSelectChange}
        />
        <input
          type="text"
          name="delivName"
          required="required"
          placeholder="Enter a deliverable name..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="issue"
          required="required"
          placeholder="Enter an issue..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="startDate"
          required="required"
          placeholder="Enter a Start Date..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="endDate"
          required="required"
          placeholder="Enter a End Date..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Deliverable Type</th>
              <th>Deliverable Name</th>
              <th>Issue</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;