"use client";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/lib/data";

export default function UserNavbar() {
  const router = useRouter();

  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar: string;
  } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user");
      const userData = await res.json();

      if (!userData) return;

      setUser({
        name: userData.name ?? "Unnamed",
        email: userData.email ?? "No email",
        avatar:
          userData.avatar?.trim() !== ""
            ? userData.avatar
            : "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      });
    };

    fetchUser();
  }, []);

  const handleSignOut = async () => {
    router.push("/sign-in");
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img
          src="/favicon.ico"
          className="mr-9 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </NavbarBrand>

      <div className="flex md:order-2">
        {user && (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User avatar"
                img={
                  user.avatar && user.avatar.trim() !== ""
                    ? user.avatar
                    : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                }
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">{user.name}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </DropdownHeader>
            <DropdownItem onClick={() => router.push("/user")}>
              Dashboard
            </DropdownItem>
            <DropdownItem onClick={() => router.push("/user/settings")}>
              Settings
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
          </Dropdown>
        )}
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
