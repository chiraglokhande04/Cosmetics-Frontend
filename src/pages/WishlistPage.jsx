import React from 'react'

import WishlistTable from '../components/Wishlist/WishlistTable'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

const WishlistPage = () => {
  return (
    <div>
         <PageHeader title='Wishlist' bgColor='#E6E3DF' />
        <WishlistTable/>
        <Footer/>
    </div>
  )
}

export default WishlistPage