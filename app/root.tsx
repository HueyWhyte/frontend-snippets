import { ReactNode } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import styles from "./tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export const meta: MetaFunction = () => {
  return {
    title: "Frontend Snippets",
    description: "Best collection of frontend components",
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

//  "build": "cross-env NODE_ENV=production remix build",
// "dev": "cross-env NODE_ENV=development remix dev",
