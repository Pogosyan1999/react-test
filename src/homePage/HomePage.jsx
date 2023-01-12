import React from 'react'
import Form from '../components/form/Form'
import Herosection from './herosection/Herosection'
import Learning from './learningSection/Learning'

const HomePage = () => {
  return (
   <>
      <Herosection/>
      <Learning/>
      <Form/>
   </>
   
  )
}

export default HomePage