import React, { useState } from "react";
import axios from 'axios';
import { API_URL } from "../constants/URL";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmitData = async () => {
    await axios.post(API_URL, {
      username,
      email,
      phone
    })
    navigate('/read')
  }

  return (
    <Form className="createForm">
      <Form.Field>
        <label>Username</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        ></input>
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="Enter phone number"
        ></input>
      </Form.Field>
      <Button onClick={handleSubmitData}>Submit</Button>
    </Form>
  );
}

export default Create;
