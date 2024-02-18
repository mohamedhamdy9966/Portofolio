import React from 'react'
import { MailChimpForm } from './MailChimpForm'
import logo from '../Assets/Images/logo.jpg'
import navIcon1 from '../Assets/Images/nav-icon3.webp';
import navIcon2 from '../Assets/Images/nav-icon2.webp';
import navIcon3 from '../Assets/Images/nav-icon1.webp';
import { Container , Row , Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <MailChimpForm/>
          <Col sm={6}>
          <img src={logo} alt='logo'/>
          </Col>
          <Col sm={6} className='text-center text-sm-end'>
          <div className='social-icon'>
          <a href="">
          <img src={navIcon1} alt=''/>
          </a>
          <a href="">
          <img src={navIcon2} alt=''/>
          </a>
          <a href="">
          <img src={navIcon3} alt=''/>
          </a>
          </div>
          <p>
            CopyRight 2024. All Right Reserved.
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
