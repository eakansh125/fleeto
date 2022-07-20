import React from 'react'
import { Navbar, SidebarLeft, SidebarRight, Post } from '../ResuablesImporter';
import './Profile.css'


function Profile() {
  return (
    
    <div className='profile'>
    <Navbar />
    <div className='profile-content'>
      <SidebarLeft />
      
      <main className='profile-content-main'>
        <div className='profile-content-main-lt'>
          <div className='profile-header'>
            <div class="avatar-x-large">
              <img class="avatar-img" src="https://fleetui.netlify.app/img/australian-shepherd-g9fc9360d4_1920.jpg" alt="avatar" />
            </div>
            <div className='profile-header-upper margin-tb'>
              <h2 className="font-bold margin-tb-s ">Eakansh</h2> 
              <p className="font-gray font-bold margin-tb-s">@eakansh</p>
              <button className="btn-small btn-outlined margin-tb-s">Edit Profile</button>
            </div>
            
            <h4 className='font-normal'>Application Development Analyst @Accenture | Creator of wide variety of industry level applications | Tweets about Javascript, React and sings in his free time</h4>
            <h3 className="font-primary-color font-bold margin-t-0">eakansh.com</h3>
            <div className='profile-header-count br-m'>
              <div>
                <h4 className='font-bolder'>248</h4>
                <h4>Posts</h4>
              </div>
              <div>
                <h4 className='font-bolder'>17.1K</h4>
                <h4>Followers</h4>
              </div>
              <div>
                <h4 className='font-bolder'>1950</h4>
                <h4>Following</h4>
              </div>
              
            </div>
          </div>
          <div className='text-align-start'>
            <h3>Your posts</h3>
          </div>

          <Post />

          <Post />

          <Post />
          
          </div>
        <SidebarRight />
    </main>
  </div>
</div>
    
  )
}

export default Profile;