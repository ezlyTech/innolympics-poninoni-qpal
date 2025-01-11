import { Outlet } from "react-router-dom"
import { Navigation } from "../components"
import { Container } from "@mui/material"

const RootLayout = () => {
  return (
    <div>
        <Navigation />
        <Container>
            <Outlet />
        </Container>
    </div>
  )
}

export default RootLayout