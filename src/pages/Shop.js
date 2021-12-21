import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shop() {
    let navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://inventory-backend-api.herokuapp.com/api/v1/products', {
                method: 'GET',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
            })
            const newData = await response.json()
            setProducts(newData.data)
        }
        fetchData()
    }, [])


    return (
        <div>
            {products.map((product, index) => (
                <div key={product.id} onClick={() => navigate(
                    `/detail/${product.id}`,
                    { state: product }
                )} >
                    <p>{product.Product_Name}</p>
                    <p>{product.Product_Desc}</p>
                    <p>{product.Product_Price}</p>
                </div>
            ))
            }
        </div >
    )
} 
