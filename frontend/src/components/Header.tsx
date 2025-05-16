import { useLocation } from "react-router-dom"
import { Navbar, NavbarLogo, NavBody, NavItems } from "./ui/resizable-navbar"
import { ChartAreaIcon, Contact, HomeIcon, Network } from "lucide-react"
import logo from "../assets/logo.png" // corrected import

const Header = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const isInApp = ["/chat", "/network"].includes(currentPath)

  const navItems = isInApp ? [
    { name: "Chat", link: "/chat", icon: <ChartAreaIcon /> },
    { name: "Network", link: "/network", icon: <Network /> },
  ] : [
    { name: "Features", link: "#features", icon: <HomeIcon /> },
  
    { name: "Contact", link: "#contact", icon: <Contact /> },
  ]

  const isChat = location.pathname.startsWith("/chat");

  return (
    <div>
      <Navbar className={`p-8 border-white font-raleway bg-black ${isChat ? "bg-gray-950" : "bg-black"}`}>
        <NavBody className="flex items-center ">
          {/* <NavbarLogo/> */}
          <NavItems items={navItems} className="text-xl font-semibold"/>
        </NavBody>
      </Navbar>
    </div>
  )
}

export default Header
