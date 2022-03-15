import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddCustomer() {
    const [state, setState] = useState({
        customerName: '',
        customerAddress: '',
        customerCity: '',
        customerState: '',
        customerZip: '',
        customerPhone: '',
        customerEmail: '',
        message: '',
        result: ""
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
        const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/customers', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                customerName: state.customerName,
                customerAddress: state.customerAddress,
                customerCity: state.customerCity,
                customerState: state.customerState,
                customerZip: state.customerZip,
                customerPhone: state.customerPhone,
                customerEmail: state.customerEmail,
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
                <h1>Add Customer</h1>
                <p className={`${state.result = "error" ? "error" : "success"} `}>{state.message}</p>

                <input
                    type="text"
                    name="customerName"
                    placeholder='Customer Name'
                    id="customerName"
                    value={state.customerName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="customerAddress"
                    placeholder='Address'
                    id="customerAddress"
                    value={state.customerAddress}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="customerCity"
                    placeholder='City'
                    id="customerCity"
                    value={state.customerCity}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="customerState"
                    placeholder='State'
                    id="customerState"
                    value={state.customerState}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="customerZip"
                    placeholder='Zip'
                    id="customerZip"
                    value={state.customerZip}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="customerPhone"
                    placeholder='Phone'
                    id="customerPhone"
                    value={state.customerPhone}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="customerEmail"
                    placeholder='Email'
                    id="customerEmail"
                    value={state.customerEmail}
                    onChange={handleChange}
                />

                <input className='submitBtn' type="submit" value="Add Customer" />
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