import '../App.css';
import Menu from '../component/Menu.js'
import Footer from '../component/Footer.js'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function Item() {
    const url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    const getDataProducts =async ()=> {
        const response = await fetch (url);
        const dataProduct = await response.json();
        setProducts(dataProduct);
    
    }
    
    useEffect(() => {
      getDataProducts();
    })
    

    return (
      <div className="App">   
          <Menu/>

        <section>
            <div className='container mt-5 py-5 pb-5'>
                <div className='row g-5'>
                    <h1 className="text-center item-title position-relative fw-bold mb-5">
                        Items
                    </h1>
                    {products.map( (produk)=>{
                        return (
                            <div className="col-lg-4">
                                <CardProduct key={produk.id} 
                                title={produk.title} 
                                price={produk.price} 
                                description={produk.description}
                                image={produk.image}
                                />
                            
                            </div> )
                        })
                    }
                </div>
            </div>
        </section>

        <Footer/>
      </div>
    );

    function CardProduct(props) {
        return (
          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.image} style={{height:'250px'}} />
            <Card.Body className='position-relative item-card'>
              <Card.Title>{props.title}</Card.Title>
              <div className="card-line "></div>
              <Card.Text className="pt-2 mt-1">
                {props.description}
              </Card.Text>
              <p className="fw-700">${props.price}</p>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        );
      }
  }
  
  export default Item;
  