import { AppShell, Header, Navbar } from "@mantine/core";
import CustomNavbar from "./CustomNavbar";

export default function MainLayout({ children }) {
  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
