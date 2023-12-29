import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
    <Header  />
      <div className='row contact us'>
        <div className="col-md-6">
          <img src="https://img.freepik.com/free-vector/flat-hand-drawn-people-working-same-room_52683-54965.jpg?w=1060&t=st=1703824250~exp=1703824850~hmac=469cb0d9b545260742579eb7c85226a48043062d9342cb51814e4074a9422d7e" alt="contact us" style={{width:"100%"}} />
          <div>
            <div className='col-md-4'>
              <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
              <p className='text-justify mt-2'>
                any query and info about the product feel free to call any time we 24x7 available
              </p>
              <p className='mt-3'>
                {/* <BiMailSend /> : www.help@ecommerceapp.com */}
              </p>
              <p className='mt-3'>
                {/* <BiPhoneCall /> 012-3456789 */}
              </p>
              <p className='mt-3'>
                {/* <BiSupport /> : 1800-000-000 (toll free) */}
              </p>
            </div>
          </div>
        </div>
      </div>
        </Layout>
  )
}

export default Contact