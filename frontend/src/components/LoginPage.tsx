import { useGoogleLogin } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"

import { Card, Spacer, Button, Text, Container } from "@nextui-org/react"

import IconGoogle from "../assets/icons/IconGoogle"



const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID

const LoginPage = () => {
 const navigate = useNavigate()

 const loginToGithub = () => {
  localStorage.setItem("loginWith", "GitHub")
  window.location.assign(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`)
 }

 const loginToGoogle = useGoogleLogin({
  onSuccess: tokenResponse => {
   localStorage.setItem("loginWith", "Google")
   localStorage.setItem("accessToken", tokenResponse.access_token)
   window.location.href = "https://queryresolve.up.railway.app/user";
  },
 })

 return (
  <Container display='flex' alignItems='center' justify='center' css={{ minHeight: "100vh" }}>
   <Card css={{ mw: "420px", p: "20px" }}>
    <Text
     size={24}
     weight='bold'
     css={{
      as: "center",
      mb: "20px",
     }}
    >
     Login to Query Resolve with
    </Text>
    <Spacer y={1} />
    {/* <Button color='gradient' auto ghost onClick={() => loginToGithub()}>
     {/* <IconGitHub /> */}
     {/* <Spacer x={0.5} /> */}
     {/* GitHub */}
    {/* </Button> */}
    {/* <Spacer y={1} /> */} 

    <Button color='gradient' auto ghost onClick={() => loginToGoogle()}>
     <IconGoogle />
     <Spacer x={0.5} />
     Google
    </Button>
   </Card>
  </Container>
 )
}

export default LoginPage