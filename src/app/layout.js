"use client"
import Whatsapp from "@/Components/Whatsapp"
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Image from 'next/image'
import Nexos from '../public/nexos.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import AddBootstrap from "./AddBootstrap";
import { useState } from "react";
import Link from "next/link";

const geits = Bebas_Neue({
  subsets: ['latin'],
  weight: "400",
})



export default function RootLayout({ children, theme }) {
  const [mode, setMode] = useState("dark")
  const change = (e) => {
    if (e.target.value == "on") {
      e.target.value = "off"
      setMode("ligth")
    } else {
      e.target.value = "on"
      setMode("dark")
    }
  }
  return (
    <html lang="pt-br" data-bs-theme={mode}>
      <head>
        <meta name="viewpoint" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geits.className} antialiased  `}>
        <AddBootstrap />
        <div>
          <nav className="navbar bg-body-tertiary  fixed-top">
            <div className="container-fluid ">
              <div className="flex flex-row-reverse  items-center ">
                <h2 className="pl-1 mb-0">Nexos</h2>
                <Image src={Nexos} className=" bg-white" priority={true} quality={100} width={50} height={20} alt="logo" />
              </div>
              <div className="flex items-center">
                <label className="switch mr-2">
                  <input type="checkbox" onClick={change} />
                  <span className="slider" />
                </label>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="Inicio" href="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
          
          <main className=" position-absolute left-0 size-full" >{children}</main>
          <a rel="noopener noreferrer" target="_blank" href={"https://wa.me/5534993182003?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20a%20consultoria%20de%20mkt"}><Whatsapp /> </a>
        </div>
      </body>
    </html>
  );
}
