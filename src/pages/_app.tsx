import { Stack } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <>
      <Stack
        direction={"column"}
        minH={"100vh"}
        minW={"100vw"}
        bgColor={"bg"}
        gap={0}
        zIndex={1}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </Stack>

      <ScrollRestoration />
    </>
  );
};

export default AppLayout;
