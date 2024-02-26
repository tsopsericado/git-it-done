"use client"
import React from 'react'
import styled from 'styled-components'
import { useGlobalState } from '@/app/context/globalProvider'

const Sidenav = () => {

    const { theme } = useGlobalState()

    return (
        <SidebarStyled theme={theme}>sidenav</SidebarStyled>
    )
}

const SidebarStyled = styled.nav`
position: relative
width: ${(props) => props.theme.sidebarWidth};
background-color: ${(props) => props.theme.colorBG2};

border-right: 2px solid ${(props) => props.theme.boderColor2};

border-raduis: 1rem;
`;

export default Sidenav