import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';

function Cart() {
  const cartArray = useSelector((state)=> state.cartReducer)
  return (
    <div>
      <Row>
        <Col>
        <table className='m-5 border border-2'>
          <thead>
            <tr>
              <th className='m-5 border border-2'>Id</th>
              <th className='m-5 border border-2'>Name</th>
              <th className='m-5 border border-2'>Image</th>
              <th className='m-5 border border-2'>Price</th>
              <th className='m-5 border border-2'>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                cartArray.length>0?cartArray.map((item,index)=>(
                  <tr>
                    <td className='m-5 border border-2'>{index+1}</td>
                    <td className='m-5 border border-2'>{item.title}</td>
                    <td className='m-5 border border-2'>{
                      <img src={item.thumbnail} height={'100px'} width={'100px'} alt="" />
                      }</td>
                    <td className='m-5 border border-2'>{item.price}</td>
                    <td className='m-5 border border-2'><i className='fa-solid fa-trash text-danger'></i></td>
                  </tr>
                )):"empty cart"
              }
          </tbody>
        </table>
        </Col>
      </Row>
    </div>
  )
}

export default Cart