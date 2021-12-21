import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail(props) {
    const location = useLocation()
    const { Product_Desc, Product_Name, Product_Price } = location.state




    return (
        <div>

        </div>
    )
}
