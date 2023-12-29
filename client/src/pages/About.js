import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us -Ecommerce app"}>
    <div className='row contact us'>
      <div className='col-md-6'>
        <img src='https://img.freepik.com/free-vector/customer-giving-quality-feedback_74855-5482.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph' alt="Contactus" style={{width: "100%"}} />
        </div>
        <div className='col-md-4'>
          <p className='text-justify mt-2'>
            "Experience seamless online shopping at your fingertips with our cutting-edge ecommerce app. Browse an extensive collection of products, from the latest trends to timeless classics. Enjoy a user-friendly interface, secure transactions, and personalized recommendations. Elevate your shopping journey with exclusive deals, swift delivery, and a hassle-free return process. Discover the joy of convenient and delightful shopping with our intuitive ecommerce app – where style meets simplicity."
          </p>
        </div>
    </div>
    </Layout>
  )
}

export default About