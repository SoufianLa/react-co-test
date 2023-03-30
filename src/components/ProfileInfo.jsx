import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const ProfileInfo = ({user, handleLogout})=>{

    return (
        <div>
            <Image
            src={user.avatar_url}
            roundedCircle
            className="mb-3 avatar-img"
          />
          <div>
            <h4>{user.fullName}</h4>
            <p>{user.email}</p>
            <Link href="#" onClick={handleLogout}>Log out</Link>
          </div>


        </div>
    )

}

export default ProfileInfo;