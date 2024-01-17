import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { Contact } from "@/types/contact.type";
import {
  ContactsOutlined,
  MapOutlined,
  WorkOutline,
} from "@mui/icons-material";

const validationSchema = yup.object({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string(),
  username: yup.string(),
  email: yup.string().email("Invalid email address"),
  address: yup.object().shape({
    street: yup.string(),
    suite: yup.string(),
    city: yup.string(),
    zipcode: yup.string(),
  }),
  phone: yup.string().required("Phone number is required"),
  website: yup.string(),
  company: yup.object().shape({
    name: yup.string(),
    catchPhrase: yup.string(),
    bs: yup.string(),
  }),
});

interface ContactFormProps {
  onSubmit: (values: Omit<Contact, "id">) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit({ ...values, name: `${values.firstName} ${values.lastName}` });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
          >
            Personal
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            variant="outlined"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="website"
            name="website"
            label="Website"
            variant="outlined"
            value={formik.values.website}
            onChange={formik.handleChange}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
            onBlur={formik.handleBlur}
          />
        </Grid>

        {/* Address Fields */}

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
          >
            Address
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="address.street"
            name="address.street"
            label="Street"
            variant="outlined"
            value={formik.values.address.street}
            onChange={formik.handleChange}
            error={
              formik.touched.address?.street &&
              Boolean(formik.errors.address?.street)
            }
            helperText={
              formik.touched.address?.street && formik.errors.address?.street
            }
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="address.suite"
            name="address.suite"
            label="Suite"
            variant="outlined"
            value={formik.values.address.suite}
            onChange={formik.handleChange}
            error={
              formik.touched.address?.suite &&
              Boolean(formik.errors.address?.suite)
            }
            helperText={
              formik.touched.address?.suite && formik.errors.address?.suite
            }
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="address.city"
            name="address.city"
            label="City"
            variant="outlined"
            value={formik.values.address.city}
            onChange={formik.handleChange}
            error={
              formik.touched.address?.city &&
              Boolean(formik.errors.address?.city)
            }
            helperText={
              formik.touched.address?.city && formik.errors.address?.city
            }
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="address.zipcode"
            name="address.zipcode"
            label="Zipcode"
            variant="outlined"
            value={formik.values.address.zipcode}
            onChange={formik.handleChange}
            error={
              formik.touched.address?.zipcode &&
              Boolean(formik.errors.address?.zipcode)
            }
            helperText={
              formik.touched.address?.zipcode && formik.errors.address?.zipcode
            }
            onBlur={formik.handleBlur}
          />
        </Grid>

        {/* Company Fields */}

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
          >
            Company
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="company.name"
            name="company.name"
            label="Company Name"
            variant="outlined"
            value={formik.values.company.name}
            onChange={formik.handleChange}
            error={
              formik.touched.company?.name &&
              Boolean(formik.errors.company?.name)
            }
            helperText={
              formik.touched.company?.name && formik.errors.company?.name
            }
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="company.catchPhrase"
            name="company.catchPhrase"
            label="Catch Phrase"
            variant="outlined"
            value={formik.values.company.catchPhrase}
            onChange={formik.handleChange}
            error={
              formik.touched.company?.catchPhrase &&
              Boolean(formik.errors.company?.catchPhrase)
            }
            helperText={
              formik.touched.company?.catchPhrase &&
              formik.errors.company?.catchPhrase
            }
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="company.bs"
            name="company.bs"
            label="BS"
            variant="outlined"
            value={formik.values.company.bs}
            onChange={formik.handleChange}
            error={
              formik.touched.company?.bs && Boolean(formik.errors.company?.bs)
            }
            helperText={formik.touched.company?.bs && formik.errors.company?.bs}
            onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} my={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
