import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";
import { navLinks } from "@/constants/layout.constant";
import { Container } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth={'xl'}>
      <Toolbar>

        <Link passHref href={'/'} style={{textDecoration:'none'}}>
        <Typography variant="h6" color={'white'} noWrap component="div">
          KeepContacts
        </Typography>
        </Link>

        <Box sx={{ flexGrow: 1 }} />
        <Box display={"flex"} gap={2}>
          {navLinks.map(({ path, label }) => (
            <NavLink key={path} path={path} label={label} />
          ))}
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}

export type NavLinkProps = {
  path: string;
  label: string;
};

const NavLink = ({ label, path }: NavLinkProps) => {
  return (
    <NextLink href={path} passHref style={{ textDecoration: "none" }}>
      <Typography
        variant={"h6"}
        style={{ textDecoration: "none" }}
        color={"#FFF"}
        fontSize={"medium"}
      >
        {label}
      </Typography>
    </NextLink>
  );
};
