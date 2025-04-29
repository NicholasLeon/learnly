"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function GuestNavbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src="/favicon.ico"
          alt="Flowbite React Logo"
          width={36}
          height={36}
          className="mr-3"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 bg-[#ADD8E6]">
        <a href="/user/sign-up">Get started</a>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} href="/services">
          Services
        </NavbarLink>
        <NavbarLink as={Link} href="/pricing">
          Pricing
        </NavbarLink>
        <NavbarLink as={Link} href="/contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
