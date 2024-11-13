
import { Outlet } from "react-router-dom"
import Navbar from "./section/Navbar"
import Footer from "./section/Footer"

export default function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
