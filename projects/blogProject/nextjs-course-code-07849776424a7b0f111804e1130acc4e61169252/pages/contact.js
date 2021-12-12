import React from 'react';
import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="contact me" />
      </Head>
      <ContactForm />;
    </>
  );
};

export default ContactPage;
