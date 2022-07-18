import React from 'react'
import { Link } from 'react-router-dom'
import ChipFollow from '../Profile/ChipFollow'
import Post from '../Profile/Post'
import Navbar from '../Resuables/Navbar'
import './Feed.css'

function Feed() {
  return (
    <div className='profile'>
    <Navbar />
    <div className='profile-content'>
      <div className='profile-content-sidebar'>
        <div className='profile-content-sidebar-item'>
          <Link to="/" href='Feed.js' className='btn-text width-l margin-tb-s  br-m font-bold'>Home</Link>
          <Link to="/login" className='btn-text width-l margin-tb-s br-m'>Explore</Link>
          <Link to="" className='btn-text width-l margin-tb-s br-m'>Bookmarks</Link>
          <Link to="" className='btn-text width-l margin-tb-s br-m'>Notifications</Link>
          <Link to="/profile" className='btn-text width-l margin-t-0 br-m'>Profile</Link>
          <Link to="" class="btn-small width-xxl margin-tb font-s padding-m br-m">Create a post</Link>
        </div>
        
      </div>
      
      <main className='profile-content-main'>
        <div className='profile-content-main-lt'>
          
            
        <div className='profile-posts'>
              <div className='post-create margin-tb padding-m'>
                <div class="avatar-small">
                  <img class="avatar-img" src="https://fleetui.netlify.app/img/australian-shepherd-g9fc9360d4_1920.jpg" alt="avatar" />
                </div>
                <div className='post-create-input margin-lr-s'>
                      
                      <textarea class="input-filled height-l width-xxl" type="text" placeholder="What's on the right side of your brain?"/>
                      
                 
                      
                      <div className="post-create-btn width-xxl">
                      <div className='post-create-btn-lt'>
                        <img className='btn-hover-primary br-m padding-m pointer' src="https://img.icons8.com/ios/18/000000/like--v1.png" alt="like"/>
                        <img className='btn-hover-primary br-m padding-m pointer' src="https://img.icons8.com/ios/18/000000/comments.png" alt="comment"/>
                        <img className='btn-hover-primary br-m padding-m pointer' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/18/000000/external-share-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt="share" />
                      </div>
                        
                        <button class="btn-small post-create-btn-rt br-m">Create a post</button>

                      </div>
  
                </div>
              </div>
          </div>
            
            
           
         
          <div className='text-align-start'>
            <h3>Latest posts</h3>
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

export default Feed