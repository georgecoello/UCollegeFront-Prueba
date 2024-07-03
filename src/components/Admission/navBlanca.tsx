import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import "./navBlanca.css"
import { Link } from 'react-router-dom';


export function Nav() {
  return (
    <Navbar fluid rounded style={{ background: "linear-gradient(to right, #17C1E8, #1175EF)", paddingRight: "50px"}}>
        <img src="/Logo-White.png" alt="Logo" className="LogoWhite" style={{width:"10%", marginLeft:"35px"}}/>
        <NavbarToggle style={{color:"#ffffff"}}/>
      <NavbarCollapse>
        <Link to="/admission" className="navLink">Inicio</Link>
        <Link to="/inscription" className="navLink">Inscripción</Link>
        <Link to="/admission" className="navLink">Resultados</Link>
        <div className="flex md:order-2">
          <img src="icon.png" alt="logo" style={{ width:"10%", marginRight: "7px" }}/>
          <Link to="/admission" className="navLink">Resultados</Link>
        </div>
      </NavbarCollapse>

    </Navbar>
  );
}