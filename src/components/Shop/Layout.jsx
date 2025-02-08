import React from 'react'
import ShopSidebar from './ShopSideBar'
import Products from './Products'   

const Layout = () => {
  return (
    <div className='w-full p-10 mt-10 flex flex-row gap-x-10'>
        <ShopSidebar/>
        <Products/>
    </div>
  )
}

export default Layout