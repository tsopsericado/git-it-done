"use client"
import React from 'react'
import GlobalStyleProvider from './GlobalStyleProvider'
import { GlobalProvider } from '../context/globalProvider';

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 250)
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <GlobalProvider>{children}</GlobalProvider>
  )
}

export default ContextProvider