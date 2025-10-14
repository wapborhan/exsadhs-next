"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
// import Preloader from "@/components/Preloader";

export default function MainWrapper({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [pathname]);

  const hideHeaderRoutes = [ "/auth/signin", "/auth/signup"];
  const hideFooterRoutes = ["/auth/signin", "/auth/signup"];
  const shouldHideHeader = hideHeaderRoutes.includes(pathname);
  const shouldHideFooter = hideFooterRoutes.includes(pathname);

  return (
    <>
      {/* {isLoading && <Preloader />} */}
      {!shouldHideHeader && <Header />}
      {children}
      {!shouldHideFooter && <Footer />}
    </>
  );
}
