import { BrowserRouter, Route, Routes } from "react-router-dom"


import PublicLayout from "./layouts/PublicLayout"
import Home from "./routes/Home"


import AuthLayout from "./layouts/AuthLayout"
import SignInPage from "./routes/SignIn"
import SignUpPage from "./routes/SignUp"
import ProtectedRoutes from "./layouts/ProtectedRoutes"
import MainLayout from "./layouts/MainLayout"
// import { Button } from "./components/ui/button"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>



        {/* auth layout */}
        <Route element={<AuthLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
  

        {/* protected routes */}
        <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App