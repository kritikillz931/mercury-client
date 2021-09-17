import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom';
import { ProductContext } from "../products/ProductsProvider";



export const EmployeeForm = () => {
  const history = useHistory()
  const { createEmployee, getEmployeesById, employee } = useContext(EmployeeContext)
  const { product } = useContext(ProductContext)

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
    <form className="gameForm">
      <h2 className="gameForm__title">Add New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="first_name">first name </label>
          <input type="text" name="first_name" required autoFocus className="form-control"
            defaultValue={currentEmployee.first_name}
            onChange={handleControlledInput}
          />
          <label htmlFor="last_name">last name </label>
          <input type="text" name="last_name" required autoFocus className="form-control"
            defaultValue={currentEmployee.last_name}
            onChange={handleControlledInput}
          />
          <label htmlFor="position">position </label>
          <input type="text" name="position" required autoFocus className="form-control"
            defaultValue={currentEmployee.position}
            onChange={handleControlledInput}
          />
          <label htmlFor="dateHired">dateHired </label>
          <input type="date" name="dateHired" required autoFocus className="form-control"
            defaultValue={currentEmployee.dateHired}
            onChange={handleControlledInput}
          />
          <label htmlFor="monthlySales">MonthlySales: </label>
          <input type="number" name="monthlySales" required autoFocus className="form-control"
            defaultValue={currentEmployee.monthlySales}
            onChange={handleControlledInput}
          />
          <label htmlFor="image">image: </label>
          <input type="text" name="image" required autoFocus className="form-control"
            defaultValue={currentEmployee.image}
            onChange={handleControlledInput}
          />
          <fieldset>
            <div className="form-group">
              <label htmlFor="Department">Department: </label>
              <select name="departmentId" onChange={handleControlledInput}>
                {product.map((prod) => {
                  return <option value={prod.department.id}>{prod.department.name}</option>;
                })}
              </select>
            </div>
          </fieldset>
        </div>
      </fieldset>

      {/* You create the rest of the input fields for each game property */}

      <button type="submit"
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
        className="btn btn-primary">Create</button>
    </form>
  )







}