import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Register() {
    let navigate = useNavigate()
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
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
        const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/users',
            {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: state.first_name,
                    last_name: state.last_name,
                    email: state.email,
                    password: state.password
                })
            })
        if (response.status === 200) {
            navigate('/awaitemailverify', { state: { email: state.email } })
        }
        // TODO add code for login fail
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <h4>{state.error}</h4>
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={state.first_name}
                    onChange={handleChange}

                />
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={state.last_name}
                    onChange={handleChange}

                />
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
                    type="password"
                    name="password"
                    id="password"
                    value={state.password}
                    onChange={handleChange}

                />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
