import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react'
import styled from 'styled-components'

interface Props {
    title: string;
    tasks: any[];
}

function Tasks({ title, tasks }: Props) {
    const { theme, isLoading, openModal, modal } = useGlobalState();



    return (
        <TaskStyled theme={theme}>Tasks</TaskStyled>
    )
}

const TaskStyled = styled.div``;

export default Tasks