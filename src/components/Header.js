import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <Main>
            <nav>
                <Left>
                    <h1>PartsWarehouse</h1>
                </Left>
                <SearchBar>

                </SearchBar>
                <Right>
                    <p>Cart</p>
                    <p>Profile</p>
                    <p>Toggle</p>
                </Right>
            </nav>
        </Main>
    )


}


const Main = styled.div`
background: red;
height: 10vh;

nav{
display: flex;
justify-content: space-between;
width: 85%;
margin: 0 auto;
}
`


const Left = styled.div`

`

const SearchBar = styled.div`
`

const Right = styled.div`
display: flex;
align-items: center;
margin-right: 2rem; 


p {
    margin: .5rem
}
`