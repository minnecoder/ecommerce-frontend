import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
            console.log(newData.data)
        }
        fetchData()
    }, [])


    return (
        <Main>
            {products.map((product) => (
                <StoreItem key={product.id} onClick={() => navigate(
                    `/detail/${product.id}`,
                    { state: product }
                )} >
                    <img src="https://via.placeholder.com/200" alt="" />
                    <p>{product.productName}</p>
                    <p>{product.productDesc}</p>
                    <p>{product.productPrice}</p>
                    <input type="button" value="Add to Cart" />
                </StoreItem>
            ))
            }
        </Main>
    )
}

const Main = styled.div`
display: flex;
margin: 0 auto;
width: 85%;
`

const StoreItem = styled.div`
width: 25%;
border: solid 1px black;
`