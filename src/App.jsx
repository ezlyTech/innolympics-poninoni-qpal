import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from "react-router-dom"
import { 
  Auth,
  Dashboard, 
  Login,
  MyAccount,
  NotFound,
  PostJobForm,
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
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='post-a-job' element={<PostJobForm />}/>
        <Route index element={<Login />}/>
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
