import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService';
import { Row, Col, Image, Carousel } from 'react-bootstrap';
import { pathLogin } from '../routes';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate(pathLogin());
  };

  return (
    <Row className="mt-5">
        <Col xs={4}>
          <Image
            src={user.avatarUrl}
            roundedCircle
            className="mb-3 avatar-img"
          />
          <div>
            <h4>{`${user.firstName} ${user.lastName}`}</h4>
            <p>{user.email}</p>
            <a href="#" onClick={handleLogout}>Log out</a>
          </div>
        </Col>
        <Col xs={8}>
          <Carousel>
          {user.photos.map((photo) => (
        <Carousel.Item key={photo.id}>
          <Image
            src={photo.url}
            alt={photo.title}
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
        </Col>
      </Row>
  );
};

export default Dashboard;
