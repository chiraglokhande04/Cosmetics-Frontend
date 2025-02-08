import React from 'react'

import BlogLayout from '../components/Blog/BlogLayout'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

const BlogPage = () => {
  return (
    <div>
        <PageHeader title={'Blog'} bgColor={'#029352'}/>
        <BlogLayout/>
        <Footer/>
    </div>
  )
}

export default BlogPage