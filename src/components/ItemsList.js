import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function ItemsList({itemsData}) {
  return (
    <Row>
      {
        itemsData.length>=1? (itemsData.map((item)=>{
          return (  <Col key={item.id} sm='12' className='mb-3'>
            <Card className="d-flex flex-row" style={{ backgroundColor: '#F8F8F8' }}>
            <Card.Img className="imge-iteme" variant="top" src={item.img} style={{width : '210px' , height : '170px', float : 'left'}}/>
                <Card.Body>
                  <Card.Title className='d-flex justify-content-between'>
                    <div className='item-title'>{item.title}</div>
                    <div className='item-price'>{item.price}</div>
                    </Card.Title>
                  <Card.Text className='py-2'>
                  <div className='item-description'>{item.description}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>)
        })): <h3> we dont have any plates</h3>
      }
      
       
    </Row>
  )
}

export default ItemsList
