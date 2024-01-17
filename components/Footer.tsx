import React from "react";
import { Container, Typography } from "@mui/material";
import useAppSelector from "@/hooks/useAppSelector";

const Footer: React.FC = () => {
  const { contacts } = useAppSelector((state) => state.contact);
  return (
    <Container style={{ marginTop: "20px" }}>
      <Typography variant="body2" align="center" color="textSecondary">
        Total Contacts: {contacts.length}
      </Typography>
    </Container>
  );
};

export default Footer;
