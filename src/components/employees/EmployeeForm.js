import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom';
import { ProductContext } from "../products/ProductsProvider";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export const EmployeeForm = () => {
  const history = useHistory()
  const { createEmployee, getEmployeesById, employee } = useContext(EmployeeContext)
  const { product, getProducts } = useContext(ProductContext)
  useEffect(() => {
    getProducts()
  }, [])

  /*
      Since the input fields are bound to the values of
      the properties of this state variable, you need to
      provide some default values.
  */
  const [currentEmployee, setCurrentEmployee] = useState({
    first_name: "",
    last_name: "",
    position: "",
    dateHired: "",
    monthlySales: 0,
    departmentId: 0,
    stock: 0,
    image: ""
  })


  const handleControlledInput = (event) => {
    const newEmployeeState = { ...currentEmployee }
    newEmployeeState[event.target.name] = event.target.value
    setCurrentEmployee(newEmployeeState)
  }


  return (
    <Form>
      <FormGroup>
      <Label for="formTitle">Add New Employee</Label>
    </FormGroup>
    <FormGroup>
      <Label for="employeeFirstName">first name</Label>
      <Input type="text" name="first_name" id="employeeFirstName" placeholder="First Name" defaultValue={currentEmployee.first_name} onChange={handleControlledInput} ></Input>
    </FormGroup>
    <FormGroup>
      <Label for="employeeLastName">last name</Label>
      <Input type="text" name="last_name" id="employeeLastName" placeholder="Last Name" defaultValue={currentEmployee.last_name} onChange={handleControlledInput}></Input>
    </FormGroup>
    <FormGroup>
      <Label for="employeePosition">Employee Position</Label>
      <Input type="text" name="position" id="employeePosition" placeholder="Position" defaultValue={currentEmployee.position} onChange={handleControlledInput}></Input>
    </FormGroup>
    <FormGroup>
      <Label for="employeeDateHired">Date Hired</Label>
      <Input type="date" name="dateHired" id="employeeDateHired" placeholder="Date Hired" defaultValue={currentEmployee.dateHired} onChange={handleControlledInput}></Input>
    </FormGroup>
    <FormGroup>
      <Label for="employeeMonthlySales">Monthly Sales</Label>
      <Input type="number" name="monthlySales" id="employeeMonthlySales" placeholder="Monthly Sales" defaultValue={currentEmployee.monthlySales} onChange={handleControlledInput} ></Input>
    </FormGroup>
    <FormGroup>
      <Label for="employeeImage">Image</Label>
      <Input type="text" name="image" id="employeeImage" placeholder="Image" defaultValue={currentEmployee.image} onChange={handleControlledInput}></Input>
    </FormGroup>
    <FormGroup>
      <Label for="employeeDepartment">Department</Label>
      <Input type="select" name="departmentId" id="employeeDepartment" placeholder="Department" onChange={handleControlledInput}>
      {product.map((prod) => {
            return <option value={prod.department.id}>{prod.department.name}</option>
          })}

      </Input>
    </FormGroup>



    <Button type="submit"
        onClick={evt => {
          // Prevent form from being submitted
          evt.preventDefault()
          
          const employee = {
            position: currentEmployee.position,
            dateHired: currentEmployee.dateHired,
            monthlySales: currentEmployee.monthlySales,
            image: currentEmployee.image,
            departmentId: parseInt(currentEmployee.departmentId)
          }
          
          // Send POST request to your API
          createEmployee(employee)
          .then(() => history.push("/employees"))
        }}
        className="btn btn-primary">Create</Button>
        </Form>
  )
      }
