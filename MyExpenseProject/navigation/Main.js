import React from 'react'
import Routes from './Routes'
import {AuthProvider} from './AuthenticationProvider'
const Main = () => {
  return (
    <AuthProvider>
      <Routes/>
     </AuthProvider> 
  )
}

export default Main

