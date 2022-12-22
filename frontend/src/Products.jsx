import axios from 'axios';
import React, {useEffect, useState} from 'react'
import LayoutApp from './Layout'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select, Table, message } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const Products = () => {

  const [productData, setProductData] = useState([]);
  //modal pour ajout de produit par admin
  const [popModal, setPopModal] = useState(false);
  const [editProduct, setEditProduct] = useState(false);

  const getAllProducts = async () => {
    try {
   
      const {data} = await axios.get('/api/products/getall');
      setProductData(data);
    
      console.log(data);

    } catch(error) {
   
      console.log(error);
    }
  };

  useEffect(() => {
      getAllProducts();
  }, []);
//methode de suppresion de produit
  const handlerDelete = async (record) => {
    try {
    
      await axios.post('/api/products/delete/', {productId:record._id});
      message.success("Product Deleted Successfully!")
      getAllProducts();
      setPopModal(false);
    
      

    } catch(error) {
  
      message.error("Error!")
      console.log(error);
    }
  }

  const columns = [
    {
        title: "Name",
    },
    {
        title: "Image",
        
        render:(image, record) => <img src={image} alt={record.name} height={60} width={60} />
    }, 
    {
        title: "Price",
    },
    {
        title: "Action",
        render:(record) => 
        <div>
          <DeleteOutlined  onClick={() => handlerDelete(record)}/>
          <EditOutlined  onClick={() => {setEditProduct(record); setPopModal(true)}} />
        </div>
        
    }
  ]

  const handlerSubmit = async (value) => {
 

      try {

    await axios.put('/api/products/update', {...value, productId:editProduct._id});
        message.success("Product Updated Successfully!")
        getAllProducts();
        setPopModal(false);
    
        
  
      } catch(error) {
      
        message.error("Error!")
        console.log(error);
      }
  
  }

  return (
    <LayoutApp>
      <h2>All Products </h2>
      <Button className='add-new' onClick={() => setPopModal(true)}>Add New</Button>
      <Table dataSource={productData} columns={columns} bordered />
      
      {
        popModal && 
        <Modal title={`${editProduct !== null ? "Edit Product" : "Add New Product"}`} visible={popModal} onCancel={() => {setEditProduct(null); setPopModal(false);}} footer={false}>
          <Form layout='vertical' initialValues={editProduct} onFinish={handlerSubmit}>
            <FormItem name="name" label="Name">
              <Input/>
            </FormItem>
            <Form.Item name="category" label="Category">
              <Select>
                <Select.Option value="pizzas">Pizzas</Select.Option>
                <Select.Option value="burgers">Burgers</Select.Option>
                <Select.Option value="drinks">Drinks</Select.Option>
              </Select>
            </Form.Item>
            <FormItem name="price" label="Price">
              <Input/>
            </FormItem>
            <FormItem name="image" label="Image URL">
              <Input/>
            </FormItem>
            <div className="form-btn-add">
              <Button htmlType='submit' className='add-new'>Add</Button>
            </div>
          </Form>
        </Modal>
      }

    </LayoutApp>
  )
}

export default Products
