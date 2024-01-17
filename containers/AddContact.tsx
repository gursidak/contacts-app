import React from "react";
import ContactForm from "./ContactForm";
import Layout from "./Layout";
import { Container, Typography } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Contact } from "@/types/contact.type";
import useAppDispatch from "@/hooks/useAppDispatch";
import { addNewContact } from "@/slices/contactSlice";
import { useRouter } from "next/router";

const AddContact = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  
  const handleSubmitContactForm = (values: Omit<Contact, "id">) => {

    const handleSubmitCallback = () => {
      router.push('/')
    }

    dispatch(addNewContact({body:values, callback:handleSubmitCallback}));
  };
  return (
    <Layout footer={null}>
      <Container maxWidth="md">
        <Typography
          fontFamily={"monospace"}
          justifyContent={"start"}
          alignItems={"center"}
          display={"flex"}
          gap={2}
          mb={5}
          variant="h3"
        >
          <PersonAddAltIcon fontSize={"large"} />
          Add Contact
        </Typography>
        <ContactForm onSubmit={handleSubmitContactForm} />
      </Container>
    </Layout>
  );
};

export default AddContact;
