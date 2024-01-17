// pages/person/[id].tsx
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Contact } from "@/types/contact.type"; // Assuming the path to your contact type
import contactService from "@/services/contact.service";
import { handleAPIErrors } from "@/utils/handleError.util";
import Profile from "@/containers/conacts/contactDetails/Profile";
import { Box } from "@mui/material";
import ContactDetails from "@/containers/conacts/contactDetails";

interface PersonProps {
  contact: Contact;
}

const Person: NextPage<PersonProps> = ({ contact }) => {
  const router = useRouter();

  return router.isFallback ? (
    <Box display={"flex"} flex={1}></Box>
  ) : (
    <ContactDetails contact={contact} />
  );
};

export const getServerSideProps: GetServerSideProps<PersonProps> = async (
  { params, req },
) => {
  try {
    const id = params?.id;
    const host = req.headers?.host;
    if (id) {
      const personId = id as string;
      const contact = await contactService.getContactById(personId, host);
      return {
        props: { contact },
      };
    }
    return {
      notFound: true, // If the contact with the given ID is not found
    };
  } catch (error: any) {
    console.error(error);
    handleAPIErrors(error?.message);
    return {
      notFound: true,
    };
  }
};

export default Person;
