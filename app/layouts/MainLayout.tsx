import { AppShell, Header, Navbar } from "@mantine/core";
import { ReactNode } from "react";
import CustomNavbar from "./CustomNavbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      padding="md"
      navbar={<CustomNavbar />}
      styles={{
        main: {
          width: "100%",
        },
      }}
    >
      {children}
    </AppShell>
  );
}
