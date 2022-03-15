import React, { useState } from 'react'
import styled from 'styled-components'

export default function AddSupplier() {
    const [state, setState] = useState({
        supplierName: '',
        supplierAddress: '',
        supplierCity: '',
        supplierState: '',
        supplierZip: '',
        supplierPhone: '',
        supplierEmail: '',
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
        const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/suppliers', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                supplierName: state.supplierName,
                supplierAddress: state.supplierAddress,
                supplierCity: state.supplierCity,
                supplierState: state.supplierState,
                supplierZip: state.supplierZip,
                supplierPhone: state.supplierPhone,
                supplierEmail: state.supplierEmail,
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
                <h1>Add Supplier</h1>
                <p className={`${state.result = "error" ? "error" : "success"} `}>{state.message}</p>

                <input
                    type="text"
                    name="supplierName"
                    placeholder='Supplier Name'
                    id="supplierName"
                    value={state.supplierName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="supplierAddress"
                    placeholder='Address'
                    id="supplierAddress"
                    value={state.supplierAddress}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="supplierCity"
                    placeholder='City'
                    id="supplierCity"
                    value={state.supplierCity}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="supplierState"
                    placeholder='State'
                    id="supplierState"
                    value={state.supplierState}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="supplierZip"
                    placeholder='Zip'
                    id="supplierZip"
                    value={state.supplierZip}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="supplierPhone"
                    placeholder='Phone'
                    id="supplierPhone"
                    value={state.supplierPhone}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="supplierEmail"
                    placeholder='Email'
                    id="supplierEmail"
                    value={state.supplierEmail}
                    onChange={handleChange}
                />

                <input className='submitBtn' type="submit" value="Add Supplier" />
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