import React, { useEffect, useMemo } from "react";
import Layout from "../Layout";
import ContactList from "./ContactList";
import { fetchContacts } from "@/slices/contactSlice";
import useAppDispatch from "@/hooks/useAppDispatch";
import useAppSelector from "@/hooks/useAppSelector";
import SearchBar from "./Search";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { Contact } from "@/types/contact.type";

type Props = {};

const Main = (props: Props) => {
  const dispatch = useAppDispatch();

  const { contacts, loading } = useAppSelector((state) => state.contact);
  const router = useRouter();
  const searchQuery = router.query?.search as string | undefined;

  /* This search query param should be passed to the Ep in queryParam, but the api used doesnt support params,
    so client side search is implemented
  */
  const filteredContacts: Contact[] = useMemo(() => {
    let filteredContacts = [...contacts];

    if (searchQuery) {
      const normalizedSearch = searchQuery.toLowerCase();
      filteredContacts = filteredContacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(normalizedSearch) ||
          (contact.lastName != null
            ? contact.lastName.toLowerCase().includes(normalizedSearch)
            : false) ||
          contact.phone.toLowerCase().includes(normalizedSearch) ||
          (contact.email &&
            contact.email.toLowerCase().includes(normalizedSearch))
      );
    }

    return filteredContacts;
  }, [contacts, searchQuery]);

  return (
    <Layout>
      <Grid
        container
        justifyContent="start"
        paddingX={3}
        marginX={"auto"}
        gap={2}
        maxWidth={"lg"}
      >
        <Grid item xs={12} md={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <ContactList loading={loading} data={filteredContacts} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Main;
