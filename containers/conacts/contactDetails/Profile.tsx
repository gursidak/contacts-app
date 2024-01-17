// components/ContactDetailPage.tsx
import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import { Contact } from "@/types/contact.type";
import {
  ContactsOutlined,
  DeleteOutline,
  EditOutlined,
  MapOutlined,
  WorkOutline,
} from "@mui/icons-material";
import Link from "next/link";
import BackgroundLetterAvatar from "@/components/ui/BackgroundLetterAvatar";
import useAppDispatch from "@/hooks/useAppDispatch";
import { removeContact } from "@/slices/contactSlice";

type ProfileProps = {
  contact: Contact;
};

const Profile: React.FC<ProfileProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cardStyles = {
    maxWidth: 650,
    margin: "auto",
  };

  const handleDeleteContact = (id: string) => {
    dispatch(removeContact(id));
    router.push(`/`);
  };

  return (
    <Card style={cardStyles}>
      <CardHeader
        title={
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography fontSize={"large"}>{`${contact.firstName} ${contact.lastName}`}</Typography>
            <Box display={"flex"}>
              <IconButton color={"info"}>
                <EditOutlined />
              </IconButton>
              <IconButton
                color={"error"}
                onClick={() => handleDeleteContact(contact.id)}
              >
                <DeleteOutline />
              </IconButton>
            </Box>
          </Box>
        }
        subheader={`Contact Id: ${contact.id}`}
        avatar={<BackgroundLetterAvatar name={`${contact.firstName} ${contact.lastName}`} />}
      />
      <Divider />
      <CardContent>
        {/* Personal Details */}
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            display={"flex"}
            gap={1}
            alignItems={"center"}
            my={2}
          >
            <ContactsOutlined />
            <Typography
              variant={"h6"}
              textTransform={"uppercase"}
              fontSize={"small"}
              fontWeight={"bold"}
              color={"gray"}
            >
              Personal
            </Typography>
          </Grid>
          <ProfileItem label="Phone" value={contact.phone} />

          <ProfileItem label="Email" value={contact.email} />
        </Grid>

        {/* Address Details */}

        <Grid container paddingY={3} spacing={2}>
          <Grid
            item
            xs={12}
            display={"flex"}
            gap={1}
            alignItems={"center"}
            my={2}
          >
            <MapOutlined />
            <Typography
              variant={"h6"}
              textTransform={"uppercase"}
              fontSize={"small"}
              fontWeight={"bold"}
              color={"gray"}
            >
              Address
            </Typography>
          </Grid>
          <ProfileItem label={"Street"} value={contact?.address?.street} />
          <ProfileItem label={"Suite"} value={contact?.address?.suite} />
          <ProfileItem label={"City"} value={contact?.address?.city} />
          <ProfileItem label={"Zipcode"} value={contact?.address?.zipcode} />
        </Grid>

        {/* Company Details */}

        <Grid container paddingY={3} spacing={2}>
          <Grid
            item
            xs={12}
            display={"flex"}
            gap={1}
            alignItems={"center"}
            my={2}
          >
            <WorkOutline />
            <Typography
              variant={"h6"}
              textTransform={"uppercase"}
              fontSize={"small"}
              fontWeight={"bold"}
              color={"gray"}
            >
              Company
            </Typography>
          </Grid>
          <ProfileItem label={"Company Name"} value={contact?.company?.name} />
          <ProfileItem label={"Suite"} value={contact?.address?.suite} />
          <ProfileItem label={"City"} value={contact?.address?.city} />
          <ProfileItem label={"Zipcode"} value={contact?.address?.zipcode} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Profile;

export type ProfileItemProps = {
  label: string;
  value: string| null;
};

const ProfileItem = ({ label, value }: ProfileItemProps) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Typography fontSize={"small"} fontWeight={600} color={"GrayText"}>
          {label}:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography>
          {value ? value : <Link href={""}>Add {label}</Link>}
        </Typography>
      </Grid>
    </>
  );
};
