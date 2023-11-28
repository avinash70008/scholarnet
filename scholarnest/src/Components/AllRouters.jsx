import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { EditProfile } from './EditProfile'
import { RegistrationForm } from './RegistrationForm'
import  { LoginForm } from './LoginForm'


export const AllRouters = () => {
  return (
   <Routes>
    <Route path='/registration' element = {<RegistrationForm />} />
    <Route path='/editprofile' element={<EditProfile />} />
    <Route path='/' element={<LoginForm />} />
   </Routes>
  )
}

