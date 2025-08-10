import React from 'react'
import ContactSection from '../components/Contact/contactSection'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div className='bg-gray-100'>
        <PageHeader title={'Contact'} bgColor={'#4F6A57'}/>
        <ContactSection/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default ContactPage