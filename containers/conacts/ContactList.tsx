import React, { useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  TableContainer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Table, { TableColumn } from "@/components/ui/Table";
import useAppSelector from "@/hooks/useAppSelector";
import { Contact, ContactDisplayDataType } from "@/types/contact.type";
import BackgroundLetterAvatar from "@/components/ui/BackgroundLetterAvatar";
import { useRouter } from "next/router";


type Props = {
  loading : boolean
  data : Contact[]
}

const ContactsTable: React.FC<Props> = ({data:contacts, loading}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter()
  const columns: TableColumn[] = useMemo(
    () => [
      {
        label: "Name",
        index: "name",
        render: (value: any) => (
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <BackgroundLetterAvatar name={value} />
            </Grid>
            <Grid item>{value}</Grid>
          </Grid>
        ),
      },
      { label: "Phone", index: "phone" },
      ...(isSmallScreen
        ? []
        : [
            {
              label: "Email",
              index: "email",
            },
            {
              label : "Website",
              index : 'website'
            }
          ]),
    ],
    [isSmallScreen]
  );

  const transformedContacts:ContactDisplayDataType[] = useMemo(
    () =>
      contacts.map((contact: Contact) => ({
        id : contact.id,
        name: `${contact.firstName} ${contact.lastName}`,
        phone: contact.phone,
        email: contact.email,
        website : contact.website
      })),
    [contacts]
  );

  const handleRowClick = (row:ContactDisplayDataType) => {
    router.push(`/person/${row.id}`)

  };

  return (
    <Box>
      <TableContainer>
        <Table

          stickyHeader={true}
          data={transformedContacts}
          loading={loading}
          columns={columns}
          onRowClick={ (record) => handleRowClick(record as ContactDisplayDataType )}
        />
      </TableContainer>
    </Box>
  );
};

export default ContactsTable;
