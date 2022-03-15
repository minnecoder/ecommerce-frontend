import React from 'react'
import styled from 'styled-components'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <Main>
            <Header />
            <main>
                {children}
            </main>
        </Main>
    )
}

const Main = styled.div`

`