
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';


const PhotoCarousel = ({photos})=>{
    return (          
    <Carousel>
        {photos.map((photo) => (
            <Carousel.Item key={photo.id}>
                <Image
                    src={photo.url}
                    alt={photo.name}
                    fluid
                    className="d-block w-100 caroussel-img"
                 />
                <Carousel.Caption>
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default PhotoCarousel;
