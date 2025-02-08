import React from 'react'
import ShopSidebar from './ShopSideBar'
import Products from './Products'   

const Layout = () => {
  return (
    <div className='mt-10 flex flex-row gap-x-60'>
        <ShopSidebar/>
        <Products/>
    </div>
  )
}

export default Layout