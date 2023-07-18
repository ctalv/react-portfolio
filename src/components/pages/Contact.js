// activites 15 and 16 for forms

// for now, just email and phone links

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


export default function Contact() {
// Set initial values to an empty string
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');

const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  // Based on the input type, we set the state of either email, username, and password
  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'firstName') {
    setFirstName(inputValue);
  } else {
    setLastName(inputValue);
  }
};

const handleFormSubmit = (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();

  // Alert the user their first and last name, clear the inputs
  alert(`
  Hello ${firstName} ${lastName}! This form currently has no back end functionality. 
  If you would like to contact me, please user the email or phone 
  number provided. 
  Thank you!
  `);
  setEmail('');
  setFirstName('');
  setLastName('');
};


  return (
    <div>
      <h2>Contact</h2>
      <p>
        clairetalverson@gmail.com 
        979-900-5446
      </p>

      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
                <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}
