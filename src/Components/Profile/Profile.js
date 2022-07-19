import React from 'react'
import './Profile.css'
import Navbar from '../Resuables/Navbar';
import Post from './Post';
import ChipFollow from './ChipFollow';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    
    <div className='profile'>
    <Navbar />
    <div className='profile-content'>
      <div className='profile-content-sidebar'>
        <div className='profile-content-sidebar-item'>
          <Link to="/" href='Feed.js' className='btn-text width-l margin-tb-s font-m br-m font-bold'>Home</Link>
          <Link to="" className='btn-text width-l margin-tb-s font-m br-m'>Explore</Link>
          <Link to="/bookmark" className='btn-text width-l margin-tb-s font-m br-m'>Bookmarks</Link>
          <Link to="" className='btn-text width-l margin-tb-s font-m br-m'>Notifications</Link>
          <Link to="/profile" className='btn-text width-l margin-t-0 font-m br-m'>Profile</Link>
          <Link to="" class="btn-small width-xxl margin-tb font-s padding-m br-m">Create a post</Link>
        </div>
        
      </div>
      
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
        <div className='profile-content-main-rt'>
            <input class="input-outlined width-xl margin-tb" type="text" placeholder="Search" />
            <div className='rt-body width-xl'>
              <div>
                <div className='text-align-start'>
                  <h3>Follow suggestions</h3>
                </div>
                <div>
                  <ChipFollow />
                  <ChipFollow />
                  <ChipFollow />
                 
                </div>
              </div>
            </div>
        </div>
    </main>
  </div>
</div>
    
  )
}

export default Profile;