import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from './Layout'

const Customers = () => {

  const [wishlistData, setWishlistData] = useState([]);

  const getAllWishlist= async () => {
    try {
     
      const {data} = await axios.get('/api/wishlist/getwishlist');
      setWishlistData(data);

      console.log(data);

    } catch(error) {
    
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWishlist();
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
    }
  ]

  return (
    <Layout>
      <h2>All Customers </h2>
      <Table dataSource={wishlistData} columns={columns} bordered />
    </Layout>
  )
}

export default Customers
