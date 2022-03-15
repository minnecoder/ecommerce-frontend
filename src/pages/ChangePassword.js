import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChangePassword() {
    let navigate = useNavigate()
    const [state, setState] = useState({
        newPassword1: "",
        newPassword2: "",
        oldPassword: "",
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
        // Checks if new passwords are the same
        if (state.newPassord1 !== state.newPassword2) {
            setState({
                error: "New passwords must be the same"
            })

        }

        event.preventDefault()
        const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/password', {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                password: state.oldPassword,
                newPassword1: state.newPassword1,
            })
        })
        if (response.status === 200) {
            navigate("/login")
        }
        // TODO add all responses and the code for them
    }

    return (
        <div>
            <h4>Change Password</h4>
            <p>Please enter your old and new passwords</p>

            <form onSubmit={handleSubmit}>
                <h4>{state.error}</h4>

                <label htmlFor="oldPassword">Old Password</label>
                <input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    value={state.oldPassword}
                    onChange={handleChange}
                />

                <label htmlFor="newPassword1">New Password</label>
                <input
                    type="password"
                    name="newPassword1"
                    id="newPassworda"
                    value={state.newPassword1}
                    onChange={handleChange}
                />

                <label htmlFor="newPassword2">Please re-enter new password</label>
                <input
                    type="password"
                    name="newPassword2"
                    id="newPassword2"
                    value={state.newPassword2}
                    onChange={handleChange}
                />

                <input type="submit" value="Change Password" />
            </form>
        </div>
    )
}
