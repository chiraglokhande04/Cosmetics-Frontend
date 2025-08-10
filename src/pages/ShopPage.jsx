import React from 'react'

import Layout from '../components/Shop/Layout'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

const ShopPage = () => {
  return (
    <div className="bg-gray-100">
        <PageHeader title={'Shop'} bgColor={'#6C8B74'}/>
        <Layout/>
        <Footer/>
    </div>
  )
}

export default ShopPage