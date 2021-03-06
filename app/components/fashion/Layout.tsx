import { ReactNode } from "react";
import Navigation from "./Navigation";

const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Navigation />

      <main
        className={`flex min-h-screen flex-col items-center bg-gray-100  pt-32 pb-32 ${className}`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
