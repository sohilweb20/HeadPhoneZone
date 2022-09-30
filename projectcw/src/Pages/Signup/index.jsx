import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Pagelayout from '../../PageLayout'
 
const Signup = () => {
  return (
    <Pagelayout>
    <div>
    <h2 className="login">REGISTER</h2>
          <p style={{marginTop:"18px",fontWeight:"500"}}>Please fill in the fields below:</p>


          <Input w="35%" borderColor='black.100' p="25px" mt="80px" borderRadius="50px" placeholder='First Name' />
          <br/>
          <Input w="35%" borderColor='black.500' p="25px" mt="25px" borderRadius="50px" placeholder='Last Name' />
          <br/>
          <Input w="35%" borderColor='black.500' p="25px" mt="25px" borderRadius="50px" placeholder='Email' />
          <br/>
          <Input w="35%" borderColor='black.500' p="25px" mt="25px" borderRadius="50px" placeholder='Password' />
          <br/>
          <br/>
           
           <Button
             size='md'
             p="25px"
             width='35%'
             borderRadius="50px"
             border='1px'
             borderColor='black.500'
             backgroundColor="blue"
             color="white"
             mt="25px"
             
           >
             CREATE ACCOUNT
           </Button>
          <div  style={{marginBottom:"100px"}}className="create">
                 <p>Already have an account?</p>
           <Link style={{textDecoration:"underline",marginLeft:"5px" }}  to="/login">Login</Link>
           </div>
    </div>
    </Pagelayout>
  )
}

export default Signup
