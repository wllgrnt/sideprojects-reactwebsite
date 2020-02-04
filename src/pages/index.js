import React from 'react'

import Layout from '@common/Layout'
import Navbar from '@common/Navbar'
import Header from '@sections/Header'

import Education from '@sections/Education'
import IndustryWork from '@sections/IndustryWork'
import SideProjects from '@sections/SideProjects'
import Footer from '@sections/Footer'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Education />
    <IndustryWork />
    <SideProjects />
    {/* <Transport />
    <About />
    <Registry />
    <RSVP /> 
    <Header />
    <Brands />
    <Team />
    <Faq /> */}
    <Footer />
  </Layout>
)

export default IndexPage
