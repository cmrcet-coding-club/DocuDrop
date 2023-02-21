import { SetStateAction, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Col, Container, Navbar, Row, Text, User } from "@nextui-org/react"

import {getUserDataGoogle} from "../services/google_controller"
import LogOutIcon from "../assets/icons/LogOutIcon"


interface UserdataGoogle {
 name: string
 picture: string
 email: string
}

const HomePage = () => {
 const [userDataGoogle, setUserDataGoogle] = useState<null | UserdataGoogle>(null)

 const loginWith = useRef(localStorage.getItem("loginWith"))

 const navigate = useNavigate()



 useEffect(() => {
  const accessToken = localStorage.getItem("accessToken")
    // console.log(userDataGoogle?.picture)
  if (accessToken && loginWith.current === "Google") {
   getUserDataGoogle(accessToken).then((resp: SetStateAction<UserdataGoogle | null>) => {
    setUserDataGoogle(resp)
   })
  }
 }, [loginWith])

 const setLogOut = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("loginWith")
  navigate("/")
 }

 if (!userDataGoogle) return null

 return (
  <>
   <Navbar isBordered variant='sticky'>
    <Navbar.Brand>
     <User
      bordered
      color='primary'
      size='lg'
      src={ userDataGoogle?.picture}
      name={userDataGoogle?.name}
      description={userDataGoogle?.email}
     />
    </Navbar.Brand>
    <Navbar.Content>
     <Navbar.Item>
      <Button
       auto
       flat
       size='sm'
       icon={<LogOutIcon />}
       color='primary'
       onClick={() => setLogOut()}
      >
       Log out
      </Button>
     </Navbar.Item>
    </Navbar.Content>
   </Navbar>
   <Container gap={0}>
    <Row gap={1}>
     <Col>
      <Text h2 className="text-center">Logged in with {loginWith.current}</Text>
     </Col>
    </Row>
   </Container>
  </>
 )
}

export default HomePage