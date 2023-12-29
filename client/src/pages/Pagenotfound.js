import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <layout title={'go back- page not found'}>
      <Header/>
    <div className='pnf'>
      <h1 className='pnf-title'>404</h1>
      <h2 className='pnf-heading'>Oops !Page Not Found</h2>
      <Link to='/' className='pnf-btn'>
        Go Back
      </Link>
    </div>
    </layout>
  )
}

export default Pagenotfound