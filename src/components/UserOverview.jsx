import React, { useState, useEffect } from 'react';
import AuthService from '../services/AuthService';
import { Row, Col, Alert } from 'react-bootstrap';
import { pathLogin } from '../routes';
import { useNavigate, Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import PhotoCarousel from './PhotoCarousel';

const UserOverview = () => {

  const [user, setUser] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setShowMessage(true)
      }
    };

    fetchUser();
  }, []);

  if (showMessage) {
    return (
      <Alert variant="danger" className='alert-message-dashboard'>
        Internal Error. Please Try to <Link to={pathLogin()}>login</Link> Later.
      </Alert>
    );
  }

  if (!user) {
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
          <ProfileInfo user={user} handleLogout={handleLogout}></ProfileInfo>
        </Col>
        <Col xs={8}>
         <PhotoCarousel photos={user.photos} ></PhotoCarousel>
        </Col>
      </Row>
  );
};


export default UserOverview;
