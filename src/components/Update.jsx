import React, { useState, useEffect } from 'react'
import { Form, Button } from "semantic-ui-react";
import { API_URL } from '../constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try{
      const res = await axios.put(`${API_URL}/${id}`, {
        username,
        email,
        phone
      })
      console.log(res.data)
      navigate('/read');
    } catch(error){
      console.log("Error updating the record: ", error)
    }
  }

  useEffect(() => {
    setId(localStorage.getItem('id'))  
    setUsername(localStorage.getItem('username'))   
    setEmail(localStorage.getItem('email')) 
    setPhone(localStorage.getItem('phone')) 
  }, [])

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
      <Button onClick={handleUpdate}>Update</Button>
    </Form>
  )
}

export default Update