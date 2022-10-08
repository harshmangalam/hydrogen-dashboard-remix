import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import { theme } from "~/theme";
import MainLayout from "~/layouts/MainLayout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

createEmotionCache({ key: "mantine" });

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <MainLayout>
            <Outlet />
          </MainLayout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
