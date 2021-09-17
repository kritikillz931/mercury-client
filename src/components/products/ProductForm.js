import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "./ProductsProvider"
import { useHistory } from 'react-router-dom';
import "./Products.css"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Select } from "@material-ui/core";


export const ProductForm = () => {
  const history = useHistory()
  const { createProduct, getProductById, product, getProducts } = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])

  /*
      Since the input fields are bound to the values of
      the properties of this state variable, you need to
      provide some default values.
  */
  const [currentProduct, setCurrentProduct] = useState({
    image: "",
    name: "",
    cost: 0,
    priceSold: 0,
    stock: 0,
    departmentId: 0
  })


  const handleControlledInput = (event) => {
    const newProductState = { ...currentProduct }
    newProductState[event.target.name] = event.target.value
    setCurrentProduct(newProductState)
  }


  return (
    <Form>

      <FormGroup>
        <Label for="formTitle">Add New Product</Label>
      </FormGroup>
      <FormGroup>
        <Label for="productImage">Product Image</Label>
        <Input type="text" name="image" id="productImage" placeholder="Image Url" defaultValue={currentProduct.image}
          onChange={handleControlledInput}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="productName">Product Name</Label>
        <Input type="text" name="name" id="productName" placeholder="Product Name" defaultValue={currentProduct.name}
          onChange={handleControlledInput}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="productCost">Product Cost</Label>
        <Input type="text" name="cost" id="productCost" placeholder="Product Cost" defaultValue={currentProduct.cost}
          onChange={handleControlledInput}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="department">Department</Label>
        <Input type="select" name="departmentId" id="department" placeholder="Department" onChange={handleControlledInput}>{product.map((prod) => {
            return <option value={prod.department.id}>{prod.department.name}</option>
          })}
        </Input>
      </FormGroup>


      {/* You create the rest of the input fields for each game property */}

      <Button type="submit"
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
        className="btn btn-primary">Create</Button>
        </Form>
)}