"use client";

import { SessionProvider, useSession } from "next-auth/react";
// import { ThemeProvider } from "@material-tailwind/react";

import { redirect } from "next/navigation";
import AdminDashboard from "./dashboard/page";
import Nav from "./components/Nav";
import Login from "./login/page";

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
}

export default function Provider({ children }) {
  // const { data: session } = useSession();

  return (
    <SessionProvider refetchOnWindowFocus={false}>
      {/* <ThemeProvider> */}
      {/* {!session ? redirect("/login") : <Nav />} */}
      {AdminDashboard.auth
        ? (
          <Auth>
            {/* <Nav /> */}
            {children}
          </Auth>
        )
        : { children }}
      {/* </ThemeProvider> */}
    </SessionProvider>
  );
}
