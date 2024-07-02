import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { AiOutlineUser } from "react-icons/ai";


export function Nav() {
  return (
    <Navbar fluid rounded style={{ background: "linear-gradient(to right, #17C1E8, #1175EF)", paddingRight: "80px"}}>
        <img src="/Logo-White.png" alt="Logo" style={{width:"20%", marginLeft:"35px"}}/>
        <NavbarToggle style={{color:"#ffffff"}}/>
      <NavbarCollapse>
        <NavbarLink href="#" className="navLink">Inicio</NavbarLink>
        <NavbarLink href="#" className="navLink">Inscripción</NavbarLink>
        <NavbarLink href="#" className="navLink">Resultados</NavbarLink>
        <div className="flex md:order-2">
          <AiOutlineUser style={{ color: "white", marginRight: "5px", fontWeight:"bolder" }} />
          <NavbarLink href="#" className="navLink">Iniciar Sesión</NavbarLink>
        </div>
      </NavbarCollapse>

    </Navbar>
  );
}
