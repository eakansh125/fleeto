import React from 'react'
import { Link } from 'react-router-dom'
import ChipFollow from '../Profile/ChipFollow'
import Post from '../Profile/Post'
import Navbar from '../Resuables/Navbar'

function Bookmark() {
  return (
    <div className='profile'>
    <Navbar />
    <div className='profile-content'>
      <div className='profile-content-sidebar'>
        <div className='profile-content-sidebar-item'>
          <Link to="/" href='Feed.js' className='btn-text width-l margin-tb-s  br-m font-bold'>Home</Link>
          <Link to="/login" className='btn-text width-l margin-tb-s br-m'>Explore</Link>
          <Link to="/bookmark" className='btn-text width-l margin-tb-s br-m'>Bookmarks</Link>
          <Link to="" className='btn-text width-l margin-tb-s br-m'>Notifications</Link>
          <Link to="/profile" className='btn-text width-l margin-t-0 br-m'>Profile</Link>
          <Link to="" class="btn-small width-xxl margin-tb font-s padding-m br-m">Create a post</Link>
        </div>
        
      </div>
      
      <main className='profile-content-main'>
        <div className='profile-content-main-lt'>
          
            
        
            
            
           
         
          <div className='text-align-start'>
            <h3>Bookmarks</h3>
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

export default Bookmark