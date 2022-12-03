import axios from 'axios'
import { useState, useEffect } from 'react'
import {Card,Col,Container,Row,Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Photos = () => {
      const[photos,setPhotos] =useState([])
      useEffect( ()=> { 
            axios.get('https://picsum.photos/v2/list')
            .then((res)=> setPhotos(res.data))
            .catch((err)=> console.log('err'))
      }, [] )

    return(

        <Container>
            <Row>
          {photos.length ? (photos.map((photo)=>(
           <Col md={3} className='mt-2 mb-2' key={photo.id}>
           <Card style={{ width: '18rem', textAlign: 'center'}}>
       <Card.Img variant="top" src={photo.download_url} style={{height:'200px'}} />
       <Card.Body>
         <Card.Title>{photo.author}</Card.Title>
         <a href={photo.url} className ='btn btn-dark btn-sm'>View Details</a>
         <Link
                    to={`/photos/${photo.id}`}
                    className="btn btn-dark btn-sm"
                    style={{ margin: "0 5px" }}
                  >
                    View enlarged
                  </Link>
       </Card.Body>
     </Card>
           </Col>

          ))): (
            <Spinner animation="border" variant="success" style={{margin:'200px auto'}} />
          )}
         </Row>
         </Container>
           

    )
}
export default Photos