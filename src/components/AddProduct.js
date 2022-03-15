import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddProduct() {
    const [state, setState] = useState({
        productName: '',
        productDesc: '',
        productCost: '',
        productPrice: '',
        onHand: '',
        reorderLevel: '',
        reorderQty: '',
        message: '',
        result: ''
    })

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        event.preventDefault()
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/products', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                productName: state.productName,
                productDesc: state.productDesc,
                productCost: state.productCost,
                productPrice: state.productPrice,
                onHand: parseInt(state.onHand),
                reorderLevel: parseInt(state.reorderLevel),
                reorderQty: parseInt(state.reorderQty),
            })
        })


        if (response.status === 200) {
            setState({ ...state, result: "success", message: "Product added successfully" })
        } else {
            const json = await response.json()
            setState({ ...state, result: "error", message: json.message })
        }
    }

    return (
        <Main>

            <form onSubmit={handleSubmit}>
                <h1>Add Product</h1>
                <p className={`${state.result = "error" ? "error" : "success"} `}>{state.message}</p>

                <input
                    type="text"
                    name="productName"
                    placeholder='Product Name'
                    id="productName"
                    value={state.productName}
                    onChange={handleChange}
                />

                <textarea
                    type="text"
                    name="productDesc"
                    placeholder='Product Description'
                    id="productDesc"
                    value={state.productDesc}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="productCost"
                    placeholder='Product Cost'
                    id="productCost"
                    value={state.productCost}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="productPrice"
                    placeholder='Product Price'
                    id="productPrice"
                    value={state.productPrice}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="onHand"
                    placeholder='On Hand Amount'
                    id="onHand"
                    value={state.onHand}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="reorderLevel"
                    placeholder='Reorder Level'
                    id="reorderLevel"
                    value={state.reorderLevel}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="reorderQty"
                    placeholder='Reorder Quantity'
                    id="reorderQty"
                    value={state.reorderQty}
                    onChange={handleChange}
                />

                <input className='submitBtn' type="submit" value="Add Product" />
            </form>
        </Main>
    )
}

const Main = styled.div`
  
form{
    display: flex;
    flex-direction: column;
    min-width: 100%;
    height: 100vh;
    margin: 0vw;
    padding: 5vw ;
}

h1 {
    width: 25%;
}

p:empty {
    display: none ;
}
p {
    width: 25%;
    padding: .5rem;
    border-radius: 5px;
}
.error {
    background: red;
}

.success {
    background: green ;
}
input, textarea {
    width: 25%;
    padding: .5rem .8rem .5rem .8rem;
    margin: .5vw 0 ;
    border-radius: 5px;
    font-size: 16px;
}

input[type=submit] {
    width: 25%;
}
`