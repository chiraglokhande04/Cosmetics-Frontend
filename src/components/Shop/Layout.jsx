import React from 'react'
import ShopSidebar from './ShopSideBar'
import Products from './Products'   

const Layout = () => {
  return (
    <div className='flex'>
        <ShopSidebar/>
        <Products/>
    </div>
  )
}

export default Layout