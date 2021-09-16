import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductsProvider"
import { useHistory } from 'react-router-dom';



export const ProductForm = () => {
  const history = useHistory()
  const { createProduct, getProductById, product } = useContext(ProductContext)

  /*
      Since the input fields are bound to the values of
      the properties of this state variable, you need to
      provide some default values.
  */
  const [currentProduct, setCurrentProduct] = useState({
    image: "",
    name: "",
    cost: 0,
    priceSold: 10,
    stock: 0,
    departmentId: 0
  })


  const handleControlledInput = (event) => {
    const newProductState = { ...currentProduct }
    newProductState[event.target.name] = event.target.value
    setCurrentProduct(newProductState)
  }


  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Add New Product</h2>
      <fieldset>
        <button className="btn btn-2 btn-sep icon-create"
          onClick={() => {
            history.push({ pathname: "/products/new" })
          }}
        >Save Product</button>
        <div className="form-group">
          <label htmlFor="image">Image </label>
          <input type="text" name="image" required autoFocus className="form-control"
            defaultValue={currentProduct.image}
            onChange={handleControlledInput}
          />
          <label htmlFor="name">name </label>
          <input type="text" name="name" required autoFocus className="form-control"
            defaultValue={currentProduct.name}
            onChange={handleControlledInput}
          />
          <label htmlFor="cost">cost: </label>
          <input type="number" name="cost" required autoFocus className="form-control"
            defaultValue={currentProduct.cost}
            onChange={handleControlledInput}
          />
          <label htmlFor="priceSold">priceSold: </label>
          <input type="number" name="priceSold" required autoFocus className="form-control"
            defaultValue={currentProduct.priceSold}
            onChange={handleControlledInput}
          />
          <label htmlFor="stock">stock: </label>
          <input type="number" name="stock" required autoFocus className="form-control"
            defaultValue={currentProduct.stock}
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

          const product = {
            image: currentProduct.image,
            name: currentProduct.name,
            cost: currentProduct.cost,
            priceSold: currentProduct.priceSold,
            departmentId: parseInt(currentProduct.departmentId)
          }

          // Send POST request to your API
          createProduct(product)
            .then(() => history.push("/products"))
        }}
        className="btn btn-primary">Create</button>
    </form>
  )







}