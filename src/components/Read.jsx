import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constants/URL";
import { Table, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const handleEdit = ({id, username, email, phone}) => {
    localStorage.setItem('id', id)
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)
    navigate('/update')
  }

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      // console.log(res.data);
      callGetAPI();
    } catch (error) {
      console.log("Error deleting the record: ", error);
    }
  };

  const callGetAPI = async () => {
    const response = await axios.get(API_URL);
    // console.log(response.data);
    setApiData(response.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <Table singleline>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {apiData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.username}</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
            <Table.Cell>{data.phone}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleEdit(data)}>Edit</Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleDelete(data.id)}>Delete</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Read;
