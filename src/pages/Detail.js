import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail(props) {
    const location = useLocation()
    const { productDesc, productName, productPrice } = location.state




    return (
        <div>
            <p>{productName}</p>
            <p>{productDesc}</p>
            <p>{productPrice}</p>
        </div>
    )
}
