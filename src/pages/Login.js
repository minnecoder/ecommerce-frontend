import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function Login() {
    let navigate = useNavigate()
    const [state, setState] = useState({
        email: "",
        password: "",
        error: ""
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
        const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: state.email,
                password: state.password
            })
        })
        if (response.status === 400) {
            const json = await response.json()
            setState({
                error: json.error
            })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <h4>{state.error}</h4>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={state.email}
                    onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    id="password"
                    value={state.password}
                    onChange={handleChange}
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
