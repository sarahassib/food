import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Categories({ filterbyCategory, allCategory }) {
   const onFilter = (cat) => {
    // filter by categorya
    filterbyCategory(cat)
   }
  return (
   <Row className='my-2 mb-5'>
    <Col sm='12' className='d-flex justify-content-center'>
    {
        allCategory.length >= 1 ? (allCategory.map((cat) => {
            return (
                <div>
                <button onClick={() => onFilter(cat)} style={{border:'1px solid #b45b35'}} className='bttn mx-2' >{cat}</button>
                </div>
            )
        })) : <h4> no cat</h4>
    }
    </Col>
   </Row>
  )
}

export default Categories