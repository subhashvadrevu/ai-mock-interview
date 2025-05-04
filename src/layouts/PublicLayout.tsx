import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import AuthHandler from "@/handlers/AuthHandler"
import { useState } from "react"
import { Outlet } from "react-router-dom"


const PublicLayout = () => {

  const [authReady, setAuthReady] = useState(false);

  return (
    <div className="w-full">
        {/* handler to store the user data */}
        <AuthHandler onReady={() => setAuthReady(true)} />


        {authReady && (
          <>
            <Header />
            <Container className="flex-grow">
              <main className="flex-grow ">
                <Outlet />
              </main>
            </Container>
            <Footer />
          </>
        )}
    </div>
  )
}

export default PublicLayout