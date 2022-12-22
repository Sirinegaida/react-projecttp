import React from 'react'
import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux'

const Product = ({product}) => {
  const dispatch = useDispatch();


  const handlerToWishlist= () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      
    })
  }

    const { Meta } = Card;

  return (
    <Card
        hoverable
        style={{ width: 240, marginBottom: 30}}
        cover={<img alt={product.name} src={product.image} style={{height: 200}} />}
    >
        <Meta title={product.name}  />
        <div className="product-btn">
          <Button onClick={() => handlerToWishlist()}>Add To WISHLIST</Button>
        </div>
    </Card>
  )
}

export default Product
