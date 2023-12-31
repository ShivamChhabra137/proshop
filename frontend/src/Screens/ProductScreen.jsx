import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import { Row, Col, Image, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'


const ProductScreen = () => {

    const { id: productId } = useParams()

    const [product,setProduct] = useState()

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${productId}`)
            setProduct(data)
        }
        fetchProduct()
    },[productId])

    // const product = products.find(p => p._id === productId)


  return (
    <>
    {product ? 
    (
        <>
        <Link className='btn btn-light my-3' to='/' >Go Back</Link>
    <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                {/* Product Name */}
                <ListGroup.Item>
                    <h3>{product.name}</h3>    
                </ListGroup.Item>
                {/* Product Rating */}
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                {/* Product Price */}
                <ListGroup.Item>
                    Price: ${product.price}  
                </ListGroup.Item>
                {/* Product Description */}
                <ListGroupItem>
                    Description: {product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
        </>
    )
    : <div>
        <h1>404 Page Not Found!</h1>
        </div>}
    
    </>
  )
}

export default ProductScreen