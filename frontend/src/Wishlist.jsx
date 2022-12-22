import {  Modal, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { EyeOutlined } from '@ant-design/icons';
import Layout from './Layout'

const WishList= () => {
    const componentRef = useRef();
  const [wishListData, setwishListData] = useState([]);
  const [popModal, setPopModal] = useState(false);
  const [selectedWishList, setSelectedWishList] = useState(null);

  const getAllWishlists = async () => {
    try {
     
      const {data} = await axios.get('/api/wishlists/getwishlist');
      setwishListData(data);
     
      

    } catch(error) {
   
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWishlists();
  });

  

  const columns = [
    {
        title: "ID",
        dataIndex: "_id"
    },
    {
        title: "Customer Name",
        dataIndex: "customerName",
    }, 
    {
        title: "Contact Number",
        dataIndex: "customerPhone",
    }
    , 
    {
        title: "Customer Address",
        dataIndex: "customerAddress",
    },
    {
        title: "Sub Total",
        dataIndex: "subTotal",
    },
    {
        title: "Tax",
        dataIndex: "tax",
    },
    {
        title: "Total Amount",
        dataIndex: "totalAmount",
    },
    {
        title: "Action",
        dataIndex: "_id",
        render:(id, record) => 
        <div>
          <EyeOutlined className='cart-edit eye' onClick={() => {setSelectedWishList(record); setPopModal(true);}} />
        </div>
        
    }
  ]


  return (
    <Layout>
        <h2>All Wishlists </h2>
      <Table dataSource={wishListData} columns={columns} bordered />
      
      {
        popModal && 
        <Modal title="Iwishlist details" width={400} pagination={false} visible={popModal} onCancel={() => setPopModal(false)} footer={false}>
          <div className="card" ref={componentRef}>
            <div className="cardBody">
                <div className="group">
                    <span>Customer Name:</span>
                    <span><b>{selectedWishList.customerName}</b></span>
                </div>
            </div>
            <div className="cardFooter">
                <h4>Your wishlist</h4>
                {selectedWishList.cartItems.map((product) => (
                    <>
                        <div className="footerCard">
                            <div className="group">
                                <span>Product:</span>
                                <span><b>{product.name}</b></span>
                            </div>
                        </div>
                    </>
                ))}
        
            
            </div>
          </div>
          <div className="bills-btn-add">
        </div>  
        </Modal>
      }
    </Layout>
  )
}

export default WishList
