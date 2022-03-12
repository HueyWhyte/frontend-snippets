import { ReactNode } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <Navigation />

      <main
        className={`flex min-h-screen flex-col items-center pt-16 pb-32 ${className} flex min-h-screen w-full flex-col `}
      >
        {children}
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
