import React from 'react'
import Profile from './Profile'
import { Contact } from '@/types/contact.type'
import Layout from '@/containers/Layout'


type ContactDetailProps = {
    contact : Contact
}
  
const ContactDetails: React.FC<ContactDetailProps> = ({contact}) => {
  return (
    <Layout>
    <Profile contact={contact}/>
    </Layout>
  )
}

export default ContactDetails