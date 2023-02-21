import { GoogleOAuthProvider } from "@react-oauth/google"

import ReactDOM from "react-dom/client"

import { NextUIProvider } from "@nextui-org/react"
// import { darkTheme } from "./themes/darktheme"

// import dotenv from "dotenv"

// const GOOGLE_CLIENT_ID = "344089641487-bigep5ukdoq3s9as3efksuo7u52ej8k0.apps.googleusercontent.com"
const GOOGLE_CLIENT_ID = "391455858852-lkr43gchljq953mp7srbh50mcqn0tdro.apps.googleusercontent.com";

import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 <NextUIProvider>
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
   <App />
  </GoogleOAuthProvider>
 </NextUIProvider>
)