import { Outlet } from "react-router-dom"
import { Navigation } from "../components"
import { Container } from "@mui/material"

const RootLayout = () => {
  return (
    <div>
        <Navigation />
        <Container 
          sx={{ px: 2, py: 4 }}
        >
          <Outlet />
        </Container>
    </div>
  )
}

export default RootLayout