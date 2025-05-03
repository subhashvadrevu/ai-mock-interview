import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet } from "react-router-dom"


const PublicLayout = () => {
  return (
    <div className="w-full">
        {/* handler to store the user data */}
        <Header />


        <Container className="flex-grow">
          
          <main className="flex-grow ">

            <Outlet />

          </main>

        </Container>


        <Footer />
    </div>
  )
}

export default PublicLayout