import React from "react";
import logo from "../assets/logo.png";
import { Navbar, Dropdown, Button } from "react-daisyui";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="shadow-xl bg-base-100 mb-40 rounded-box lg:px-8">
        <Navbar.Start>
          <Dropdown>
            <Button tag="label" color="ghost" shape="circle" tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </Button>
            <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1]">
              <Dropdown.Item>Homepage</Dropdown.Item>
              <Dropdown.Item>Portfolio</Dropdown.Item>
              <Dropdown.Item>About</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Start>
        <Navbar.Center className="justify-center">
          <img
            src={logo}
            alt="Grupo Conforma"
            className="w-16 h-auto p-4"
          ></img>
        </Navbar.Center>
        <Navbar.End className="navbar-end">
          <Button
            tag="a"
            size="sm"
            animation="true"
            className="uppercase btn-default text-xs tracking-wider"
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            }
          >
            Contacto
          </Button>
        </Navbar.End>
      </Navbar>
    </>
  );
};

export default MyNavbar;
