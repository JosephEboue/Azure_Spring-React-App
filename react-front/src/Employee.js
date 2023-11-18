import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    dept: "",
    salary: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9191/employee", employee)
      .then((response) => {
        console.log("Employee created successfully", response.data);
      })
      .catch((error) =>
        console.error("Registration failed", error)
      );
  };

  return (
    <div>
      <h2>New H3-Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="dept"
            value={employee.dept}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Salary:
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>

        <Link to="/">View All Employees</Link>

    </div>
  );
};

export default EmployeeForm;
