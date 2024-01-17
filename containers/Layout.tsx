import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};


const Layout = ({ children, header, footer }: Props) => {
  return (
    <Box display={'flex'} flexDirection={'column'} height={'100vh'}>
      {header !== undefined ? header : <Header />}
      <Box maxWidth={'xl'} flex={1} marginY={2}>{children}</Box>
      {footer !== undefined ? footer : <Footer />}
    </Box>
  );
};

export default Layout;
