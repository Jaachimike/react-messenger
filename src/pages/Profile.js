import React from 'react'
import Img from '../img.jpg'

const Profile = () => {
  return <section>
    <div className='profile_container'>
      <div className='img_container'>
        <img src={Img} alt='avatar'/>
      </div>
      <div className='text_container'>
        <h3>User name</h3>
        <p>User email</p>
        <hr/>
        <small>Joined on: ...</small>
      </div>
    </div>
  </section>
}

export default Profile