import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function VerifyEmail() {
    let navigate = useNavigate()
    const { email, token } = useParams()

    useEffect(() => {
        const validiateEmail = async () => {
            const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/users/validateemail', {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    token
                })
            })
            if (response.status === 200) {
                navigate('/login')
            }
            if (response.status === 401) {
                navigate('/emailerror')
            }
        }
        validiateEmail()
    })
    return (
        <div>

        </div>
    )
}
