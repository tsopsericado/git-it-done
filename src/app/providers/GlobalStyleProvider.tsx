"use client"

import React from 'react'
import styled from 'styled-components';

interface Props {

    children: React.ReactNode;
}


const GlobalStyleProvider = ({ children }: Props) => {
    return (
        <Globalstyles>{children}</Globalstyles>
    )
}

const Globalstyles = styled.div`
padding: 2.5rem;
display: flex;
gap: 2.5rem;
height: 100%; 

`


export default GlobalStyleProvider