import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import logo from "./h3.svg";
//import Employee from "./Employee";
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:9191/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) =>
        console.error("Erreur de chargement des employés", error)
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>List of H3 Employees from Azure DB</h3>
        <table>
          <tr>
            <th>Nom</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.dept}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </table>
        <br></br>

        <a href="./Employee.js">Add New Employee</a>

      </header>
    </div>
  );
}

export default App;
