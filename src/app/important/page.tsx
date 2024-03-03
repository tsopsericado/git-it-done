"use client"

import React from 'react'
import { useGlobalState } from '../context/globalProvider';
import Tasks from '../components/Tasks/Tasks';

const page = () => {
  const { tasks } = useGlobalState();
  return <Tasks title="All Tasks" tasks={tasks} />;
}

export default page