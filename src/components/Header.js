import React from 'react'
import {  Col, Row } from 'react-bootstrap';



function Header() {
  return (
    <Row style={{ marginTop: '20px' }}>
      <Col sm="12" className='justify-content-center text-center'>
       <div className='tittle'>
        FOOD MENUE
       </div>
       <div className='justify-content-center d-flex'>
       <p className='underline'></p>
       </div>
      </Col>
    </Row>
  )
}
export default Header
