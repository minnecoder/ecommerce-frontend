import React from 'react'
import { useLocation } from 'react-router-dom'

export default function AwaitEmailVerify() {

    // const { state } = useLocation()
    // const { email } = state
    const email = "test@test.com"
    console.log(email)
    async function resendVerifyEmail(email) {
        // event.preventDefault()
        // TODO complete this function. Needs to include the user's email as a parameter
        console.log(email)
    }

    return (
        <div>
            <h2>Verify your email</h2>
            <h4>Yout will nedd to verify your email to complete registration</h4>
            <p>An email was sent to {email} with a link to verify your account. If you have not received the email in a few minutes, please check your spam folder</p>

            <button type="submit" onClick={resendVerifyEmail}>Resend Email</button>
        </div>
    )
}
