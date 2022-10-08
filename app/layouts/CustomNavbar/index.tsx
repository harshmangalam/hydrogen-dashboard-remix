import { useState } from "react";
import { Navbar, Center, Stack } from "@mantine/core";
import { IconLogout, IconSwitchHorizontal, IconAtom2 } from "@tabler/icons";
import NavbarLink from "./NavbarLink";
import { data } from "./data";

export default function CustomNavbar() {
  const [active, setActive] = useState(2);

  return (
    <Navbar width={{ base: 80 }} p="md">
      <Navbar.Section>
        <Center>
          <IconAtom2 size={30} />
        </Center>
      </Navbar.Section>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {data.map((link, index) => (
            <NavbarLink
              icon={link.icon}
              label={link.label}
              key={link.label}
              active={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
