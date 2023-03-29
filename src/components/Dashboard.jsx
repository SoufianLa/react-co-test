import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser("djjdshjh");
        setUser(currentUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <Image src={user.avatarUrl} alt="avatar" fluid rounded />
        </Col>
        <Col md={6}>
          <Carousel>
            {user.photos.map((photo) => (
              <Carousel.Item key={photo.id}>
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fluid
                  className="d-block w-100"
                />
                <Carousel.Caption>
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
