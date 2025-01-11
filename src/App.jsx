import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from "react-router-dom"
import { 
  Auth,
  Dashboard, 
  Item1, 
  Item2,
  Login,
  MyAccount,
  NotFound,
  Settings,
} from "./pages"
import RootLayout from "./layout/RootLayout"
import { ThemeProvider } from "@mui/material"
import  theme from './theme'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path='auth' element={<Auth />}/>
        <Route index element={<Dashboard />}/>
        <Route path='item1' element={<Item1 />}/>
        <Route path='item2' element={<Item2 />}/>
        <Route path='login' element={<Login />}/>
        <Route path='my-account' element={<MyAccount />}/>
        <Route path='settings' element={<Settings />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    )
  )

  return (
    <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  )
}

export default App
