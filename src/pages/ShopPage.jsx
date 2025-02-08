import React from 'react'
import ShopHero from '../components/Shop/ShopHero'
import Layout from '../components/Shop/Layout'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

const ShopPage = () => {
  return (
    <div>
        <PageHeader title={'Shop'} bgColor={'#029352'}/>
        <Layout/>
        <Footer/>
    </div>
  )
}

export default ShopPage